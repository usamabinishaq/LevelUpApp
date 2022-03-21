import React, {useState} from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../styles/colors';
import {NUNITO_BOLD, NUNITO_SEMI_BOLD} from '../../styles/typography';

export const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <Calendar
      onDayPress={day => {
        console.log(day.dateString);
        setSelectedDate({
          [day.dateString]: {
            selected: true,
            selectedColor: colors.PRIMARY,
          },
        });
      }}
      style={{
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
      }}
      theme={{
        calendarBackground: colors.calendarBackground,
        dayTextColor: colors.purple,
        monthTextColor: colors.purple,
        arrowColor: colors.ALERT,
        textMonthFontFamily: NUNITO_BOLD,
        textDayStyle: {top: 2.5},
        textMonthFontSize: 16,
        textDayFontSize: 12,
        textDayFontFamily: NUNITO_SEMI_BOLD,
        todayTextColor: colors.purple,
      }}
      markedDates={selectedDate}
      renderArrow={direction => <Arrow direction={direction} />}
    />
  );
};
export const Arrow = props => {
  return props.direction == 'left' ? (
    <Icon name={'chevron-left'} size={25} color={colors.purple} />
  ) : (
    <Icon name={'chevron-right'} size={25} color={colors.purple} />
  );
};
