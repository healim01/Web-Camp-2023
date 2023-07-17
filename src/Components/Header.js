import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f8f8;
`;

const FirstRow = styled.div`
  display: flex;
  width: 100%;
  background-color: white;
  padding: 20px;
  border-bottom: 2px solid lightgray;
`;

const Logo = styled.img`
  width: 150px;
  margin: 0px 20px;
`;

const ButtonDefault = styled.button`
  font-size: 14px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  width: 120px;
  display: flex;
  align-items: center;
`;

const Nav = styled.div`
  display: flex;
  width: 700px;
`;

const NavButton = styled(ButtonDefault)`
  background-color: #ffffff;
  margin-right: 10px;
  font-weight: ${(props) => props.bold};
  justify-content: center;
  width: 120px;
`;

const SearchInput = styled.input`
  padding: 8px 16px;
  font-size: 18px;
  background-color: #ffffff;
  border: 1px solid #d2d2d2;
  border-radius: 15px;
  width: 350px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <FirstRow>
        <Link to="/">
          <Logo src="https://theme.zdassets.com/theme_assets/730708/96e585971ebd23d9b51450a15f28eafab17b0c15.png" />
        </Link>
        <Nav>
          <NavButton>카테고리</NavButton>
          <NavButton>홈</NavButton>
          <NavButton>인기</NavButton>
          <NavButton>신규</NavButton>
          <NavButton>마감임박</NavButton>
          <NavButton bold={'bold'}>프로젝트 올리기</NavButton>
        </Nav>
      </FirstRow>
    </HeaderContainer>
  );
};

export default Header;
