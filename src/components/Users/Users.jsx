import React from 'react';
import styles from "./Users.module.css";
import User from "./User/User";

function Users() {

    return (
        <div className={styles.users}>
            <User />
        </div>
    );
}

export default Users;