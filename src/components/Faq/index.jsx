import React, { useState } from 'react'

import ArrowDown from '@icons/ArrowDown'

import {
  ContainerFaq,
  Title,
  ContentAccordions,
  Accordion,
  Header,
  Content
} from './styles'

export default function Faq() {
  const [active, setActive] = useState('')

  const handleClick = (el) => {
    active === el ? setActive('') : setActive(el)
  }

  return (
    <ContainerFaq>
      <div className='container'>
        <div className='internal'>
          <Title>
            Principais
            <br />
            dúvidas
          </Title>
          <ContentAccordions>
            <Accordion
              onClick={() => handleClick('faq1')}
              active={active === 'faq1'}
            >
              <Header active={active === 'faq1'}>
                <span className='text'>
                  Como <strong>funciona a internet por fibra óptica</strong> da
                  NEXT_BOILERPLATE?
                </span>
                <ArrowDown />
              </Header>
              <Content>
                <p>
                  Levamos a rede tecnológica da fibra até a residência do
                  cliente, evitando qualquer problema de perda na qualidade de
                  internet.
                </p>
              </Content>
            </Accordion>

            <Accordion
              onClick={() => handleClick('faq2')}
              active={active === 'faq2'}
            >
              <Header active={active === 'faq2'}>
                <span className='text'>
                  O Wi-Fi é <strong>gratuito</strong>?
                </span>
                <ArrowDown />
              </Header>
              <Content>
                <p>
                  Isso mesmo! Disponibilizamos o aparelho para utilização sem
                  nenhum custo adicional. Além disso, ele permite fazer conexões
                  simultâneas entre TV, computador, tablet, notebook, celular e
                  outros.
                </p>
              </Content>
            </Accordion>

            <Accordion
              onClick={() => handleClick('faq3')}
              active={active === 'faq3'}
            >
              <Header active={active === 'faq3'}>
                <span className='text'>
                  Qual o <strong>prazo de instalação</strong>?
                </span>
                <ArrowDown />
              </Header>
              <Content>
                <p>
                  Se o endereço estiver dentro da área de cobertura e com
                  viabilidade técnica no local, é só concluir o pedido em nossa
                  central. Assim que aprovado, aguarde para desfrutar o melhor
                  da #conexãodefibra.
                </p>
              </Content>
            </Accordion>

            <Accordion
              onClick={() => handleClick('faq4')}
              active={active === 'faq4'}
            >
              <Header active={active === 'faq4'}>
                <span className='text'>
                  <strong>Quais cidades</strong> são atendidas pela NEXT_BOILERPLATE?
                </span>
                <ArrowDown />
              </Header>
              <Content>
                <div>
                  <p>Atuamos nas seguintes cidades:</p>
                  <ul className='list'>
                    <li>&#9679; Arujá</li>
                    <li>&#9679; Caçapava</li>
                    <li>&#9679; Cachoeira Paulista</li>
                    <li>&#9679; Carapicuíba</li>
                    <li>&#9679; Cruzeiro</li>
                    <li>&#9679; Itaquaquecetuba</li>
                    <li>&#9679; Lorena</li>
                    <li>&#9679; Mairinque</li>
                    <li>&#9679; Poá</li>
                    <li>&#9679; Ribeirão Pires</li>
                    <li>&#9679; Santa Isabel</li>
                    <li>&#9679; São Roque</li>
                    <li>&#9679; Aparecida</li>
                    <li>&#9679; Canas</li>
                    <li>&#9679; Cotia</li>
                    <li>&#9679; Ferraz De Vasconcelos</li>
                    <li>&#9679; Guaratinguetá</li>
                    <li>&#9679; Itapevi</li>
                    <li>&#9679; Jandira</li>
                    <li>&#9679; Lavrinhas</li>
                    <li>&#9679; Potim</li>
                    <li>&#9679; São José Dos Campos</li>
                    <li>&#9679; Vargem Grande Paulista</li>
                    <li>&#9679; Caieiras</li>
                    <li>&#9679; Cajamar</li>
                    <li>&#9679; Francisco Morato</li>
                    <li>&#9679; Franco Da Rocha</li>
                    <li>&#9679; Jarinu</li>
                    <li>&#9679; Pirapora Do Bom Jesus</li>
                    <li>&#9679; Atibaia</li>
                    <li>&#9679; Cabreúva</li>
                    <li>&#9679; Campo limpo paulista</li>
                    <li>&#9679; Itatiba</li>
                    <li>&#9679; Itupeva</li>
                    <li>&#9679; Jundiaí</li>
                    <li>&#9679; Louveira</li>
                    <li>&#9679; Várzea paulista</li>
                    <li>&#9679; Vinhedo</li>
                    <li>&#9679; Pindamonhangaba</li>
                  </ul>
                </div>
              </Content>
            </Accordion>
            <Accordion
              onClick={() => handleClick('faq5')}
              active={active === 'faq5'}
            >
              <Header active={active === 'faq5'}>
                <span className='text'>
                  Não encontrou <strong>sua cidade</strong>?
                </span>
                <ArrowDown />
              </Header>
              <Content>
                <p>
                  Não se preocupe. A NEXT_BOILERPLATE está em constante expansão de
                  rede. Em breve chegaremos aí!
                </p>
              </Content>
            </Accordion>
          </ContentAccordions>
        </div>
      </div>
    </ContainerFaq>
  )
}
