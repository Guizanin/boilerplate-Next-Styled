import FooterLogo from '@icons/FooterLogo'
import Facebook from '@icons/Facebook'
import Instagram from '@icons/Instagram'
import Youtube from '@icons/Youtube'
import Linkedin from '@icons/Linkedin'

import {
  FooterContainer,
  InfoContainer,
  Title,
  Text,
  SecondText,
  SocialContainer,
  Border
} from './styles'

export default function Footer() {
  return (
    <FooterContainer>
      <div className='internal wrapper'>
        <InfoContainer>
          <div className='logo-container'>
            <FooterLogo />
          </div>
          <div className='block-list'>
            <div className='item-block'>
              <Title>Suporte técnico</Title>
              <Text>
                De 2ª a 6ª das 8:30h às 22hs
                <br />
                Sábados, Domingos e Feriados
                <br />
                das 9h às 12h e das 13h às 18h
                <br />
                <br />
                sac@NEXT_BOILERPLATE.com.br
              </Text>
            </div>
            <div className='item-block'>
              <Title>Ouvidoria</Title>
              <a
                href='mailto:'
                alt=''
                className='link-bold'
              >
                ouvidoria@NEXT_BOILERPLATE.com.br
              </a>
            </div>
            <div className='item-block'>
              <Title>Contato</Title>
              <Text>
                Rua João Albino Lirani, 40 sala 4ª
                <br /> Centro – Monte Mor - 13190.000
              </Text>
            </div>
          </div>
        </InfoContainer>
        <SocialContainer>
          <Border />
          <SecondText>Acesse nossas redes</SecondText>
          <div className='social-links'>
            <a
              href=''
              title='Facebook'
              target='_blank'
              className='icon'
            >
              <Facebook />
            </a>
            <a
              href=''
              title='Instagram'
              target='_blank'
              className='icon'
            >
              <Instagram />
            </a>
            <a
              href=''
              title='YouTube'
              target='_blank'
              className='icon'
            >
              <Youtube />
            </a>
            <a
              href=''
              title='Linkedin'
              target='_blank'
            >
              <Linkedin />
            </a>
          </div>
          <SecondText>
            Copyright 2021 NEXT_BOILERPLATE. Desenvolvido por Lead Growth
          </SecondText>
        </SocialContainer>
      </div>
    </FooterContainer>
  )
}
