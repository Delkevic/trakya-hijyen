import './App.css';
import Header from './components/header';
import Stars from "./components/stars";
import Form from "./components/form"
import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    rating: '',
    comment: ''
  });

  const [category, setCategory] = useState({
    category: 'temizlik'
  })

  return (
    <div>
      <Header/>
      <Stars formData={formData} setFormData={setFormData}/>
      <Form formData={formData} setFormData={setFormData} category={category} setCategory={setCategory}/>
    </div>
  );
}

export default App;