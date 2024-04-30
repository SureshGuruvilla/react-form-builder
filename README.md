# React FormEZ

> Create forms with validation using our easy form builder.

## Install

```bash
npm install react-formez
```

```bash
yarn add react-formez
```

## Quick start

```bash
import { Form, FormField, FormDataType } from "react-formez";

const App = () => {
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
    return (
        <Form
            formSpecs={formFields}
            onSubmit={handleSubmit}
        />
    );
}
```

## Documentation

### Form

| Parameter   | Type                                                                                                        | Mandatory    | Description                                                                                                                                                                     |
| ----------- | ----------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `formSpecs` | [`FormField[]`](#formfield) \| `(props:`[`FormSpecProps`](#formspecprops)`)` => [`FormField[]`](#formfield) | **Required** | Form schema to populate UI and corresponding states.<br>`(props: FormSpecProps) => FormField[]` is used to utilize inbuilt form functions and validate using associated fields. |
| `onSubmit`  | `(isFormValid: boolean, data: FormDataType) => void`                                                        | **Required** | Form Submit Handler.                                                                                                                                                            |
| `className` | `string`                                                                                                    | Optional     | Custom CSS class name.                                                                                                                                                          |
| `style`     | `object`                                                                                                    | Optional     | Inline CSS Properties.                                                                                                                                                          |

### FormField

| Parameter   | Type                                                                                                                                                                                         | Mandatory       | Description                                                                |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | -------------------------------------------------------------------------- |
| `type`      | `"text" \| "email" \| "date" \| "time" \| "datetime-local" \| "password" \| "color" \| "file" \| "range" \| "radio" \| "checkbox" \| "dropdown" \| "button" \| "submit"\| "row" \| "column"` | **Required**    | Form field type.                                                           |
| `id`        | `string`                                                                                                                                                                                     | **Required**    | Form field unique id.                                                      |
| `label`     | `string`                                                                                                                                                                                     | **Required**    | Form field label.                                                          |
| `options`   | `string[]`                                                                                                                                                                                   | **Conditional** | Form field options. Mandatory for fields: `checkbox`, `radio`, `dropdown`. |
| `onClick`   | `MouseEventHandler<HTMLButtonElement>`                                                                                                                                                       | **Conditional** | Form button onClick. Mandatory for field: `button`.                        |
| `children`  | `JSX Element`                                                                                                                                                                                | **Conditional** | Form button children. Mandatory for fields: `button`, `submit`.            |
| `validator` | [`FormInputValidatorType[]`](#forminputvalidatortype)                                                                                                                                        | Optional        | Form field custom validation.                                              |
| `value`     | `string`                                                                                                                                                                                     | Optional        | Form field default value.                                                  |
| `required`  | `boolean`                                                                                                                                                                                    | Optional        | Required field.                                                            |
| `disabled`  | `boolean`                                                                                                                                                                                    | Optional        | Disabled field.                                                            |
| `className` | `string`                                                                                                                                                                                     | Optional        | Custom CSS class name.                                                     |
| `style`     | `object`                                                                                                                                                                                     | Optional        | Inline CSS Properties.                                                     |
| `onChange`  | `(event: ChangeEvent<HTMLInputElement>) => void`                                                                                                                                             | Optional        | Form field onChange handler.                                               |

You can also include all the HTML Input attributes along with these.

### FormSpecProps

| Parameter    | Type                         | Description                                 |
| ------------ | ---------------------------- | ------------------------------------------- |
| `data`       | `object`                     | Form data.                                  |
| `updateData` | `(data: FormDataType): void` | In-built function to update the form state. |
| `resetData`  | `(): void`                   | In-built function to reset the form state.  |

### FormInputValidatorType

| Parameter  | Type                         | Description                                   |
| ---------- | ---------------------------- | --------------------------------------------- |
| `message`  | `string`                     | Validation Message.                           |
| `validate` | `(value: string) => boolean` | Function which validates form field onChange. |

## Examples

### 1. Form with custom validation

```bash
import { Form, FormField, FormDataType } from "react-formez";

const App = () => {
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
    return (
        <Form
            formSpecs={formFields}
            onSubmit={handleSubmit}
        />
    );
}
```

In this example, we have utilized the `validator` attribute to implement custom validation for the email, phone number, and password fields.

Note: `validator` attribute can accept multiple validations. As demonstrated in the phone number validation, the validations are executed from top to bottom, and the first captured validation message will be displayed in the UI.

### 2. Form with associated fields and other inbuild functions

```bash
import { Form, FormField, FormSpecProps, FormDataType } from "react-formez";

const App = () => {
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
    return (
        <Form
            formSpecs={renderFormFields}
            onSubmit={handleSubmit}
        />
    );
}
```

In this example, we have demonstrated how to use associated fields to validate a field like `confirmPassword`.

Additionally, we have used the built-in function `resetData` to reset the form inputs, and if required, we can also use `updateData`.
