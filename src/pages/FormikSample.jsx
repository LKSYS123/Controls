import React from "react";
import { Formik, Form, useFormik } from "formik";
import * as Yup from "yup";
import { FormikInput } from "../components/Controls/FormikInput";
import "../components/Controls/FormikStyle.css";
import { Container, makeStyles} from "@material-ui/core";
import { Grid } from '@material-ui/core'

const ValidationSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, "이름은 3글자 이상이어야 합니다.")
        .max(10, "이름은 10글자를 초과할 수 없습니다.")
        .required("이름은 필수항목입니다."),
    email: Yup.string().email().required("이메일은 필수항목입니다."),
    password: Yup.string()
        .required('비밀번호는 필수항목입니다.')
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            '비밀번호는 숫자, 대문자,소문자,특수문자를 각 하나씩 포함하며, 8글자 이상이어야 합니다.'
        )
});
  
const initialValues = {
    name: "",
    email: "",
    password: ""
};

const useStyles = makeStyles((theme) => ({
    container:{
        paddingTop: theme.spacing(10),
    }
}));

const FormikSample = () => {
    const classes = useStyles();

  return (
    <Container className={classes.container}>
    <div>
        <Grid container>
            <Grid item xs={6}>
                    <h1>Formik Basic Sample1</h1>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={ValidationSchema}
                        onSubmit={(values) => {
                            alert(JSON.stringify(values, null, 2));
                        }}
                    >
                        {({ handleSubmit, ...props }) => (
                        <Form>
                            <FormikInput name="name" label="이름" />
                            <FormikInput name="email" label="이메일" />
                            <FormikInput name="password" label="비밀번호" />
                            <button type="submit" onSubmit={() => handleSubmit()}>
                            제출
                            </button>
                        </Form>
                        )}
                    </Formik>
            </Grid>
        </Grid> 
    </div>
   
    </Container>
  );
};

export default FormikSample;