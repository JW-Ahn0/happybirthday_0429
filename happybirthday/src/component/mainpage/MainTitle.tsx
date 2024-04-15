import styled from "@emotion/styled";
import dayjs from "dayjs";
import { DdayCardProps } from "../../types/mainpage/DdayCardProps";


const MainTitle:React.FC<DdayCardProps> = ({dDay}) => {
    const dDayDate = dayjs(dDay);
    const today = dayjs();
    const beforeDdayMeg = "은하계 최고 미녀 소현이의 생일까지 단";
    const afterDdayMeg = "은하계 최고 미녀 소현이의 생일으로부터 벌써";
    const Msg = dDayDate.diff(today, 'second') > 0 ? beforeDdayMeg : afterDdayMeg;    
    return (
        <MainTitleWrapper>
            <h1>Happy Sohyun Day!!</h1>
            <div className="time-left-msg">{Msg}</div>
        </MainTitleWrapper>
    )
}

export default MainTitle;

const MainTitleWrapper = styled.div`

    .time-left-msg{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 900;
        font-size: 2rem;
        color: #ffc809;    

        text-align: center;
    }
    h1 {
        margin:0;
        font-style: normal;
        font-weight: 900;
        font-size: 5rem;
        line-height: 116px;
        text-align: center;
        color: #FFFFFF;

        @media screen and (max-width: 810px) {
            font-size: 3rem;
    }
}





`
