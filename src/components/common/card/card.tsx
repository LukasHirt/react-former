import cn from 'classnames'
import styles from './card.module.css'

interface CardProps {
  children: React.ReactNode
  className?: string
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return <div className={cn([styles.card, className])}>{children}</div>
}

export default Card
