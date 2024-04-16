import styled from "@emotion/styled";
import MainTitle from "./MainTitle";
import DdayCard from "./DdayCard";
import ButtonCard from "./ButtonCard";
import TopImgSection from "./TopImgSection";
import MiddleImgSection from "./MiddleImgSection";
import BottomImgSection from "./BottomImgSection";

const MainPage = () => {
    const dday = '2024-04-29'
    

    return (
        <MainPageWrapper>
            <TopImgSection/>
            <MiddleImgSection/>    
            <ContentWrapper>
                <MainTitle dDay={dday}/>
                <DdayCard dDay={dday}/>
                <ButtonCard/>                 
            </ContentWrapper>   
            <BottomImgSection/>            
        </MainPageWrapper>
    )
}

export default MainPage;

const MainPageWrapper = styled.div`
width: 100vw;
height: 100vh;
background: #FF8FA0;
overflow: hidden;
`
const ContentWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
`