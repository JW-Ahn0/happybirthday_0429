import Modal from 'react-modal';
import styled from '@emotion/styled';

interface Props {
    modalOpen: boolean;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CngrtModal = ({ modalOpen, setModalOpen }: Props) => {
   function closeModal(){
    console.log('Close handled');
    console.log(modalOpen);
    setModalOpen(false)
    console.log(modalOpen);
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
        모달입니다.
        </Modal>
    </CngrtMsgButtonWrapper>

   )
}

export default CngrtModal;

const CngrtMsgButtonWrapper = styled.div`
`

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
      },
    overlay: {zIndex: 1000}
  };
  
