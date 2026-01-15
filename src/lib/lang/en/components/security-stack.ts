export const securityStack = {
	title: 'Our Security Stack',
	subtitle:
		'Behind every plan is a curated toolset from leading security vendors. Explore the components we deploy and why each one matters.',
	tags: {
		all: 'All'
	},
	srOnly:
		'Cards are interactive on hover. Animations are reduced if your system prefers reduced motion.',
	items: [
		{
			title: 'Identity Access Management',
			vendor: 'Cisco Duo',
			desc: 'Cisco Duo serves as our cornerstone security-first identity directory and access control platform. It enables strong single sign-on for SaaS applications and endpoint access while enforcing multi-factor authentication, device trust, and adaptive access policies. By centralizing identity enforcement around security posture and risk, Duo ensures that only approved users on secure devices can access business systems.',
			tags: ['Identity'],
			color: 'cyan'
		},
		{
			title: 'Privileged Access Management',
			vendor: 'Evo Security',
			desc: 'Evo Security provides centralized privileged access management to control and monitor administrative permissions. It enforces least-privilege access and secures elevated credentials with identity-based MFA for all administrative actions. By eliminating shared administrative accounts and providing granular oversight, Evo reduces the risk of unauthorized system changes and lateral movement.',
			tags: ['Identity'],
			color: 'amber'
		},
		{
			title: 'Password Management',
			vendor: '1Password',
			desc: '1Password provides secure, encrypted vaults for managing organizational credentials, documents, and shared secrets. It enforces strong password hygiene through centralized policy management, secure credential sharing, and proactive breach monitoring. By eliminating unsafe storage practices and reusing weak passwords, 1Password reduces the risk of account compromise and credential-based attacks.',
			tags: ['Identity'],
			color: 'emerald'
		},
		{
			title: 'Email Security',
			vendor: 'Avanan',
			desc: 'Avanan delivers cloud-native email security using API-level analysis to detect phishing, malware, and business email compromise inside the inbox. It leverages advanced AI to identify malicious intent and anomalous behavior that traditional gateways often miss. This approach prevents credential harvesting and financial fraud before they reach the user.',
			tags: ['Cloud'],
			color: 'violet'
		},
		{
			title: 'Email Authentication & Monitoring',
			vendor: 'Avanan',
			desc: 'Avanan automates DMARC, SPF, and DKIM enforcement to authenticate outbound email and protect brand reputation. It provides continuous visibility into third-party sending services to ensure only authorized sources can send mail on behalf of the organization. This reduces the risk of domain spoofing and improves global email deliverability.',
			tags: ['Cloud'],
			color: 'sky'
		},
		{
			title: 'Security Awareness Training',
			vendor: 'Ninjio',
			desc: 'Ninjio delivers story-driven security awareness training combined with automated phishing simulations to reinforce safe digital habits. It educates employees on modern social engineering techniques through brief, high-impact episodes designed for executive and staff engagement. This reduces human-centric risk and strengthens the organization’s primary defensive layer.',
			tags: ['Training'],
			color: 'blue'
		},
		{
			title: 'Cloud Workspace Security',
			vendor: 'Avanan & CrowdStrike',
			desc: 'This integrated solution secures Microsoft 365 and Google Workspace by combining deep API-based email inspection with SaaS posture management. It identifies misconfigurations, monitors risky OAuth permissions, and detects malicious file sharing across cloud collaboration suites. By unifying visibility, it reduces data exposure and ensures consistent security policies across the cloud workspace.',
			tags: ['Cloud', 'Identity'],
			color: 'indigo'
		},
		{
			title: 'Identity Threat Detection & Response',
			vendor: 'CrowdStrike & Cisco Duo',
			desc: 'CrowdStrike Falcon Identity Protection analyzes authentication behavior and privilege changes to detect identity-based attacks in real-time. When combined with Cisco Duo’s adaptive access policies, it enables automated step-up authentication or access blocking during suspicious events. This integrated approach stops account takeovers and prevents unauthorized access to critical systems.',
			tags: ['Identity'],
			color: 'fuchsia'
		},
		{
			title: 'Cloud Workspace Backups',
			vendor: 'NinjaOne (DropSuit)',
			desc: 'NinjaOne via DropSuit provides automated, immutable backups for Microsoft 365 and Google Workspace to protect against data loss and ransomware. It ensures that email, SharePoint, OneDrive, and Google Drive data are securely archived and independently recoverable. This guarantees business continuity and meets regulatory requirements for data retention and availability.',
			tags: ['Cloud'],
			color: 'teal'
		},
		{
			title: 'Next Generation Antivirus',
			vendor: 'CrowdStrike',
			desc: 'CrowdStrike Falcon Prevent uses machine learning and behavioral analysis to stop known malware and sophisticated zero-day attacks. It operates through a single lightweight agent that enforces protection without the performance impact or signature-dependency of legacy antivirus. This ensures endpoints remain secure against rapidly evolving threats, even when offline.',
			tags: ['Endpoint'],
			color: 'rose'
		},
		{
			title: 'Endpoint Detection & Response',
			vendor: 'CrowdStrike',
			desc: 'CrowdStrike Falcon Insight provides continuous visibility and response capabilities across the entire endpoint fleet. It records all relevant system activity to enable rapid forensic investigation and automated containment of detected threats. This reduces attacker dwell time and ensures that security incidents are identified and mitigated before they escalate.',
			tags: ['Endpoint'],
			color: 'pink'
		},
		{
			title: 'Managed Detection & Response',
			vendor: 'CrowdStrike',
			desc: 'CrowdStrike Falcon Complete delivers 24/7 managed detection and response, providing expert-led investigation and surgical remediation. The service acts as an extension of our security team, handling the full lifecycle of a threat from initial detection to final resolution. This ensures enterprise-grade security outcomes and continuous protection without the need for internal SOC operations.',
			tags: ['Endpoint'],
			color: 'red'
		},
		{
			title: 'Managed Threat Hunting',
			vendor: 'CrowdStrike',
			desc: 'CrowdStrike Falcon Overwatch provides proactive, human-led threat hunting to identify stealthy adversaries that bypass automated defenses. Specialized analysts monitor environment telemetry around the clock to uncover sophisticated attack patterns and emerging techniques. This provides an additional layer of security that ensures targeted attacks are identified in their earliest stages.',
			tags: ['Endpoint'],
			color: 'orange'
		},
		{
			title: 'Vulnerability Management',
			vendor: 'Coda Intelligence',
			desc: 'Coda Intelligence provides continuous vulnerability management and contextual risk scoring across all assets, correlating vulnerabilities, misconfigurations, and asset criticality to identify the most impactful risk areas. It prioritizes real-world exposures and supports remediation decision-making so your team can focus on what matters most.',
			tags: ['Endpoint'],
			color: 'lime'
		},
		{
			title: 'Unified Event Logging',
			vendor: 'CrowdStrike',
			desc: 'CrowdStrike Next-Gen SIEM provides centralized log management and long-term search retention for security telemetry across the environment. It unifies data from endpoints, identity providers, and cloud workloads to support rapid investigation and compliance auditing. This ensures that critical security events are preserved and remain accessible for incident response and regulatory review.',
			tags: ['Cloud'],
			color: 'slate'
		},
		{
			title: 'Remote Monitoring & Management',
			vendor: 'NinjaOne',
			desc: 'NinjaOne serves as our primary platform for centralized endpoint management, monitoring, and automated maintenance. It enforces configuration standards, tracks system health, and provides secure remote access for technical support and troubleshooting. This improves operational stability while ensuring that all systems remain compliant with security policies.',
			tags: ['Endpoint'],
			color: 'cyan'
		},
		{
			title: 'Patching',
			vendor: 'NinjaOne',
			desc: 'NinjaOne delivers automated operating system and third-party application patching across managed endpoints, while prioritization is driven by vulnerability insights from Coda Intelligence to focus remediation on the most impactful exposures. This approach shortens the time to remediate known vulnerabilities on managed assets and limits the window for active exploitation.',
			tags: ['Endpoint'],
			color: 'emerald'
		},
		{
			title: 'Endpoint & Server Backups',
			vendor: 'NinjaOne',
			desc: 'NinjaOne provides secure, image-based backups for servers and workstations to ensure rapid recovery from hardware failure or data corruption. It utilizes encrypted storage and automated verification to guarantee the integrity of every recovery point. This protects critical business data and minimizes downtime during operational disruptions.',
			tags: ['Endpoint'],
			color: 'violet'
		},
		{
			title: 'Network Management',
			vendor: 'Ubiquiti UniFi',
			desc: 'Ubiquiti UniFi provides centralized management for professional-grade wired and wireless network infrastructure. It enables secure VLAN segmentation, guest network isolation, and continuous monitoring of network performance and connected devices. This ensures a stable, high-performance network environment while enforcing strict access controls at the physical layer.',
			tags: ['Network'],
			color: 'sky'
		},
		{
			title: 'Secure Service Edge',
			vendor: 'Cisco Umbrella',
			desc: 'Cisco Umbrella and Secure Access provide a cloud-delivered security layer that protects users wherever they work. It enforces DNS-layer security, secure web gateway controls, and zero-trust network access to private applications and SaaS platforms. By moving security to the edge, it reduces the need for traditional VPNs while providing consistent protection against web-based threats.',
			tags: ['Network', 'Cloud'],
			color: 'blue'
		}
	]
};
