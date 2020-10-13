// Type definitions for @wojtekmaj/react-datetimerange-picker 3.0
// Project: https://github.com/baz/foo (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: Pesven <https://github.com/Psvensso>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { CalendarProps } from 'react-calendar';

declare module '@wojtekmaj/react-datetimerange-picker' {
    export default function DateTimeRangePicker(props: DateRangePickerProps): JSX.Element;
    type Value = Date | Date[];

    export interface DateRangePickerProps extends CalendarProps {
        amPmAriaLabel: string;
        autoFocus: boolean;
        calendarAriaLabel: string;
        calendarClassName: string;
        calendarIcon: string | JSX.Element;
        clearAriaLabel: string;
        clearIcon: string | JSX.Element;
        clockClassNamestring: string;
        closeWidgets: boolean;
        dayAriaLabelstring: string;
        disabled: boolean;
        disableCalendar: boolean;
        disableClock: boolean;
        format: string;
        hourAriaLabel: string;
        isCalendarOpen: boolean;
        isClockOpen: boolean;
        minuteAriaLabel: string;
        monthAriaLabel: string;
        name: string;
        nativeInputAriaLabel: string;
        onCalendarClose: () => void;
        onCalendarOpen: () => void;
        onClockClose: () => void;
        onClockOpen: () => void;
        rangeDivider: string;
        required: boolean;
        secondAriaLabel: string;
        showLeadingZeros: boolean;
        yearAriaLabel: string;
    }
}
