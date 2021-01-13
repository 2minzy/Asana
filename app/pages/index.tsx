import Link from 'next/link';
import styled from 'styled-components';
import showcase from '../images/showcase.jpg';
import sectionA from '../images/sectionA.jpg';
import sectionB from '../images/sectionB.jpg';
import sectionC from '../images/sectionC.jpg';

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

  & h1 {
    font-size: 2.6rem;
  }

  & p {
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
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  & * {
    z-index: 1;
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

  &:hover {
    opacity: 0.7;
    color: #947b50;
    border-color: #947b50;
  }
`;

const SectionContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  color: #fff;
  z-index: -1;

  &::before {
    content: '';
    position: absolute; /* If absolute is inside the parent, parent element should be relative */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(126, 124, 124, 0.5);
    z-index: 1;
  }
`;

const Section = styled.div`
  flex: 1;

  img {
    position: absolute;
    height: 100vh;
    max-width: 100%;
    object-fit: cover;
  }

  p {
    position: relative;
    top: 50%;
    padding: 0 40px;
    z-index: 5;
  }
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
      </Showcase>

      <SectionContainer>
        <Section>
          <img src={sectionA} alt='' />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            voluptatum ut magnam. Iste harum labore, incidunt, quidem iusto et
            odit necessitatibus nesciunt obcaecati voluptate optio asperiores
            aut facilis culpa nulla?
          </p>
        </Section>
        <Section>
          <img src={sectionB} alt='' />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
            eligendi excepturi, perferendis temporibus ipsa id ullam labore ea
            unde nam. Veritatis reprehenderit illum sapiente exercitationem
            laboriosam magnam, dicta quos debitis.
          </p>
        </Section>
        <Section>
          <img src={sectionC} alt='' />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ea nam
            ducimus debitis pariatur, illum aut necessitatibus tenetur
            perspiciatis corporis quo quisquam distinctio velit dicta ipsum
            nostrum dignissimos deleniti optio.
          </p>
        </Section>
      </SectionContainer>
      <Footer></Footer>
    </>
  );
}
