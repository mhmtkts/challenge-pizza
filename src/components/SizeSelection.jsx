import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import styled from 'styled-components';

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

const SizeSelection = ({ handleSizeChange }) => {
  return (
    <SizeFormGroup>
      <Legend>
        Boyut Seç <span style={{ color: "red" }}>*</span>
      </Legend>
      <StyledFormGroup check>
        <Input name="radio1" type="radio" value="Küçük" onChange={handleSizeChange} />{" "}
        <Label check>Küçük</Label>
      </StyledFormGroup>
      <StyledFormGroup check>
        <Input name="radio1" type="radio" value="Orta" onChange={handleSizeChange} />{" "}
        <Label check>Orta</Label>
      </StyledFormGroup>
      <StyledFormGroup check>
        <Input name="radio1" type="radio" value="Büyük" onChange={handleSizeChange} />{" "}
        <Label check>Büyük</Label>
      </StyledFormGroup>
    </SizeFormGroup>
  );
};

export default SizeSelection;
