import React from 'react';
import Stepper from 'react-stepper-horizontal/lib/Stepper';
import { Col, Container, Row } from 'reactstrap';
import { useNavigate } from 'react-router-dom'; 

import ArrowLeft from '../../assets/images/ArrowLeft.png';

function HeaderStepper(props) {
  const { active } = props;
  const { orderID } = props;
  const navigate = useNavigate(); 

  const handleBack = () => {
    navigate(-1); 
  };

  return (
    <Container>
      <Row>
        <Col sm={4} className="flex align-items-center">
          <div>
            <img
              src={ArrowLeft}
              style={{ marginTop: '-16px', cursor: 'pointer' }}
              alt="BackArrow"
              onClick={handleBack}
            />
          </div>
          <p style={{ marginLeft: '10px' }}>
            Pembayaran
            <br />
            <span style={{ fontSize: '12px', fontWeight: '400' }}>
              Order ID: {orderID}
            </span>
          </p>
        </Col>
        <Col sm={5} style={{ opacity: '0%' }}>
          hello
        </Col>
        <Col sm={3}>
          <Stepper
            steps={[
              { title: 'Pilih Metode' },
              { title: 'Bayar' },
              { title: 'Tiket' }
            ]}
            activeStep={active}
            size={30}
            circleFontSize={15} 
            titleFontSize={15} 
            activeColor="#0D28A6"
            completeColor="#0D28A6"
            defaultBorderColor="#0D28A6"
            defaultBorderStyle="solid"
            defaultBorderWidth={1}
            defaultColor="#F1F3FF"
            defaultTitleColor="#000"
            completeBarColor="#0D28A6" 
            activeTitleColor="#0D28A6" 
            activeBorderColor="#0D28A6" 
            completeTitle={<i className="bi bi-check2" />} // Menggunakan icon checklist untuk langkah yang sudah selesai
          />
        </Col>

      </Row>
    </Container>
  );
}

export default HeaderStepper;
