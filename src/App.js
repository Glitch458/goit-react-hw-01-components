import './App.css';
import Profile from './profile/Profile';
import Statistics from './statistic/Statistic';
import user from './user.json';
import data from './data.json';

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
    </>
  );
}

export default App;
