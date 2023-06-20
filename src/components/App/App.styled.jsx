import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AppWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
  justify-content: space-evenly;

  > nav {
    display: flex;
    align-items: center;
  }
`;

export const Input = styled.input`
  margin-right: 10px;
`;

export const Button = styled.button`
  position: relative;
  background-color: #4caf50;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  color: #ffffff;
  padding: 8px 16px;
  /* width: 200px; */
  text-align: center;
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
`;
