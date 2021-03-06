import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import React from 'react'

export default function DatePickerControl(props) {
    const { name, label, value, onChange } = props

    const convertToDefaultEventPara = (name, value) => ({
        target: {
            name,
            value,
        },
    })

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                disableToolbar
                variant="inline"
                inputVariant="outlined"
                label={label}
                format="yyyy/MM/dd"
                name={name}
                value={value}
                onChange={date =>
                    onChange(convertToDefaultEventPara(name, date))
                }
            ></KeyboardDatePicker>
        </MuiPickersUtilsProvider>
    )
}
