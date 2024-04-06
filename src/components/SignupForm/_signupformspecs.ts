import { FormFieldAttrType, FormSpecProps } from "../commons/Form/@types";
export const specs = ({data, resetData}:FormSpecProps) => {

  const formFields: FormFieldAttrType[] = [
    {
      id: "name",
      type: "col-layout",
      fields:[
        {
          id: "firstName",
          type: "text",
          label: "Enter firstName",
          onChange: ()=>{console.log("onchnage")},
          required: true
        },

        {
          id: "lastName",
          type: "text",
          label: "Enter lastName"
        },
        {
          id: "date",
          type: "row-layout",
          fields:[
            {
              id:"bd",
              type:"date",
              label:"Date"
            },
            {
              id:"bdt",
              type:"time",
              label:"Time"
            }
          ]
        }
      ]
    },
    {
      id: "color",
      type: "color",
      label: "Select your color",
      value: '#d5d5d5'
    },
    {
      id: "dp",
      type: "file",
      label: "Upload",
      accept: "image/*",
      required: true
    },
    {
      id: "dt",
      type: "datetime-local",
      label: "DateTime"
    },
    {
      id: "email",
      type:"text",
      label:"Enter email"
    },
    {
      id: "phoneno",
      type:"text",
      label:"Enter phoneno"
    },
    {
      id:"dropdown",
      type: "dropdown",
      label: "Select a value",
      required: true,
      options:[
        "one",
        "two"
      ]
    },
    {
      id: "checkbox",
      type: "checkbox",
      label: "Label",
      checked: true,
      required: true
    },
    {
      id: "passwordlayout",
      type: "col-layout",
      fields:[
        {
          id: "password",
          type: "password",
          label: "Enter your password"
        },
        {
          id: "confirmPassword",
          type: "password",
          label: "Confirm your password"
        }
      ]
    },
    {
      id: "cta",
      type: "col-layout",
      style: {justifyContent: "flex-end"},
      fields:[
        {
          id: "clear",
          type: "button",
          value: "Reset",
          onClick: ()=>{resetData()}
        },
        {
          id: "submit",
          type: "submit",
          value: "Submit"
        }
      ]
    }
  ]
  return formFields;
}