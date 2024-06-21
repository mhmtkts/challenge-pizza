import React from 'react';
import styled from 'styled-components';

const PageWrapper = styled.div`
  background-color: #ce2829; /* Arka plan rengi */
  width: 100vw;
  height: 100vh; /* Tüm ekranı kaplar */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

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

const CongratsWrapper = styled.div`
  text-align: center;
`;

const CongratsText = styled.div`
  font-family: "Roboto Condensed";
  font-size: 60px;
  font-style: normal;
  font-weight: 200;
  line-height: 1.0; 
  
`;

function Success() {
  return (
    <PageWrapper>
      <HeaderWrapper>
        <HeaderText>
          Teknolojik <ItalicLetter>Y</ItalicLetter>emekler
        </HeaderText>
      </HeaderWrapper>
      <CongratsWrapper>
        <CongratsText>TEBRİKLER!</CongratsText>
        <CongratsText>SİPARİŞİNİZ ALINDI!</CongratsText>
      </CongratsWrapper>
    </PageWrapper>
  );
}

export default Success;
