import React from 'react';
import styled from 'styled-components';

const DescriptionWrapper = styled.p`
  font-weight: normal;
  width: 100%;
  font-family: "Barlow";
  box-sizing: border-box;
  margin-bottom: 3rem;
`;

const Description = () => {
  return (
    <DescriptionWrapper>
      Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
    </DescriptionWrapper>
  );
};

export default Description;
