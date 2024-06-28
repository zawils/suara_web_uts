import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PageLogin.css";

const PageLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [resetEmail, setResetEmail] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    if (!username || !password) {
      setError('Username and password are required.');
      return;
    }

    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    try {
      const response = await fetch('http://127.0.0.1:5000/api/v1/pengajuan_laporan/login', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.message === "OK") {
        navigate("/pageberanda");
      } else {
        setError(data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('An error occurred. Please try again.');
    }
  };

  const handleNavigateToCreate = () => {
    navigate("/pagecreate");
  };

  const handleNavigateToChange = () => {
    navigate("/pagecp");
  };

  return (
    <div className="pagelogin">
      <div className="pagelogin-child" />
      <div className="bg-login">
        <div className="bg-login-child" />
        <div className="or-login-with">OR LOGIN WITH EMAIL</div>
        <div className="belum-punya-akun">{`Belum Punya Akun ? `}</div>
        <b className="buat-akun" onClick={handleNavigateToCreate}>Buat Akun</b>
        <img
          className="generated-removebg-preview-1-icon"
          alt=""
          src="/730-generatedremovebgpreview-1@2x.png"
        />
      </div>
      <div className="masuk">
        <div className="username">
          <div className="username1">Username</div>
          <input
            type="text"
            className="username-child"
            value={username}
            onChange={handleUsernameChange}
          />
          <img className="useroutlined-icon" alt="" src="/useroutlined.svg" />
        </div>
        <div className="button-login-gmail">
          <div className="button-login-gmail-child" />
          <img className="vector-icon" alt="" src="/vector.svg" />
          <div className="login-with-google">Login With Google</div>
        </div>
        <div className="password">
          <div className="username1">Password</div>
          <input
            type="password"
            className="password-child"
            value={password}
            onChange={handlePasswordChange}
          />
          <img className="lockoutlined-icon" alt="" src="/lockoutlined.svg" />
        </div>
        <div className="button-login1" onClick={handleLogin}>
          <div className="button-kirim">
            <div className="button-kirim-child" />
            <div className="login1">LOGIN</div>
          </div>
          <div className="lupa-password" onClick={handleNavigateToChange}>
            Lupa Password ?
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

export default PageLogin;
