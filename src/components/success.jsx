import React from "react";

const Success = ({ show }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="success-modal">
        <div className="success-icon">✓</div>
        <h2>Raporunuz alındı!</h2>
        <p>En kısa sürede size yardımcı olacağız.</p>
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          animation: fadeIn 0.3s ease-out;
        }

        .success-modal {
          background: white;
          padding: 30px;
          border-radius: 8px;
          text-align: center;
          max-width: 400px;
          width: 90%;
          animation: slideIn 0.3s ease-out;
        }

        .success-icon {
          width: 60px;
          height: 60px;
          background: #e8f5e9;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          font-size: 30px;
          color: #4caf50;
        }

        h2 {
          margin: 0 0 10px;
          color: #333;
          font-size: 24px;
          font-weight: 500;
        }

        p {
          margin: 0;
          color: #666;
          font-size: 16px;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideIn {
          from {
            transform: translateY(-20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @media (max-width: 576px) {
          .success-modal {
            width: 85%;
            padding: 20px;
          }

          .success-icon {
            width: 50px;
            height: 50px;
            font-size: 24px;
          }

          h2 {
            font-size: 20px;
          }

          p {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default Success;
