import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  background-color: #ce2829;
  color: white;
  padding: 50px 0;
  padding-bottom: 20px;
  text-align: center;
  font-size: 1.5em;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

const HeaderText = styled.h1`
  margin: 0;
  font-weight: 900;
  font-family: "Roboto Condensed";
  font-size: 45px;
`;
const ItalicLetter = styled.span`
  font-style: italic;
`;

const SubText = styled.div`
  bottom: 10px;
  text-align: center;
  padding-top: 4rem;
  font-family: "Barlow";
  font-size: 16px;
  margin-right: 24.5rem;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderText>
        Teknolojik <ItalicLetter>Y</ItalicLetter>emekler
      </HeaderText>
      <SubText>
        Anasayfa - <strong>Sipariş Oluştur</strong>
      </SubText>
    </HeaderWrapper>
  );
};

export default Header;
