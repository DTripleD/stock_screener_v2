import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { stockData, stockNews } from 'services/dataFetching';

const StockDetails = () => {
  const { stockId } = useParams();

  const [stock, setStock] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    stockData(stockId).then(data => setStock(data?.results));
    stockNews(stockId).then(data => setNews(data?.results));
  }, [stockId]);

  console.log(stock);

  return (
    <main>
      {news && stock ? (
        <>
          <img src="https://via.placeholder.com/960x240" alt="" />
          <div>
            <h1>{stock?.name}</h1>
            <h2>Ticker: {stockId}</h2>
            <p>{stock.sic_description}</p>
            <h3>Description</h3>
            <p>{stock.description}</p>
            <h3>Homepage</h3>
            <a href={stock.homepage_url}>{stock.homepage_url}</a>
            <h3>market_cap</h3>
            <p>{stock.market_cap}B</p>
            <h3>list_date</h3>
            <p>{stock.list_date}</p>
            <h3>market</h3>
            <p>{stock.market}</p>
            <h3>phone_number</h3>
            <p>{stock.phone_number}</p>
            <h3>total_employees</h3>
            <p>{stock.total_employees}</p>
            <h3>weighted_shares_outstanding</h3>
            <p>{stock.weighted_shares_outstanding}</p>
          </div>
          <div>
            <h2>News:</h2>
            <ul>
              {news.map(item => (
                <li key={item.id}>
                  <a href={item.article_url}>{item.title}</a>
                  <p>{item.published_utc}</p>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <h1>
          Sorry, we're currently using the free plan for market data, so
          requests per minute are limited. Sorry for the inconvenience and try
          again in a minute
        </h1>
      )}
    </main>
  );
};

export default StockDetails;
