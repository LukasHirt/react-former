import cn from 'classnames'
import styles from './button.module.css'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
  onClick?: () => unknown
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  disabled = false,
  variant = 'outline',
  className
}) => {
  return (
    <button className={cn([styles.button, styles[variant], className])} type={type} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
