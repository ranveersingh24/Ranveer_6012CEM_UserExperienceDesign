import React from 'react';
import { useSelector } from 'react-redux';
import { FriendsList } from './OurFriendsList.styled';
import OurFriendsCard from 'components/OurFriendsCard/OurFriendsCard';
import { selectAllFriends } from 'redux/friends/friendsSelectors';
import { nanoid } from '@reduxjs/toolkit';
import Loader from '../Loader/Loader';

const OurFriendsList = () => {
  const friends = useSelector(selectAllFriends);

  return (
    <>
      <FriendsList>
        {friends.length !== 0 ? (
          friends.map(friend => (
            <li key={nanoid()}>
              <OurFriendsCard friendData={friend} />
            </li>
          ))
        ) : (
          //   <p>Loading...</p>
          <Loader />
        )}
      </FriendsList>
    </>
  );
};

export default OurFriendsList;
