import React from 'react';
import Input from './TextField';
import type { InputDateTimeProps } from '../../decs';

const InputTime: React.FC<InputDateTimeProps> = ({ value, onChange, ...props }): React.ReactElement => {
    let valueType = 'string';
    const date = new Date(value);

    if (value === undefined || value === null) {
        value = undefined;
        valueType = undefined;
    }

    // seconds time
    else if (typeof value === 'number' && value < 86400) {
        value = timeNumberToHHMM(value, false);
        valueType = 'seconds';
    }

    // milliseconds time
    else if (typeof value === 'number' && value < 86400 * 1000) {
        value = timeNumberToHHMM(value, true);
        valueType = 'milliseconds';
    }

    // timestamp time value
    else if (typeof value === 'number' && date.getTime() > 0) {
        value = 'HH:MM'
            .replace('HH', `${date.getHours()}`.padStart(2, '0'))
            .replace('MM', `${date.getMinutes()}`.padStart(2, '0'));
        valueType = 'timestamp';
    }

    // date time value
    else if (value instanceof Date) {
        value = 'HH:MM'
            .replace('HH', `${date.getHours()}`.padStart(2, '0'))
            .replace('MM', `${date.getMinutes()}`.padStart(2, '0'));
        valueType = 'Date';
    }

    return (
        <Input
            {...props}
            value={value}
            onChange={(e) => {
                const event = { ...e, target: { ...e.target } };
                const currDate = new Date(date).getTime();
                const ms = HHMMToTime(event.target.value, true);

                switch (valueType) {
                    case 'milliseconds':
                        event.target.value = ms;
                        break;
                    case 'seconds':
                        event.target.value = HHMMToTime(event.target.value, false);
                        break;
                    case 'timestamp':
                        event.target.value = currDate + ms;
                        break;
                    case 'Date':
                        event.target.value = new Date(currDate + ms);
                        break;
                    case 'string':
                        break;
                    default:
                        break;
                }
                return onChange?.(event);
            }}
            focused
            type="time"
        />
    );
};

function timeNumberToHHMM(time: number, inMilliseconds: boolean): string {
    // Convert milliseconds to seconds
    const totalSeconds = inMilliseconds ? Math.floor(time / 1000) : time;

    // Calculate hours and minutes
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);

    // Format the result as HH:MM
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

    return formattedTime;
}

function HHMMToTime(time, inMilliseconds: boolean): number {
    // Split the time string into hours and minutes
    const [hours, minutes] = time.split(':').map(Number);

    // Calculate the total milliseconds
    const totalTime = (hours * 3600 + minutes * 60) * (inMilliseconds ? 1000 : 1);

    return totalTime;
}

InputTime.defaultProps = Input.defaultProps;

export type { InputDateTimeProps as InputTimeProps } from '../../decs';
export default InputTime;
