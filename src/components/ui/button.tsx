import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-none text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-onix-accent disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-onix-accent text-onix-bg hover:bg-onix-accent-light active:scale-95',
        outline:
          'border border-onix-border text-onix-text hover:border-onix-accent hover:text-onix-accent',
        ghost:
          'text-onix-muted hover:text-onix-text',
        link:
          'text-onix-accent underline-offset-4 hover:underline p-0 h-auto',
      },
      size: {
        default: 'h-12 px-8 py-3 text-sm tracking-wide uppercase',
        sm: 'h-9 px-4 text-xs tracking-wide uppercase',
        lg: 'h-14 px-10 py-4 text-base tracking-widest uppercase',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
