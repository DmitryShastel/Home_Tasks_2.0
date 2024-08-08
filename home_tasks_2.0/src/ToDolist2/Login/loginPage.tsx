import './loginPage.css';
import {Formik} from "formik";
import * as Yup from "yup";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {useDispatch, useSelector} from "react-redux";
import {loginTC} from "../store/login-reducer";
import {Navigate} from "react-router-dom";
import {TodolistRootStateType} from "../store/storeToDoList2";


const schema = Yup.object().shape({
    email: Yup.string()
        .required("Email is a required field")
        .email("Invalid email format"),
    password: Yup.string()
        .required("Password is a required field")
        .min(8, "Password must be at least 8 characters"),

});




export const LoginPage = () => {

    const dispatch: ThunkDispatch<unknown, unknown, AnyAction> = useDispatch();
    const isAuth = useSelector((state: TodolistRootStateType) => state.auth.isAuthMe)


    if (isAuth) {
        return <Navigate  to={'/'}/>
    }

    return (
        <>
            <Formik
                validationSchema={schema}
                initialValues={{email: "", password: "", rememberMe: false}}
                //в onSubmit диспатчим санку setAuthTC
                onSubmit={(values) => {
                    dispatch(loginTC(values))
                    console.log(JSON.stringify(values));
                }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit
                  }) => (
                    <div className="login">
                        <div className="form">
                            <form noValidate onSubmit={handleSubmit}>
                                <span>Login</span>
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    placeholder="Enter email"
                                    className="form-control inp_text"
                                    id="email"
                                />
                                <p className="error">
                                    {errors.email && touched.email && errors.email}
                                </p>
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    placeholder="Enter password"
                                    className="form-control"
                                />

                                <p className="error">
                                    {errors.password && touched.password && errors.password}
                                </p>

                                <div className="remember-me">
                                    <input
                                        type="checkbox"
                                        name="checked"
                                        value="Three"
                                        id="remember-me-checkbox"
                                    />
                                    <label htmlFor="remember-me-checkbox">Remember Me</label>
                                </div>

                                <button type="submit">Login</button>
                            </form>
                        </div>
                    </div>
                )}
            </Formik>
        </>
    );
}