import styles from './Friends.module.css';

function Friends({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map(friend => {
        return (
          <li
            className={friend.isOnline ? styles.itemOn : styles.itemOff}
            key={friend.id}
          >
            <img
              className="avatar"
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className="name">{friend.name}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default Friends;
