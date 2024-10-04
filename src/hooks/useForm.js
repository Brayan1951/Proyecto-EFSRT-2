import { useState } from "react";

export function useForm(initState) {
  const [formData, setFormData] = useState(initState);

    const resetForm=()=>{
        setFormData({...initState})
    }

  const changeForm = (e) => {
    // console.log(e);
    
    setFormData(prev=>({
        ...prev,
        [e.target.name]:e.target.value
    })

    )
  };

  return {...formData,changeForm,resetForm};
}
