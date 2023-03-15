import React from 'react';
import styled from 'styled-components';
import bird from '../assets/logoo.png';

const NavbarLogo = () => {
  return (
    <LogoWrapper>
      <LogoImg src={bird} alt='bird' />
      {/* <LogoTitle>ילדים בתנועה</LogoTitle> */}
    </LogoWrapper>
  );
};

export default NavbarLogo;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: red; */
`;
const LogoImg = styled.img`
  width: 90px;
`;
const LogoTitle = styled.p`
  letter-spacing: 3px;
  font-weight: 500;
  font-size: 18px;
`;
