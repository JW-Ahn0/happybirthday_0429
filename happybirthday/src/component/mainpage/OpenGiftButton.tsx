import styled from '@emotion/styled'
import { useState } from 'react';
import AlertModal from './AlertModal';

interface OpenGiftButtonProps {
    isBirthdayAfter: boolean;
  }
  
const OpenGiftButton: React.FC<OpenGiftButtonProps> = ({ isBirthdayAfter }) => {
    const Msg = "선물 개봉하기"
    
    const [alertModalOpen, setAlertModalOpen] = useState(false); // 알림 모달 상태 선언 및 초기화
    const openModal = () => {
        setAlertModalOpen(true); // 모달 열기
    };
    return (
        <>
            <OpenGiftButtonWrapper onClick={openModal}>
                {Msg}
            </OpenGiftButtonWrapper>
            {!isBirthdayAfter && <AlertModal msg="생일이 아직 아니예요!" alertModalOpen={alertModalOpen} setAlertModalOpen={setAlertModalOpen} /> }       
        </>

    )
}

export default OpenGiftButton;


const OpenGiftButtonWrapper = styled.button`

width: 150px;
height: 80px;
border-radius: 15px;
background: #FA3207;


font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 1rem;
text-align: center;

color: #FFFFFF;

white-space: pre-line;

border: none;
outline:none;

:hover{
    background: #D52A07;
    cursor: pointer;
}
`