import React from "react";
import styles from "./users.module.css";
import axios from "axios";
import UnknownUser from '../../image/user.svg';

class Users extends React.Component {

    componentDidMount() {
        const instance = axios.create({
            baseURL: 'https://social-network.samuraijs.com/api/1.0/users',
            headers: {
                "API-KEY": "533e11da-39eb-4d19-8caf-c64003bfe003"
            },
            withCredentials: true,
        });

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }


    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
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
                <div>
                    {pages.map(page => {
                        return <span
                            key={page}
                            className={this.props.currentPage === page && styles.selectedPage}
                            onClick={() => { this.onPageChanged(page) }}>
                                {page}
                        </span>
                    })}
                </div>
            </div>
        )
    }
}

export default Users;
