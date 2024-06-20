import React from 'react';
import styled from 'styled-components';

const PizzaNameWrapper = styled.h2`
  font-size: large;
  font-family: "Roboto Condensed";
  text-align: center;
  margin-top: 12rem;
`;

const PizzaName = () => {
  return <PizzaNameWrapper>Position Absolute Acı Pizza</PizzaNameWrapper>;
};

export default PizzaName;
