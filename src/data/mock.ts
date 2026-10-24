export interface ClientRecord {
  id: string;
  name: string;
  tag: 'Client' | 'Active customer' | 'Lead' | 'Retainer';
  contactPerson: string;
  email: string;
  totalLtv: number;
  lastTouch: string;
}

export interface InvoiceRecord {
  id: string;
  client: string;
  amount: number;
  issueDate: string;
  dueDate: string;
  status: 'overdue' | 'reminded' | 'paid' | 'sent' | 'draft';
}

export interface TaskRecord {
  id: string;
  title: string;
  assignee: string;
  client: string;
  dueDate: string;
  priority: 'High' | 'Medium' | 'Low';
  done: boolean;
}

export interface BookingRecord {
  id: string;
  title: string;
  client: string;
  dateTime: string;
  duration: string;
  platform: string;
  attendee: string;
}

export interface ModuleItem {
  id: string;
  name: string;
  category: string;
  iconName: string;
  tagline: string;
  description: string;
  highlightFor: ('freelancer' | 'agency' | 'ecommerce' | 'saas')[];
}

export interface BusinessPreset {
  id: 'freelancer' | 'agency' | 'ecommerce' | 'saas';
  label: string;
  tagline: string;
  leadModules: string[];
  recommendedDescription: string;
}

export const BUSINESS_PRESETS: BusinessPreset[] = [
  {
    id: 'freelancer',
    label: 'Freelancer',
    tagline: 'Get paid faster without juggling 4 client portals.',
    leadModules: ['billing', 'tasks', 'bookings'],
    recommendedDescription: 'Prioritizes rapid billing, scheduled client calls, and delivery deadlines.'
  },
  {
    id: 'agency',
    label: 'Agency',
    tagline: 'Align account managers, team tasks, and retainer billing.',
    leadModules: ['crm', 'tasks', 'billing', 'team'],
    recommendedDescription: 'Keeps client health visible, assigns client work across team members, and tracks pipeline revenue.'
  },
  {
    id: 'ecommerce',
    label: 'E-commerce',
    tagline: 'Track orders, inventory gear, and direct customer receipts.',
    leadModules: ['ecommerce', 'billing', 'gear', 'marketing'],
    recommendedDescription: 'Streamlines customer billing, product orders, and automated WhatsApp status notifications.'
  },
  {
    id: 'saas',
    label: 'Small SaaS',
    tagline: 'Unify subscription MRR, customer support CRM, and roadmap tasks.',
    leadModules: ['crm', 'finance', 'tasks', 'billing'],
    recommendedDescription: 'Monitors recurring revenue metrics, customer success stages, and sprint delivery.'
  }
];

export const INITIAL_INVOICES: InvoiceRecord[] = [
  {
    id: 'INV-198',
    client: 'Brightline',
    amount: 1200,
    issueDate: 'Oct 08, 2026',
    dueDate: 'Oct 15, 2026',
    status: 'overdue'
  },
  {
    id: 'INV-197',
    client: 'Apex Labs',
    amount: 3400,
    issueDate: 'Oct 12, 2026',
    dueDate: 'Nov 12, 2026',
    status: 'paid'
  },
  {
    id: 'INV-196',
    client: 'Studio K',
    amount: 850,
    issueDate: 'Oct 18, 2026',
    dueDate: 'Oct 28, 2026',
    status: 'sent'
  },
  {
    id: 'INV-195',
    client: 'Horizon Media',
    amount: 2200,
    issueDate: 'Oct 01, 2026',
    dueDate: 'Oct 15, 2026',
    status: 'paid'
  }
];

export const INITIAL_TASKS: TaskRecord[] = [
  {
    id: 'T-12',
    title: 'Follow up INV-198',
    assignee: 'Emily Chen',
    client: 'Brightline',
    dueDate: 'Today',
    priority: 'High',
    done: false
  },
  {
    id: 'T-11',
    title: 'Finalize Q4 strategy deck',
    assignee: 'David Vance',
    client: 'Brightline',
    dueDate: 'Tomorrow',
    priority: 'Medium',
    done: false
  },
  {
    id: 'T-10',
    title: 'Deploy webhook integration',
    assignee: 'Emily Chen',
    client: 'Apex Labs',
    dueDate: 'Oct 20',
    priority: 'High',
    done: true
  },
  {
    id: 'T-09',
    title: 'Send monthly retainer report',
    assignee: 'Sarah Lin',
    client: 'Horizon Media',
    dueDate: 'Oct 22',
    priority: 'Medium',
    done: true
  }
];

export const INITIAL_CLIENTS: ClientRecord[] = [
  {
    id: 'C-01',
    name: 'Brightline',
    tag: 'Client',
    contactPerson: 'David Vance (Founder & CEO)',
    email: 'david@brightline.design',
    totalLtv: 18400,
    lastTouch: 'Today · Pending Invoice #198'
  },
  {
    id: 'C-02',
    name: 'Apex Labs',
    tag: 'Active customer',
    contactPerson: 'Dr. Aris Cole (CTO)',
    email: 'aris@apexlabs.tech',
    totalLtv: 34200,
    lastTouch: 'Yesterday · Slack call'
  },
  {
    id: 'C-03',
    name: 'Studio K',
    tag: 'Client',
    contactPerson: 'Kara Finch',
    email: 'kara@studiok.io',
    totalLtv: 6800,
    lastTouch: '3 days ago · Invoice sent'
  },
  {
    id: 'C-04',
    name: 'Horizon Media',
    tag: 'Retainer',
    contactPerson: 'Marcus Wu',
    email: 'm.wu@horizonmedia.co',
    totalLtv: 15600,
    lastTouch: 'Oct 15 · Retainer payment'
  }
];

export const INITIAL_BOOKINGS: BookingRecord[] = [
  {
    id: 'B-01',
    title: 'Brightline Strategy Sync',
    client: 'Brightline',
    dateTime: 'Tue 14:00 (Today)',
    duration: '45 mins',
    platform: 'Google Meet',
    attendee: 'David Vance'
  },
  {
    id: 'B-02',
    title: 'Apex Labs Sprint Check-in',
    client: 'Apex Labs',
    dateTime: 'Thu 11:00',
    duration: '30 mins',
    platform: 'Google Meet',
    attendee: 'Dr. Aris Cole'
  },
  {
    id: 'B-03',
    title: 'Studio K Retainer Kickoff',
    client: 'Studio K',
    dateTime: 'Fri 16:00',
    duration: '60 mins',
    platform: 'Google Meet',
    attendee: 'Kara Finch'
  }
];

export const ALL_MODULES: ModuleItem[] = [
  {
    id: 'billing',
    name: 'Billing & Invoicing',
    category: 'Finance',
    iconName: 'Receipt',
    tagline: 'Create, send, and collect invoices without leaving your workspace.',
    description: 'Automated overdue chasing, multi-currency Stripe/Razorpay integrations, instant receipts.',
    highlightFor: ['freelancer', 'agency', 'ecommerce', 'saas']
  },
  {
    id: 'crm',
    name: 'Client CRM',
    category: 'Growth',
    iconName: 'Users',
    tagline: 'One single view of every client contract, deal, and touchpoint.',
    description: 'No manual sync. Client files, invoices, and active tasks live in the same card.',
    highlightFor: ['agency', 'saas']
  },
  {
    id: 'tasks',
    name: 'Project & Tasks',
    category: 'Operations',
    iconName: 'CheckSquare',
    tagline: 'Tie team deliverables directly to client milestones and billables.',
    description: 'Kanban, sprint lists, milestone tracking, and automatic task completion upon invoice payment.',
    highlightFor: ['freelancer', 'agency', 'saas']
  },
  {
    id: 'bookings',
    name: 'Calendar & Bookings',
    category: 'Operations',
    iconName: 'Calendar',
    tagline: 'Replace Calendly with direct bookings connected to your CRM.',
    description: 'Synced with Google Calendar, automatic intake forms, and prep notes attached to client records.',
    highlightFor: ['freelancer']
  },
  {
    id: 'team',
    name: 'Team & HRMS',
    category: 'Operations',
    iconName: 'Briefcase',
    tagline: 'Included for your whole team — never pay per-seat licenses.',
    description: 'Role-based access, attendance logs, org permissions, and shared team workload visibility.',
    highlightFor: ['agency']
  },
  {
    id: 'finance',
    name: 'Cash Flow & Finance',
    category: 'Finance',
    iconName: 'TrendingUp',
    tagline: 'Real-time revenue, burn rate, and tax estimates in one dashboard.',
    description: 'Consolidated MRR, cash-in-bank, overdue exposure, and expense classification.',
    highlightFor: ['saas', 'agency']
  },
  {
    id: 'ecommerce',
    name: 'E-commerce & Orders',
    category: 'Commerce',
    iconName: 'ShoppingBag',
    tagline: 'Manage digital or physical product sales directly alongside client work.',
    description: 'Order routing, automated customer receipts, and integrated product catalog.',
    highlightFor: ['ecommerce']
  },
  {
    id: 'marketing',
    name: 'WhatsApp & Marketing',
    category: 'Growth',
    iconName: 'MessageCircle',
    tagline: 'Reach clients where they actually reply with WhatsApp API integration.',
    description: 'Broadcast updates, automated booking reminders, and direct live support widget.',
    highlightFor: ['ecommerce', 'agency']
  }
];

export const TOOL_FRAGMENTS = [
  {
    id: 'frag-chat',
    type: 'chat',
    title: 'WhatsApp Chat',
    snippet: '"Did you get my payment?"',
    meta: 'Brightline · 2m ago',
    icon: 'MessageSquare'
  },
  {
    id: 'frag-sheet',
    type: 'sheet',
    title: 'Google Sheet - Receivables',
    snippet: 'Brightline | $1,200 | ? Status',
    meta: 'Row 48 · Unsynced',
    icon: 'Table'
  },
  {
    id: 'frag-cal',
    type: 'cal',
    title: 'Calendar Slot',
    snippet: 'Tue 14:00 · Strategy call?',
    meta: 'Google Cal invite',
    icon: 'Calendar'
  },
  {
    id: 'frag-pdf',
    type: 'pdf',
    title: 'Drive Attachment',
    snippet: 'INV-198_v2_FINAL.pdf',
    meta: '142 KB · Sent via mail',
    icon: 'FileText'
  },
  {
    id: 'frag-mail',
    type: 'email',
    title: 'Gmail Thread',
    snippet: 'Re: Estimate & Scope revision',
    meta: '3 unread replies',
    icon: 'Mail'
  },
  {
    id: 'frag-sticky',
    type: 'note',
    title: 'Mac Sticky Note',
    snippet: 'REMEMBER: follow up Brightline Fri!',
    meta: 'Desktop note',
    icon: 'StickyNote'
  }
];

export const PROBLEM_ROWS = [
  {
    pain: 'Subscriptions stacking up ($240+/mo across 5 separate tools)',
    fix: 'One transparent plan, team members included at no extra cost'
  },
  {
    pain: 'Scattered customer data across Slack, Gmail, Sheets and Trello',
    fix: 'A single unified customer record shared across CRM, billing, and tasks'
  },
  {
    pain: 'Manual chasing: checking bank balances then messaging clients',
    fix: 'One-click reminders with automatic payment detection and task closure'
  },
  {
    pain: 'No founder bird’s-eye view of revenue and overdue receivables',
    fix: 'Live unified financial workbench with instant actionable controls'
  }
];

export const FAQS = [
  {
    q: 'How does Solopreneur OS replace multiple subscriptions without being bloated?',
    a: 'Solopreneur OS is built around a modular architecture. You only turn on the modules your business actually uses—whether you are a solo freelancer who just needs invoicing and bookings, or a 10-person agency needing CRM, tasks, and team permissions. Everything shares the same underlying customer record.'
  },
  {
    q: 'Is team access really included, or will I be charged per seat?',
    a: 'Team members are included in your subscription tier. Unlike legacy enterprise software that penalizes your growth with $25/user/month fees, Solopreneur OS gives you flat, predictable pricing built specifically for teams of up to 10.'
  },
  {
    q: 'Can I integrate my existing Google Workspace and WhatsApp?',
    a: 'Yes. Solopreneur OS connects with Google Calendar, Gmail, Google Drive, WhatsApp Business API, and Stripe/Razorpay payment gateways so you don’t have to change where your clients communicate or pay.'
  },
  {
    q: 'How does the 90-day invite-only access work?',
    a: 'We are onboarding founders and boutique teams in cohorts to provide direct white-glove setup. When you request access, you receive 90 days completely free on your chosen plan with zero credit card required up front.'
  }
];
