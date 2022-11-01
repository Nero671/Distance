import React from "react";
import {connect} from "react-redux";
import {
    follow, getUsersThunkCreator,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow
} from "../../redux/usersReducers";
import {Users} from "./Users";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getToggleFollowingProgress,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";
import {UserType} from "../../type/type";
import {AppStateType} from "../../redux/redux-store";
import {bool} from "yup";


type MapStatePropsType = {
    currentPage: number,
    pageSize: number,
    totalUsersCount: number,
    users: Array<UserType>,
    toggleFollowingProgress: boolean | number,
    followingInProgress: Array<number>,
    isFetching: boolean
}

type MapDispatchPropsType = {
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void,
    setCurrentPage: (page: number) => void,
    unfollow: (userId: number) => void,
    follow: (userId: number) => void,
}

type PropsType = MapStatePropsType & MapDispatchPropsType;

class UsersAPIComponent extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (page: number) => {
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
                    isFetching={this.props.isFetching}
                />
            </>
        )
    }
}

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         toggleFollowingProgress: state.usersPage.toggleFollowingProgress,
//         followingInProgress: state.usersPage.followingInProgress,
//     }
//
// }

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        toggleFollowingProgress: getToggleFollowingProgress(state),
        followingInProgress: getFollowingInProgress(state),
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

// @ts-ignore
export const UsersContainer = connect<MapStatePropsType, MapDispatchPropsType, AppStateType>(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsersThunkCreator,
}) // @ts-ignore
(UsersAPIComponent)
