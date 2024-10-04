import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <>
        <WrapperHead>
            <Headers>
                <LogoContainer>
                    <LogoImg
                        src={require("../../assests/images/Logo.svg").default}
                        alt="logo"
                    />
                </LogoContainer>
                <Lists>
                    <List>Shop</List>
                    <List>Men</List>
                    <List>Women</List>
                    <List>Combos</List>
                    <List>Joggers</List>
                </Lists>
                <RightDiv>
                    <RightForm>
                        <RightSearch>
                            <RightContainer>
                                <RightImage
                                    src={require("../../assests/images/search.svg").default}
                                    alt="search"
                                />
                            </RightContainer>
                            <RightInput type="text" placeholder="Search"/>
                        </RightSearch>
                    </RightForm>
                    <RightIcon>
                        <IconImg
                            src={require("../../assests/images/wishlist.svg").default}
                            alt="wishlist"
                        />
                    </RightIcon>
                    <RightIcon>
                        <IconImg 
                            src={require("../../assests/images/account.svg").default}
                            alt="account"
                        />
                    </RightIcon>
                    <RightIcon>
                        <IconImg 
                            src={require("../../assests/images/cart.svg").default}
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
    max-width: 1780px;
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
`;
const IconImg = styled.img`
    display: block;
    width: 100%;
`;
