import clsx from 'clsx';
import s from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={s.friendListItem}>
      <img className={s.friendAvatar} src={avatar} alt="Avatar" width="48" />
      <p className={s.friendName}>{name}</p>
      {isOnline === true ? (
        <p className={clsx(s.status, s.online)}>Online</p>
      ) : (
        <p className={clsx(s.status, s.offline)}>Offline</p>
      )}
    </div>
  );
};

export default FriendListItem;
