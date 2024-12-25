import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './DatePicker.module.css';
import { Ticket } from '../Ticket/Ticket';
export function DatePicker() {
  let dispatch = useDispatch();
  let tickets = useSelector((state) => state.tikets || []);
  
  let [filters, setFilters] = useState({
    from: '',
    city: '',
    date: '',
    nights: '',
    tourists: '',
  });
  let [filteredTickets, setFilteredTickets] = useState([]);

  let handleInputChange = (e) => {
    let { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  let handleSearch = () => {
    let results = tickets.filter((ticket) => {
      return (
        (!filters.from || ticket.from.toLowerCase().includes(filters.from.toLowerCase())) &&
        (!filters.city || ticket.city.toLowerCase().includes(filters.city.toLowerCase())) &&
        (!filters.date || ticket.date === filters.date) &&
        (!filters.nights || ticket.nights === parseInt(filters.nights, 10)) &&
        (!filters.tourists || ticket.tourists === parseInt(filters.tourists, 10))
      );
    });
    setFilteredTickets(results);
  };

  return (
    <div className={s.container}>
      <input
        name="from"
        placeholder="Город Вылета"
        className={s.DateInput}
        type="text"
        value={filters.from}
        onChange={handleInputChange}
      />
      <input
        name="city"
        placeholder="Город прилёта"
        className={s.DateInput}
        type="text"
        value={filters.city}
        onChange={handleInputChange}
      />
      <input
        name="date"
        placeholder="Дата вылета"
        className={s.DateInput}
        type="date"
        value={filters.date}
        onChange={handleInputChange}
      />
      <input
        name="nights"
        placeholder="Ночей"
        className={s.DateInput}
        type="number"
        value={filters.nights}
        min="1"        
        onChange={handleInputChange}
      />
      <input
        name="tourists"
        placeholder="Туристы"
        className={s.DateInput}
        type="number"
        value={filters.tourists}
        min="1"        
        onChange={handleInputChange}
      />
      <button className={s.DateButton} onClick={handleSearch}>Найти</button>

      <div className={s.results}>
        {filteredTickets.length === 0 && <p>Нет доступных билетов по заданным параметрам.</p>}
        {filteredTickets.map((ticket,index) => (
          <Ticket key={index} img={ticket.img} title={ticket.title} info={ticket.info} description={ticket.description} cost={ticket.cost} />
        ))}
      </div>
    </div>
  );
}