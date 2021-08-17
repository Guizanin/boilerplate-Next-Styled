import { useViewport } from '@hooks/useViewport'

import { Button } from '@elements/Button'

import { ArrowRightLittleTail } from '@icons/ArrowRightLittleTail'
import { Close } from '@icons/Close'

import {
  Container,
  Content,
  Title,
  ButtonClose,
  FormContainer,
  Input
} from './styles'

export default function WeCallModal({ status, setModal }) {
  const { width } = useViewport()
  const breakpoint = 980

  const closeModal = function () {
    document.body.style.overflow = 'auto'
    setModal(false)
  }

  return (
    <>
      {
        <div className='internal'>
          <Content active={status}>
            <Container>
              <ButtonClose type='button' onClick={closeModal}>
                <Close />
              </ButtonClose>
              {width <= breakpoint ? (
                <Title>
                  Preencha os campos
                  <br /> abaixo que{' '}
                  <span className='highlight'>
                    ligamos em até
                    <br /> 60 segundos
                  </span>{' '}
                  para você
                </Title>
              ) : (
                <Title>
                  Preencha os campos abaixo que
                  <br />
                  <span className='highlight'>
                    ligamos em até 60 segundos
                  </span>{' '}
                  para você
                </Title>
              )}
              <FormContainer>
                <div className='wrapper'>
                  <Input type='text' placeholder='Nome' />
                  <Input type='text' placeholder='Telefone' />
                </div>
                <Button
                  text='Me ligue agora'
                  btnClass='send-button'
                  icon={<ArrowRightLittleTail />}
                  typeButton='submit'
                />
              </FormContainer>
            </Container>
          </Content>
        </div>
      }
    </>
  )
}
