import React from "react";
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import './formik.css';
import { Container, makeStyles} from "@material-ui/core";
import { Grid } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    container:{
        paddingTop: theme.spacing(10),
    }
}));

export default function FormikSample2() {
    const classes = useStyles();

    const formik = useFormik({
        initialValues: {
            firstName: '',
            LastName: '',
            eMail: '',
            passWord: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .min(4, '4 chars only, required')
                .max(4, '4 chars only, required')
                .required('4 chars only, required'),
            LastName: Yup.string().min(5, 'more than 5 chars').max(20, 'Less than 20 chars').required('required'),
            eMail: Yup.string().email('Invalid email address').required('required'),
            passWord: Yup.string()
                .required('required')
                .matches(
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                    'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
                ),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const handleChange = e => {
        const value = e.target.value.toUpperCase();
        formik.values.firstName = value;
    };

    console.log(formik.values);
    console.log('Error', formik.errors);

    return (
        <Container className={classes.container}>
            <div>
                <Grid container>
                    <Grid item xs={6}>
                        <h1>Formik Basic Sample2</h1><br></br>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="input-container">
                                <input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    maxLength={4}
                                    placeholder="firstName"
                                    onChange={handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.firstName && formik.errors.firstName ? <p>{formik.errors.firstName}</p> : null}
                            </div>

                            <div className="input-container">
                                <input
                                    id="LastName"
                                    name="LastName"
                                    type="text"
                                    placeholder="LastName"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.LastName}
                                />
                                {formik.touched.LastName && formik.errors.LastName ? <p>{formik.errors.LastName}</p> : null}
                            </div>
                            <div className="input-container">
                                <input
                                    id="EMailName"
                                    name="eMail"
                                    type="email"
                                    placeholder="eMail"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.eMail}
                                />
                                {formik.touched.eMail && formik.errors.eMail ? <p>{formik.errors.eMail}</p> : null}
                            </div>
                            <div className="input-container">
                                <input
                                    id="passWord"
                                    name="passWord"
                                    type="password"
                                    placeholder="password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.passWord}
                                />
                                {formik.touched.passWord && formik.errors.passWord ? <p>{formik.errors.passWord}</p> : null}
                            </div>
                            <button type="submit" color="primary">
                                Submit
                            </button>
                        </form>
                    </Grid>
                </Grid> 
            </div>
    
        </Container>
    );
}
