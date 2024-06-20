import React from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  width: 35%;
  margin-left: 1rem;
`;

const Legend = styled.legend`
  font-size: large;
  font-weight: bold;
  font-family: "Roboto Condensed";
  margin-bottom: 1rem;
`;

const DoughSelection = ({ selectedItem, handleSelect }) => {
  return (
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
  );
};

export default DoughSelection;
