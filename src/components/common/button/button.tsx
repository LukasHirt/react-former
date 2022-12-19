import cn from 'classnames'
import styles from './button.module.css'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
  onClick?: () => unknown
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  disabled = false,
  variant = 'secondary',
  className,
  onClick = () => undefined
}) => {
  return (
    <button
      className={cn([styles.button, styles[variant === 'primary' ? 'primary' : 'secondary'], className])}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
