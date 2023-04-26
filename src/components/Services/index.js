import React from 'react'
import icon1 from '../../images/icon-1.svg'
import icon2 from '../../images/icon-2.svg'
import icon3 from '../../images/icon-3.svg'
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={icon1} />
          <ServicesH2>Reduce expences</ServicesH2>
          <ServicesP>We help reduce you fees and increase your overall revenue.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={icon2} />
          <ServicesH2>Virtual offices</ServicesH2>
          <ServicesP>You can acces our platform online anywhere in the world.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={icon3} />
          <ServicesH2>Premium Benefits</ServicesH2>
          <ServicesP>Unlock our special membership card that returns 5% cashback.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services