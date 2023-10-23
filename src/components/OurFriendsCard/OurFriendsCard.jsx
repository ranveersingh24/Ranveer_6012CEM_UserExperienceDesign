import React from 'react';
// import { useSelector } from 'react-redux';
import { Container, Company, ContentBox, Logo } from './OurFriendsCard.styled';
import OurFriendsInfo from 'components/OurFriendsInfo/OurFriendsInfo';
import KharkivShelter from '../../assets/KharkivShelter.png';

const shortenCompanyName = name => {
  return name
    .replace('Харківський міський притулок для тварин', 'Pet Shelter')
    .replace("Притулок для бездомних тварин 'Сіріус'", 'Сіріус')
    .replace('Притулок для собак Велике серце', 'Pet Help')
    .replace('Волонтерська організація БАРБОС', 'BARBOS Organization')
    .replace('Ветеринарний центр LicoVet', 'LICO')
    .replace('ЛКП “ЛЕВ”', 'Pet Together')
    .trim();
};

const OurFriendsCard = ({ friendData }) => {
  const shortenedTitle = shortenCompanyName(friendData.title);

  return (
    <>
      <Container>
        <Company href={friendData.url} target="_blank">
          {shortenedTitle}
        </Company>
        <ContentBox>
          <Logo
            src={friendData.imageUrl ? friendData.imageUrl : KharkivShelter}
            alt={friendData.title}
            width="100"
            height="68"
          ></Logo>
          <OurFriendsInfo {...friendData} />
        </ContentBox>
      </Container>
    </>
  );
};

export default OurFriendsCard;
