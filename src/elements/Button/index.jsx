import { ButtonElement } from './styles'

export default function Button({
  className,
  text,
  typeButton = 'button',
  onClick,
  icon
}) {
  return (
    <ButtonElement type={typeButton} className={className} onClick={onClick}>
      <span>{text}</span>
      {icon}
    </ButtonElement>
  )
}
