import React, {useState, createContext, useContext} from 'react';

//create context for the forms
const formContext = createContext();

export const useFormContext = () => useContext(formContext);


const FormProvider = ({children}) => {
    const [formData, setFormData] = useState({});

    const updateField = (name, value) => {
        setFormData(prev => ({...prev, [name]:value}));
    };

    return (
        <formContext.Provider value={{formData, updateField}}>
            {children}
        </formContext.Provider>
    );
}


export default FormProvider