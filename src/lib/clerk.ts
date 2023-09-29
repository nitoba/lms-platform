import { ClerkProvider } from '@clerk/nextjs'
import { ComponentProps } from 'react'

export const appearance: ComponentProps<typeof ClerkProvider>['appearance'] = {
  elements: {
    card: 'rounded-md border bg-card text-card-foreground border-border p-6 shadow-none text-center',
    headerTitle: 'text-foreground',
    headerSubtitle: 'text-muted-foreground',
    dividerLine: 'bg-border',
    dividerText: 'text-muted-foreground',
    socialButtonsBlockButton:
      'tracking-normal text-muted-foreground normal-case border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
    providerIcon__github: 'dark:invert',
    footerActionText: 'text-muted-foreground',
    footerActionLink: 'text-primary hover:text-primary',
    identityPreviewEditButtonIcon: 'text-foreground',
    formResendCodeLink: 'text-muted-foreground',
    otpCodeFieldInput: 'focus:border-primary',
    organizationSwitcherTrigger: 'border border-border',
    formButtonPrimary:
      'bg-primary dark:bg-primary-foreground focus-visible:outline-none disabled:opacity-50 hover:bg-primary/90 dark:hover:bg-primary-foreground/90',
    formFieldLabel: 'text-muted-foreground',
    formFieldInput: 'bg-transparent border border-input dark:text-primary',
  },
}
