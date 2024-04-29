# React FormEZ

> Create forms with validation using our easy form builder.

## Install

```bash
npm install --save react-formez
```

## Documentation



## Examples

### 1. Simple Form

```bash
import { Form, FormField, FormDataType } from "react-formez";

const formFields: FormField[] = [
    {
      id: "email",
      type: "text",
      label: "Enter email",
      required: true,
    },
    {
      id: "password",
      type: "password",
      label: "Enter your password",
      required: true,
    },
    {
      id: "submit",
      type: "submit",
      children: "Login",
    },
  ];
const handleSubmit = (isFormValid: boolean, data: FormDataType) => {
  console.log(isFormValid, data);
};
<Form
    formSpecs={formFields}
    onSubmit={handleSubmit}
/>
```

### 2. Form with custom validation

```bash
import { Form, FormField, FormDataType } from "react-formez";

const formFields: FormField[] = [
    {
        id: "name",
        type: "text",
        label: "Enter your Name",
        required: true,
    },
    {
        id: "contact",
        type: "row",
        fields: [
        {
            id: "email",
            type: "text",
            label: "Enter email",
            required: true,
            validator: [
            {
                message: "Enter valid email address",
                validate: (val) => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
            },
            ],
        },
        {
            id: "phoneno",
            type: "text",
            label: "Enter phoneno",
            required: true,
            validator: [
            {
                message: "Phone number should be 10 character length",
                validate: (val) => val.length !== 10,
            },
            {
                message: "Enter a valid phone number",
                validate: (val) => !/^[6-9]\d{9}$/.test(val),
            },
            ],
        },
        ],
    },
    {
        id: "info",
        type: "row",
        fields: [
        {
            type: "radio",
            id: "gender",
            label: "Select your gender",
            options: ["Male", "Female"],
            value: "Male",
            required: true,
        },
        {
            type: "dropdown",
            id: "occupation",
            label: "Select your occupation",
            options: ["Student", "Working"],
            required: true,
        },
        ],
    },
    {
        id: "pass",
        type: "row",
        fields: [
        {
            id: "password",
            type: "password",
            label: "Choose your password",
            required: true,
            validator: [
            {
                message: "Password should be atlease six character length",
                validate: (val) => val.length < 6,
            },
            ],
        },
        {
            id: "confirmPassword",
            type: "password",
            label: "Confirm your password",
            required: true,
            validator: [
            {
                message: "Password should be atlease six character length",
                validate: (val) => val.length < 6,
            },
            ],
        },
        ],
    },
    {
        id: "terms",
        type: "checkbox",
        label: "Accept the terms and conditions",
        required: true,
    },
    {
        id: "submit",
        type: "submit",
        children: "Submit",
    },
];
const handleSubmit = (isFormValid: boolean, data: FormDataType) => {
  console.log(isFormValid, data);
};
<Form
    formSpecs={formFields}
    onSubmit={handleSubmit}
/>
```

In this example, we have utilized the `validator` attribute to implement custom validation for the email, phone number, and password fields.

Note: `validator` attribute can accept multiple validations. As demonstrated in the phone number validation, the validations are executed from top to bottom, and the first captured validation message will be displayed in the UI.

### 3. Form with associated fields and other inbuild functions

```bash
import { Form, FormField, FormSpecProps, FormDataType } from "react-formez";

const renderFormFields = ({ data, updateData, resetData }: FormSpecProps) =>{

    const formFields: FormField[] = [
        {
            id: "name",
            type: "text",
            label: "Enter your Name",
            required: true,
        },
        {
            id: "pass",
            type: "row",
            fields: [
            {
                id: "password",
                type: "password",
                label: "Choose your password",
                required: true,
                validator: [
                {
                    message: "Password should be atlease six character length",
                    validate: (val) => val.length < 6,
                },
                ],
            },
            {
                id: "confirmPassword",
                type: "password",
                label: "Confirm your password",
                required: true,
                validator: [
                {
                    message: "Password should be atlease six character length",
                    validate: (val) => val.length < 6,
                },
                {
                    message: "Password should match",
                    validate: (val) => val !== data['password'],
                }
                ],
            },
            ],
        },
        {
            id: "cta",
            type: "row",
            fields: [
                {
                    id: "submit",
                    type: "submit",
                    children: "Submit",
                },
                {
                    id: "reset",
                    type: "button",
                    children: "Reset",
                    onClick: ()=>{
                        resetData()
                    }
                }
            ]
        }
    ];
    return formFields
}

const handleSubmit = (isFormValid: boolean, data: FormDataType) => {
  console.log(isFormValid, data);
};
<Form
    formSpecs={renderFormFields}
    onSubmit={handleSubmit}
/>
```

In this example, we have demonstrated how to use associated fields to validate a field like `confirmPassword`.

Additionally, we have used the built-in function `resetData` to reset the form inputs, and if required, we can also use `updateData`.
