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
            <div className="card-author">{author}</div>
            <br></br>
            <div className="card-content">{content}</div>
        </HappyBirthdayCardWrapper>
    )
}

const HappyBirthdayCardWrapper = styled.div<{ imgUrl: string }>`

width: 35%;
min-width: 300px;
background-image: url(${({ imgUrl }) => imgUrl});
background-color: white;
display: flex;
flex-direction: column;
justify-content: center;
border-radius: 15px;

.card-title{
    text-align: center;
}
.card-author{
    margin : 10px;
    text-align: end;
    padding-right: 10px;
}
.card-content{
    margin : 10px;
}
`
export default HappyBirthdayCard;
