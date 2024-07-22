"use client";
import React, { useState } from "react";
import { IMaskInput } from "react-imask";
import { toast } from "react-toastify";
import Button from "../UI/button";
import "./styles.sass";

const Contacts = () => {
  const phoneMask = "+998 (00) 000-00-00";
  const Mask = [
    {
      mask: phoneMask,
    },
  ];
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    phone: "",
    city: "",
    mail: "",
  });

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
    const response = await fetch("/api/submit", {
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
      age: "",
      phone: "",
      city: "",
      mail: "",
    });
  };
  return (
    <section
      className='sectionContacts'
      id='contacts'
    >
      <div className='container'>
        <div className='contactsContainer'>
          <div className='contactsInfo'>
            <div className='contactsTitle'>
              <h3 className='title'>Стать гостем фестиваля!</h3>
            </div>
            <div className='contactsText'>
              <p className='text'>
                Ждем вас фестивале E-motion! Это полный день активностей и открытий в мире экологичного транспорта. Опыт
                для всех возрастов: образовательные мастер-классы, тест-драйвы электроавтомобилей, интерактивные стенды
                с VR-технологиями и зеленые зоны отдыха.
              </p>
            </div>
            <div className='contactsText'>
              <p className='text'>Зарегистрируйтесь прямо сейчас! Вместе мы создаем будущее!</p>
            </div>
          </div>
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
                placeholder='Возраст'
                name='age'
                value={formData.age}
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
        </div>
      </div>
    </section>
  );
};

export default Contacts;
