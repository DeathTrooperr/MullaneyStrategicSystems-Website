export const home = {
	hero: {
		title: 'Mullaney Strategic Systems,',
		titleAccent: 'Security done right.',
		subtitle:
			'We deliver security-first managed services for financial and insurance organizations, focused on reducing risk, maintaining compliance, and ensuring accountability across identity, endpoints, cloud, and network environments.',
		oversight: {
			title: 'Operational Oversight',
			items: [
				'Identity & Privileged Access Management',
				'Cloud Workspace & SaaS Security & Posture Enforcement',
				'Email Security, Authentication & Monitoring',
				'Endpoint Protection, Patching & Exposure Management',
				'Network Governance, Administration & Monitoring',
				'24/7 Managed Detection, Response & Threat Hunting'
			]
		}
	},
	sections: {
		unifiedCloudGovernance: {
			title: 'Unified Cloud Governance',
			subtitle:
				'We secure leading cloud workspace environments using native API integrations, enforcing consistent policy and visibility across cloud-only and hybrid infrastructures.',
			providers: {
				google: {
					title: 'Google Workspace',
					features: [
						'Native API integration for continuous visibility and targeted threat remediation',
						'Granular access models that eliminate broad or persistent service accounts',
						'Permissions strictly aligned to least-privilege and Google security constraints',
						'Centralized oversight of identity, email security, and data exposure risk'
					]
				},
				microsoft: {
					title: 'Microsoft 365',
					features: [
						'Full-spectrum integration across identity, email, and security telemetry',
						'Real-time monitoring and enforcement of Entra ID Conditional Access policies',
						'Reduced credential exposure through native Microsoft Graph security APIs',
						'Ongoing posture management and drift detection for M365 security controls'
					]
				},
				hybrid: {
					title: 'Hybrid AD',
					features: [
						'Direct oversight and protection of on-premises identity infrastructure',
						'Unified controls bridging legacy servers with modern cloud identity services',
						'Continuous monitoring for lateral movement and identity-based attacks',
						'Hardened configurations for domain controllers and critical identity systems'
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
						'Essentials establishes a hardened security baseline across identity, endpoints, and cloud services. It is designed for organizations that require verified protection and professional security management without internal infrastructure or security operations overhead.',
					items: [
						'Managed identity & adaptive access security',
						'Enterprise-grade password management',
						'Cloud workspace security & drift monitoring',
						'Advanced email & SaaS threat protection',
						'Automated endpoint patching & maintenance',
						'Immutable endpoint & SaaS data backups',
						'Continuous security event monitoring',
						'Security awareness & phishing simulations',
						'Quarterly security posture reporting',
						'CIS/NIST-aligned baseline configurations',
						'Standard business-hours technical support'
					],
					targetOutcome: {
						label: 'Target Outcome',
						text: 'Establishes essential controls to support core cyber insurance expectations and materially reduce organizational attack surface.'
					}
				},
				complete: {
					title: 'Complete',
					recommended: 'Recommended',
					description:
						'Complete builds upon Essentials with continuous monitoring, proactive threat hunting, and managed network infrastructure. It is designed for organizations that require documented oversight, formal accountability, and audit-ready security operations.',
					plusLabel: 'Everything in Essentials, plus:',
					items: [
						'24/7 managed detection, response & remediation',
						'Human-led proactive threat hunting',
						'Identity threat detection & ITDR integration',
						'Managed network infrastructure & governance',
						'Comprehensive monthly security reporting',
						'Compliance-aligned reporting (NIST/CIS)',
						'Cyber insurance renewal & audit support',
						'Priority technical support & accelerated response',
						'Continuous security hardening & advisory guidance'
					],
					targetOutcome: {
						label: 'Target Outcome',
						text: 'Provides full-spectrum oversight for regulated or high-risk organizations that must demonstrate continuous control, resilience, and audit readiness.'
					}
				}
			}
		},
		contact: {
			title: 'Consult an Expert',
			subtitle:
				'Ready to harden your security posture or transition away from ad-hoc IT support? We’ll evaluate your environment and provide a clear, prioritized roadmap for remediation.',
			form: {
				title: 'Secure Inquiry',
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