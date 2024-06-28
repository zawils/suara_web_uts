import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./PageDashboard.css";

const PageDashboard = () => {
  const navigate = useNavigate();

  const onButtonLoginContainerClick = useCallback(() => {
    navigate("/pagelogin");
  }, [navigate]);

  return (
    <div className="pagedashboard">
      <img
        className="dfe71791-b199-4c0f-9620-638894-icon"
        alt=""
        src="/dfe71791b1994c0f96206388941f0520transformedremovebgpreview-1@2x.png"
      />
      <div className="button-laporkan">
        <div className="button-laporkan-child" />
        <b className="laporkan">Laporkan</b>
      </div>
      <div className="button-login" onClick={onButtonLoginContainerClick}>
        <div className="button-login-child" />
        <b className="login">Login</b>
      </div>
      <div className="deskripsisuara">
        <div className="platform-pengaduan-layanan-container">
          <p className="platform-pengaduan-layanan">
            Platform pengaduan layanan masyarakat yang didedikasikan untuk
            memberikan suara kepada semua. SUARA hadir sebagai wadah untuk
            memungkinkan masyarakat menyuarakan masalah, kekhawatiran, dan
            pengalaman mereka terkait layanan publik.
          </p>
          <p className="platform-pengaduan-layanan">&nbsp;</p>
          <p className="platform-pengaduan-layanan">
            Dengan SUARA, Anda memiliki kesempatan untuk membuat perubahan yang
            signifikan dalam komunitas Anda. Apakah Anda menghadapi masalah
            dengan layanan kesehatan, transportasi, pendidikan, atau layanan
            publik lainnya, SUARA adalah tempat di mana suara Anda didengar.
          </p>
        </div>
        <div className="pengaduan-layanan-masyarakat">{`Pengaduan layanan masyarakat `}</div>
        <div className="suara">SUARA</div>
        <img
          className="whatsapp-image-2024-04-30-at-1"
          alt=""
          src="/whatsapp-image-20240430-at-1638-1@2x.png"
        />
      </div>
      <div className="buttom">
        <div className="buttom-child" />
        <div className="laporant">
        <div className="pengaduan-online">
          <div className="pengaduan-online-child" />
          <b className="pengaduan-online1">Pengaduan Online</b>
          <div className="anda-dapat-dengan">
            Anda dapat dengan mudah mengajukan pengaduan secara online melalui
            platform SUARA, memberikan detail lengkap tentang masalah yang Anda
            hadapi.
          </div>
          <img className="serenade-icon" alt="" src="/serenade@2x.png" />
        </div>
        <div className="informasi-laoran-pengaduan">
          <div className="pengaduan-online-child" />
          <div className="suara-menyediakan-informasi">
            SUARA menyediakan informasi progres laporan untuk melihat sejauh
            mana laporan sudah diterima.
          </div>
          <b className="informasi-laporan-pengaduan-container">
            <p className="platform-pengaduan-layanan">Informasi Laporan</p>
            <p className="platform-pengaduan-layanan">Pengaduan</p>
          </b>
          <img
            className="graph-report-icon"
            alt=""
            src="/graph-report@2x.png"
          />
        </div>
        <div className="pemantuan-kinerja">
          <div className="pengaduan-online-child" />
          <div className="suara-bekerja-sama">
            SUARA bekerja sama dengan pihak terkait untuk memantau kinerja
            layanan publik dan memastikan bahwa masalah yang dilaporkan
            ditangani secara efektif.
          </div>
          <b className="pemantauan-kinerja">Pemantauan Kinerja</b>
          <img className="system-task-icon" alt="" src="/system-task@2x.png" />
        </div>
        <div className="informasi-laoran-pengaduan1">
          <div className="pengaduan-online-child" />
          <div className="suara-menyediakan-informasi1">
            SUARA menyediakan informasi progres laporan untuk melihat sejauh
            mana laporan sudah diterima.
          </div>
          <b className="pelacakan-pengaduan">Pelacakan Pengaduan</b>
          <img className="system-task-icon" alt="" src="/tracking@2x.png" />
        </div>
        </div>
        <div className="kenapa-mengadu-di">Kenapa mengadu di SUARA ?</div>
        
      </div>
    </div>
  );
};

export default PageDashboard;
