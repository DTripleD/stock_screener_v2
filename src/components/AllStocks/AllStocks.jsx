import { useEffect, useState } from 'react';
import { allStocks } from 'services/dataFetching';
import nasdaq from '../../images/nasdaq.jpg';

import {
  BodyTr,
  Stock,
  Container,
  HeadTr,
  ProductName,
  Table,
  TableData,
  TableHead,
  StockList,
} from './AllStocks.Styled';
import { nanoid } from '@reduxjs/toolkit';
import { Link } from 'react-router-dom';

const AllStocks = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    allStocks()
      .then(data => setStocks(data?.results))
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
    <>
      <div>
        <p>Sort by:</p>
        <select name="select">
          <option value="value1">Значение 1</option>
          <option value="value2" selected>
            Значение 2
          </option>
          <option value="value3">Значение 3</option>
        </select>
      </div>
      {stocks ? (
        <StockList>
          {stocks.map(stock => (
            <Stock key={stock.ticker}>
              <Link to={`${stock.ticker}`}>
                <img src={nasdaq} alt="" height="100" width="200" />
                <ProductName>{stock.ticker}</ProductName>
              </Link>
            </Stock>
          ))}
        </StockList>
      ) : (
        <h2>
          Sorry, we're currently using the free plan for market data, so
          requests per minute are limited. Sorry for the inconvenience and try
          again in a minute
        </h2>
      )}
    </>
  );
};

export default AllStocks;
