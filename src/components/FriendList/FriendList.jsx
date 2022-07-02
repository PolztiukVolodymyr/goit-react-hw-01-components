import PropTypes from "prop-types";
import css from './FriendList.module.css';
import FriendListItem from "./FriendListItem"

export default function FriendList({ friends }) {
    return (
        <ul className={css.friendList}>
            {friends.map(({ id, avatar, name, isOnline }) => (
                <FriendListItem
                    key={id}
                    isOnline={isOnline}
                    name={name}
                    avatar={avatar} />
            ))}
        </ul>);
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired,
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
   })
    )
}