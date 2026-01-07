import { fail } from '@sveltejs/kit';
import type { Actions } from './$types.js';
import { createMimeMessage } from 'mimetext';
// @ts-ignore
export const actions = {
	default: async ({ request, platform }) => {
		// @ts-ignore
		const { EmailMessage } = await import('cloudflare:email');
		console.log('Contact form submission started');
		const data = await request.formData();
		const name = data.get('name') as string;
		const email = data.get('email') as string;
		const message = data.get('message') as string;
		const turnstileToken = data.get('cf-turnstile-response') as string;

		console.log('Received form data:', { name, email, messageLength: message?.length, hasTurnstileToken: !!turnstileToken });

		if (!name || !email || !message || !turnstileToken) {
			console.warn('Missing required fields');
			return fail(400, { message: 'Missing required fields' });
		}

		// Validate Turnstile
		// Cloudflare Turnstile verification: https://developers.cloudflare.com/turnstile/get-started/server-side-validation/
		console.log('Starting Turnstile validation');
		const secretKey = platform?.env?.TURNSTILE_SECRET_KEY;
		if (!secretKey) {
			console.error('TURNSTILE_SECRET_KEY not found in environment');
			return fail(500, { message: 'Security service not configured' });
		}

		const formData = new FormData();
		formData.append('secret', secretKey);
		formData.append('response', turnstileToken);

		const result = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
			body: formData,
			method: 'POST'
		});

		const outcome = await result.json() as { success: boolean };
		console.log('Turnstile validation result:', outcome);
		if (!outcome.success) {
			console.warn('Turnstile validation failed');
			return fail(400, { message: 'Invalid turnstile token' });
		}

		if (!platform?.env.SEND_EMAIL) {
			console.error('SEND_EMAIL binding not found');
			return fail(500, { message: 'Email service not configured' });
		}

		try {
			console.log('Preparing email message');
			const msg = createMimeMessage();
			msg.setSender({ name: 'Website Contact Form', addr: 'noreply@mullaneystrategicsystems.com' });
			msg.setRecipient('samuel@mullaneystrategicsystems.com');
			msg.setSubject(`Contact Form Submission from ${name}`);
			msg.addMessage({
				contentType: 'text/plain',
				data: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
			});

			console.log('Sending email via platform binding');
			const emailMessage = new EmailMessage(
				'noreply@mullaneystrategicsystems.com',
				'samuel@mullaneystrategicsystems.com',
				msg.asRaw()
			);

			await platform.env.SEND_EMAIL.send(emailMessage);

			console.log('Email sent successfully');
			return { success: true };
		} catch (e) {
			console.error('Error during email preparation or sending:', e);
			return fail(500, { message: 'Failed to send email' });
		}
	}
} satisfies Actions;
