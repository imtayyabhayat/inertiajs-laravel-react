import React, { useState } from "react";
import Front from "../Layouts/Front";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";

const Create = () => {
    const { errors } = usePage().props
    console.log(errors.email);
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
    });

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
        data.append("password", values.password);
        data.append("password_confirmation", values.password_confirmation);
        Inertia.post(base_url + '/users', data);
    }
    return (
        <Front title="Create User">
            <div className="m-4 p-5 row d-block">
                <div className="card card-primary col-md-6 offset-3">
                    <div className="card-body">
                        <h5 className="card-title">Create New User</h5>
                        <form onSubmit={handleSubmit} method="POST" encType="multipart/form-data">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className={errors.name ? 'form-control is-invalid':'form-control'} id="name" placeholder=" Full Name" value={values.name} onChange={handleChange} />
                                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className={errors.email ? 'form-control is-invalid':'form-control'} id="email" placeholder="Email" value={values.email} onChange={handleChange} />
                                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                            </div>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className={errors.password ? 'form-control is-invalid':'form-control'} id="password" placeholder="Password" value={values.password} onChange={handleChange} />
                                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="password_confirmation">Password Confirmation</label>
                                    <input type="password" className={errors.password_confirmation ? 'form-control is-invalid':'form-control'} id="password_confirmation" value={values.password_confirmation} onChange={handleChange} placeholder="Password confirmation" />
                                    {errors.password_confirmation && <div className="invalid-feedback">{errors.password_confirmation}</div>}
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="terms"><input type="checkbox" id="terms" /> &nbsp;I agree to the terms and Condition</label>
                                <button type="submit" className="form-control btn btn-primary btn-sm">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Front>
    );
}

export default Create;