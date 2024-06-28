import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PageAccount.css";

const PageAccount = () => {
  const navigate = useNavigate();

  const onNavBerandaContainerClick = useCallback(() => {
    navigate("/pageberanda");
  }, [navigate]);

  const onNavLaporanContainerClick = useCallback(() => {
    navigate("/pagelaporan");
  }, [navigate]);

  

  return (
    <div className="pageaccount">
      <div className="akunprof">
      <div className="profil-akun">
        <img className="ellipse-icon1" alt="" src="/ellipse@2x.png" />
        <div className="rafael-rachel-struick1">Rafael Rachel Struick</div>
        <div className="rafaelracstrucgmailcom">rafaelracstruc@gmail.com</div>
        <img
          className="icoutline-email-icon"
          alt=""
          src="/icoutlineemail.svg"
        />
      </div>
      <div className="laporanprofil"> 
        <div className="navlaporanprof">
          <div className="no">No</div>
          <div className="jenis-ajuan">Jenis Ajuan</div>
          <div className="foto">Foto</div>
          <div className="lokasi">Lokasi</div>
          <div className="status-laporan">Tanggal</div>
          <img className="navlaporanprof-child" alt="" />
        </div>
        
        <div className="proflap">
          <div className="proflap-child" />
          <div className="profillaporan">
            <img className="image-5-icon1" alt="" src="/image-5@2x.png" />
            <div className="div6">1</div>
            <b className="sampah-numpuk1">Sampah Numpuk</b>
            <b className="jlsahadewa">Jl.Sahadewa</b>
            <img
              className="icon-park-outlinepreview-open"
              alt=""
              src="/iconparkoutlinepreviewopen.svg"
            />
            <b className="review6">Review</b>
          </div>
        </div>
        </div>
      </div>
      <div className="navprofil">
        <div className="navprofil-child" />
        <div className="navakun1">
          <div className="navakun-item" />
          <b className="akun1">AKUN</b>
          <img className="vector-icon14" alt="" src="/codiconaccount.svg" />
        </div>
        <div className="navberanda2" onClick={onNavBerandaContainerClick}>
          <div className="navakun-item" />
          <b className="beranda1">BERANDA</b>
          <img className="vector-icon15" alt="" src="/vector1.svg" />
        </div>
        <div className="navlaporan1" onClick={onNavLaporanContainerClick}>
          <div className="navakun-item" />
          <b className="laporan1">LAPORAN</b>
          <img className="vector-icon16" alt="" src="/vector4.svg" />
          <img className="vector-icon17" alt="" src="/vector5.svg" />
          <div className="carbonreport" />
        </div>
        <img
          className="whatsapp-image-2024-04-30-at-13"
          alt=""
          src="/whatsapp-image-20240430-at-1638-1@2x.png"
        />
      </div>
    </div>
  );
};

export default PageAccount;
