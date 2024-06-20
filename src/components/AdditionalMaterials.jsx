import React from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import styled from 'styled-components';

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

const AdditionalMaterials = ({ selectedIngredients, handleIngredientChange }) => {
  const ingredients = [
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
  ];

  return (
    <AdditionalMaterial>
      <h3>Ek Malzemeler</h3>
      <p>En az 4, en fazla 10 malzeme seçebilirsiniz. 5₺ </p>
      <CheckboxContainer>
        {ingredients.map((ingredient, index) => (
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
  );
};

export default AdditionalMaterials;
