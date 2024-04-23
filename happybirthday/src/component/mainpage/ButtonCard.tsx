import styled from "@emotion/styled"; 
import OpenGiftButton from "./OpenGiftButton";
import CngrtMsgButton from "./CngrtMsgButton";
const ButtonCard = () =>{
    return (
        <ButtonCardWrapper>
            <CngrtMsgButton/>
            <OpenGiftButton isBirthdayAfter={false} />
        </ButtonCardWrapper>
        
    )
}

export default ButtonCard


const ButtonCardWrapper = styled.div`

height : 35%;
display:flex;
flex-direction: row;
gap : 40px;
justify-content:center;

`