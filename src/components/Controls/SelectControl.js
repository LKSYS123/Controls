import {
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select as MuiSelect,
    makeStyles
} from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    select: {
        width: 200
    },
});

export default function SelectControl(props) {
    const { name, label, value, error = null, onChange, options } = props

    console.log('Select error', error)

    const classes = useStyles()

    return (
        <FormControl variant="outlined" {...(error && { error: true })}>
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                label={label}
                name={name}
                value={value}
                onChange={onChange}
                className={classes.select}
            >
                <MenuItem value="">None</MenuItem>
                {options.map(item => (
                    <MenuItem key={item.id} value={item.id}>
                        {item.title}
                    </MenuItem>
                ))}
            </MuiSelect>
            {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
    )
}
