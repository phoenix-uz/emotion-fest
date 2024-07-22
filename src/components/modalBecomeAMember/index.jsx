"use Client";
import React, { useState } from "react";
import "./styles.sass";
import { IMaskInput } from "react-imask";
import Button from "../UI/button";
import { toast } from "react-toastify";

const ModalBecomeAMember = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    phone: "",
    city: "",
    mail: "",
  });
  const phoneMask = "+998 (00) 000-00-00";
  const Mask = [
    {
      mask: phoneMask,
    },
  ];
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const processedPhone = formData.phone.replace(/\D/g, "");
    const response = await fetch("/api/member", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        phone: processedPhone,
      }),
    });
    if (response.status === 200 || response.status === 201) {
      toast.success("Поздравялем, ваша заявка принята!");
    } else {
      toast.error("К сожалению, что-то пошло не так, попробуйте еще раз :(");
    }
    setFormData({
      fullName: "",
      companyName: "",
      phone: "",
      city: "",
      mail: "",
    });
  };
  return (
    <form
      className='contactsForm'
      onSubmit={handleSubmit}
    >
      <div className='inputBox'>
        <input
          type='text'
          className='input'
          name='fullName'
          placeholder='Ф.И.О'
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>
      <div className='inputBox'>
        <input
          type='text'
          className='input'
          placeholder='Название компании'
          name='companyName'
          value={formData.companyName}
          onChange={handleChange}
          required
        />
      </div>
      <div className='inputBox'>
        <input
          type='text'
          className='input'
          placeholder='Город'
          name='city'
          value={formData.city}
          onChange={handleChange}
          required
        />
      </div>
      <div className='inputBox'>
        <input
          type='email'
          className='input'
          placeholder='E-mail'
          name='mail'
          value={formData.mail}
          onChange={handleChange}
          required
        />
      </div>
      <div className='inputBox'>
        <IMaskInput
          name='phone'
          className='input'
          placeholder='Номер телефона'
          mask={Mask}
          value={formData.phone}
          onChange={handleChange}
          pattern='[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}'
          maxLength={19}
          required
        />
      </div>
      <Button>Подать заявку</Button>
    </form>
  );
};

export default ModalBecomeAMember;
