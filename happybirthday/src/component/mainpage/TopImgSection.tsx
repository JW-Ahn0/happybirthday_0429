import styled from '@emotion/styled'
import { IMAGES_PATH } from '../../config/mainapge/paths';
const TopImgSection = () =>{
    return (
        <TopImgSectionWrapper>
            <img src={IMAGES_PATH.leftTop}  alt="테스트" className="leftImg"></img>
            <img src={IMAGES_PATH.rightTop} alt="테스트2" className="rightImg"></img>
        </TopImgSectionWrapper>
    )
}

export default TopImgSection;   

const TopImgSectionWrapper = styled.div`

position: relative;
width: 100vw;
height: auto;

.leftImg {
    position: absolute;
    top: 0;
    left: 0;
}

.rightImg {
    position: absolute;
    top: 0;
    right: 0;
}
`