import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import InputCheckbox from '../Form/InputCheckbox'
import InputText from '../Form/InputText'
import InputTextArea from '../Form/InputTextArea'

import './new-profile-form.scss'

const NewProfileForm = () => {
  const [isUrlBased, setIsUrlBased] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  const toggleUrlBased = event => {
    const element = event.target

    setIsUrlBased(element.checked)
  }

  return (
    <form className="new-profile-form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="new-profile-form__title">
        Profile info
      </h2>

      <InputText label="profile name" {...register("profileName", {required: true})}/>
      
      <InputText label="description (optional)" {...register("description")}/>

      <InputCheckbox
        name="by-url"
        label="Automatically activate by URL"
        onChange={toggleUrlBased}
      />
      {
        isUrlBased ? 
          <InputTextArea
            helperText="Use comma between urls, example: www.google.com, www.bruno.dev"
            label="URLs"
            {...register("urls", { required: true })}
          /> : null 
      }

      <input type="submit" /> 
    </form>
  )
}

export default NewProfileForm