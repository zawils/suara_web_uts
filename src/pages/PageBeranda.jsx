import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./PageBeranda.css";

const PageBeranda = () => {
  const [laporan, setLaporan] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedLaporan, setSelectedLaporan] = useState(null);
  const navigate = useNavigate();

  const onNavAkunContainerClick = useCallback(() => {
    navigate("/pageaccount");
  }, [navigate]);

  const onNavLaporanContainerClick = useCallback(() => {
    navigate("/pagelaporan");
  }, [navigate]);

  const handleReviewClick = (laporan) => {
    setSelectedLaporan(laporan);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedLaporan(null);
  };

  const handleDeleteLaporan = () => {
    fetch(`http://127.0.0.1:5000/api/v1/pengajuan_laporan/delete/${selectedLaporan.product_id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === "Data deleted") {
          setLaporan(prevLaporan => prevLaporan.filter(item => item.product_id !== selectedLaporan.product_id));
          handleCloseModal();
        } else {
          console.error('Gagal menghapus data:', data);
        }
      })
      .catch(error => {
        console.error('Kesalahan saat menghapus data:', error);
      });
  };

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/v1/pengajuan_laporan/read')
      .then(response => response.json())
      .then(data => {
        if (data && Array.isArray(data.datas)) {
          setLaporan(data.datas);
        } else {
          console.error('Data yang diharapkan berupa array, tetapi diterima:', data);
          setLaporan([]);
        }
      })
      .catch(error => {
        console.error('Kesalahan saat mengambil data:', error);
        setLaporan([]);
      });
  }, []);

  return (
    <div className="pageberanda">
      <div className="navberanda">
        <div className="navberanda-child" />
        <div className="navakun" onClick={onNavAkunContainerClick}>
          <div className="navakun-child" />
          <b className="akun">AKUN</b>
          <img className="codiconaccount" alt="" src="/codiconaccount.svg" />
        </div>
        <div className="navberanda1">
          <div className="navakun-child" />
          <b className="beranda">BERANDA</b>
          <img className="vector-icon1" alt="" src="/vector1.svg" />
        </div>
        <div className="navlaporan" onClick={onNavLaporanContainerClick}>
          <div className="navakun-child" />
          <b className="laporan">LAPORAN</b>
          <img className="carbonreport-icon" alt="" src="/carbonreport.svg" />
        </div>
        <img
          className="whatsapp-image-2024-04-30-at-12"
          alt=""
          src="/whatsapp-image-20240430-at-1638-1@2x.png"
        />
      </div>
      <div className="profil-atas">
        <div className="profile">
          <div className="rafael-rachel-struick">Rafael Rachel Struick</div>
          <img className="ellipse-icon" alt="" src="/ellipse@2x.png" />
        </div>
        <div className="searchbar">
          <div className="searchbar-child" />
          <div className="search">Search</div>
          <img className="search-icon" alt="" src="/search@2x.png" />
        </div>
      </div>
      <Container fluid style={{ paddingLeft: '100px', paddingTop: '150px' }}>
        <Row>
          {laporan.map((item, i) => (
            <Col key={i} md={4} className="mb-4">
              <Card className="shadow-sm" style={{ width: '20rem', borderRadius: '10px', textAlign: 'center' }}>
                <Card.Img 
                  variant="top" 
                  src={`http://127.0.0.1:5000/api/v1/pengajuan_laporan/uploads/${item?.foto}`} 
                  style={{ height: '250px', objectFit: 'cover' }} 
                />
                <Card.Body>
                  <Card.Title className="text-primary" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                    {item?.jenis_aduan}
                  </Card.Title>
                  <Card.Text style={{ fontSize: '1.2rem', textAlign: 'left' }}>
                    <div style={{ marginBottom: '10px' }}>
                      <strong>Dari:</strong> <span>{item?.nama}</span>
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                      <strong>Lokasi:</strong> <span>{item?.lokasi}</span>
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                      <strong>Deskripsi:</strong>
                      <div>{item?.deskripsi}</div>
                    </div>
                  </Card.Text>
                  <Button variant="primary" onClick={() => handleReviewClick(item)}>Review</Button>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted" style={{ fontSize: '1.2rem' }}>{item?.uploaded_at}</small>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Hapus Laporan</Modal.Title>
        </Modal.Header>
        <Modal.Body>Apakah Anda yakin ingin menghapus laporan ini?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Batal
          </Button>
          <Button variant="danger" onClick={handleDeleteLaporan}>
            Hapus
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PageBeranda;
