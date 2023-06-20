import Holidays from 'components/Holidays/Holidays';
import { AppWrapper, Button, Header, Input, StyledLink } from './App.styled';
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home/Home';
import AllStocks from 'components/AllStocks/AllStocks';
import { showStocks, stockData } from 'services/dataFetching';
import StockDetails from 'pages/StocksDetails/StocksDetails';
// import Stocks from 'components/Stocks/Stocks';

export const App = () => {
  const handleSubmit = event => {
    event.preventDefault();
    console.log();

    stockData(event.target.elements.ticker.value.toUpperCase())
      .then(console.log)
      .catch(console.log());
  };
  return (
    <AppWrapper>
      <Header>
        <div>
          <form onSubmit={handleSubmit}>
            <Input type="text" name="ticker" placeholder="Enter any stock" />
            <Button type="submit">Find</Button>
          </form>
        </div>
        <nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          {/* <StyledLink to="/news">News</StyledLink> */}
          {/* <StyledLink to="/topchange">Top change</StyledLink> */}
          {/* <StyledLink to="/high">High</StyledLink> */}
          <StyledLink to="/stocklist">Stock list</StyledLink>
          <StyledLink to="/holidays">Holidays</StyledLink>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stocklist" element={<AllStocks />} />
        <Route path="/stocklist/:stockId" element={<StockDetails />} />
        <Route path="/holidays" element={<Holidays />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </AppWrapper>
  );
};
