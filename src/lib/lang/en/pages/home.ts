import {common} from "$lib/lang/en/common.js";
export const home = {
	hero: {
		title: common.companyName,
		titleAccent: 'Security done right.',
		subtitle: common.companyDescription,
		oversight: {
			title: 'Managed Security Capabilities',
			items: [
				'Managed Endpoint Detection and Response (EDR)',
				'Managed Identity Threat Detection and Response (ITDR)',
				'Managed Network Detection and Response (NDR)',
				'Managed Extended Detection and Response (XDR)',
				'24/7 human-led threat hunting',
				'Unified logging, reporting, training, and security operations'
			]
		}
	},
	sections: {
		workspaceSupport: {
			title: 'Supported Workspaces',
			subtitle:
				'We secure leading cloud workspace environments using native API integrations, enforcing consistent policy and visibility across cloud-only and hybrid infrastructures.',
			providers: {
				google: {
					title: 'Google Workspace',
					features: [
						'Native Google Workspace API integrations for identity, email, and activity visibility',
						'Enhanced email security and data loss prevention layered on top of Gmail and Drive',
						'Identity Threat Detection and Response (ITDR) for user, session, and privilege abuse',
						'Centralized single sign-on, enforced MFA, and identity access controls'
					]
				},
				microsoft: {
					title: 'Microsoft 365',
					features: [
						'Native Microsoft Graph API integrations for identity, email, and security telemetry',
						'Enhanced email security and data loss prevention beyond baseline M365 controls',
						'Identity Threat Detection and Response (ITDR) across Entra ID and user sessions',
						'Centralized single sign-on, enforced MFA, and identity access controls'
					]
				},
				hybrid: {
					title: 'Hybrid Active Directory',
					features: [
						'Secure endpoint and directory-based agents for on-prem and hybrid identity visibility',
						'Enhanced email security and data loss prevention across connected cloud platforms',
						'Identity Threat Detection and Response (ITDR) bridging legacy and cloud identities',
						'Unified single sign-on, enforced MFA, and centralized identity control'
					]
				}
			}
		},
		servicePlans: {
			title: 'Service Plans',
			subtitle:
				'Our tiered service model provides a structured progression from foundational risk reduction to comprehensive security oversight and audit readiness.',
			plans: {
				essentials: {
					title: 'Essentials',
					description:
						'Essentials provides a security-first operational baseline across identity, cloud, email, endpoints, and network access. It is designed to continuously reduce risk through automated controls, active monitoring, and managed detection without the overhead of building an internal security team.',
					items: [
						'Centralized identity and access management',
						'Enterprise password management with credential compromise monitoring',
						'Multi-factor authentication and secure single sign-on',
						'Email security, authentication, and domain monitoring',
						'Cloud workspace and SaaS security baseline enforcement',
						'Ongoing security awareness training with quarterly phishing simulations',
						'Endpoint protection, patching, vulnerability management, and baselining',
						'Centralized endpoint and cloud workspace backups',
						'Zero Trust network access and cloud-delivered firewall enforcement',
						'Endpoint, cloud, SaaS, and identity threat detection and response',
						'24/7 managed detection and threat hunting'
					],
					builtFor: {
						label: 'Built for Small and Growing Organizations',
						text: 'Ideal for small businesses and professional organizations that need strong, insurer-aligned security controls, continuous monitoring, and meaningful risk reduction without the cost or complexity of a full internal security program.'
					}
				},
				complete: {
					title: 'Complete',
					recommended: 'Recommended',
					description:
						'Complete expands on Essentials by adding deeper visibility, cross-domain correlation, and human-led security operations. It is designed for organizations that require formal governance, continuous validation of controls, and security operations that stand up to audits and regulatory scrutiny.\'',
					plusLabel: 'Everything in Essentials, plus:',
					items: [
						'Network detection and response',
						'Network management, monitoring, and operational support',
						'Centralized security logging with cross-domain event correlation',
						'Data loss prevention across endpoints, email, network, and cloud',
						'Monthly phishing simulations with employee risk profiling',
						'Enhanced monthly security reviews and control validation',
						'Managed compliance reporting across endpoint, cloud, SaaS, identity, and network layers'
					],
					builtFor: {
						label: 'Built for Regulated Industries',
						text: 'Designed for financial, insurance, healthcare, and other regulated or high-risk organizations that require layered security operations, expanded telemetry, documented oversight, and audit-ready evidence across their environment.'
					}
				}
			}
		},
		contact: {
			title: 'Consult an Expert',
			subtitle:
				'Ready to improve your security posture or transition away from inconsistent cybersecurity practices? We’ll evaluate your environment and provide a clear, prioritized roadmap for locking down your environment.',
			form: {
				title: 'Direct Inquiry',
				subtitle: 'Share a brief overview of your environment and security goals. An expert will follow up promptly.',
				successTitle: 'Submission Received',
				successMessage: 'Your inquiry has been received. We typically respond within one business day.',
				responseTime: 'We typically respond within one business day.',
				labels: {
					name: 'Name',
					email: 'Email',
					message: 'Message'
				},
				placeholders: {
					name: 'Your name',
					email: 'you@example.com',
					message: 'Tell us a bit about your environment and goals...'
				}
			}
		}
	}
};