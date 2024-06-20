import React, { useState } from "react";
import { Button, ButtonGroup, Form, FormGroup, Input, Label } from "reactstrap";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

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
    width: 94%;
    resize: none;
    padding: 1rem;
    font-family: "Barlow";
    font-size: 16px;
    border-radius: 5%;
  }
`;

const Divider = styled.hr`
  width: 100%;
  border: 0;
  border-top: 2px solid gray;
  margin: 2rem 0;
`;

const CounterContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CounterButton = styled(Button)`
  background-color: #fdc913;
  color: black;
  font-size: 1.5rem;
  width: 2rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  font-family: "Barlow";

  &:hover {
    background-color: #e0b313;
  }
`;

const CounterInput = styled(Input)`
  width: 3rem;
  height: 4rem;
  font-size: large;
  font-family: "Barlow";
  text-align: center;
  border: 2px solid #faf7f2;
`;

const Summary = styled.div`
  width: 20rem;
  height: 10rem;
  border: 1px solid gray;
  border-radius: 5%;
  background-color: transparent;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  font-family: "Barlow";
`;

const GeneralSummary = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const OrderButton = styled(Button)`
  background-color: #fdc913;
  color: black;
  font-family: "Barlow";
  font-size: large;
  font-weight: bold;
  width: 20rem;
  margin-top: 0;

  &:hover {
    background-color: #e0b313;
  }
`;

const Total = styled.span`
  color: #ce2829;
  font-weight: bold;
`;

const Choices = styled.span`
  color: #5f5f5f;
  font-weight: bold;
`;
const OrderButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 6rem;
`;

function ProductInfo() {
  const [selectedItem, setSelectedItem] = useState("");
  const [fullName, setFullName] = useState("");
  const [piece, setPiece] = useState(1);
  const [additionalPrice, setAdditionalPrice] = useState(0);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const history = useHistory();

  const pizzaPrice = 85.5;
  const ingredientPrice = 5.0;

  const handleSelect = (event) => {
    setSelectedItem(event.target.value);
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const incrementPiece = () => {
    setPiece(piece + 1);
  };

  const decrementPiece = () => {
    if (piece > 1) {
      setPiece(piece - 1);
    }
  };

  const handleIngredientChange = (event) => {
    const ingredient = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      if (selectedIngredients.length < 10) {
        setSelectedIngredients([...selectedIngredients, ingredient]);
        setAdditionalPrice(additionalPrice + ingredientPrice);
      }
    } else {
      setSelectedIngredients(
        selectedIngredients.filter((item) => item !== ingredient)
      );
      setAdditionalPrice(additionalPrice - ingredientPrice);
    }
  };

  const handleOrderClick = () => {
    if (selectedIngredients.length >= 4 && selectedIngredients.length <= 10) {
      history.push("/success");
    }
  };

  const totalPrice = pizzaPrice * piece + additionalPrice;

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
        <p>En az 4, en fazla 10 malzeme seçebilirsiniz.5₺ </p>
        <CheckboxContainer>
          {[
            "Pepperoni",
            "Sosis",
            "Kanada Jambonu",
            "Tavuk Izgara",
            "Soğan",
            "Domates",
            "Mısır",
            "Sucuk",
            "Jalapeno",
            "Sarımsak",
            "Biber",
            "Mantar",
            "Ananas",
            "Kabak",
          ].map((ingredient, index) => (
            <CheckboxGroup check key={index}>
              <Input
                type="checkbox"
                value={ingredient}
                onChange={handleIngredientChange}
                disabled={
                  !selectedIngredients.includes(ingredient) &&
                  selectedIngredients.length >= 10
                }
              />
              <Label check>{ingredient}</Label>
            </CheckboxGroup>
          ))}
        </CheckboxContainer>
      </AdditionalMaterial>

      <OrderNoteContainer>
        <h3>Sipariş Notu</h3>
        <OrderFormGroup>
          <textarea
            name="text"
            type="textarea"
            value={fullName}
            onChange={handleFullNameChange}
            placeholder="Siparişine eklemek istediğin bir not var mı?"
            rows="6"
          />
        </OrderFormGroup>
      </OrderNoteContainer>
      <Divider />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <CounterContainer>
          <CounterButton onClick={decrementPiece}>-</CounterButton>
          <CounterInput
            type="text"
            value={piece}
            readOnly
            style={{ textAlign: "center" }}
          />
          <CounterButton onClick={incrementPiece}>+</CounterButton>
        </CounterContainer>
        <Summary>
          <GeneralSummary>
            <h3>Sipariş Toplamı</h3>
          </GeneralSummary>
          <GeneralSummary>
            <Choices>Seçimler</Choices>
            <Choices>{additionalPrice.toFixed(2)}₺</Choices>
          </GeneralSummary>
          <GeneralSummary>
            <Total>Toplam</Total>
            <Total>{totalPrice.toFixed(2)}₺</Total>
          </GeneralSummary>
        </Summary>
      </div>
      <OrderButtonContainer>
        <OrderButton
          onClick={handleOrderClick}
          disabled={
            selectedIngredients.length < 4 || selectedIngredients.length > 10
          }
        >
          SİPARİŞ VER
        </OrderButton>
      </OrderButtonContainer>
    </Container>
  );
}

export default ProductInfo;
