import React from "react";
import {connect} from "react-redux";
import {
    follow, getUsersThunkCreator,
    setCurrentPage,
    setUsers,
    setUsersTotalCount, toggleFollowingProgress,
    toggleIsFetching,
    unfollow
} from "../../redux/usersReducers";
import axios from "axios";
import {Users} from "./Users";
import {usersAPI} from "../../api/Api";


class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this.props.getUsersThunkCreator(page, this.props.pageSize);
        // this.props.setCurrentPage(page);
        // this.props.toggleIsFetching(true);
        //
        // usersAPI.getUsers(page, this.props.pageSize)
        //     .then(data => {
        //         this.props.toggleIsFetching(false);
        //         this.props.setUsers(data.items)
        //     })
    }

    render() {
        return (
            <>
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}

                    followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        toggleFollowingProgress: state.usersPage.toggleFollowingProgress,
        followingInProgress: state.usersPage.followingInProgress,
    }

}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setUsersTotalCountAC(totalCount))
//         },
//
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         },
//     }
//
// }

export const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsersThunkCreator,
}) (UsersAPIComponent)
