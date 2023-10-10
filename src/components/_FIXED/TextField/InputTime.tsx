import React from 'react';
import Input from './TextField';
import type { InputTimeProps } from '../../decs';

const InputTime: React.FC<InputTimeProps> = ({
    value,
    valueType: _valueType,
    onChange,
    ...props
}): React.ReactElement => {
    let valueType = 'string';
    const date = new Date(value);

    const totalSecondsInOneDay = 60 * 60 * 24;
    const totalMinutesInOneDay = 60 * 24;

    if (value === undefined || value === null) {
        value = undefined;
        valueType = undefined;
    }

    // minutes time
    else if (typeof value === 'number' && _valueType === 'minutes' && value < totalMinutesInOneDay) {
        const time = value * 60;
        value = timeNumberToHHMM(time, false);
        valueType = 'seconds';
    }

    // seconds time
    else if (typeof value === 'number' && _valueType === 'seconds' && value < totalSecondsInOneDay) {
        const time = value;
        value = timeNumberToHHMM(time, false);
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
        valueType = 'date';
    }

    if (['seconds', 'minutes', 'milliseconds', 'timestamp', 'date', 'string'].includes(_valueType)) {
        valueType = _valueType;
    } else if (_valueType !== undefined) {
        console.warn(
            `invalid valueType value supplied for InputTime component, must be one of: ['seconds', 'minutes', 'milliseconds', 'timestamp', 'date', 'string'], got: ${_valueType}`
        );
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
                    case 'minutes':
                        event.target.value = HHMMToTime(event.target.value, false) / 60;
                        break;
                    case 'seconds':
                        event.target.value = HHMMToTime(event.target.value, false);
                        break;
                    case 'timestamp':
                        event.target.value = currDate + ms;
                        break;
                    case 'date':
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

export type { InputTimeProps } from '../../decs';
export default InputTime;
