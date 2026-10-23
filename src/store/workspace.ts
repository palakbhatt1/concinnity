import { create } from 'zustand'

export type ModuleView =
  | 'overview'
  | 'billing'
  | 'crm'
  | 'tasks'
  | 'bookings'
  | 'team'
  | 'finance'
  | 'marketing'

export type BusinessType = 'freelancer' | 'agency' | 'ecommerce' | 'saas'
export type IntroPhase = 'mess' | 'assemble' | 'ready'

export interface WorkspaceState {
  // Shared Live Entity State
  invoice: {
    id: string
    client: string
    amount: number
    status: 'overdue' | 'reminded' | 'paid'
  }
  task: {
    id: string
    title: string
    assignee: string
    client: string
    done: boolean
  }
  crmTag: 'Client' | 'Active customer'
  revenue: number
  outstanding: number
  activeClients: number
  tasksDue: number
  bookingsToday: number

  // Flow State
  step: 0 | 1 | 2 | 3
  view: ModuleView
  businessType: BusinessType
  introPhase: IntroPhase
  isClientPanelOpen: boolean
  hasInteracted: boolean
  toastMessage: string | null
  isCascadeRunning: boolean
  theme: 'light' | 'dark'

  // Actions
  openClient: () => void
  closeClient: () => void
  sendReminder: () => void
  setView: (view: ModuleView) => void
  setBusinessType: (type: BusinessType) => void
  setIntroPhase: (phase: IntroPhase) => void
  startAssemblyAnimation: () => void
  skipAssembly: () => void
  setHasInteracted: () => void
  dismissToast: () => void
  replay: () => void
  replayAssembly: () => void
  toggleTheme: () => void
}

const INITIAL_WORKSPACE = {
  invoice: {
    id: 'INV-198',
    client: 'Brightline Studio',
    amount: 1200,
    status: 'overdue' as const,
  },
  task: {
    id: 'T-12',
    title: 'Follow up INV-198',
    assignee: 'Emily Chen',
    client: 'Brightline Studio',
    done: false,
  },
  crmTag: 'Client' as const,
  revenue: 24000,
  outstanding: 4820,
  activeClients: 18,
  tasksDue: 7,
  bookingsToday: 4,
  step: 0 as const,
  view: 'overview' as ModuleView,
  businessType: 'agency' as BusinessType,
  isClientPanelOpen: false,
  hasInteracted: false,
  toastMessage: null,
  isCascadeRunning: false,
}

export const useWorkspaceStore = create<WorkspaceState>((set, get) => ({
  ...INITIAL_WORKSPACE,
  introPhase: 'mess',
  theme: 'light',

  openClient: () => {
    set((state) => ({
      isClientPanelOpen: true,
      hasInteracted: true,
      step: state.step === 0 ? 1 : state.step,
    }))
  },

  closeClient: () => {
    set({ isClientPanelOpen: false })
  },

  sendReminder: () => {
    const { isCascadeRunning, step } = get()
    if (isCascadeRunning || step >= 2) return

    // Step 2: Reminder sent
    set({
      invoice: {
        ...get().invoice,
        status: 'reminded',
      },
      step: 2,
      hasInteracted: true,
      toastMessage: 'Reminder sent to David Vance (Brightline Studio)',
      isCascadeRunning: true,
    })

    // Automatic cascade after ~1.8 seconds (Phase 3 spec)
    setTimeout(() => {
      set({
        toastMessage: 'Payment received: $1,200 from Brightline Studio via Stripe',
      })

      setTimeout(() => {
        set((state) => ({
          invoice: {
            ...state.invoice,
            status: 'paid',
          },
          revenue: 25200,
          outstanding: 3620,
          activeClients: 19,
          task: {
            ...state.task,
            done: true,
          },
          tasksDue: 6,
          crmTag: 'Active customer',
          step: 3,
          isCascadeRunning: false,
          toastMessage: 'One client. One workspace. Everything updated.',
        }))
      }, 700)
    }, 1800)
  },

  setView: (view: ModuleView) => {
    set({ view, hasInteracted: true })
  },

  setBusinessType: (type: BusinessType) => {
    set({ businessType: type })
  },

  setIntroPhase: (phase: IntroPhase) => {
    set({ introPhase: phase })
  },

  startAssemblyAnimation: () => {
    set({
      introPhase: 'mess',
      isClientPanelOpen: false,
    })

    setTimeout(() => {
      set({ introPhase: 'assemble' })

      setTimeout(() => {
        set({
          introPhase: 'ready',
          toastMessage: '6 tools unified into Solopreneur OS! Try clicking Brightline below.',
        })
      }, 1600)
    }, 2200)
  },

  skipAssembly: () => {
    set({ introPhase: 'ready' })
  },

  setHasInteracted: () => {
    set({ hasInteracted: true })
  },

  dismissToast: () => {
    set({ toastMessage: null })
  },

  replay: () => {
    set({
      ...INITIAL_WORKSPACE,
      hasInteracted: true,
      toastMessage: 'Workbench reset. Click the Brightline row to test the cascade flow!',
    })
  },

  replayAssembly: () => {
    set({
      ...INITIAL_WORKSPACE,
      hasInteracted: false,
    })
    get().startAssemblyAnimation()
  },

  toggleTheme: () => {
    set((state) => {
      const next = state.theme === 'light' ? 'dark' : 'light'
      if (typeof document !== 'undefined') {
        if (next === 'dark') {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      }
      return { theme: next }
    })
  },
}))
