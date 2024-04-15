import styled from '@emotion/styled'

const OpenGiftButton = () => {
    const Msg = "선물 개봉하기"
    return (
        <OpenGiftButtonWrapper>
            {Msg}
        </OpenGiftButtonWrapper>
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