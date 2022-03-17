import React, { useState } from 'react'

export function useForm(initialFormValues, validateOnChange = false, validate) {
    const [valuesXX, setValues] = useState(initialFormValues)
    const [errorsXX, setErrors] = useState({})

    const handleInputChangeYYYY = e => {
        const { name, value, size, type } = e.target

        setValues({
            ...valuesXX,
            [name]: value,
        })
        //console.log(size, type)
        //console.log(name, value)
        console.log('validateOnChange=>', validateOnChange)

        if (validateOnChange) validate({ [name]: value })
    }

    const resetForm = () => {
        setValues(initialFormValues)
        setErrors({})
    }

    return {
        valuesXX,
        setValues,
        errorsXX,
        setErrors,
        handleInputChangeYYYY,
        resetForm,
    }
}