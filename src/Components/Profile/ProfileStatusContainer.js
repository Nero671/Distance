import React from "react";
import {connect} from "react-redux";
import {updateStatusThunk} from "../../redux/profilePageReducer";
import ProfileStatus from "./ProfileStatus";

const MainProfileStatusWrapper = (props) =>  {
    return (
        <ProfileStatus
            {...props}
            status={props.status}
            updateStatus={props.updateStatus}
        />
    )

}

const mapStateToProps = (state) => ({
    status: state.profilePage.status
});

export const MainProfileStatusContainer = connect(mapStateToProps,
    {
        updateStatusThunk
    })
(MainProfileStatusWrapper)
