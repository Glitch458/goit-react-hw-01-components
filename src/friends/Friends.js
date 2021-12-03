export default function Friends(props) {
  return (
    <ul classList="friend-list">
      {props.friends.map(friend => {
        return (
          <li classList="item">
            <span classList="status">
              {friend.isOnline ? 'Online' : 'Offline'}
            </span>
            <img
              classList="avatar"
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p classList="name">{friend.name}</p>
          </li>
        );
      })}
    </ul>
  );
}
