import React, { useEffect, useState } from 'react';
import './Pagination.css';

interface PaginationProps {
  date: Date;
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
}

const generateMonths = (date: Date) => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const currentMonth = monthNames[date.getMonth()];
  const previousDate = new Date(date);
  previousDate.setMonth(previousDate.getMonth() - 1);
  const previousMonth = monthNames[previousDate.getMonth()];
  const nextDate = new Date(date);
  nextDate.setMonth(nextDate.getMonth() + 1);
  const nextMonth = monthNames[nextDate.getMonth()];

  return [previousMonth, currentMonth, nextMonth];
};

const Pagination: React.FC<PaginationProps> = ({ date, setCurrentDate }) => {
  const [previousMonth, setPreviousMonth] = useState('');
  const [month, setMonth] = useState('');
  const [nextMonth, setNextMonth] = useState('');
  const [year, setYear] = useState('');

  useEffect(() => {
    const [prev, current, next] = generateMonths(date);
    setPreviousMonth(prev);
    setMonth(current);
    setNextMonth(next);
    setYear(date.getFullYear().toString());
  }, [date]);

  const handlePrev = () => {
    const newDate = new Date(date); // Create a new Date object
    newDate.setMonth(newDate.getMonth() - 1); // Update the month
    const [prev, current, next] = generateMonths(newDate);
    setPreviousMonth(prev);
    setMonth(current);
    setNextMonth(next);
    setCurrentDate(newDate);
  };

  const handleNext = () => {
    const newDate = new Date(date); // Create a new Date object
    newDate.setMonth(newDate.getMonth() + 1); // Update the month
    const [prev, current, next] = generateMonths(newDate);
    setPreviousMonth(prev);
    setMonth(current);
    setNextMonth(next);
    setCurrentDate(newDate);
  };

  return (
    <div>
      <h1>
        {month} {year}
      </h1>
      <div className="pagination">
        <h3 onClick={handlePrev}>&lt;</h3>
        <h3>{previousMonth}</h3>
        <h3>{month}</h3>
        <h3>{nextMonth}</h3>
        <h3 onClick={handleNext}>&gt;</h3>
      </div>
    </div>
  );
};

export default Pagination;
