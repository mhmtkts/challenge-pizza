import React from 'react';
import styled from 'styled-components';

const SummaryWrapper = styled.div`
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

const Total = styled.span`
  color: #ce2829;
  font-weight: bold;
`;

const Choices = styled.span`
  color: #5f5f5f;
  font-weight: bold;
`;

const Summary = ({ additionalPrice, totalPrice }) => {
  return (
    <SummaryWrapper>
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
    </SummaryWrapper>
  );
};

export default Summary;
