import styled from "@emotion/styled";
import BirthdayPageTab from "./BirthdayPageTab";
import {useEffect, useState } from "react";
import HappyBirthdayCard from "./HappyBirthdayCard";
import { ref, onValue} from "firebase/database";
import { database } from "../../firebase";
import { CardData } from "../../types/happybirthdaypage/HappyBirthdayCardProps";
import VideoPage from "./VideoPage";
import LetterPage from "./LetterPage";
interface HappyBirthdayPageProps {
    setMusicPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}
const HappyBirthdayPage:React.FC<HappyBirthdayPageProps> = ({setMusicPlaying}) => {
    const [activeTab, setActiveTab] = useState(1);
    const [data, setData] = useState<CardData[]>([]);
    useEffect(() => {
        onValue(ref(database, '/CngrtMsg'), (snapshot) => {
            const data = snapshot.val() != null ? Object.values(snapshot.val()) as CardData[] : []  ;
            if(data.length !== 0) {
                setData(data);
            }
          }, {
            onlyOnce: true
          });
          activeTab === 3 ? setMusicPlaying(false) : setMusicPlaying(true);
    },[activeTab,setMusicPlaying]);

    return (
        <HappyBirthdayPageWrapper activeTab={activeTab}>
            {activeTab === 2 &&
            <div className="bg-videos" >
                <video autoPlay muted loop className="bg-video__content" >
                    <source src="/background_road.mp4" type="video/mp4" />
                    <source src="/background_road.webm" type="video/webm" />
                    Your browser is not supported!
                </video>
                <video autoPlay muted loop className="bg-video__content" >
                    <source src="/background_road.mp4" type="video/mp4" />
                    <source src="/background_road.webm" type="video/webm" />
                    Your browser is not supported!
                </video>
            </div>
            }
            <BirthdayPageTab activeTab={activeTab} setActiveTab={setActiveTab}/>
            <div className="birthday-card-container">
                {activeTab === 1 && data.map((item, index) => <HappyBirthdayCard key={index} data={item} />)}
                {activeTab === 1 && data.length ===0 && <h1 className="no-msg">축하록이 아직 작성되지 않았습니다. </h1>}
                {activeTab === 2 && <LetterPage/>}
                {activeTab === 3 && <VideoPage/>}
            </div>
            

        </HappyBirthdayPageWrapper>
    )
}

const HappyBirthdayPageWrapper = styled.div<{ activeTab: number }>`
width: 100%;
height: 100%;
min-height: 100vh;

background-image : url('./after_background_img.jpeg');
background-size : 50%;
background-repeat : repeat;

.bg-videos {
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 0;
    opacity: 1.0;
  }
  
  .bg-video__content {
    height: auto;
    width: 50vw;
    object-fit: cover; // background-size: cover 와 비슷함. (HTML 요소 or 비디오와 작동)
  }


.birthday-card-container{
    position: relative; /* or absolute, fixed, sticky */
    z-index: 2;

    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
    padding-bottom: 50px;
}

.no-msg{
    margin:0;
    font-style: normal;
    font-weight: 500;
    font-size: 3rem;
    line-height: 116px;
    text-align: center;
    color: #FFFFFF;
}

`
export default HappyBirthdayPage;
