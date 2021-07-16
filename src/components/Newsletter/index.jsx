import { useViewport } from '@hooks/useViewport'

import LinkButton from '@elements/LinkButton'

import { Container, Content, Text } from './styles'

export default function Newsletter() {
  const { width } = useViewport()
  const breakpoint = 780

  return (
    <Container>
      <div className='internal'>
        <Content>
          <Text>Já é cliente NEXT_BOILERPLATE?</Text>
          {width < breakpoint ? (
            <LinkButton
              href=''
              btnClass='sign-button'
              text='Acessar central'
            />
          ) : (
            <LinkButton
              href=''
              btnClass='sign-button'
              text='Acessar central'
            />
          )}
        </Content>
      </div>
    </Container>
  )
}
