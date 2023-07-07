import React, { useState } from 'react';
import { useEffect } from 'react';

interface CalendarProps {
  date: Date;
}

const Calendar: React.FC<CalendarProps> = ({ date }) => {
  const [days, setDays] = useState<number[]>([]);
  const generateDays = (numberDays: number) => {
    let days = [];
    for (let i = 1; i <= numberDays; i++) {
      days.push(i);
    }
    return days;
  };

  const getDaysInMonth = () => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    return new Date(year, month, 0).getDate();
  };

  useEffect(() => {
    console.log(getDaysInMonth());
    const totalDays = getDaysInMonth();
    setDays(generateDays(totalDays));
  }, [date]);

  return (
    <div>
      Calendar
      <ul>
        {days &&
          days.map((item) => {
            return <li>{item}</li>;
          })}
      </ul>
    </div>
  );
};

export default Calendar;
