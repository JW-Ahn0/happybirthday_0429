import styled from '@emotion/styled'
import { IMAGES_PATH } from '../../config/mainapge/paths';

const MiddleImgSection = () => {
    return(
        <MiddleImgSectionWrapper>
            <img src={IMAGES_PATH.leftMiddle}  alt="테스트3" className="leftImg"></img>
            <img src={IMAGES_PATH.rightMiddle} alt="테스트4" className="rightImg"></img>           
        </MiddleImgSectionWrapper>
    )
}
export default MiddleImgSection;

const MiddleImgSectionWrapper = styled.div` 

position: relative;
width: 100vw;
height: auto;

.leftImg {
    position: absolute;
    top: 200px;
    left: 0;
}

.rightImg {
    position: absolute;
    top: 200px;
    right: 0;
}
`