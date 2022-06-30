import React from "react";
import "./profile.css";
import {updateStatusThunk} from "../../redux/profilePageReducer";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatusThunk(this.state.status)
    }

    handleFocus = (e) => {
        e.target.select();
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.target.value
        })
    }


    render() {
        return (
            <div>
                {!this.state.editMode ?
                    <div>
                        <span onDoubleClick={
                            this.activateEditMode
                        }>
                            {this.state.status ? this.state.status : 'Status'}
                        </span>
                    </div>
                    :
                    <div>
                        <input
                            autoFocus={true}
                            onChange={this.onStatusChange}
                            onFocus={this.handleFocus}
                            onBlur={this.deactivateEditMode}
                            value={this.state.status}
                        />
                    </div>
                }
            </div>
        )
    }
};

export default ProfileStatus;
