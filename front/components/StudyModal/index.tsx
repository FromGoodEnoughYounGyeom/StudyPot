import {
  BoxModel,
  SettingBox,
  Shrink,
  TextBox,
  Category,
  TitleBox,
  Title,
  Detail,
  LikeButton,
  LocationButton,
  Top,
  Bottom,
  UserBox,
  UserImgBox,
  UserName,
  Date,
  JoinButton,
  MainBox,
} from "./styles";

import { LocationPin } from "@styled-icons/entypo";
import { PeopleFill } from "@styled-icons/bootstrap/PeopleFill";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { JoinStudy } from "@lib/slices/StudySlice";
import { RootState } from "@lib/slices";
import StudyMemberBox from "./../StudyMemberBox/index";
interface StudyCardProps {
  studyId?: number;
  studyData: any;
}

const StudyModal: React.FC<StudyCardProps> = ({ studyData }) => {
  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);

  if (!studyData) {
    return null;
  }
  return (
    <BoxModel onClick={stopPropagation}>
      <SettingBox>
        <Shrink>
          <img src={studyData.thumbnailUrl} alt="mountains" className="w-full h-64 rounded-lg rounded-b-none" />
        </Shrink>
        <MainBox>
          <TextBox>
            <Top>
              {studyData.categories.map((category: any) => {
                return <Category key={category.key}>{category.value}</Category>;
              })}

              <LocationButton>
                <LocationPin size="18" title="Location icon" />
                서울특별시 강남구
              </LocationButton>
              <TitleBox>
                <Title>{studyData.title}</Title>
                <LikeButton>💚 &nbsp; 2</LikeButton>
              </TitleBox>
            </Top>

            <Detail>{studyData.content}</Detail>

            <Bottom>
              <UserBox>
                <UserImgBox>
                  <img src={studyData.leader.imageUrl} alt="avatar" />
                </UserImgBox>
                <div>
                  <UserName>{studyData.leader.name} </UserName>
                  <Date> 14 Aug </Date>
                </div>
              </UserBox>

              <JoinButton>
                {" "}
                <PeopleFill size="20" />
                &nbsp; {studyData.participatingNumber} /{studyData.maxStudyNumber}
              </JoinButton>
            </Bottom>
          </TextBox>
          <StudyMemberBox studyData={studyData} />
        </MainBox>
      </SettingBox>
    </BoxModel>
  );
};

export default StudyModal;
