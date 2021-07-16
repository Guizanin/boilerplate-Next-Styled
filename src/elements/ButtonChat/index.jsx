import { ButtonElement } from './styles'

export default function ButtonChat({
  className,
  text,
  onClick,
  leftIcon,
  rightIcon,
  minMediaQuery
}) {
  return (
    <ButtonElement
      type='button'
      className={className}
      onClick={onClick}
      mediaQuery={minMediaQuery}
    >
      {leftIcon}
      <span className='text'>{text}</span>
      {rightIcon}
    </ButtonElement>
  )
}
