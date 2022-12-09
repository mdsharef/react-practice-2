import React, { useState } from 'react';

const formFeilds = {
    name: {
        type: 'text',
        label: 'What is your name?',
        placeholder: 'Md Muaz Ahmed'
    },
    email: {
        type: 'email',
        label: 'What is your email?',
        placeholder: 'muaz@example.com'
    },
    phone: {
        type: 'tel',
        label: 'What is your Phone No?',
        placeholder: '+8801421******'
    },
    password: {
        type: 'password',
        label: 'What is your password?',
        placeholder: '******'
    },
    color: {
        type: 'color',
        label: 'What is your favorite color?',
    },
    birthDate: {
        type: 'date',
        label: 'what is your birthdate?'
    },
    age: {
        type: 'number',
        label: 'What is your current age?',
        placeholder: '21'
    }
}

const mapObjectToArr = (obj) => {
    return Object.keys(obj).map(key => ({name: key, ...obj[key]}));
}

const transformObj = (obj) => {
    return Object.keys(obj).reduce((acc, cur) => {
        acc[cur] = {
            ...obj[cur],
            value: ""
        }

        return acc;
    }, {});
}

const FormComponent = () => {
    const [formState, setFormState] = useState(transformObj(formFeilds));
    const formData = mapObjectToArr(formState);

    const handleSubmit = (event) => {
        event.preventDefault();
        const values = Object.keys(formState).reduce((acc, cur) => {
            acc[cur] = formState[cur].value;

            return acc;
        }, {})
        console.log(values);
    }

    const handleChange = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: {
                ...formState[event.target.name],
                value: event.target.value
            }
        })
    }

  return (
    <form onSubmit={handleSubmit}>
        {formData.map((item, index)=>(
            <div key={index}>
                <label htmlFor={item.name}>{item.label}</label>
                <input type={item.type} name={item.name} value={item.value} placeholder={item.placeholder && item.placeholder} onChange={handleChange} />
            </div>
        ))}
        <div>
            <button type="submit">Submit</button>
        </div>
    </form>
  )
}

export default FormComponent