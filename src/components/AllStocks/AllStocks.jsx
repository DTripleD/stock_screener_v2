import { useEffect, useState } from 'react';
import { allStocks } from 'services/dataFetching';
import {
  BodyTr,
  CardWrapper,
  Container,
  HeadTr,
  ProductName,
  Table,
  TableData,
  TableHead,
} from './AllStocks.Styled';
import { nanoid } from '@reduxjs/toolkit';
import { Link } from 'react-router-dom';

const AllStocks = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    allStocks()
      .then(data => setStocks(data.results))
      .catch(console.log);
  }, []);

  return (
    // <Table>
    //   <caption>Stocks</caption>
    //   <thead>
    //     <HeadTr>
    //       <TableHead>Ticker</TableHead>
    //       <TableHead>Company</TableHead>
    //       <TableHead>Country</TableHead>
    //       <TableHead>Market</TableHead>
    //     </HeadTr>
    //   </thead>
    //   <tbody>
    //     {stocks.map(stock => (
    //       <BodyTr key={nanoid()}>
    //         <TableData>{stock.ticker}</TableData>
    //         <TableData>{stock.name}</TableData>
    //         <TableData>{stock.locale.toUpperCase()}</TableData>
    //         <TableData>{stock.market}</TableData>
    //       </BodyTr>
    //     ))}
    //   </tbody>
    // </Table>
    <Container>
      {stocks.map(stock => (
        <CardWrapper key={stock.ticker}>
          <Link to={`${stock.ticker}`}>
            <img src="https://via.placeholder.com/200x100" alt="" />
            <ProductName>{stock.ticker}</ProductName>
          </Link>
        </CardWrapper>
      ))}
    </Container>
  );
};

export default AllStocks;
