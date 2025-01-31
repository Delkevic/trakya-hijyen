import "./App.css";
import Header from "./components/header";
import Stars from "./components/stars";
import Form from "./components/form";
import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    rating: "",
    comment: "",
    category: "temizlik",
  });

  const handleFormSubmit = async (captchaValue) => {
    try {
      const response = await fetch("YOUR_API_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          captcha: captchaValue,
        }),
      });

      if (!response.ok) {
        throw new Error("Form gönderiminde hata oluştu");
      }

      const data = await response.json();
      console.log("Form başarıyla gönderildi:", data);

      // Formu sıfırla
      setFormData({
        rating: "",
        comment: "",
        category: "temizlik",
      });

      return true;
    } catch (error) {
      console.error("Form gönderim hatası:", error);
      return false;
    }
  };

  return (
    <div>
      <Header />
      <Stars formData={formData} setFormData={setFormData} />
      <Form
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
}

export default App;
