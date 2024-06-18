import React from "react";
import { FormGroup, Input, Label } from "reactstrap";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  position: fixed;
  margin-top: -6rem;
  flex-direction: column;
  margin-right: 15%;
  margin-left: 33%;
  text-align: justify;
`;

const PizzaName = styled.h2`
  font-size: large;
  font-family: "Roboto Condensed";
  text-align: center;
`;

const PriceContainer = styled.div`
  font-family: "Barlow";
  display: flex;
  justify-content: space-between;
  width: 40%;

  box-sizing: border-box;
`;

const Price = styled.h2`
  font-weight: 600;
  font-weight: bolder;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
`;

const RatingValue = styled.p`
  font-weight: normal;
  margin-right: 4rem;
`;

const RatingCount = styled.p`
  font-weight: normal;
`;

const Description = styled.p`
  font-weight: normal;
  width: 40%;
  font-family: "Barlow";
  box-sizing: border-box;
`;

const SizeFormGroup = styled(FormGroup)`
  font-weight: normal;
  width: 40%;
  font-family: "Barlow";
  box-sizing: border-box;
`;

const Legend = styled.legend`
  font-size: large;
  font-weight: bold;
  font-family: "Roboto Condensed";
  margin-bottom: 0.5rem;

`;

function ProductInfo() {
  return (
    <>
      <Container>
        <PizzaName>Position Absolute Acı Pizza</PizzaName>
        <PriceContainer>
          <Price>85.50₺</Price>
          <RatingContainer>
            <RatingValue>4.9</RatingValue>
            <RatingCount>(200)</RatingCount>
          </RatingContainer>
        </PriceContainer>
        <Description>
          Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
          diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
          ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
          lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
        </Description>
        <SizeFormGroup>
        <Legend>Boyut Seç <span style={{ color: 'red' }}>*</span></Legend>
          <FormGroup check>
            <Input name="radio1" type="radio" /> <Label check>Küçük </Label>
          </FormGroup>
          <FormGroup check>
            <Input name="radio1" type="radio" /> <Label check>Orta </Label>
          </FormGroup>
          <FormGroup check>
            <Input name="radio1" type="radio" /> <Label check>Büyük</Label>
          </FormGroup>
        </SizeFormGroup>
      </Container>
    </>
  );
}

export default ProductInfo;
