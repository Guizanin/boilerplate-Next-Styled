import { Link } from './styles'

export default function LinkButton({ href, targetType, className, text, icon }) {
  return (
    <Link href={href} className={className} target={targetType}>
      <span>{text}</span>
      {icon}
    </Link>
  )
}
