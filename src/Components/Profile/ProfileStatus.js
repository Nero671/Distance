import React, {useEffect, useState} from "react";
import "./profile.css";
import {profileAPI} from "../../api/Api";

const  ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {

        profileAPI.getStastus(24359)
            .then(response => {
                setStatus(response.data);
            })

        setStatus(props.status);
    }, [props.status]);

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
                            {status || 'No Status'}
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
