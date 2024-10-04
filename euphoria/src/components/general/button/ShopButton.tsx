import React from 'react'
import styled from 'styled-components'

function ShopButton() {
  return (
    <ButtonContainer>
        <Button>Shop Now</Button>
    </ButtonContainer>
  )
}

export default ShopButton;

const ButtonContainer = styled.div`

`;
const Button = styled.button`
    border: none;
    padding: 14px 50px;
    font-size: 14px;
    border-radius: 4px;
    color: #3c4242;
    font-weight: 600;
    cursor: pointer;
`;