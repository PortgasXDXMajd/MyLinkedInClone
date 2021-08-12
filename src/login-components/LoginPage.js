import React from 'react'
import './LoginPage.css'
import styled from 'styled-components';

function LoginPage() {
    return (
        <Container>
            <Nav>
                <a href='/'>
                    <img src='/images/login-logo.svg' alt='loginLogo'/>
                </a>
                <div>
                    <button className="joinButton">Join now</button>
                    <button className="loginButton">Sign in</button>
                </div>
            </Nav>
            <Section>
                <Hero>
                   <h1>Welcome to your Professional Community</h1>
                   <img src='/images/login-hero.svg' alt='loginHero' />
                </Hero>
                <MyForm>
                    <Form>
                        <Google>
                            <img src="/images/google.svg" alt = "googleLogo"/>
                            <p>Sign in using Google</p>
                        </Google>
                    </Form>
                </MyForm>
            </Section>
        </Container>
    )
}

const Container = styled.div`
    padding:0;
`;

const Nav = styled.nav`
    max-width: 1128px;
    margin: auto;
    padding: 12px 0px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    flex-wrap: nowrap;

    & > a{
        width: 134px;
        height: 34px;
        @media(max-width: 768px){
            padding: 0px 5px;
        }
    }
`;

const Section = styled.section`
    display: flex;
    align-content: start;
    min-height: 700px;
    padding-top: 40px;
    padding-bottom: 138px;
    flex-wrap: wrap;
    width:100%;
    max-width: 1128px;
    align-items: center;
    margin:auto;
    

    @media(max-width: 768px){
        margin:auto;
        min-height: 0px;
    }
`;

const Hero = styled.div`
    width: 100%;
    h1{
        padding-bottom: 0;
        width: 55%;
        font-size: 56px;
        color: #2977c9;
        font-weight: 200;
        line-height: 70px;
        transition: all 0.3s;
        @media(max-width : 768px){
            text-align: center;
            width: 100%;
            font-size: 20px;
            line-height: 2;
        }
    }

    img{
        z-index: 1;
        width: 700px;
        height: 670px;
        position: absolute;
        bottom: 2px;
        right: 2px;
        transition: all 0.3s;
        @media(max-width: 768px){
            top: 230px;
            width: initial;
            height: initial;
            position: initial;
            margin-top: 25px;
        }


    }

`;

const MyForm = styled.div`
    width: 100%;
    display: flex;
    transition: all 0.3s;
    @media (max-width: 768px) {
        justify-content: center;
    }
`;
const Form = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin-top: 100px;
    width: 408px;
    @media(max-width: 768px){
        margin-top: 50px;
    }
`;

const Google = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    padding:5px;
    width: 100%;
    height: 56px;
    border-radius: 50px;
    border: 2px solid lightgrey ;
    transition-duration: 167ms;

    p{
        font-size: 20px;
        font-weight: 600;
        margin: 0 0 0 10px;
        color: rgba(0,0,0,0.5)
    }

    &:hover{
        background-color: rgba(207,207,207,0.5);
        border: 2px solid rgba(0,0,0,0.9) ;
        p{
            color: rgba(0,0,0,0.9);
        }
    }
    
`;

export default LoginPage
