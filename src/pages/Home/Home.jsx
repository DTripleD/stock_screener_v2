import { useState } from 'react';
import { useEffect } from 'react';
import { newsData } from 'services/dataFetching';
import { Item, List, Section, TitleLink, Conteiner } from './Home.styled';

const Home = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    newsData().then(data => setNews(data.results));
  }, []);

  return (
    <Section>
      <Conteiner>
        <h3>Last News</h3>
        <List>
          {news.map(n => (
            <Item key={n.id}>
              <p>{n.published_utc}</p>
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
      </Conteiner>
    </Section>
  );
};

export default Home;
