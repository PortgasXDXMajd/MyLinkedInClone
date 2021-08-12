import React from 'react'
import styled from 'styled-components';
import './Header.css'

function Header() {
    return (
        <Container>
            <Content>
                <a href="/home"><img src="/images/home-logo.svg" alt="homeLogo"/></a>
                <Search>
                    <img src="/images/search-icon.svg" alt="searchIcon"/>
                    <input type="text" placeholder="Search"/>
                </Search>
                <Nav>
          <NavListWrap>
            <NavList className="active">
                <a href="/home">
                    <img src="/images/nav-home.svg" alt="" />
                    <span>Home</span>
                </a>
            </NavList>

            <NavList>
                <a href="/home">
                    <img src="/images/nav-network.svg" alt="" />
                    <span>My Network</span>
                </a>
            </NavList>

            <NavList>
                <a href="/home">
                    <img src="/images/nav-jobs.svg" alt="" />
                    <span>Jobs</span>
                </a>
            </NavList>

            <NavList>
                <a href="/home">
                    <img src="/images/nav-messaging.svg" alt="" />
                    <span>Messaging</span>
                </a>
            </NavList>

            <NavList>
                <a href="/home">
                    <img src="/images/nav-notifications.svg" alt="" />
                    <span>Notifications</span>
                </a>
            </NavList>
            <User>
                <a href="/home">
                    <img src="/images/user.svg" alt="" />
                    <span>Me</span>
                    <img src="/images/down-icon.svg" alt="" />
                </a>

                <SignOut>
                    <a href="/login">Sign Out</a>
                </SignOut>
            </User>

            <Work>
                <a href="/login">
                    <img src="/images/nav-work.svg" alt="" />
                    <span>
                    Work
                    <img src="/images/down-icon.svg" alt="" />
                    </span>
                </a>
            </Work>
          </NavListWrap>
        </Nav>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    background-color: white;
    border: 1px solid rgba(0,0,0,0.08);
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 5px 24px;
    z-index: 100;
    left: 0;
    top: 0;
    right: 0;

`;

const Content = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1128px;
    min-height: 100%; 
`;

const Search = styled.div`
    opacity: 1;
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: start;
    padding: 0px 10px;
    position: relative;
    margin-left: 10px;
    input{
        border:none;
        box-shadow: none;
        background-color: #eef3f8;
        color: rgba(0,0,0,0.9);
        border-radius: 2px;
        padding: 0 8px 0 40px;
        margin: 0 5px;
        height:34px;
        font-size: 14px;
        font-weight: 400;
        width: 218px;
        line-height: 2;
        outline-color:#dce6f1;
        vertical-align: text-top;
    }
    img{
        width: 25px;        
        position: absolute;
        z-index: 1;
        top: 5px;
        left: 20px;
        pointer-events: none;
        
    }
`;


const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`;

const NavList = styled.li`
  display: flex;
  align-items: center;
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    span {
      color: rgba(0, 0, 0, 0.6);
      transition: all 0.3s;
      display: flex;
      align-items: center;
    }
    @media (max-width: 768px) {
      min-width: 70px;
    }
  }
  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

const SignOut = styled.div`
  position: absolute;
  top: 45px;
  background: white;
  border-radius: 0 0 5px 5px;
  width: 100px;
  height: 40px;
  font-size: 16px;
  transition-duration: 167ms;
  text-align: center;
  display: none;
  a{
      color:#303030;
  }
`;

const User = styled(NavList)`
  a > svg {
    width: 24px;
    border-radius: 50%;
  }
  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
  span {
    display: flex;
    align-items: center;
  }
  &:hover {
    ${SignOut} {
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
`;

const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`;
export default Header;
