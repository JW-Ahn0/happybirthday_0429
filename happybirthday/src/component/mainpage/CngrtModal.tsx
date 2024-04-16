import Modal from 'react-modal';
import styled from '@emotion/styled';
import { useState } from 'react';

interface modalProps {
    modalOpen: boolean;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CngrtModal = ({ modalOpen, setModalOpen }: modalProps) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
        
    const cngrtModalTitle = "축하 메시지 작성"

    function handleSubmit() {
        const data = {
            title,
            author,
            content
        };
        const jsonData = JSON.stringify(data);
        alert("아직 개발 중인 기능이예요! 그래도 작성해주셔서 감사해요!!");
    }   

    function closeModal(){
        setModalOpen(false)
    }
   return (
    <CngrtMsgButtonWrapper>
        <Modal 
            style={customStyles}
            isOpen={modalOpen} 
            onRequestClose={closeModal}
            shouldCloseOnOverlayClick={true} // 모달 바깥 영역 클릭 시 닫힘 설정
            ariaHideApp={false}
        >
            <ModalContent>
                <h2>{cngrtModalTitle}</h2>
                <div>
                    <input 
                        className = 'modal-input' 
                        type="text" 
                        placeholder='제목'
                        onChange={(e) => setTitle(e.target.value)} 
                    />
                </div>
                <div>
                    <input 
                        className='modal-input' 
                        type="text" 
                        placeholder='작성자'
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>
                <div>
                    <textarea 
                        className='modal-textarea' 
                        rows={4} 
                        cols={50} 
                        placeholder='내용'
                        onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                </div>
                <div className='modal-buttons'>
                    <button className='modal-close' onClick={closeModal}>닫기</button>
                    <button className='modal-button' onClick={handleSubmit}>제출</button>
                </div>
            </ModalContent>
        </Modal>
    </CngrtMsgButtonWrapper>

   )
}

export default CngrtModal;

const CngrtMsgButtonWrapper = styled.div`

`
const ModalContent = styled.div`
.modal-textarea {
    width: 100%;
    min-height: 200px;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
}

.modal-input {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
  }

.modal-button {
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
}
.modal-close {
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    background-color: #ccc;
}

.modal-buttons{
    display: flex;
    justify-content: end;
    gap: 10px;
}
`
const customStyles = {
    content: {
        borderRadius: '15px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '20px',
        backgroundColor: 'white',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '40%', // 가로 크기 조정
        height: '45%', // 세로 크기 조정
        overflow:'hidden',
    },
    overlay: {
        zIndex: 1000,
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    }
  };
  
