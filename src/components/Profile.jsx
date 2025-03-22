import clsx from 'clsx';
import s from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.profileContainer}>
      <div className={s.userData}>
        <img className={s.userAvatar} src={image} alt="User avatar" />
        <p className={s.userName}>{name}</p>
        <p className={s.userTag}>@{tag}</p>
        <p className={s.userLocation}>{location}</p>
      </div>
      <ul className={s.profileStatistic}>
        <li className={s.statisticName}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={s.statisticName}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={s.statisticName}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
