import { useEffect, useState } from 'react';
import { marketHolidays } from '../../services/dataFetching';
import { BodyTr, HeadTr, Table, TableData, TableHead } from './Holidays.styled';
import { nanoid } from 'nanoid';

const Holidays = () => {
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    marketHolidays()
      .then(data => setHolidays(data))
      .catch(console.log);
  }, []);

  return (
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
  );
};

export default Holidays;
