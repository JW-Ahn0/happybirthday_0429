import styled from "@emotion/styled";
interface birthdayPageTabProps {
    activeTab : number;
    setActiveTab : React.Dispatch<React.SetStateAction<number>>;
  }
const BirthdayPageTab = ({activeTab,setActiveTab}:birthdayPageTabProps) => {
    return (
        <BirthdayPageTabWrapper>
            <Tab active={activeTab === 1} onClick={() => setActiveTab(1)}>축하록</Tab>
            <Tab active={activeTab === 2} onClick={() => setActiveTab(2)}>소현이에게</Tab>
            <Tab active={activeTab === 3} onClick={() => setActiveTab(3)}>포옹</Tab>
        </BirthdayPageTabWrapper>
    );
};

const BirthdayPageTabWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    gap: 50px;
`;

const Tab = styled.button<{ active: boolean }>`
    background-color: transparent;
    color:  ${({ active }) => (active ? 'white' : 'gray')};
    border: none;
    padding: 10px;
    cursor: pointer;
    width: auto%;
    font-size: 1.3rem;
    font-weight: 600;
`;

export default BirthdayPageTab;