import React, { useCallback, useState } from 'react';
import classnames from 'classnames';
import './Calendar.scss';
import Modal from './Modal';

type MyDate = {
  year: number;
  month: number;
  date: number;
  day: number;
};

const WeekLocale = ['日', '一', '二', '三', '四', '五', '六'];
const DateLocale = ['年', '月', '日'];
const ONE_DAY = 1000 * 60 * 60 * 24;

const getMyDate = (value: number): MyDate => {
  const d = new Date(value);
  return {
    year: d.getFullYear(),
    month: d.getMonth(),
    date: d.getDate(),
    day: d.getDay(),
  };
};

const toDateLocaleString = (value: number) => {
  const { year, month, date, day } = getMyDate(value);
  return `${year + DateLocale[0]}${month + 1 + DateLocale[1]}${
    date + DateLocale[2]
  } 星期${WeekLocale[day]}`;
};

type CalendarProps = {
  value?: number;
  onChange?: (value: number) => void;
};

const Calendar: React.FC<CalendarProps> = ({
  value = Date.now(),
  onChange = (value: number) => {},
}) => {
  const today = new Date();
  const [date, setDate] = useState<Date>(new Date(value));

  const { year, month } = getMyDate(date.getTime());
  // console.log(year, month, day) // 2020 9 1

  // const currentMonthFirstDay = new Date(year, month, 1)
  const [currentMonthFirstDay, setCurrentMonthFirthDay] = useState<Date>(
    new Date(year, month, 1)
  );
  // console.log(currentMonthFirstDay) // Thu Oct 01 2020 00:00:00 GMT+0800 (China Standard Time)

  const dayOfcurrentMonthFirthDay = currentMonthFirstDay.getDay();
  // console.log(dayOfcurrentMonthFirthDay) // 4

  const startDay = new Date(
    currentMonthFirstDay.getTime() - dayOfcurrentMonthFirthDay * ONE_DAY
  );
  // console.log(startDay) // Sun Sep 27 2020 00:00:00 GMT+0800 (China Standard Time)

  const dateList: Date[] = [];

  for (let i = 0; i < 42; i++) {
    dateList.push(new Date(startDay.getTime() + i * ONE_DAY));
  }

  const handleDayClick = useCallback(
    (date: Date) => {
      setDate(date);
      onChange(date.getTime());
    },
    [onChange]
  );

  const handleMonthPrevClick = useCallback(() => {
    setCurrentMonthFirthDay((value) => {
      let { year, month } = getMyDate(value.getTime());
      if (month === 0) {
        month = 11;
        year--;
      } else {
        month--;
      }
      return new Date(year, month, 1);
    });
  }, []);

  const handleMonthNextClick = useCallback(() => {
    setCurrentMonthFirthDay((value) => {
      let { year, month } = getMyDate(value.getTime());
      if (month === 11) {
        month = 0;
        year++;
      } else {
        month++;
      }
      return new Date(year, month, 1);
    });
  }, []);

  return (
    <div className="Calendar">
      <div className="Calendar__header">
        <div className="Clendar__title">
          <div className="prev" onClick={handleMonthPrevClick}></div>
          <div className="title">{`${
            currentMonthFirstDay.getFullYear() + DateLocale[0]
          } ${currentMonthFirstDay.getMonth() + 1 + DateLocale[1]}`}</div>
          <div className="next" onClick={handleMonthNextClick}></div>
        </div>
        <div className="week-list">
          {Array(7)
            .fill('')
            .map((_, i) => {
              return (
                <span className="item" key={i}>
                  {WeekLocale[i]}
                </span>
              );
            })}
        </div>
      </div>
      <div className="Calendar__body">
        {Array(6)
          .fill('')
          .map((_, i) => {
            return (
              <ul className="row" key={'_' + i}>
                {Array(7)
                  .fill('')
                  .map((__, j) => {
                    const num = i * 7 + j;
                    const current = dateList[num];
                    const disabled =
                      dayOfcurrentMonthFirthDay > num ||
                      current.getMonth() !== currentMonthFirstDay.getMonth();
                    const isMonthOfSelected =
                      current.getMonth() === date.getMonth();
                    const isThisYear =
                      current.getFullYear() === date.getFullYear();
                    const isMonthOfToday =
                      current.getMonth() === today.getMonth();
                    const isYearOfToday =
                      current.getFullYear() === today.getFullYear();
                    const isActive =
                      !disabled &&
                      isThisYear &&
                      isMonthOfSelected &&
                      current.getDate() === date.getDate();
                    const isToday =
                      !disabled &&
                      isYearOfToday &&
                      isMonthOfToday &&
                      current.getDate() === today.getDate();
                    return (
                      <li
                        key={'__' + num}
                        className={classnames(
                          'day',
                          disabled && 'disabled',
                          isToday && 'today',
                          isActive && 'active'
                        )}
                        onClick={() => handleDayClick(current)}
                      >
                        <span>{current.getDate()}</span>
                      </li>
                    );
                  })}
              </ul>
            );
          })}
      </div>
    </div>
  );
};

type DatePickerProps = {
  value?: number;
  onChange?: (value: number) => void;
};

const DatePicker: React.FC<DatePickerProps> = ({
  value = Date.now(),
  onChange = (value: number) => {},
}) => {
  const { year, month, date } = getMyDate(value);
  const [visible, setVisible] = useState(false);

  function handleCalendarChange(value: number) {
    // console.log(value)
    onChange(value);
    setVisible(false);
  }

  function handleInputFocus() {
    // console.log(value)
    setVisible(true);
  }

  return (
    <>
      <input
        className="CalendarPicker__input"
        type="text"
        readOnly
        placeholder="请输入"
        value={`${year}-${month + 1}-${date}`}
        onFocus={handleInputFocus}
      />
      <Modal
        title="选择日期"
        visible={visible}
        hide={() => setVisible(false)}
        content={<Calendar onChange={handleCalendarChange} {...{ value }} />}
      />
    </>
  );
};

export { DatePicker, toDateLocaleString };

export default Calendar;
