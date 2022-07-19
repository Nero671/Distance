import React, {useEffect, useState} from "react";
import "./profile.css";
import {updateStatusThunk} from "../../redux/profilePageReducer";

const  ProfileStatus = (props) => {

    console.log(props.status)
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    function activateEditMode() {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatusThunk(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.target.value)
    }

    return (
            <div>
                {!editMode &&
                    <div>
                        <span onDoubleClick={activateEditMode}>
                            {props.status || 'No Status'}
                        </span>
                    </div> }
                { editMode &&
                    <div>
                        <input
                            autoFocus={true}
                            onBlur={deactivateEditMode}
                            onChange={onStatusChange}
                            value={status}
                        />
                    </div>
                }
            </div>
        )
}

export default ProfileStatus;
