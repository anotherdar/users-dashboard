import React from 'react';
import './App.css';
import { Input } from './components/Input';

import {useForm} from 'react-hook-form'

type FormValues = {
  [key: string]: string
}

function App() {
  const {register, handleSubmit, errors} = useForm<FormValues>({
    mode: 'onBlur'
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Input 
          name="name"
          ref={register({required: 'Name is required'})}
          label="Name"
          error={errors.name ? errors?.name?.message : ''}
        />
        <button type="submit">send</button>
      </form>
    </div>
  );
}

export default App;
