import React from 'react'
import styled from 'styled-components'

const Explore = () => {
    const exploreProduct = [
        {
            id: 1,
            type: 'Low Price',
            name: 'High Coziness',
            img: require('../../../../assets/images/bg-2.jpg'),
        },
        {
            id: 2,
            type: 'Beyoung Presents',
            name: 'Breezy Summer Style',
            img: require('../../../../assets/images/bg-3.jpg'),
        },


    ]
  return (
    <>
        <Wrapper>
            <MainSection>
                {exploreProduct.map((product) => (
                    <Container
                        key={product.id}
                        style={{
                            backgroundImage: `url(${product.img})`,
                        }}
                    >
                        <ItemContainer>
                            <ItemText>{product.type}</ItemText>
                            <ItemName>{product.name}</ItemName>
                            <ItemOffer>UPTO 50% OFF</ItemOffer>
                            <ButtonContainer>
                                <ItemButton>Explore Items</ItemButton>
                            </ButtonContainer>
                        </ItemContainer>
                    </Container>
                ))}
            </MainSection>
        </Wrapper>
    </>
  )
}

export default Explore;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px 0 0px 0;
`

const MainSection = styled.div`
  display: flex;
  gap: 30px;
  justify-content: space-between;
  width: 90%;
  max-width: 1400px;
`

const Container = styled.div`
  background-size: cover;
  background-position: center;
  border-radius: 16px;
  padding: 40px;
  width: 100%;
  min-height: 280px;
  display: flex;
  align-items: flex-end;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.4);
  position: relative;

  &:nth-child(1) {
    background-color: #fdd835;
  }

  &:nth-child(2) {
    background-color: #9575cd; 
  }
`

const ItemContainer = styled.div`
  color: #fff;
  padding: 20px;
  background: rgba(0, 0, 0, 0.2); 
  border-radius: 10px;
  width: 100%;
`

const ItemText = styled.h6`
  font-size: 14px;
  font-weight: 400;
  margin: 0;
`

const ItemName = styled.h4`
  font-size: 24px;
  font-weight: 700;
  margin: 10px 0;
`

const ItemOffer = styled.span`
  display: block;
  font-size: 16px;
  margin-bottom: 20px;
`

const ButtonContainer = styled.div`
  margin-top: 10px;
`

const ItemButton = styled.button`
  padding: 10px 20px;
  background-color: #fff;
  color: #000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`