import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  birthday: ""

}
const UsersForm = ({ getUsers, userSelected, deselectUser }) => {
  const { handleSubmit, register, reset } = useForm();

  useEffect(() => {
    if (userSelected) {
      console.log(userSelected)
      reset(userSelected)
    } else {
      reset(initialValues);
    }

  }, [userSelected])

  const submit = (data) => {
    console.log(data)
    if (userSelected) {
      //alert("actualizando ..")
      axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, data)
        .then(() => {
          getUsers()
          deselectUser()
        })
        .catch((error => console.log(error.response$.data)));

    } else {
      axios.post('https://users-crud1.herokuapp.com/users/', data)
        .then(() => getUsers)
        .catch((error => console.log(error.response$.data)));//lanza error cuando no ponemos bien las propiedades en le input {...register("propiedad")} esta propiedad debe ser escrita igual a la de la API

    }

  }
  return (
    <div className="container-form">
       <form className='users-form' action="" onSubmit={handleSubmit(submit)}>
      <h1>New User</h1>
      <div className="input-container">
        <i class="fa-solid fa-user"></i>
        <label htmlFor="firstName"></label>
        <input {...register("first_name")} type="text" id='firstName' placeholder='First Name' />

        <label htmlFor="lastName"></label>
        <input {...register("last_name")} type="text" id='lastName' placeholder='Last Name' />
      </div>
      <div className="input-container">
        <i class="fa-solid fa-envelope"></i>
        <label htmlFor="email"></label>
        <input {...register("email")} type="text" id='email' placeholder='Email' />
      </div>
      <div className="input-container">
        <i class="fa-solid fa-lock"></i>
        <label htmlFor="password"></label>
        <input {...register("password")} type="text" id='password' placeholder='Password' />
      </div>
      <div className="input-container">
        <i class="fa-solid fa-cake-candles"></i>
        <label htmlFor="birthday" ></label>
        <input {...register("birthday")} type="date" id='birthday' />
      </div>
      <button>upload</button>
    </form>
    </div>
   
  );
};

export default UsersForm;