import React from "react";
import { Container, makeStyles} from "@material-ui/core";
import Controls from '../components/Controls/Controls';
import InputTextControl from '../components/Controls/InputTextControl';
import RadioGroupControl from '../components/Controls/RadioGroupControl';
import SelectControl from "../components/Controls/SelectControl";
import DatePickerControl from "../components/Controls/DatePickerControl";
import CheckBoxControl from "../components/Controls/CheckBoxControl";
import ButtonControl from "../components/Controls/ButtonControl";
import TextareaControl from '../components/Controls/TextareaControl';
import CheckBoxGroupControl from '../components/Controls/CheckBoxGroupControl';
import FileUploadControl from '../components/Controls/FileUploadControl';
import { Grid } from '@material-ui/core'
import { useForm } from "../components/Controls/useForm";

const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'other', title: 'Other' },
]

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
    gender: 'male',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false,
    chkTerminal: false,
    chkShipper: false,
    chkVessel: false,
    remark: ''
}

const useStyles = makeStyles((theme) => ({
    container:{
        paddingTop: theme.spacing(10),
    }
}));

const CustomControls = () => {
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
        // let tf = Object.values(temp).every(x => x === '')

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
            console.log('Submit Success');
            alert('Submit Success');
        }
    }

    const checkBoxItems = [
        { id: 'chkTerminal', title: 'Terminal', value: valuesXX.chkTerminal },
        { id: 'chkShipper', title: 'Shipper', value: valuesXX.chkShipper },
        { id: 'chkVessel', title: 'Vessel', value: valuesXX.chkVessel }
    ]

  return (
    <Container className={classes.container}>
    <div>
        <Grid container>
            <Grid item xs={6}>
                <h1>Controls Sample</h1><br></br>
                <Controls>
                    <InputTextControl
                        name="fullName"
                        label="Full Name"
                        value={valuesXX.fullName}
                        // value="def"
                        onChange={handleInputChangeYYYY}
                        error={errorsXX.fullName}
                    /><br></br><br></br>
                    <InputTextControl
                        variant="outlined"
                        name="email"
                        label="Email"
                        value={valuesXX.email}
                        onChange={handleInputChangeYYYY}
                        error={errorsXX.email}
                    /><br></br><br></br>
                    <InputTextControl
                        variant="outlined"
                        name="mobile"
                        label="Mobile"
                        value={valuesXX.mobile}
                        onChange={handleInputChangeYYYY}
                        error={errorsXX.mobile}
                    /><br></br><br></br>
                     <TextareaControl
                        name="remark"
                        label="Remark"
                        placeholder="This is Remark."
                        rows={5}
                        value={valuesXX.remark}
                        onChange={handleInputChangeYYYY}
                        error={errorsXX.remark}
                    /><br></br><br></br>
                    <FileUploadControl
                        text="File Upload"
                        color="primary"
                    />
                </Controls>
            </Grid>
            <Grid item xs={6}>
                <Controls>
                    <RadioGroupControl
                        name="gender"
                        label="Gender"
                        value={valuesXX.gender}
                        onChange={handleInputChangeYYYY}
                        items={genderItems}
                    /><br></br><br></br>
                    <SelectControl
                        name="departmentId"
                        label="Department"
                        value={valuesXX.departmentId}
                        onChange={handleInputChangeYYYY}
                        options={getDepartmentCollection}
                        error={errorsXX.departmentId}
                    /><br></br><br></br>
                    <DatePickerControl
                        name="hireDate"
                        label="Hire Date"
                        value={valuesXX.hireDate}
                        onChange={handleInputChangeYYYY}
                    /><br></br><br></br>
                    <CheckBoxControl
                        name="isPermanent"
                        label="Full-time Employee"
                        title="Hire Type"
                        value={valuesXX.isPermanent}
                        onChange={handleInputChangeYYYY}
                    /><br></br><br></br>
                    <CheckBoxGroupControl
                        label="Location"
                        onChange={handleInputChangeYYYY}
                        items={checkBoxItems}
                    /><br></br><br></br>
                </Controls>
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

export default CustomControls;