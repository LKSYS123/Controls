import React from "react";
import { Container, makeStyles} from "@material-ui/core";
import Controls from '../components/Controls/Controls'
import InputTextControl from '../components/Controls/InputTextControl'
import SelectControl from "../components/Controls/SelectControl";
import ButtonControl from "../components/Controls/ButtonControl";
import { Grid } from '@material-ui/core'
import { useForm } from "../components/Controls/useForm";

const getDepartmentCollection = [
    { id: '1', title: 'Development' },
    { id: '2', title: 'Marketing' },
    { id: '3', title: 'Account' },
    { id: '4', title: 'HR' }
]

const initialFValues = {
    fullName: '',
    email: '',
    mobile: '',
    departmentId: ''
}

const useStyles = makeStyles((theme) => ({
    container:{
        paddingTop: theme.spacing(10),
    }
}));

const ValidationChk = () => {
    const classes = useStyles();

    const validate = (fieldValues = valuesXX) => {
        let temp = { ...errorsXX }
        if ('fullName' in fieldValues)
            temp.fullName =
                fieldValues.fullName.length > 5 ? '' : 'Minimum 6 texts required'

        if ('email' in fieldValues)
            temp.email = /$^|.+@.+..+/.test(fieldValues.email)
                ? ''
                : 'Email is not valid'

        if ('mobile' in fieldValues)
            temp.mobile =
                fieldValues.mobile.length > 9
                    ? ''
                    : 'Minimum 10 numbers required'

        if ('departmentId' in fieldValues)
            temp.departmentId =
                fieldValues.departmentId.length != 0
                    ? ''
                    : 'This field is required'

        // debugger
        setErrors({ ...temp })
        console.log(temp)
        console.log('departmentId = ', fieldValues.departmentId)

        if (fieldValues === valuesXX)
            return Object.values(temp).every(x => x === '')
    }

    const {
        valuesXX,
        setValues,
        errorsXX,
        setErrors,
        resetForm,
        handleInputChangeYYYY,
    } = useForm(initialFValues, true, validate)

    const handleSubmit = e => {
        e.preventDefault()
        let tf = validate()
        if (tf) {
            alert('Submit Success');
        }
    }

  return (
    <Container className={classes.container}>
    <div>
        <Grid container>
            <Grid item xs={6}>
                <h1>Validation Check Sample</h1><br></br>
                <Controls>
                    <InputTextControl
                        name="fullName"
                        label="Full Name"
                        value={valuesXX.fullName}
                        onChange={handleInputChangeYYYY}
                        error={errorsXX.fullName}
                    />
                </Controls><br></br>
                <Controls>
                    <InputTextControl
                        variant="outlined"
                        name="email"
                        label="Email"
                        value={valuesXX.email}
                        onChange={handleInputChangeYYYY}
                        error={errorsXX.email}
                    />
                </Controls><br></br>
                <Controls>
                    <InputTextControl
                        variant="outlined"
                        name="mobile"
                        label="Mobile"
                        value={valuesXX.mobile}
                        onChange={handleInputChangeYYYY}
                        error={errorsXX.mobile}
                    />
                </Controls><br></br>
                <Controls>
                    <SelectControl
                        name="departmentId"
                        label="Department"
                        value={valuesXX.departmentId}
                        onChange={handleInputChangeYYYY}
                        options={getDepartmentCollection}
                        error={errorsXX.departmentId}
                    />
                </Controls><br></br>
                <Controls>
                    <ButtonControl
                        color="primary"
                        size="large"
                        text="Submit"
                        type="submit"
                        onClick={handleSubmit}
                    />
                    <ButtonControl
                        color="default"
                        size="large"
                        text="Reset"
                        onClick={resetForm}
                    />
                </Controls>
            </Grid>
        </Grid>
    </div>
    </Container>
  );
};

export default ValidationChk;