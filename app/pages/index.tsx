import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import showcase from '../images/showcase.jpg';
import sectionA from '../images/sectionA.jpg';
import sectionB from '../images/sectionB.jpg';
import sectionC from '../images/sectionC.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSpa,
  faMusic,
  faHeart,
  faChevronDown,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';

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
    position: absolute; /* If absolute is inside the parent, parent element should be relative */
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(12, 12, 12, 0.5);
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
    opacity: 0.7;
    color: #dda948;
    border-color: #f5b339;
  }
`;

const SectionContainer = styled.div`
  /* position: relative; */
  width: 100%;
  height: 100vh;
  display: flex;
  color: #fff;
  //z-index: -1;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(92, 92, 92, 0.5);
    pointer-events: none;
  }
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
    border: white 2px solid;
    border-radius: 50%;
    width: 101px;
    height: 101px;
    margin: auto auto 24px auto;
    padding: 12px 20px;
    font-size: 2.8rem;
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
  background-color: #f3b94c;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  font-size: 2.4rem;
  transition: all 400ms ease-in-out;
  position: fixed;
  bottom: 24px;
  right: 24px;
  padding: 8px;
  cursor: pointer;
`;

// const ItemImage = styled.div`
//   height: auto;
//   opacity: 80%;
//   transform: translateZ(0);
//   display: block;
//   transition: transform 750ms cubic-bezier(0.2, 1, 0.3, 1);

//   &:hover {

//     opacity: 100%;
//     z-index: -1;
//   }

//   &::before {
//     content: '';
//     display: block;
//     overflow: hidden;
//   }
// `;

const Footer = styled.footer`
  position: relative;
  background: #14110b;
  height: 200px;
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
            <FontAwesomeIcon className='icon' icon={faChevronDown} />
          </button>
        </div>
      </Showcase>

      <SectionContainer ref={section2}>
        <Section>
          <SectionImage src={sectionA} alt='' />
          <SectionContent>
            <FontAwesomeIcon className='icon' icon={faSpa} />
            <p>Learn the life-changing skill of meditation.</p>
          </SectionContent>
        </Section>
        <Section>
          <SectionImage src={sectionB} alt='' />
          <SectionContent>
            <FontAwesomeIcon className='icon' icon={faMusic} />
            <p>Music to help you focus, relax and sleep</p>
          </SectionContent>
        </Section>
        <Section>
          <SectionImage src={sectionC} alt='' />
          <SectionContent>
            <FontAwesomeIcon className='icon' icon={faHeart} />
            <p>Sleep more. Stress less. Live better.</p>
          </SectionContent>
        </Section>
      </SectionContainer>
      <Footer></Footer>
      <FloatingButton onClick={scrollToTop} show={showScroll}>
        <FontAwesomeIcon className='icon' icon={faChevronUp} />
      </FloatingButton>
    </>
  );
}
