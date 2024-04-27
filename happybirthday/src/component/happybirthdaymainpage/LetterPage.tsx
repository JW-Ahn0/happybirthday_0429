import styled from "@emotion/styled"

const LetterPage = () => {
    return (
        <LetterPageWrapper>
            <img className="letter" src="/letter_img.png" alt="letter" />
        </LetterPageWrapper>
    )
}

export default LetterPage;

const LetterPageWrapper = styled.div`
.letter{
    width: 100%;
    height: 100%;
}
`