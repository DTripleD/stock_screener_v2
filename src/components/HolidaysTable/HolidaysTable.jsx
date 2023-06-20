import { useEffect, useState } from 'react';
import { marketHolidays } from '../../services/dataFetching';
import {
  BodyTr,
  HeadTr,
  Table,
  TableData,
  TableHead,
} from './HolidaysTable.styled';
import { nanoid } from 'nanoid';

const Holidays = () => {
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    marketHolidays()
      .then(data => setHolidays(data))
      .catch(console.log);
  }, []);

  return (
    <>
      {holidays ? (
        <Table>
          <caption>Holidays</caption>
          <thead>
            <HeadTr>
              <TableHead>Date</TableHead>
              <TableHead>Exchange</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
            </HeadTr>
          </thead>
          <tbody>
            {holidays.map(holiday => (
              <BodyTr key={nanoid()}>
                <TableData>{holiday.date}</TableData>
                <TableData>{holiday.exchange}</TableData>
                <TableData>{holiday.name}</TableData>
                <TableData>{holiday.status}</TableData>
              </BodyTr>
            ))}
          </tbody>
        </Table>
      ) : (
        <h2>
          Sorry, you have reached the maximum number of requests per minute.
          Please try again in a minute
        </h2>
      )}
    </>
  );
};

export default Holidays;
