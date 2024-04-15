import { DdayCardProps } from "../../types/mainpage/DdayCardProps";
import TimeCard from "./TimeCard";
import styled from "@emotion/styled";


const DdayCard: React.FC<DdayCardProps> = ({dDay}) =>{
    return (
        <DdayCardWrapper>
            <div className="time-left-card">
                <TimeCard type="Days" time={dDay} />
                <TimeCard type="Hours" time={dDay} />
                <TimeCard type="Minutes" time={dDay} />
                <TimeCard type="Seconds" time={dDay} />
            </div>
        </DdayCardWrapper>
    )
}

export default DdayCard;

const DdayCardWrapper = styled.div`

height: 40%;
display: flex;
flex-direction: column;
justify-content: center;

    .time-left-card{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap:40px;
    }
`