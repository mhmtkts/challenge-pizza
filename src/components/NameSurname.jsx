import React from 'react';
import { Input } from 'reactstrap';
import styled from 'styled-components';

const NameSurnameWrapper = styled.div`
  font-family: "Barlow";
  font-size: large;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;
const Label = styled.label`
  display: inline;
`;


const NameSurname = ({ fullName, handleFullNameChange }) => {
  return (
    <NameSurnameWrapper>
      <Label>Ad Soyad <span style={{ color: 'red' }}>*</span></Label>
      <Input data-cy="input-name" value={fullName} onChange={handleFullNameChange} />
    </NameSurnameWrapper>
  );
};

export default NameSurname;
