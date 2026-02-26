import { useState } from "react";

export const useFormBuilder = () => {
  const [fields, setFields] = useState([]);
  const [onSubmit, setOnSubmit] = useState(null);

  const builder = {
    addTextField: (name: string, label: string) => {
      setFields(prev => [...prev, { type: 'text', name, label }]);
      return builder;
    },
    
    addEmailField: (name: string, label: string) => {
      setFields(prev => [...prev, { type: 'email', name, label }]);
      return builder;
    },
    
    addCustomField: (fieldConfig: any) => {
      setFields(prev => [...prev, fieldConfig]);
      return builder;
    },
    
    setSubmit: (handler: (data: any) => void) => {
      setOnSubmit(() => handler);
      return builder;
    },
    
    build: () => {
      return <Form fields={fields} onSubmit={onSubmit} />;
    }
  };

  return builder;
};

