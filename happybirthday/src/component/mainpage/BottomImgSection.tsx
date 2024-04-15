import styled from "@emotion/styled";
import { IMAGES_PATH } from "../../config/mainapge/paths";

const BottomImgSection = () => {
    return(
        <BottomImgSectionWrapper>
            <img src={IMAGES_PATH.leftBottom}  alt="테스트5" className="leftImg"></img>
            <img src={IMAGES_PATH.rightBottom} alt="테스트6" className="rightImg"></img>             
        </BottomImgSectionWrapper>
    )
}

export default BottomImgSection;

const BottomImgSectionWrapper = styled.div`
position: relative;
width: 100vw;
height: auto;

.leftImg {
    position: absolute;
    bottom: -80px;
    left: 0;

    
}

.rightImg {
    position: absolute;
    bottom: -80px;
    right: 0;
}
`