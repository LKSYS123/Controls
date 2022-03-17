import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Checkbox as MuiCheckbox,
} from '@material-ui/core'
import React from 'react'

export default function CheckBoxControl(props) {
    const { name, label, title, value, onChange } = props

    const convertToDefaultEventPara = (name, value) => ({
        target: {
            name,
            value,
        },
    })

    return (
        <FormControl>
            <FormLabel>{title}</FormLabel>
            <FormControlLabel
                control={
                    <MuiCheckbox
                        name={name}
                        color="primary"
                        checked={value}
                        onChange={e =>
                            onChange(
                                convertToDefaultEventPara(
                                    name,
                                    e.target.checked,
                                ),
                            )
                        }
                    />
                }
                label={label}
            />
        </FormControl>
    )
}
