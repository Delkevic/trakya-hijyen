import React, { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import SuccessModal from './success';

const Form = ({ formData, setFormData, category, setCategory }) => {
    const [showSuccess, setShowSuccess] = useState(false);
    const [captchaValue, setCaptchaValue] = useState(null);
    const recaptchaRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!captchaValue) {
            alert('Lütfen captcha doğrulamasını yapın');
            return;
        }

        console.log("Gönderilen Veriler:", formData, category);
        setShowSuccess(true);
        
        recaptchaRef.current.reset();
        setCaptchaValue(null);
        
        setTimeout(() => {
            setShowSuccess(false);
        }, 2000);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCaptchaChange = (value) => {
        setCaptchaValue(value);
    };

    const handleInputChangeCategory = (e) => {
        const { name, value } = e.target;
        setCategory(prev => ({
            ...prev,
            [name]: value
        }));
    }

    return (
        <div className="form-container">
            <SuccessModal show={showSuccess} />
            
            <form onSubmit={handleSubmit} className="feedback-form">
                <div className="form-group">
                    <label htmlFor="category" className="form-label">
                        Kategori Seçin
                    </label>
                    <select
                        id="category"
                        name="category"
                        value={category.category}
                        onChange={handleInputChangeCategory}
                        className="form-select"
                    >
                        <option value="temizlik">Temizlik</option>
                        <option value="arıza">Arıza</option>
                        <option value="diğer">Diğer</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="comment" className="form-label">
                        Yorumunuzu Yazın
                    </label>
                    <textarea
                        id="comment"
                        name="comment"
                        rows="4"
                        placeholder="Yorumunuzu buraya yazabilirsiniz..."
                        value={formData.comment}
                        onChange={handleInputChange}
                        className="form-textarea"
                    />
                </div>

                <div className="captcha-container">
                    <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey="6LcY1cYqAAAAAIz517xSPqiv1NOGK0XxxnK2iMpa"
                        onChange={handleCaptchaChange}
                        theme="light"
                    />
                </div>

                <button type="submit" className="submit-button">
                    Gönder
                </button>
            </form>

            <style jsx>{`
                .form-container {
                    padding: 20px;
                    max-width: 500px;
                    margin: 0 auto;
                }

                .feedback-form {
                    background: white;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }

                .form-group {
                    margin-bottom: 20px;
                }

                .form-label {
                    display: block;
                    margin-bottom: 8px;
                    font-weight: 500;
                    color: #333;
                }

                .form-select {
                    width: 100%;
                    padding: 10px;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    font-size: 16px;
                    color: #333;
                    background-color: white;
                }

                .form-select:focus {
                    outline: none;
                    border-color: #4A90E2;
                    box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
                }

                .form-textarea {
                    width: 100%;
                    padding: 10px;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    font-size: 16px;
                    color: #333;
                    min-height: 100px;
                    resize: vertical;
                }

                .form-textarea:focus {
                    outline: none;
                    border-color: #4A90E2;
                    box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
                }

                .form-textarea::placeholder {
                    color: #999;
                }

                .submit-button {
                    width: 100%;
                    padding: 12px;
                    background-color: #4A90E2;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    font-size: 16px;
                    font-weight: 500;
                    cursor: pointer;
                    transition: background-color 0.2s ease;
                }

                .submit-button:hover {
                    background-color: #357ABD;
                }

                @media (max-width: 576px) {
                    .form-container {
                        padding: 10px;
                    }

                    .feedback-form {
                        padding: 15px;
                    }

                    .form-select,
                    .form-textarea {
                        font-size: 14px;
                    }
                }
            `}</style>
        </div>
    );
};

export default Form;