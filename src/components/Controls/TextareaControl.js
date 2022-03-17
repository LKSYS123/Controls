import * as React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    textarea: {
        width: 300,
        fontSize:'15px'
    },
    p: {
        fontSize:'20px'
    }
});

export default function TextareaControl(props) {
    const { name, placeholder, label, rows, value, error = null, onChange, ...other } = props

    const classes = useStyles()

    console.log('TextareaControl error', error)

    return (
        <>
            <p className={classes.p} >{label}</p>
            <TextareaAutosize
                className={classes.textarea}
                name={name}
                aria-label={label}
                placeholder={placeholder || "Please Enter Remark."}
                minRows={rows}
                maxRows={rows}
                defaultValue={value}
                onChange={onChange}
                {...other}
                {...(error && { error: true, helperText: error })}
            />
        </>
    );
}