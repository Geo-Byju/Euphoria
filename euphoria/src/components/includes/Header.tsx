import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import '../../App.css';

const Header = () => {
  return (
    <>
        <WrapperHead className='wrapperhead'>
            <Headers>
                <LogoContainer>
                    <StyledNavLink to='/'>
                    <LogoImg
                        src={require("../../assets/images/Logo.svg").default}
                        alt="logo"
                    />
                    </StyledNavLink>
                </LogoContainer>
                <Lists>
                    <List><StyledNavLink to='/'>Shop</StyledNavLink></List>
                    <List><StyledNavLink to='/men'>Men</StyledNavLink></List>
                    <List><StyledNavLink to='/women'>Women</StyledNavLink></List>
                    <List>Combos</List>
                    <List>Joggers</List>
                </Lists>
                <RightDiv>
                    <RightForm>
                        <RightSearch>
                            <RightContainer>
                                <RightImage
                                    src={require("../../assets/images/search.svg").default}
                                    alt="search"
                                />
                            </RightContainer>
                            <RightInput type="text" placeholder="Search"/>
                        </RightSearch>
                    </RightForm>
                    <RightIcon>
                        <IconImg
                            src={require("../../assets/images/wishlist.svg").default}
                            alt="wishlist"
                        />
                    </RightIcon>
                    <RightIcon>
                        <IconImg 
                            src={require("../../assets/images/account.svg").default}
                            alt="account"
                        />
                    </RightIcon>
                    <RightIcon>
                        <IconImg 
                            src={require("../../assets/images/cart.svg").default}
                            alt="cart"
                        />
                    </RightIcon>
                </RightDiv>
            </Headers>
        </WrapperHead>
    </>
  )
}

export default Header;

const WrapperHead = styled.div`
    max-width: 1680px;
    width: 90%;
    margin: 0 auto;
`;

const Headers = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
`;

const LogoContainer = styled.div`
    width: 97px;
    cursor: pointer;
`;

const LogoImg = styled.img`
    display: block;
    width: 100%;
`;

const Lists = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 30%;
    padding: 0;
`;

const List = styled.li`
    cursor: pointer;
`;

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: black;
    &.active {
        font-weight: bold;
        background-color: white;
    }
`;

const RightDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 30%;
    align-items: center;
`;

const RightForm = styled.div``;

const RightSearch = styled.div`
  display: flex;
  align-items: center;
  background-color: #f8f8f8;
  border-radius: 6px;
  padding: 14px;
  width: 200px;
  gap: 10px;
`;

const RightContainer = styled.div`
    width: 14px;
`;

const RightImage = styled.img`
    width: 100%;
    display: block;
`;

const RightInput = styled.input`
    border: 0;
    background: #f8f8f8;
    outline: none;
`;

const RightIcon = styled.div`
    background-color: #f8f8f8;
    border-radius: 6px;
    padding: 14px;
    cursor: pointer;
`;

const IconImg = styled.img`
    display: block;
    width: 100%;
`;
