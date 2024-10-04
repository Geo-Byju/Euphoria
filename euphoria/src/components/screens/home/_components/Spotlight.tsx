import React from 'react'
import styled from 'styled-components';
import ShopButton from '../../../general/button/ShopButton.tsx';
import Image1 from '../../../../assests/images/bg-1.jpg';

function Spotlight() {
  return (
    <>
        <SpotlightWrap bgimage={Image1}>
            <SpotContainer>
                <SubHead>T-Shirt / Tops</SubHead>
                <MainHead>Summer Value Pack</MainHead>
                <SubPara>cool / colorful / comfy</SubPara>
                <ShopButton />
            </SpotContainer>
        </SpotlightWrap>
    </>
  )
}

export default Spotlight;

const SpotlightWrap = styled.div`
  background-image: url(${(props) => props.bgimage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  height: 88vh;
  padding-left: 230px;
`;

const SpotContainer = styled.div`
  max-width: 500px;
  text-align: left;
`;

const SubHead = styled.h4`
  font-size: 26px;
  font-weight: 400;
  color: #ffffff;
  margin: 15px 0;
`;

const MainHead = styled.h1`
  font-size: 64px;
  font-weight: 700;
  color: #ffffff;
  margin: 20px 0;
  line-height: 1.2;
  width: 80%;
`;

const SubPara = styled.h4`
  font-size: 28px;
  font-weight: 300;
  color: #ffffff;
  margin-bottom: 40px;
`;

