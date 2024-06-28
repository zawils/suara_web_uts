import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PageLaporan.css";

const PageLaporan = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nama: '',
    jenis_aduan: '',
    foto: null,
    deskripsi: '',
    lokasi: '',
    no_handphone: ''
  });
  const [isVerified, setIsVerified] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setForm(prev => ({ ...prev, [name]: files[0] }));
  };

  const handleSubmit = useCallback(async () => {
    if (!isVerified) {
      alert('Anda harus mencentang kotak verifikasi.');
      return;
    }

    if (!form.nama || !form.jenis_aduan || !form.deskripsi || !form.lokasi || !form.no_handphone || !form.foto) {
      alert('Semua field harus diisi.');
      return;
    }

    const formData = new FormData();
    formData.append('nama', form.nama);
    formData.append('jenis_aduan', form.jenis_aduan);
    formData.append('foto', form.foto);
    formData.append('deskripsi', form.deskripsi);
    formData.append('lokasi', form.lokasi);
    formData.append('no_handphone', form.no_handphone);

    try {
      const response = await fetch('http://127.0.0.1:5000/api/v1/pengajuan_laporan/create', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      console.log(responseData);
      navigate("/pageberanda");
    } catch (error) {
      console.error('Failed to submit form:', error);
    }
  }, [form, navigate, isVerified]);

  const onAKUNTextClick = useCallback(() => {
    navigate("/pageaccount");
  }, [navigate]);

  const onNavBerandaContainerClick = useCallback(() => {
    navigate("/pageberanda");
  }, [navigate]);

  return (
    <div className="pagelaporan">
      <div className="navberanda3">
        <div className="rectangle-div" />
        <div className="navakun2">
          <div className="navakun-inner" />
          <b className="akun2" onClick={onAKUNTextClick}>
            AKUN
          </b>
          <img className="codiconaccount1" alt="" src="/codiconaccount.svg" />
        </div>
        <div className="navberanda4" onClick={onNavBerandaContainerClick}>
          <div className="navakun-inner" />
          <b className="beranda2">BERANDA</b>
          <img className="vector-icon18" alt="" src="/vector1.svg" />
        </div>
        <div className="navlaporan2">
          <div className="navakun-inner" />
          <b className="laporan2">LAPORAN</b>
          <img className="carbonreport-icon1" alt="" src="/carbonreport.svg" />
        </div>
        <img
          className="whatsapp-image-2024-04-30-at-14"
          alt=""
          src="/whatsapp-image-20240430-at-1638-1@2x.png"
        />
      </div>
      <div className="profile1">
        <div className="rafael-rachel-struick2">Rafael Rachel Struick</div>
        <img className="ellipse-icon2" alt="" src="/ellipse@2x.png" />
      </div>
      <div className="formlaporan">
        <div className="formlaporan-child" />
        <div className="inputnama">
          <div className="nama"></div>
          <input
            className="input-field"
            name="nama"
            value={form.nama}
            onChange={handleChange}
            placeholder="Nama"
          />
        </div>
        <div className="inputjenisaduan">
          <div className="nama"></div>
          <input
            className="input-field"
            name="jenis_aduan"
            value={form.jenis_aduan}
            onChange={handleChange}
            placeholder="Jenis Aduan"
          />
        </div>
        <div className="inputfoto">
          <div className="judulfoto">Foto</div>
          <input
            className="input-field"
            name="foto"
            type="file"
            onChange={handleFileChange}
            placeholder="Foto"
          />
        </div>
        <div className="inputdeskripsi">
          <div className="nama"></div>
          <textarea
            className="input-field"
            name="deskripsi"
            value={form.deskripsi}
            onChange={handleChange}
            placeholder="Deskripsi"
          />
        </div>
        <div className="inputlokasi">
          <div className="no-handphone"></div>
          <input
            className="input-field"
            name="lokasi"
            value={form.lokasi}
            onChange={handleChange}
            placeholder="Lokasi"
          />
        </div>
        <div className="inputnohp">
          <div className="no-handphone"></div>
          <input
            className="input-field"
            name="no_handphone"
            value={form.no_handphone}
            onChange={handleChange}
            placeholder="No. Handphone"
          />
        </div>
        <div className="buttonkirim" onClick={isVerified ? handleSubmit : null}>
          <div className="buttonkirim-child" />
          <b className="kirim">KIRIM</b>
        </div>
        <div className="verifikasilaporan">
          <div className="saya-membuat-laporan">
            Saya membuat laporan ini sesuai dengan kenyataan yang ada
            dilapangan, jika saya terbukti melakukan laporan palsu maka saya
            siap diberikan sanski sesuai dengan hukum yang berlaku.
          </div>
          <input
            type="checkbox"
            className="verifikasilaporan-child"
            checked={isVerified}
            onChange={(e) => setIsVerified(e.target.checked)}
          />
        </div>
      </div>
    </div>
  );
};

export default PageLaporan;
