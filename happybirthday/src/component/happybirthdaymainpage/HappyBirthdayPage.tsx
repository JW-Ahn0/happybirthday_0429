import styled from "@emotion/styled";
import BirthdayPageTab from "./BirthdayPageTab";
import {useEffect, useState } from "react";
import HappyBirthdayCard from "./HappyBirthdayCard";
import { ref, onValue} from "firebase/database";
import { database } from "../../firebase";
import { CardData } from "../../types/happybirthdaypage/HappyBirthdayCardProps";
import VideoPage from "./VideoPage";
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
          console.log("test");
    },[activeTab,setMusicPlaying]);

    return (
        <HappyBirthdayPageWrapper>
            <BirthdayPageTab activeTab={activeTab} setActiveTab={setActiveTab}/>
            <div className="birthday-card-container">
                {activeTab === 1 && data.map((item, index) => <HappyBirthdayCard key={index} data={item} />)}
                {activeTab === 1 && data.length ===0 && <h1 className="no-msg">축하록이 아직 작성되지 않았습니다. </h1>}
                {activeTab === 2 && <div>소현이에게</div>}
                {activeTab === 3 && <VideoPage/>}
            </div>
            

        </HappyBirthdayPageWrapper>
    )
}

const HappyBirthdayPageWrapper = styled.div`
width: 100%;
height: 100%;
min-height: 100vh;

background-image : url('./after_background_img.jpeg');
background-size : 50%;
background-repeat : repeat;


.birthday-card-container{
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
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
