import PropTypes from 'prop-types';
import './App.css';
import Profile from './profile/Profile';
import Statistics from './statistic/Statistic';
import FriendList from './friends/Friends';
import TransactionHistory from './transactions/TransactionHistory';
import user from './json/user.json';
import data from './json/data.json';
import friends from './json/friends.json';
import transactions from './json/transactions.json';

function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

App.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.string,
  title: PropTypes.string,
  friends: PropTypes.string,
  items: PropTypes.string,
};

export default App;
