import { ButtonChat } from '@elements/ButtonChat'

import { ArrowRight } from '@icons/ArrowRight'
import { Close } from '@icons/Close'
import { Chat } from '@icons/Chat'
import { Whatsapp } from '@icons/Whatsapp'
import { Phone } from '@icons/Phone'

import {
  Container,
  Content,
  Title,
  ButtonContainer,
  ButtonClose,
  Stake
} from './styles'

export default function SharingModal({ status, setModal, typeOffer = '' }) {
  return (
    <>
      {
        <div className='internal'>
          <Content active={status} typeModal={typeOffer}>
            <Container>
              <ButtonClose type='button' onClick={() => setModal(false)}>
                <Close />
              </ButtonClose>
              <Title>
                Como prefere <b>contratar</b>?
              </Title>
              <ButtonContainer typeModal={typeOffer}>
                <ButtonChat
                  btnClass='phone-mobile'
                  text='Ligar grátis'
                  leftIcon={<Phone styleClass='icon' />}
                  minMediaQuery='980'
                  rightIcon={<ArrowRight styleClass='icon-arrow' />}
                />
                <ButtonChat
                  text='Chat Online'
                  leftIcon={<Chat styleClass='icon chat-mobile' />}
                  minMediaQuery='980'
                  rightIcon={<ArrowRight styleClass='icon-arrow' />}
                />
                <Stake />
                <ButtonChat
                  text='WhatsApp'
                  leftIcon={<Whatsapp styleClass='icon' />}
                  minMediaQuery='980'
                  rightIcon={<ArrowRight styleClass='icon-arrow' />}
                />
              </ButtonContainer>
            </Container>
          </Content>
        </div>
      }
    </>
  )
}
