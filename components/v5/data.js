// Content for the V5 homepage. Edit text here; [brackets] are facts still to fill in.

export const BOOKING_URL = "https://cal.com/salaar-ahmad-4xrirn/30min";
export const EMAIL = "salaar31@gmail.com";

const P = "/v5/logos/";
export const LOGO = {
  SAP: P + "sap.svg",
  "Dynamics 365": P + "dynamics365.svg",
  "Azure DevOps": P + "azuredevops.svg",
  ClickUp: P + "clickup.svg",
  n8n: P + "n8n.svg",
  Supabase: P + "supabase.svg",
  React: P + "react.svg",
  "React Native": P + "react.svg",
  Stripe: P + "stripe.svg",
  AWS: P + "aws.svg",
  Firebase: P + "firebase.svg",
  JavaScript: P + "javascript.svg",
  Excel: P + "excel.svg",
  Zoom: P + "zoom.svg",
  Skool: P + "skool.svg",
  Zapier: P + "zapier.svg",
  Jira: P + "jira.svg",
  Notion: P + "notion.svg",
  Slack: P + "slack.svg",
  Figma: P + "figma.svg",
  Confluence: P + "confluence.svg",
  "Microsoft 365": P + "m365.svg",
  Upwork: P + "upwork.svg",
  "Power Platform": P + "powerautomate.svg",
  GoHighLevel: P + "ghl.png",
  Clay: P + "clay.png",
  Apollo: P + "apollo.png",
  PMI: P + "pmi.webp",
  NUST: P + "nust.webp",
  "ClickUp Expert": P + "clickup-cert.webp",
};

export const SHOT = {
  "01": "/images/ms365.jpeg",
  "03": "/images/sap-integration-main.jpeg",
  "04": "/images/hail-main2.jpeg",
  10: "/images/power-main1.jpeg",
  12: "/images/crm-main1.jpeg",
  13: "/images/clickup-main.jpeg",
};

export const PROJECTS = [
  { n: "01", title: "Exhortek CRM and ERP delivery", summary: "Dynamics 365 rollouts plus a custom CRM on Dataverse", platforms: ["Dynamics 365", "Power Platform", "Dataverse", "Azure DevOps"], cats: ["ERP", "Power Platform"], region: "AU",
    context: "Concurrent client engagements moving sales, service and operations onto Microsoft platforms.", did: "Led delivery from requirements to hypercare, ran sprints in Azure Boards and UAT, and wrote the Solution Architecture Document for the in-house CRM.", result: "Owned go-live readiness, structured handover and post-launch support across multiple concurrent Dynamics 365 client rollouts." },
  { n: "02", title: "Solutel Ecuador", summary: "Field operations wired from ClickUp to a React PWA", platforms: ["ClickUp", "Supabase", "n8n", "React"], cats: ["ClickUp", "Automation"], region: "LATAM",
    context: "A telecom services firm needing one flow from job intake to signed PDF report.", did: "Scoped the integration, linked ClickUp, Supabase and n8n, and managed the PWA build with server-side PDF rendering.", result: "One connected flow from job intake to a signed PDF report, replacing manual hand-offs between field and office." },
  { n: "03", title: "SAP integrations at TWT", summary: "S/4HANA, C4C Service Cloud and SD on ECC", platforms: ["SAP"], cats: ["ERP"], region: "EU/US/BR",
    context: "Multi-regional SAP programs across Europe, the USA, Brazil and Pakistan.", did: "Ran delivery of SD, C4C, FICO, PLM and HCM work, standardised PM processes, and drove training and post-go-live stabilisation.", result: "5 SAP modules (SD, C4C, FICO, PLM, HCM) delivered across 4 regions, with one standard PM workflow adopted across teams." },
  { n: "04", title: "Hail ride-hailing MVP", summary: "Rider and driver apps from scope to production", platforms: ["React Native", "Stripe", "AWS"], cats: ["Product"], region: "US",
    context: "A US startup launching a negotiated-fare ride-hailing app.", did: "Defined MVP scope, coordinated three engineering teams, ran Twilio SMS and payments integration.", result: "MVP taken from scope to launch readiness across 3 engineering teams, with Stripe payments built into rider and driver apps." },
  { n: "05", title: "DHA asset operations", summary: "Fitness tracking and repair-cycle reporting for 470+ assets", platforms: ["Firebase"], cats: ["Product", "Automation"], region: "PK",
    context: "Vehicles, engineering plant and IT equipment with no shared view of fitness or repairs.", did: "Built a fitness-state tracker and repair-cycle framework, plus monthly executive dashboards on fitness ratios, repair throughput and rental deployment.", result: "470+ vehicles, plant and IT assets tracked in one system, reported to leadership in monthly executive dashboards." },
  { n: "06", title: "ACA Campaign Manager", summary: "Browser tools for insurance outreach and data extraction", platforms: ["JavaScript", "Excel"], cats: ["Automation"], region: "US",
    context: "An ACA insurance team working leads by hand.", did: "Shipped Campaign Manager and an Excel data extractor that run in the browser with no backend.", result: "Lead work moved off manual spreadsheets into browser tools that need no backend, install or IT ticket." },
  { n: "07", title: "CSG Infotech: Business Central", summary: "Embedded TPM on a Dynamics 365 BC implementation", platforms: ["Dynamics 365", "Azure DevOps"], cats: ["ERP"], region: "Remote",
    context: "A Business Central implementation needing steady delivery cadence.", did: "Run sprint planning, delivery cadence and billing coordination through Azure DevOps.", result: "Kept sprint, delivery and billing cadence steady on a live Business Central implementation." },
  { n: "08", title: "Construction ClickUp OS", summary: "7-phase project templates with 37+ SOP tasks", platforms: ["ClickUp"], cats: ["ClickUp"], region: "US",
    context: "A US construction firm rebuilding every project from scratch.", did: "Designed phase templates, SOP task library, automations and owner dashboards.", result: "7 phase templates and a 37+ task SOP library, so every new project starts from a proven setup instead of a blank list." },
  { n: "09", title: "AI education brand: LATAM launch", summary: "Funnels, automation and webinar delivery for a Spain-based client", platforms: ["GoHighLevel", "ClickUp", "Zoom", "Skool"], cats: ["Automation"], region: "LATAM",
    context: "A Spanish-language program launch with affiliates and paid registration.", did: "Senior delivery lead across designers, copywriters and automation specialists: GHL funnels, nurture sequences, affiliate tracking and a ClickUp workspace for the whole team.", result: "Full launch stack shipped for a Spanish-language market: GHL funnels, nurture sequences, affiliate tracking and webinar delivery." },
  { n: "10", title: "MDA Australia: Power Platform", summary: "Dataverse solution with Westpac and CBA banking integrations", platforms: ["Power Platform", "Dataverse", "Azure DevOps"], cats: ["Power Platform"], region: "AU",
    context: "An Australian enterprise client needing a custom solution tied into its banks.", did: "Owned delivery end to end: CI/CD pipelines, UAT and production deployment.", result: "Production release with CI/CD, structured UAT and post-launch monitoring, integrated with 2 major Australian banks (Westpac and CBA)." },
  { n: "11", title: "TWT delivery dashboard", summary: "Internal PM dashboard on Supabase and Netlify", platforms: ["Supabase"], cats: ["Product"], region: "EU",
    context: "Project status spread across tools and status calls.", did: "Specified and shipped a single dashboard for live delivery status.", result: "Live delivery status in one dashboard, replacing scattered tool checks and status calls." },
  { n: "12", title: "Simply CRM upgrades", summary: "Feature releases and UI transition on a live SaaS CRM", platforms: ["SaaS"], cats: ["Product"], region: "DK",
    context: "A live CRM product mid-redesign with paying users.", did: "Ran sprints and validated data integrity across production releases.", result: "100% on-time completion across multiple sprints, data accuracy and usability up 30%+, and project turnaround cut by 25%." },
  { n: "13", title: "ClickUp workspace consultancy", summary: "HER Marketing, GeniusFlow, Custom Cups and more", platforms: ["ClickUp", "Zapier"], cats: ["ClickUp", "Automation"], region: "US",
    context: "Service agencies scaling past ad-hoc task lists.", did: "Built workspace architectures, client portals and Zapier automations.", result: "Workspace architectures, client portals and Zapier automations delivered for 3+ service agencies." },
  { n: "14", title: "SonoRAY GHL integration", summary: "CRM and patient-lead integration plan for the CEO", platforms: ["GoHighLevel"], cats: ["Automation"], region: "US",
    context: "A medical imaging brand consolidating lead capture.", did: "Mapped the integration and delivered a phased plan for leadership.", result: "A phased integration plan leadership could approve and act on, consolidating patient-lead capture into one CRM." },
  { n: "15", title: "Dept of Education WA tender", summary: "WHS and Case Management on Power Platform", platforms: ["Power Platform"], cats: ["Power Platform"], region: "AU",
    context: "A government tender with strict compliance requirements.", did: "Led effort estimates, solution outline and compliance documentation.", result: "Effort estimates, solution outline and compliance documentation delivered for a government tender." },
  { n: "16", title: "SAP cutover strategy: U.S. retail", summary: "End-to-end cutover plan for a retail SAP go-live", platforms: ["SAP"], cats: ["ERP"], region: "US",
    context: "A U.S. retail client approaching an SAP go-live with no single cutover plan.", did: "Drafted and delivered the cutover strategy: execution runbook, retail-specific scenarios, data migration and validation, risk and issue tracking, and leadership communication.", result: "One cutover playbook covering 5 workstreams, giving leadership a clear go/no-go path to go-live." },
];

export const ROLES = [
  { org: "Defence Housing Authority", logo: P + "dha.webp", place: "Islamabad-Rawalpindi", title: "Senior Technical Project Manager", dates: "Feb 2026 to now", current: true, line: "Asset operations for 470+ vehicles, plant and IT equipment: fitness tracking, repair-cycle reporting and monthly executive dashboards." },
  { org: "The Working Town", logo: P + "twt.png", place: "Multi-regional", title: "Project Manager, SAP Integrations", dates: "Jul 2025 to Oct 2026", line: "5 core SAP modules (SD, C4C, FICO, PLM, HCM) delivered for clients in Germany, wider Europe, Brazil, the U.S. and Pakistan." },
  { org: "Spain-based AI education brand", logo: P + "upwork.svg", place: "Upwork, remote", title: "Senior Project Manager (Freelance)", dates: "Feb 2026 to Aug 2026", line: "GoHighLevel funnels, marketing automation, webinar infrastructure and a LATAM market entry." },
  { org: "Exhortek", logo: P + "exhortek.png", bleed: true, place: "Australia, remote", title: "Pre-Sales & Project Delivery Manager", dates: "Sep 2025 to Jul 2026", line: "End-to-end Dynamics 365 CRM and ERP delivery across concurrent client projects: Azure Boards sprints, go-live readiness and post-launch adoption." },
  { org: "Powerhouse Technologies", logo: P + "powerhouse.png", bleed: true, place: "San Jose, USA, remote", title: "Technical Project / Product Manager", dates: "Jul 2025 to Dec 2025", line: "Shipped the company website ahead of schedule, ran Linear sprints for an internal Retool SaaS product, and automated legal workflows into production-ready systems." },
    { org: "Pakistan Armed Forces", logo: P + "army.png", place: "Pakistan Army", title: "Technical Project Manager & QA Officer", dates: "Nov 2021 to Jun 2025", line: "Led a 22-person quality team, commissioned an LMR test-bench with a team of 9, and installed a NORINCO artillery DLM facility that earned an excellence certificate from the Chinese delegation." },
];

export const CREDS = [
  { name: "BE Computer Engineering", logo: LOGO.NUST, by: "NUST Islamabad, 2021" },
  { name: "PMP", logo: LOGO.PMI, by: "PMI, in progress" },
  { name: "Agile Project Management", logo: LOGO.PMI, by: "PMI" },
  { name: "Predictive Project Management", logo: LOGO.PMI, by: "PMI" },
  { name: "Generative AI for Project Managers", logo: LOGO.PMI, by: "PMI" },
  { name: "No Code AI Agent Builder", logo: LOGO.n8n, by: "n8n" },
  { name: "ClickUp Expert", logo: LOGO.ClickUp, by: "ClickUp" },
];

export const FILTERS = ["All", "ERP", "Power Platform", "ClickUp", "Automation", "Product"];
export const STACK = ["SAP", "Dynamics 365", "Power Platform", "Azure DevOps", "ClickUp", "n8n", "Supabase", "GoHighLevel"];
export const CAT_FOR = { SAP: "ERP", "Dynamics 365": "ERP", "Power Platform": "Power Platform", ClickUp: "ClickUp", n8n: "Automation", Supabase: "Product", GoHighLevel: "Automation", "Azure DevOps": "ERP" };
export const TOOLS_A = ["SAP", "Dynamics 365", "Power Platform", "Azure DevOps", "ClickUp", "n8n", "Zapier", "GoHighLevel", "Supabase", "Microsoft 365", "Excel"];
export const TOOLS_B = ["Jira", "Confluence", "Notion", "Slack", "Figma", "Clay", "Apollo", "Firebase", "AWS", "Stripe", "React", "Zoom"];
export const ORBIT = ["SAP", "Dynamics 365", "ClickUp", "n8n", "Azure DevOps", "Supabase", "Power Platform", "GoHighLevel"];
export const MANIFESTO = "Ex-Army Captain [face] turned delivery lead. I scope it right, keep teams moving across [stack] and hand over systems that still run long after go-live.";
