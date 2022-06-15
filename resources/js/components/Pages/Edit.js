import React, { useState } from "react";
import Front from "../Layouts/Front";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";

const Edit = () => {
    const { id, name, email, errors } = usePage().props
    const [values, setValues] = useState({id, name, email});
    // console.log(values);
    function handleChange(e) {
        setValues({
            ...values,
            [e.target.id]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const data = new FormData();
        data.append("name", values.name);
        data.append("email", values.email);
        data.append("_method", "PUT");
        Inertia.post(base_url + '/users/'+values.id, data);
    }
    return (
        <Front title="Edit User">
            <div className="m-4 p-5 row d-block">
                <div className="card card-primary col-md-6 offset-3">
                    <div className="card-body">
                        <h5 className="card-title">Edit User</h5>
                        <form onSubmit={handleSubmit} method="POST" encType="multipart/form-data">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className={errors.name ? 'form-control is-invalid':'form-control'} required id="name" placeholder=" Full Name" value={values.name} onChange={handleChange} />
                                {errors.name && <div className="invalid-feedback"><small>{errors.name}</small></div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className={errors.email ? 'form-control is-invalid':'form-control'} required id="email" placeholder="Email" value={values.email} onChange={handleChange} />
                                {errors.email && <div className="invalid-feedback"><small>{errors.email}</small></div>}
                            </div>
                            <div className="form-group">
                                <button type="submit" className="form-control btn btn-primary btn-sm">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Front>
    );
}

export default Edit;