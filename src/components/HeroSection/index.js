import React, {useState} from 'react'
import { HeroBg, HeroContainer, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import Video from '../../videos/pexels-pressmaster-3130284-3840x2160-30fps.mp4'
import { Button } from '../ButtonElements'

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
          <HeroH1>Virtual Banking Made Easy</HeroH1>
          <HeroP>
            Sign up for a new account today and recieve $250 in credit towards your next payment.
          </HeroP>
          <HeroBtnWrapper>
            <Button to='signup' 
            onMouseEnter={onHover} 
            onMouseLeave={onHover} 
            primary='true' 
            dark='true'>
              Get Started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection