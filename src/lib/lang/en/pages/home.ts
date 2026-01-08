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
				'SaaS & Cloud Workspace Security Posture',
				'Email Security, Authentication & DMARC Enforcement',
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
				'We secure leading cloud workspace environments through native API integrations, ensuring consistent policy enforcement across cloud-only and hybrid infrastructures.',
			providers: {
				google: {
					title: 'Google Workspace',
					features: [
						'API-based integration for continuous visibility and automated threat remediation',
						'Granular access models designed to eliminate broad or persistent service accounts',
						'Strict alignment with least-privilege principles and platform-specific security constraints',
						'Centralized management of identity, email security, and data exposure risks'
					]
				},
				microsoft: {
					title: 'Microsoft 365',
					features: [
						'Full-stack integration across identity, email, and security telemetry streams',
						'Real-time monitoring and enforcement of Entra ID Conditional Access policies',
						'Minimized credential exposure by leveraging native Microsoft Graph security APIs',
						'Advanced posture management and drift detection for M365 security defaults'
					]
				},
				hybrid: {
					title: 'Hybrid AD',
					features: [
						'Direct oversight and protection of on-premises identity infrastructure',
						'Unified security controls bridging legacy servers with modern cloud directory services',
						'Continuous monitoring for lateral movement and identity-based attack patterns',
						'Hardened configurations for domain controllers and supporting identity components'
					]
				}
			}
		},
		servicePlans: {
			title: 'Service Plans',
			subtitle:
				'Our tiered service model provides a clear path from fundamental risk reduction to comprehensive security oversight and audit readiness.',
			plans: {
				essentials: {
					title: 'Essentials',
					description:
						'Essentials establishes a hardened security baseline across identity, endpoints, and cloud services. It is designed for organizations seeking professional security management and verified protection without internal infrastructure overhead.',
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
						text: 'Establishes essential technical controls to satisfy core cyber insurance requirements and significantly reduce the organization’s attack surface.'
					}
				},
				complete: {
					title: 'Complete',
					recommended: 'Recommended',
					description:
						'Complete builds upon Essentials with deeper monitoring, active threat hunting, and managed network infrastructure. It is designed for organizations that require documented oversight and end-to-end accountability.',
					plusLabel: 'Everything in Essentials, plus:',
					items: [
						'24/7 Managed detection, response & remediation',
						'Human-led proactive threat hunting',
						'Identity threat detection & ITDR integration',
						'Managed network infrastructure & governance',
						'Comprehensive monthly security reporting',
						'Compliance-aligned reporting (NIST/CIS)',
						'Cyber insurance renewal & audit support',
						'Priority technical support & incident response',
						'Continuous security hardening & guidance'
					],
					targetOutcome: {
						label: 'Target Outcome',
						text: 'Provides full-spectrum security oversight for regulated or high-risk organizations that must demonstrate continuous control and audit readiness.'
					}
				}
			}
		},
		contact: {
			title: 'Consult an Expert',
			subtitle:
				'Ready to harden your security posture or transition away from consumer cybersecurity tools? We will evaluate your environment and provide a clear roadmap for remediation.',
			form: {
				title: 'Secure Inquiry',
				subtitle: 'Please provide your details below and an expert will be in touch.',
				successTitle: 'Submission Received',
				successMessage: 'Your inquiry has been received. We will respond within one business day.',
				responseTime: 'We usually respond within one business day.',
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
