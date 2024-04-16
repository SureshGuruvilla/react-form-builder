export {default as Form} from "./components/commons/Form/Form"
export * from "./components/commons/Form/@types"

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import Form from './components/commons/Form/Form';
// import { FormSpecProps, FormFieldAttrType, FormDataType } from './components/commons/Form/@types';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <Form 
//       formSpecs={({data, resetData}:FormSpecProps) => {

//         const formFields: FormFieldAttrType[] = [
//           {
//             id: "email",
//             type:"text",
//             label:"Enter email",
//             required: true
//           },
//           {
//             id: "cta",
//             type: "col-layout",
//             className: "justify-end",
//             fields:[
//               {
//                 id: "clear",
//                 type: "button",
//                 value: "Reset",
//                 onClick: ()=>{resetData()}
//               },
//               {
//                 id: "submit",
//                 type: "submit",
//                 value: "Submit"
//               }
//             ]
//           }
//         ]
//         return formFields;
//       }}
//       onSubmit={(isFormValid: boolean, data: any)=>{
//         console.log(isFormValid, data);
//       }} 
//       />
//   </React.StrictMode>
// );