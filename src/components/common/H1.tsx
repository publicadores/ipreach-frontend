import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps, FC, forwardRef } from 'react'
import { cn } from '../../utils/tailwindUtils'

const h1Classes = {
  variants: {
    variant: {
      default: '',
      colored: '',
    },
    size: {
      default: '',
      sm: '',
    },
  },
}

const h1Variants = cva('', {
  ...h1Classes,
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

interface H1Props
  extends ComponentProps<'h1'>,
    VariantProps<typeof h1Variants> {}

export const H1: FC<H1Props> = forwardRef<HTMLHeadingElement, H1Props>(
  ({ className, size, variant, ...props }, ref) => (
    <h1
      ref={ref}
      className={cn(h1Variants({ variant, size, className }))}
      {...props}
    />
  )
)
