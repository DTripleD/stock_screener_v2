import { useState } from 'react';
import { marketHolidays } from '../../services/dataFetching';

// const calendar = document.querySelector(".calendar-list");
// const holydays = document.querySelector('.calendar-table');

// function markupForCalendar(data) {
//   holydays.innerHTML = data
//     .map(({ date, exchange, name, status }) => {
//       return `<tr>
//                     <td>${date}</td>
//                     <td>${exchange}</td>
//                     <td>${name}</td>
//                     <td>${status}</td>
//                 </tr>`;
//     })
//     .join('');
// }

const Holidays = () => {
  const [holidais, setHolidays] = useState([]);
  marketHolidays()
    .then(data => setHolidays(data))
    .catch(console.log);
  //   return (
  //     <tr>
  //       <td>${holidais.date}</td>
  //       <td>${holidais.exchange}</td>
  //       <td>${holidais.name}</td>
  //       <td>${holidais.status}</td>
  //     </tr>
  //   );
};

export default Holidays;
