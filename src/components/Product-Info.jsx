import React, { useState } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 40%;
  margin-top: 2rem;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;
  text-align: justify;
  padding: 1rem;
  box-sizing: border-box;
`;

const PizzaName = styled.h2`
  font-size: large;
  font-family: "Roboto Condensed";
  text-align: center;
  margin-top: 12rem;
`;

const PriceContainer = styled.div`
  font-family: "Barlow";
  display: flex;
  justify-content: space-between;
  width: 100%;
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
  margin-right: 5rem;
`;

const RatingCount = styled.p`
  font-weight: normal;
`;

const Description = styled.p`
  font-weight: normal;
  width: 100%;
  font-family: "Barlow";
  box-sizing: border-box;
  margin-bottom: 3rem;
`;

const SizeFormGroup = styled(FormGroup)`
  font-weight: normal;
  width: 100%;
  font-family: "Barlow";
  box-sizing: border-box;
`;

const StyledFormGroup = styled(FormGroup)`
  margin-bottom: 1rem;
`;

const Legend = styled.legend`
  font-size: large;
  font-weight: bold;
  font-family: "Roboto Condensed";
  margin-bottom: 1rem;
`;
const FirstChoice = styled.div`
  font-family: "Barlow";
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
`;
const DropdownContainer = styled.div`
  width: 35%;
  margin-left: 1rem;
`;

const AdditionalMaterial = styled.div`
  width: 100%;
  font-family: "Barlow";
  box-sizing: border-box;
`;
const CheckboxContainer = styled(Form)`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 1rem;
`;
const CheckboxGroup = styled(FormGroup)`
  flex-basis: calc(33.33% - 1rem);
  padding-bottom: 1rem;
  font-weight: bold;
`;
const OrderNoteContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: large;
  font-family: "Barlow";
  font-weight: bold;
`;
const OrderFormGroup = styled(FormGroup)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  textarea {
    margin-top: 1rem;
    width: 100%;
    resize: none;
    padding: 1rem;
    font-family: "Barlow";
    font-size: 16px;
  }
`;

function ProductInfo() {
  const [selectedItem, setSelectedItem] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSelect = (event) => {
    setSelectedItem(event.target.value);
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  return (
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
        pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer
        malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir
        fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş
        mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir
        yemektir. Küçük bir pizzaya bazen pizzetta denir.
      </Description>
      <FirstChoice>
        <SizeFormGroup>
          <Legend>
            Boyut Seç <span style={{ color: "red" }}>*</span>
          </Legend>
          <StyledFormGroup check>
            <Input name="radio1" type="radio" /> <Label check>Küçük</Label>
          </StyledFormGroup>
          <StyledFormGroup check>
            <Input name="radio1" type="radio" /> <Label check>Orta</Label>
          </StyledFormGroup>
          <StyledFormGroup check>
            <Input name="radio1" type="radio" /> <Label check>Büyük</Label>
          </StyledFormGroup>
        </SizeFormGroup>
        <DropdownContainer>
          <Legend>
            Hamur Seç <span style={{ color: "red" }}>*</span>
          </Legend>
          <select
            value={selectedItem}
            onChange={handleSelect}
            style={{ width: "100%", padding: "0.5rem" }}
          >
            <option style={{ fontWeight: "bold" }} value="" disabled hidden>
              Hamur Kalınlığı
            </option>
            <option style={{ fontWeight: "bold" }} value="İnce Hamur">
              İnce Hamur
            </option>
            <option style={{ fontWeight: "bold" }} value="Normal Hamur">
              Normal Hamur
            </option>
            <option style={{ fontWeight: "bold" }} value="Kalın Hamur">
              Kalın Hamur
            </option>
          </select>
        </DropdownContainer>
      </FirstChoice>

      <AdditionalMaterial>
        <h3>Ek Malzemeler</h3>
        <p>En az 4 en fazla 10 malzeme seçebilirsiniz.5₺</p>
        <CheckboxContainer>
          <CheckboxGroup check inline>
            <Input type="checkbox" />
            <Label check>Pepperoni</Label>
          </CheckboxGroup>
          <CheckboxGroup check inline>
            <Input type="checkbox" />
            <Label check>Sosis</Label>
          </CheckboxGroup>
          <CheckboxGroup check inline>
            <Input type="checkbox" />
            <Label check>Kanada Jambonu</Label>
          </CheckboxGroup>
          <CheckboxGroup check inline>
            <Input type="checkbox" />
            <Label check>Tavuk Izgara</Label>
          </CheckboxGroup>
          <CheckboxGroup check inline>
            <Input type="checkbox" />
            <Label check>Soğan</Label>
          </CheckboxGroup>
          <CheckboxGroup check inline>
            <Input type="checkbox" />
            <Label check>Domates</Label>
          </CheckboxGroup>
          <CheckboxGroup check inline>
            <Input type="checkbox" />
            <Label check>Mısır</Label>
          </CheckboxGroup>
          <CheckboxGroup check inline>
            <Input type="checkbox" />
            <Label check>Sucuk</Label>
          </CheckboxGroup>
          <CheckboxGroup check inline>
            <Input type="checkbox" />
            <Label check>Jalepeno</Label>
          </CheckboxGroup>
          <CheckboxGroup check inline>
            <Input type="checkbox" />
            <Label check>Sarımsak</Label>
          </CheckboxGroup>
          <CheckboxGroup check inline>
            <Input type="checkbox" />
            <Label check>Biber</Label>
          </CheckboxGroup>
          <CheckboxGroup check inline>
            <Input type="checkbox" />
            <Label check>Salam</Label>
          </CheckboxGroup>
          <CheckboxGroup check inline>
            <Input type="checkbox" />
            <Label check>Ananas</Label>
          </CheckboxGroup>
          <CheckboxGroup check inline>
            <Input type="checkbox" />
            <Label check>Kabak</Label>
          </CheckboxGroup>
        </CheckboxContainer>
      </AdditionalMaterial>
      <div>
        <Input
          style={{ fontFamily: "Barlow" }}
          placeholder="Ad Soyad"
          minLength={3}
          value={fullName}
          onChange={handleFullNameChange}
        />
      </div>
      <OrderNoteContainer>
        <OrderFormGroup>
          <Label for="exampleText">Sipariş Notu</Label>
          <Input
            placeholder="Siparişine eklemek istediğin bir not var mı?"
            id="exampleText"
            name="text"
            type="textarea"
          />
        </OrderFormGroup>
      </OrderNoteContainer>
    </Container>
  );
}

export default ProductInfo;
