import React from "react";
import { InertiaProgress } from "@inertiajs/progress";
import Front from "../layouts/Front";

InertiaProgress.init();

const Users = ({users, create_url}) => {
    return (
        <Front title="Users Page">
            <div className="row d-block">
                {users.map(user => <p key={user.id}>{user.name}</p>)}
            </div>
        </Front>
    );
}

export default Users;