import React from 'react'
import { TextField } from '@material-ui/core'

export default function InputTextControl(props) {
    const { name, label, value, error = null, onChange, ...other } = props

    console.log('error', error)

    return (
        <TextField
            variant="outlined"
            name={name}
            label={label}
            value={value}
            onChange={onChange}
            {...other}
            {...(error && { error: true, helperText: error })}
        />
    )
}
