import Modal from 'react-modal';
import styled from '@emotion/styled';

import { useState } from 'react';

import { ref, update  } from "firebase/database";
import { database } from '../../firebase';
import Dropzone from './Dropzone';

function setData(title :string, author:string, content:string ,uuid:string) {
    update(ref(database, 'CngrtMsg/' +uuid), {
        title: title,
        author: author,
        content : content,
    });
}
function setImgUrlData(uuid:string, imgUrl:string) {
    update(ref(database, 'CngrtMsg/' +uuid), {
        imgUrl: imgUrl,
    });
}
interface modalProps {
    modalOpen: boolean;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    closeCngrtModal : () => void;
    uuid : string;
    setUuid:React.Dispatch<React.SetStateAction<string>>;
}

const CngrtModal = ({ modalOpen, setModalOpen,closeCngrtModal,uuid,setUuid }: modalProps) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const cngrtModalTitle = "축하 메시지 작성"
    function handleSubmit() {
        setData(title, author, content,uuid);
        closeCngrtModal();
    }   
    function handleAfterOpenFunc(){
        setTitle('');
        setAuthor('');
        setContent('');
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
            onAfterOpen={handleAfterOpenFunc}
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
                <Dropzone uuid={uuid} setImgUrlData={setImgUrlData} ></Dropzone>
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
    margin-top: 20px;
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
        height: 'auto', // 세로 크기 조정
        overflow:'hidden',
    },
    overlay: {
        zIndex: 1000,
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    }
  };
  
