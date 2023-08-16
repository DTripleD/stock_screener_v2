import styled from '@emotion/styled';

export const Item = styled.li`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const TitleLink = styled.a`
  color: black;
  /* text-decoration: none; */
`;

export const Section = styled.section`
  padding-top: 94px;
  padding-bottom: 94px;
`;

export const Conteiner = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
`;
