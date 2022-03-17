import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Container, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container:{
        paddingTop: theme.spacing(10),
    }
}));

const defaultValues = {
    nickName: "",
    firstName: "",
    lastName: "",
    age: "",
    gender: ""
};

const Input = ({ name, label, register, required, errors }) => (
    <>
        <label>{label}</label>
        <input {...register(name, { required })} />
    </>
);

export default function FormSample1() {
    const classes = useStyles();

    const { 
        register, 
        handleSubmit,
        watch, 
        formState: { errors } 
    } = useForm({ defaultValues });

    const onSubmit = (data) => {
        console.log(data);
        alert(JSON.stringify(data));
    }; 

    console.log(watch("gender")); // you can watch individual input by pass the name of the input

    return (
        <Container className={classes.container}>
            <div>
                <h1>Form Sample</h1><br></br>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input 
                        name="nickName" 
                        label="Nick Name" 
                        register={register} required 
                    />
                    {errors?.nickName?.type === "required" && <p>This field is required</p>}
                    
                    <label>First Name</label>
                    <input {...register("firstName", {
                        required: true,
                        maxLength: 20,
                        pattern: /^[A-Za-z]+$/i
                        })}
                    />
                    {errors?.firstName?.type === "required" && <p>This field is required</p>}
                    {errors?.firstName?.type === "maxLength" && (
                        <p>First name cannot exceed 20 characters</p>
                    )}
                    {errors?.firstName?.type === "pattern" && (
                        <p>Alphabetical characters only</p>
                    )}

                    <label>Last Name</label>
                    <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                    {errors?.lastName?.type === "pattern" && (
                        <p>Alphabetical characters only</p>
                    )}
                    <label>Age</label>
                    <input {...register("age", { min: 18, max: 99 })} />
                    {errors.age && (
                        <p>You Must be older then 18 and younger then 99 years old</p>
                    )}
                    <label>Gender</label>
                    <select {...register("gender", { required: true })}>
                        <option value="female">female</option>
                        <option value="male">male</option>
                        <option value="other">other</option>
                    </select>
                    {errors.gender && <span>This field is required</span>}
                    <br></br><br></br>
                    <input type="submit" />
                </form>
            </div>
        </Container>
    );
}