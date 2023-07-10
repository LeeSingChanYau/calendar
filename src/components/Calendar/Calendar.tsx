import React, { useState } from 'react';
import { useEffect } from 'react';
import './Calendar.css';

interface CalendarProps {
  date: Date;
}

const Calendar: React.FC<CalendarProps> = ({ date }) => {
  const [days, setDays] = useState<number[]>([]);
  const [prevMonthDays, setPrevDays] = useState<number[]>([]);
  const [nextMonthDays, setNextDays] = useState<number[]>([]);

  // generate the 31 days of the current month
  // do this by using the first day of the week
  // first day of current month is firstDay
  // - 1 2 3 4 5 6
  const generateDays = (
    numberDays: number,
    prevTotalDays: number,
    firstDay: number,
    firstDayNext: number
  ) => {
    let prevMonth = [];
    let currentMonth = [];
    let nextMonth = [];
    for (let i = prevTotalDays - firstDay + 1; i <= prevTotalDays; i++) {
      prevMonth.push(i);
    }
    for (let i = 1; i <= numberDays; i++) {
      currentMonth.push(i);
    }
    for (let i = 1; i <= 6 - firstDayNext + 1; i++) {
      nextMonth.push(i);
    }
    return [prevMonth, currentMonth, nextMonth];
  };

  const getDaysInMonth = () => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return [
      new Date(year, month + 1, 0).getDate(),
      new Date(year, month, 0).getDate(),
      new Date(year, month, 1).getDay(),
      new Date(year, month + 1, 1).getDay(),
    ];
  };

  useEffect(() => {
    setDays([]);
    const [totalDays, prevTotalDays, firstDay, firstDayNext] = getDaysInMonth();
    console.log(firstDay);
    const [prevDays, currentDays, nextDays] = generateDays(
      totalDays,
      prevTotalDays,
      firstDay,
      firstDayNext
    );
    setPrevDays(prevDays);
    setDays(currentDays);
    setNextDays(nextDays);
  }, [date]);

  return (
    <div className="calendar">
      <div className="weekdays">
        <div className="day">Sun</div>
        <div className="day">Mon</div>
        <div className="day">Tue</div>
        <div className="day">Wed</div>
        <div className="day">Thu</div>
        <div className="day">Fri</div>
        <div className="day">Sat</div>
      </div>
      <div className="days">
        {prevMonthDays.map((item, index) => (
          <div key={index} className="prev-next-day">
            {item}
          </div>
        ))}
        {days.map((item, index) => (
          <div key={index} className="day">
            {item}
          </div>
        ))}
        {nextMonthDays.map((item, index) => (
          <div key={index} className="prev-next-day">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
