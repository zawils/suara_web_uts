import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PageCreate.css";

const PageCreate = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCreateAccount = async () => {
    if (!username || !password) {
      setError('Username and password are required.');
      return;
    }

    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    try {
      const response = await fetch('http://127.0.0.1:5000/api/v1/pengajuan_laporan/createacc', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('API response:', data); // Debugging log

      if (data.message === "OK") {
        navigate("/pagelogin");
      } else {
        setError(data.message || 'Account creation failed. Please try again.');
      }
    } catch (error) {
      console.error('Error creating account:', error);
      setError('An error occurred. Please try again.');
    }
  };

  const handleNavigateToLogin = () => {
    navigate("/pagelogin");
  };

  return (
    <div className="pagecreate">
      <div className="pagecreate-child" />
      <div className="bg-create">
        <div className="bg-create-child" />
        <div className="sudah-punya-akun">{`Sudah Punya Akun ? `}</div>
        <b className="login-akun" onClick={handleNavigateToLogin}>Login</b>
        <img
          className="generated-removebg-preview-1-icon"
          alt=""
          src="/730-generatedremovebgpreview-1@2x.png"
        />
      </div>
      <div className="buat">
        <div className="usernamebuat">
          <div className="username11">Username</div>
          <input
            type="text"
            className="username-child1"
            value={username}
            onChange={handleUsernameChange}
          />
          <img className="useroutlined-icon" alt="" src="/useroutlined.svg" />
        </div>
        <div className="passwordcreate">
          <div className="username11">Password</div>
          <input
            type="password"
            className="password-child1"
            value={password}
            onChange={handlePasswordChange}
          />
          <img className="lockoutlined-icon" alt="" src="/lockoutlined.svg" />
        </div>
        <div className="button-login11" onClick={handleCreateAccount}>
          <div className="button-kirim1">
            <div className="button-kirim-child1" />
            <div className="login11">BUAT AKUN</div>
          </div>
        </div>
        {error && <div className="error-message">{error}</div>}
      </div>
      <div className="headline-selamat-datang">
        <div className="selamat-datang-di">Selamat Datang Di,</div>
        <img
          className="whatsapp-image-2024-04-30-at-11"
          alt=""
          src="/whatsapp-image-20240430-at-1648-1@2x.png"
        />
      </div>
    </div>
  );
};

export default PageCreate;
