import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { format, parse, isValid } from 'date-fns';
import { noop, pick, omit } from 'lodash';
import ReactDatePicker from 'react-datepicker';

import Textbox from '../../controls/textbox/Textbox';
import MaskedTextbox from '../../controls/textbox/MaskedTextbox';
import { useWindowWidth } from '../../util/useWindowWidth';
import { useTheme } from '../../util/useTheme';
import { DatepickerStyles } from './datePickerStyles';
import ReactDatePickerPropTypes from './ReactDatePickerPropTypes';

const STRING_FORMAT = 'yyyy-MM-dd';

function normalizeDateString(date, stringFormat = STRING_FORMAT) {
  if (typeof date === 'string') {
    const parsedDate = parse(date, stringFormat, new Date());
    return isValid(parsedDate) ? format(parsedDate, stringFormat) : '';
  }
  return isValid(date) ? format(date, stringFormat) : '';
}

function normalizeDate(date) {
  if (typeof date === 'string') {
    const parsedDate = parse(date, STRING_FORMAT, new Date());
    return isValid(parsedDate) ? parsedDate : null;
  }
  return isValid(date) ? date : null;
}

function NativeDatePicker(props) {
  return (
    <Textbox
      prependIconName="calendar"
      type="date"
      value={normalizeDateString(props.selectedDate)}
      {...props}
    />
  );
}

const DateTextbox = React.forwardRef(function DateTextbox(props, ref) {
  const inputRef = React.useRef();
  React.useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));

  /* eslint-disable react/forbid-foreign-prop-types */
  const datepickerProps = pick(props, Object.keys(ReactDatePickerPropTypes));
  const textboxProps = omit(props, Object.keys(ReactDatePickerPropTypes));
  /* eslint-enable */

  const textbox = (
    <MaskedTextbox
      maskType="date"
      prependIconName="calendar"
      ref={inputRef}
      {...textboxProps}
    />
  );

  return (
    <>
      <DatepickerStyles />
      <ReactDatePicker
        customInput={textbox}
        placeholderText={props.placeholder}
        selected={normalizeDate(props.selectedDate)}
        {...datepickerProps}
      />
    </>
  );
});

const DatePicker = function DatePicker(props) {
  const normalizedDateFromProps = props.selectedDate
    ? normalizeDate(props.selectedDate)
    : null;
  const [selectedDate, setSelectedDate] = useState(normalizedDateFromProps);

  function dateSelected(dateOrEvent) {
    if (dateOrEvent) {
      if (isValid(dateOrEvent)) {
        setSelectedDate(dateOrEvent);
      } else {
        const normalizedDate = normalizeDate(dateOrEvent.target.value);
        setSelectedDate(normalizedDate);
      }
    } else {
      setSelectedDate(null);
    }
  }

  useEffect(
    () => {
      if (
        normalizeDateString(selectedDate) !==
        normalizeDateString(props.selectedDate)
      ) {
        props.onChange(selectedDate);
      }
    },
    [selectedDate]
  );

  const windowWidth = useWindowWidth();
  const theme = useTheme();
  const phoneWidth = parseInt(theme.screenSize.phone, 10) || 0;

  const DatePickerInput =
    props.allowNativeDatepickerOnMobile && windowWidth <= phoneWidth
      ? NativeDatePicker
      : DateTextbox;

  const actualProps = {
    ...props,
    selectedDate,
    onChange: props.onChange ? dateSelected : noop
  };

  return <DatePickerInput {...actualProps} />;
};

DatePicker.propTypes = {
  allowNativeDatepickerOnMobile: PropTypes.bool,
  selectedDate: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.string
  ])
};

DatePicker.defaultProps = {
  allowNativeDatepickerOnMobile: true,
  selectedDate: ''
};

export default DatePicker;
