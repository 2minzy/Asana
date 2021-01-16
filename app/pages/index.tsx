import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import showcase from '../images/showcase.jpg';
import sectionA from '../images/sectionA.jpg';
import sectionB from '../images/sectionB.jpg';
import sectionC from '../images/sectionC.jpg';
import {
  SpaTwoTone,
  MusicNoteTwoTone,
  FavoriteTwoTone,
  KeyboardArrowDownRounded,
  KeyboardArrowUpRounded,
} from '@material-ui/icons';

const Showcase = styled.div`
  background: url(${showcase}) no-repeat center center/cover;
  height: 100vh;
  position: relative; /* If absolute is inside the parent, parent element should be relative */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 20px;
  color: white;

  h1 {
    margin-top: 260px;
    font-size: 2.6rem;
  }

  p {
    font-size: 1.2rem;
    max-width: 600px;
    margin: 0 0 20px 0;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(27, 27, 27, 0.5);
  }

  & * {
    z-index: 1;
  }

  div {
    button {
      background-color: transparent;
      color: white;
      font-size: 2.4rem;
      width: 50px;
      height: 50px;
      cursor: pointer;
    }
  }
`;

const Button = styled.button`
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  padding: 10px 30px;
  color: #fff;
  background-color: transparent;
  border: white 2px solid;
  margin-bottom: 320px;

  &:hover {
    background: linear-gradient(
      150deg,
      rgba(61, 221, 196, 1) 29%,
      rgba(65, 198, 223, 1) 62%,
      rgba(142, 223, 249, 0.9962359943977591) 100%
    );
  }
`;

const bounce = keyframes`
   0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

const Bounce = styled.div`
  animation: ${bounce} 2s infinite;

  .arrow-icon {
    transform: scale(3.4);
  }
`;

const SectionContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  color: #fff;
`;

const Section = styled.div`
  position: relative;
  flex: 1;
  overflow: hidden;
  background-color: black;
`;

const SectionImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: opacity(0.7);
`;

const SectionContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;

  .icon {
    border: white 3px solid;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    margin: auto auto 24px auto;
    padding: 12px 20px;
  }

  p {
    font-size: 1.2rem;
    text-align: center;
    margin: 0 auto auto auto;
  }
`;

const FloatingButton = styled.button`
  visibility: ${props => (props.show ? 'visibile' : 'hidden')};
  opacity: ${props => (props.show ? 1 : 0)};
  background: linear-gradient(
    150deg,
    rgba(61, 221, 196, 1) 29%,
    rgba(65, 198, 223, 1) 62%,
    rgba(142, 223, 249, 0.9962359943977591) 100%
  );
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  font-size: 2.4rem;
  transition: all 400ms ease-in-out;
  position: fixed;
  bottom: 40px;
  right: 24px;
  padding: 8px;
  cursor: pointer;

  .arrow-icon {
    transform: scale(3);
  }
`;

const Footer = styled.footer`
  padding: 60px;
  text-align: center;
  position: relative;
  background: #14110b;
  height: 140px;
  color: white;
`;

export default function Index() {
  const section2 = useRef(null);
  const [showScroll, setShowScroll] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection2 = () => {
    window.scrollTo({ top: section2.current.offsetTop, behavior: 'smooth' });
  };

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', checkScrollTop);
    }
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [checkScrollTop]);

  return (
    <>
      <Showcase>
        <h1>Asana guides you into the world of meditation.</h1>
        <p>Take a breath. Share your favorite meditation streaming content!</p>
        <Link href='/streams'>
          <Button variant='contained' color='primary'>
            READY TO MEDITATE
          </Button>
        </Link>
        <div>
          <button onClick={scrollToSection2}>
            <Bounce>
              <KeyboardArrowDownRounded className='arrow-icon' />
            </Bounce>
          </button>
        </div>
      </Showcase>

      <SectionContainer ref={section2}>
        <Section>
          <SectionImage src={sectionA} alt='' />
          <SectionContent>
            <SpaTwoTone className='icon' />

            <p>
              Learn the life-changing skill of meditation
              <br />
              to calm your anxiety and relax your body.
            </p>
          </SectionContent>
        </Section>
        <Section>
          <SectionImage src={sectionB} alt='' />
          <SectionContent>
            <MusicNoteTwoTone className='icon' />
            <p>
              Music to help you focus, relax and sleep,
              <br />
              white nose, rain, relaxing sounds & more.
            </p>
          </SectionContent>
        </Section>
        <Section>
          <SectionImage src={sectionC} alt='' />
          <SectionContent>
            <FavoriteTwoTone className='icon' />
            <p>
              Sleep more. Stress less. Live better.
              <br />
              Asana will help you.
            </p>
          </SectionContent>
        </Section>
      </SectionContainer>
      <Footer>Copyright &copy; ASANA | All rights reserved. | MINJI LEE</Footer>
      <FloatingButton onClick={scrollToTop} show={showScroll}>
        <KeyboardArrowUpRounded className='arrow-icon' />
      </FloatingButton>
    </>
  );
}
