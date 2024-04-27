import styled from "@emotion/styled";
import { CardData } from "../../types/happybirthdaypage/HappyBirthdayCardProps";

interface HappyBirthdayCardProps {
    data: CardData;
    // 다른 props를 여기에 추가할 수 있습니다.
}
const HappyBirthdayCard: React.FC<HappyBirthdayCardProps> = ({data}) =>{
    const {title, author, content, imgUrl} = data;
    return (
        <HappyBirthdayCardWrapper imgUrl={imgUrl}>
            <div className="card-title">
                <h1>{title}</h1>
            </div>
            <div className="card-content-container">
                <div className="card-content"><span>{content}</span></div>
                <br></br>
                <br></br>
                <div className="card-author"><span>{author}</span></div>
            </div>

        </HappyBirthdayCardWrapper>
    )
}

const HappyBirthdayCardWrapper = styled.div<{ imgUrl: string }>`

width: 35%;
height: 100%;
min-width: 300px;
min-height: 350px;

background-image: url(${({ imgUrl }) => imgUrl});
background-color: white;
background-size: cover;

display: flex;
flex-direction: column;
border-radius: 15px;


.card-title{
    text-align: center;
    color:white;
    margin-bottom: 10px;
}


.card-content-container{

    display: flex;
    flex-direction: column;
    justify-content: center;
    
    min-height: 200px;

    margin-left: 50px;
    margin-right: 50px;
    
    font-family: fantasy;
    font-weight: bolder;
    
    color: white  ;
    font-size: larger;


    .card-author{
        margin : 10px;
        text-align: end;
        padding-right: 10px;
    }
    .card-content{
        white-space: pre-line;
        margin : 10px;
    }
}

`
export default HappyBirthdayCard;
