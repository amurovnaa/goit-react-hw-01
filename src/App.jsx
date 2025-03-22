import userData from '../src/userData.json';
import friends from '../src/friends.json';
import transactions from '../src/transactions.json';
import s from './App.module.css';
import Profile from './components/Profile';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};

export default App;
