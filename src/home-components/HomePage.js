import React from 'react'
import styled from 'styled-components';
import './HomePage.css'
import Rightside from './Rightside';
import Leftside from './Leftside';
import Main from './Main';

function HomePage() {
    return (
        <Container>
            <Section>
                <h5>
                    <a>Hiring in a hurry? - </a>
                </h5>
                <p>Find talented pros in record time with Upwork and keep business moving.</p>
            </Section>
            <Layout>
                <Leftside />
                <Main />
                <Rightside />
            </Layout>
        </Container>
    )
}

const Container = styled.div`
  padding-top: 25px;
  max-width: 100%;
`;


const Section = styled.section`
  min-height: 50px;
  padding: 16px 0;
  text-align: center;
  text-decoration: underline;
  display: flex;
  justify-content: center;
  h5 {
    color: #0a66c2;
    font-size: 14px;
    a {
      font-weight: 700;
    }
  }
  p {
    font-size: 14px;
    color: #434649;
    font-weight: 600;
    margin-left: 5px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }
`;


const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 8fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  margin: 25px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;
export default HomePage