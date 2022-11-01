import React, {FC, useEffect, useState} from "react";
import "./profile.css";
import {profileAPI} from "../../api/Api";

type PropsType = {
    status: string,
    updateStatusThunk: (status: string) => void
}

const ProfileStatus: FC<PropsType> = (props) => {
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

    // @ts-ignore
    const onStatusChange = (e) => {
        setStatus(e.target.value)
    }

    return (
            <div>
                {!editMode &&
                    <div className={'status-wrapper'}>
                        <span className={'status'} onDoubleClick={activateEditMode}>
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
