import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Checkbox
} from '@material-ui/core'
import { FormGroup } from '@mui/material';
import React from 'react'

export default function CheckBoxGroupControl(props) {
    const { label, onChange, items } = props

    const convertToDefaultEventPara = (name, value) => ({
        target: {
            name,
            value,
        },
    })

    return (
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <FormGroup>
                {items.map(item => (
                    <FormControlLabel
                        key={item.id}
                        value={item.id}
                        control={ 
                            <Checkbox
                                name={item.id}
                                checked={item.value}
                                color="primary"
                                onChange={e =>
                                    onChange(
                                        convertToDefaultEventPara(
                                            e.target.name,
                                            e.target.checked,
                                        ),
                                    )
                                }
                            />
                        } 
                        label={item.title}
                    />
                ))}
            </FormGroup>
        </FormControl>
    )
}