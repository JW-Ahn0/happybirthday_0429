import styled from '@emotion/styled'

const CngrtMsgButton = () => {

    const Msg = "축하 메시지\n작성하기"
    return (
        <CngrtMsgButtonWrapper>
            {Msg}
        </CngrtMsgButtonWrapper>
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