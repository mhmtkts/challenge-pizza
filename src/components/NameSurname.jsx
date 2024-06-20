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

const NameSurname = ({ fullName, handleFullNameChange }) => {
  return (
    <NameSurnameWrapper>
      Ad Soyad
      <Input value={fullName} onChange={handleFullNameChange} />
    </NameSurnameWrapper>
  );
};

export default NameSurname;
