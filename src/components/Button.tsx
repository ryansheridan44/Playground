import type { ButtonHTMLAttributes } from 'react'
import './Button.css'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

function Button({ type = 'button', className, children, ...props }: ButtonProps) {
  return (
    <button type={type} className={['btn', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </button>
  )
}

export default Button
