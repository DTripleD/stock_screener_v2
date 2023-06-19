import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AppWrapper = styled.div`
  height: '100vh';
  display: 'flex';
  justify-content: 'center';
  align-items: 'center';
  font-size: 40;
  color: '#010101';
`;

export const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;
