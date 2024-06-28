import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PageCp.css";

const PageCp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleChangePassword = async () => {
    if (!username || !password) {
      setError('Username dan password wajib diisi.');
      return;
    }

    setIsLoading(true); // Mulai loading

    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    try {
      const response = await fetch('http://127.0.0.1:5000/api/v1/pengajuan_laporan/lupapassword', {
        method: 'PUT',
        body: formData
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.message === "Password diperbarui") {
        navigate("/pagelogin");
      } else {
        setError(data.message || 'Penggantian password gagal. Silakan coba lagi.');
      }
    } catch (error) {
      console.error('Error changing password:', error);
      setError('Terjadi kesalahan dalam mengirim permintaan. Mohon coba lagi.');
    } finally {
      setIsLoading(false); // Selesai loading
    }
  };

  const handleNavigateToLogin = () => {
    navigate("/pagelogin");
  };

  return (
    <div className="pagelupapassword">
      <div className="pagelupapassword-child" />
      <div className="bg-lupapassword">
        <div className="bg-lupapassword-child" />
        <div className="belum-punya-akun">{`Sudah Punya Akun ? `}</div>
        <b className="buat-akun" onClick={handleNavigateToLogin}>Login</b>
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
        <div className="button-lupapassword" onClick={isLoading ? null : handleChangePassword}>
          <div className="button-kirim">
            <div className="button-kirim-child" />
            <div className="lupapassword">
              {isLoading ? "Loading..." : "GANTI PASSWORD"}
            </div>
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

export default PageCp;
