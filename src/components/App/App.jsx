import Holidays from 'components/HolidaysTable/HolidaysTable';
import {
  AppWrapper,
  Button,
  Conteiner,
  Header,
  Input,
  StyledLink,
} from './App.styled';
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home/Home';
import AllStocks from 'components/AllStocks/AllStocks';
import { showStocks, stockData } from 'services/dataFetching';
import StockDetails from 'pages/StocksDetails/StocksDetails';
// import Stocks from 'components/Stocks/Stocks';
import logo from '../../images/logo.png';

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
          <img src={logo} alt="logo" height="50" width="50" />
          <h3>TripleDTradingCo</h3>
        </div>
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

      <Conteiner>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stocklist" element={<AllStocks />} />
          <Route path="/stocklist/:stockId" element={<StockDetails />} />
          <Route path="/holidays" element={<Holidays />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Conteiner>
    </AppWrapper>
  );
};
