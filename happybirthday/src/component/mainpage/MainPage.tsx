import styled from "@emotion/styled";
import MainTitle from "./MainTitle";
import DdayCard from "./DdayCard";
import ButtonCard from "./ButtonCard";
import TopImgSection from "./TopImgSection";
import MiddleImgSection from "./MiddleImgSection";
import BottomImgSection from "./BottomImgSection";
import { useState } from "react";
import HappyBirthdayPage from "../happybirthdaymainpage/HappyBirthdayPage";

const MainPage = () => {
    const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
    const dday = '2023-04-29'
    const password = '5670'
    
    return (
        <MainPageWrapper>
            {!isPasswordConfirm &&
            <>
                <TopImgSection/>
                <MiddleImgSection/>    
                <ContentWrapper>
                    <MainTitle dDay={dday}/>
                    <DdayCard dDay={dday}/>
                    <ButtonCard dDay={dday} password ={password} setIsPasswordConfirm={setIsPasswordConfirm} />                 
                </ContentWrapper>   
                <BottomImgSection/>
            </>
            }
            {isPasswordConfirm &&
                <HappyBirthdayPage/>
            }            
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