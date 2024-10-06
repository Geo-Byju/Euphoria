import React from 'react';
import styled from 'styled-components';
import data from '../../../helpers/data.json';

const NewArrival = () => {
  const newArrivals = data.products?.Newarrival;

  return (
    <SectionWrapper>
      <ArrivalContainer>
        <HeaderContainer>
          <SideIndicator />
          <Title>New Arrival</Title>
        </HeaderContainer>

        <ProductGrid>
          {newArrivals.map((item) => {
            const imageSrc = require(`../../../../${item.image}`);
            return (
              <ProductCard key={item.id}>
                <ImageWrapper>
                  <ProductImage src={imageSrc} alt={item.category} />
                </ImageWrapper>
                <ProductName>{item.category}</ProductName>
              </ProductCard>
            );
          })}
        </ProductGrid>
      </ArrivalContainer>
    </SectionWrapper>
  );
}

export default NewArrival;

const SectionWrapper = styled.section`
  padding: 60px 20px;
  background-color: #fff;
  display: flex;
  justify-content: center;
`;

const ArrivalContainer = styled.div`
  max-width: 1780px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
`;

const SideIndicator = styled.div`
  width: 4px;
  height: 30px;
  background-color: #7d40ff;
  margin-right: 18px;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #333;
`;

const ProductGrid = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const ProductCard = styled.div`
  text-align: center;
  width: 23%; /* This allows 4 cards to fit within the wider 1780px grid */
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const ImageWrapper = styled.div`
    width: 100%;
    height: 90%;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 15px;
`;

const ProductImage = styled.img`
  width: 100%;
  display: block;
  height: 100%;
  object-fit: cover;
`;

const ProductName = styled.p`
  font-size: 18px;
  font-weight: 500;
  text-align: left;
  color: #555;
`;
