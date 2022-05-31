import React from "react";
import styles from "./users.module.css";
import axios from "axios";
import UnknownUser from '../../image/user.svg';

class Users extends React.Component {

    constructor(props) {
        super(props);

        axios.get('http://myjson.dit.upm.es/api/bins/bhhb')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }


    render() {
        return (
            <div className="create-post users-block">
                <div className="header-post">
                    <h1 className="title">Users</h1>
                </div>
                <div className={styles.userList}>
                    {this.props.users.map(item =>
                        <div key={item.id} className={styles.userListItem}>
                            <div className={styles.userInfo}>
                                <div className={styles.userAvatar}>
                                    <img src={ item.photos.small != undefined ? item.photos.small : UnknownUser }/>
                                </div>
                                <div>
                                    { item.followed ? <button onClick={() => {
                                            this.props.unfollow(item.id)
                                        }} className={styles.followBtn}>Unfollow</button> :
                                        <button onClick={() => {
                                            this.props.follow(item.id)
                                        }} className={styles.followBtn}>Follow</button>
                                    }

                                </div>
                            </div>
                            <div className={styles.userInfo}>
                                <div className={styles.userInfoLeft}>
                                    <div className={styles.userName}>
                                        {item.name}
                                    </div>
                                    <div className={styles.userStatus}>
                                        {item.status}
                                    </div>
                                </div>
                                <div className={styles.userInfoRight}>
                                    <div className="user-country">
                                        {"item.location.country"}
                                    </div>
                                    <div className="user-city">
                                        {"item.location.city"}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Users;
