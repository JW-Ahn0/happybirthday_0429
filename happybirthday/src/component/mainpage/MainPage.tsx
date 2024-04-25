import styled from "@emotion/styled";
import MainTitle from "./MainTitle";
import DdayCard from "./DdayCard";
import ButtonCard from "./ButtonCard";
import TopImgSection from "./TopImgSection";
import MiddleImgSection from "./MiddleImgSection";
import BottomImgSection from "./BottomImgSection";
import { useState } from "react";
import HappyBirthdayPage from "../happybirthdaymainpage/HappyBirthdayPage";
import MusicPlayer from "./MusicPlayer";

const MainPage = () => {
    const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
    const dday = '2023-04-29'
    const password = '5670'
    const [musicPlaying, setMusicPlaying] = useState<boolean>(false); // 노래 재생 상태 선언 및 초기화

    return (
        <MainPageWrapper isPasswordConfirm={isPasswordConfirm}>
            {musicPlaying && <MusicPlayer src="/Root.mp3" />} {/* 노래 재생 상태일 때 MusicPlayer 컴포넌트 렌더링 */}
            {!isPasswordConfirm &&
            <>
                <TopImgSection/>
                <MiddleImgSection/>    
                <ContentWrapper>
                    <MainTitle dDay={dday}/>
                    <DdayCard dDay={dday}/>
                    <ButtonCard dDay={dday} password ={password} setIsPasswordConfirm={setIsPasswordConfirm} setMusicPlaying={setMusicPlaying} />                 
                </ContentWrapper>   
                <BottomImgSection/>
            </>
            }
            {isPasswordConfirm &&
                <HappyBirthdayPage setMusicPlaying={setMusicPlaying} />
            }            
        </MainPageWrapper>
    )
}

export default MainPage;

const MainPageWrapper = styled.div<{ isPasswordConfirm: boolean }>`
width: 100vw;
height: ${({isPasswordConfirm}) => (isPasswordConfirm ? '100%': '100vh') }; 
background: #FF8FA0;
overflow: ${({isPasswordConfirm}) => (isPasswordConfirm ? 'auto': 'hidden') };
`
const ContentWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
`