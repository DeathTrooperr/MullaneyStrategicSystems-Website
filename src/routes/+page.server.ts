import { fail } from '@sveltejs/kit';
import type { Actions } from './$types.js';

export const actions = {
	default: async ({ request, platform }) => {
		const data = await request.formData();
		const name = data.get('name') as string;
		const email = data.get('email') as string;
		const message = data.get('message') as string;
		const turnstileToken = data.get('cf-turnstile-response') as string;

		if (!name || !email || !message || !turnstileToken) {
			return fail(400, { message: 'Missing required fields' });
		}

		// Validate Turnstile
		// Cloudflare Turnstile verification: https://developers.cloudflare.com/turnstile/get-started/server-side-validation/
		const secretKey = (platform?.env as any)?.TURNSTILE_SECRET_KEY;
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
		if (!outcome.success) {
			return fail(400, { message: 'Invalid turnstile token' });
		}

		if (!platform?.env.SEND_EMAIL) {
			console.error('SEND_EMAIL binding not found');
			return fail(500, { message: 'Email service not configured' });
		}

		try {
			// Using the Email Workers API via the binding
			// https://developers.cloudflare.com/email-routing/email-workers/send-email-workers/#send-emails-from-a-worker
            const { createMimeMessage } = await import('mimetext');
            const msg = createMimeMessage();
            msg.setSender({ name: "Website Contact Form", addr: "noreply@mullaneystrategicsystems.com" });
            msg.setRecipient("samuel@mullaneystrategicsystems.com");
            msg.setSubject(`Contact Form Submission from ${name}`);
            msg.addMessage({
                contentType: 'text/plain',
                data: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
            });

			await (platform.env.SEND_EMAIL as any).send({
				from: "noreply@mullaneystrategicsystems.com",
				to: "samuel@mullaneystrategicsystems.com",
				raw: msg.asRaw()
			});

			return { success: true };
		} catch (e) {
			console.error('Error sending email:', e);
			return fail(500, { message: 'Failed to send email' });
		}
	}
} satisfies Actions;
