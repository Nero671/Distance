import styles from "../../Users/users.module.css";
import Loader from "../../../image/loader.svg";
import React from "react";

const Preloader = () => {
    return (
        <div className={styles.preloader}>
            <img src={Loader}/>
        </div>
    )
}

export default Preloader;
