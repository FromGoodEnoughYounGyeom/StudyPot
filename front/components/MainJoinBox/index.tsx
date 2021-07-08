
import {Frame,FrameCopy, ButtonBox, RegisterButton, LoginButton} from "./styles";


const MainJoinBox = () => {
 
    return (
        <Frame>
            <FrameCopy> 스터디 모임 찾을 때는? 스터디팟</FrameCopy>
            <ButtonBox>
                <RegisterButton>가입하기</RegisterButton>
                <LoginButton>로그인</LoginButton>
            </ButtonBox>
        </Frame>
    )
};

export default MainJoinBox;
