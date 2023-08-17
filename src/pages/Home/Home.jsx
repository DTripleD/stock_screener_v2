import { useState } from 'react';
import { useEffect } from 'react';
import { newsData } from 'services/dataFetching';
import {
  Item,
  List,
  Section,
  TitleLink,
  Conteiner,
  Text,
  PageName,
  Error,
} from './Home.styled';

const Home = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    newsData().then(data => setNews(data?.results));
  }, []);

  return (
    <Section>
      <Conteiner>
        <PageName>Last News</PageName>
        {news ? (
          <List>
            {news.map(n => (
              <Item key={n.id}>
                <Text>{n.published_utc}</Text>
                <TitleLink
                  href={n.article_url}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {n.description}
                </TitleLink>
              </Item>
            ))}
          </List>
        ) : (
          <Error>
            Sorry, we're currently using the free plan for market data, so
            requests per minute are limited. Sorry for the inconvenience and try
            again in a minute
          </Error>
        )}
      </Conteiner>
    </Section>
  );
};

export default Home;
