import FriendListItem from './FriendListItem';
const FriendList = ({ friends }) => {
  console.log(friends);
  return (
    <ul>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
};
export default FriendList;
