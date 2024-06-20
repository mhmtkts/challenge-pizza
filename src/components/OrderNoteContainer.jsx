import React from 'react';
import { FormGroup } from 'reactstrap';
import styled from 'styled-components';

const OrderNoteWrapper = styled.div`
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

const OrderNoteContainer = () => {
  return (
    <OrderNoteWrapper>
      <h3>Sipariş Notu</h3>
      <OrderFormGroup>
        <textarea
          name="text"
          type="textarea"
          placeholder="Siparişine eklemek istediğin bir not var mı?"
          rows="6"
        />
      </OrderFormGroup>
    </OrderNoteWrapper>
  );
};

export default OrderNoteContainer;
