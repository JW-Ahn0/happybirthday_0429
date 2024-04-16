import styled from '@emotion/styled'
import { useState } from 'react';
import CngrtModal from './CngrtModal'; // 모달 컴포넌트 import

const CngrtMsgButton = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false); // 모달 상태 선언 및 초기화
    const Msg = "축하 메시지\n작성하기"

    const openModal = () => {
        setModalOpen(true); // 모달 열기

    };

    return (
        <>
            <CngrtMsgButtonWrapper onClick={openModal}>
                {Msg}
            </CngrtMsgButtonWrapper>
            <CngrtModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </>

    )
}

export default CngrtMsgButton;

const CngrtMsgButtonWrapper = styled.button`   

width: 150px;
height: 80px;
border-radius: 15px;
background: #B05DAD;

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
    background: #8C3E8F;
    cursor: pointer;
}

`
