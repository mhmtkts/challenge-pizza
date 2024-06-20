import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import PizzaName from "./PizzaName";
import PriceContainer from "./PriceContainer";
import Description from "./Description";
import SizeSelection from "./SizeSelection";
import DoughSelection from "./DoughSelection";
import AdditionalMaterials from "./AdditionalMaterials";
import NameSurname from "./NameSurname";
import OrderNoteContainer from "./OrderNoteContainer";
import CounterContainer from "./CounterContainer";
import Summary from "./Summary";
import OrderButtonContainer from "./OrderButtonContainer";

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

const Divider = styled.hr`
  width: 100%;
  border: 0;
  border-top: 2px solid gray;
  margin: 2rem 0;
`;

function ProductInfo() {
  const [selectedItem, setSelectedItem] = useState("");
  const [fullName, setFullName] = useState("");
  const [piece, setPiece] = useState(1);
  const [additionalPrice, setAdditionalPrice] = useState(0);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [selectedSize, setSelectedSize] = useState("");
  const history = useHistory();

  const pizzaPrice = 85.5;
  const ingredientPrice = 5.0;

  const handleSelect = (event) => {
    setSelectedItem(event.target.value);
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
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

  const isOrderButtonDisabled =
    selectedIngredients.length < 4 ||
    selectedIngredients.length > 10 ||
    selectedSize === "" ||
    selectedItem === "" ||
    fullName.length < 3;

  return (
    <Container>
      <PizzaName />
      <PriceContainer />
      <Description />
      <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
        <SizeSelection handleSizeChange={handleSizeChange} />
        <DoughSelection selectedItem={selectedItem} handleSelect={handleSelect} />
      </div>
      <AdditionalMaterials
        selectedIngredients={selectedIngredients}
        handleIngredientChange={handleIngredientChange}
      />
      <NameSurname fullName={fullName} handleFullNameChange={handleFullNameChange} />
      <OrderNoteContainer />
      <Divider />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
        <CounterContainer piece={piece} incrementPiece={incrementPiece} decrementPiece={decrementPiece} />
        <Summary additionalPrice={additionalPrice} totalPrice={totalPrice} />
      </div>
      <OrderButtonContainer handleOrderClick={handleOrderClick} isOrderButtonDisabled={isOrderButtonDisabled} />
    </Container>
  );
}

export default ProductInfo;
