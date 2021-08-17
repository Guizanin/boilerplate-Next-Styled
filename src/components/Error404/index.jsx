import Link from 'next/link'

import Arrow from '@icons/ArrowDown'

import { Container, Content, Title, LinkElement } from './styles'

export default function Error404() {
  return (
    <Container>
      <Content>
        <Title>
          <strong>404</strong>  
          Página não encontrada
        </Title>
        <Link href='/'>
          <LinkElement title="Voltar para a Home">
            <Arrow className="icon"/>
            <span>Voltar para a Home</span>
          </LinkElement>
        </Link>
      </Content>
    </Container>
  )
}
