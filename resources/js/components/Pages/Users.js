import React from "react";
import { InertiaProgress } from "@inertiajs/progress";
import Front from "../Layouts/Front";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";

InertiaProgress.init();

const Users = () => {
    const { users, create_url } = usePage().props
    return (
        <Front title="Users Page">
            
            <div className="m-4 p-5 row d-block">
                <InertiaLink href={create_url} className="btn btn-primary btn-sm">Create New User</InertiaLink>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {users.map(
                        user => <tr key={user.id}>
                            <th scope="row">{user.id}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <InertiaLink as="button" className="btn btn-primary btn-sm" href={ user.edit_url }>Edit</InertiaLink>&nbsp;|&nbsp;
                                <InertiaLink as="button" className="btn btn-danger btn-sm" replace method="POST" data={{_method:'delete'}} href={ user.delete_url }>Delete</InertiaLink>
                            </td>
                        </tr>
                    )}
                       
                    </tbody>
                </table>
            </div>
        </Front>
    );
}

export default Users;