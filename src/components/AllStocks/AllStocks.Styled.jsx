import styled from '@emotion/styled';

export const Table = styled.table`
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`;

export const HeadTr = styled.tr`
  background-color: #009879;
  color: #ffffff;
  text-align: left;
`;

export const BodyTr = styled.tr`
  border-bottom: 1px solid #dddddd;

  &:nth-of-type(even) {
    background-color: #f3f3f3;
  }

  &:last-of-type {
    border-bottom: 2px solid #009879;
  }

  &:hover,
  &:focus {
    font-weight: bold;
    color: #009879;
  }
`;

export const TableHead = styled.th`
  padding: 12px 15px;
`;

export const TableData = styled.td`
  padding: 12px 15px;
`;


//////

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  gap: 16px;
`;

export const CardWrapper = styled.div`
  border: 1px solid black;
  border-radius: 4px;

  > a {
    text-decoration: none;
  }
`;

export const ProductName = styled.h3`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
`;