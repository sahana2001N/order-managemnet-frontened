// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// //import AdminService from "../../services/AdminService";
// import { adminLogin } from "../../redux/adminSlice";

// import { useDispatch } from "react-redux";


// const AdminLogin = () => {

//     const [loginData, setLoginData] = useState({ username: '', password: '' });
//     const [afterSubmit, setAfterSubmit] = useState('');
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const handleChange = (evt) => {
//         console.log(evt.target.name);
//         console.log(evt.target.value);
//         setLoginData({
//             ...loginData,
//             [evt.target.name]: evt.target.value
//         });
//     };

//     // const handleLoginSubmit = (evt) => {
//     //     evt.preventDefault();
//     //     console.log(loginData);
//     //     AdminService.loginAdmin(loginData)
//     //         .then((response) => {
//     //             console.log(response);
//     //             setAfterSubmit(`Hi ${loginData.username}! You've logged in successfully!`);
//     //             setTimeout(() => {
//     //                 setLoginData({ username: '', password: '' });
//     //                 dispatch(adminLogin(response));
//     //                 navigate('/profile');
//     //             }, 2000);
//     //         })
//     //         .catch((error) => {
//     //             console.log(error);
//     //             setLoginData({ username: '', password: '' });
//     //             setAfterSubmit(`Invalid credentials!`);
//     //         });
//     // };


//     const handleLoginSubmit = (evt) => {
//         evt.preventDefault();
//         console.log(loginData);
    
//         // Check if the username and password match the hardcoded values
//         if (loginData.username === 'admin' && loginData.password === 'admin') {
//             // If match, log in successfully
//             setAfterSubmit(`Hi ${loginData.username}! You've logged in successfully!`);
//             setTimeout(() => {
//                 setLoginData({ username: '', password: '' });
//                 // Dispatch action for admin login (assuming this is defined elsewhere)
//                 dispatch(adminLogin(/* pass any necessary data here */));
//                 navigate('/home');
//             }, 2000);
//         } else {
//             // If not match, show invalid credentials message
//             setLoginData({ username: '', password: '' });
//             setAfterSubmit(`Invalid credentials!`);
//         }
//     };
    
//     return (
//         <>

//             {/* <h1>Login Component</h1>
//             <p>Login here</p>
//             <form onSubmit={handleLoginSubmit}>
//                 <input type="text" name="username" value={loginData.username}
//                     onChange={handleChange} autoFocus required />
//                 <br />
//                 <input type="password" name="password" value={loginData.password}
//                     onChange={handleChange} required />
//                 <br />
//                 <input type="submit" value="Login" />
//             </form>
//             {afterSubmit && <p>{afterSubmit}</p>}
//             <p>Not yet registered? <Link to={'/register'}>Register</Link> </p> */}

// <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
// <div style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#fff' }}>
//     <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>Login</h2>
//   <form onSubmit={handleLoginSubmit}>
// <div className="mb-3">
//     <label className="form-label">Username</label>
//     <input type="text" className="form-control" name="username" value={loginData.username}
//                     onChange={handleChange} autoFocus required />
//    </div>
//   <div className="mb-3">
//     <label className="form-label">Password</label>
//     <input type="password" className="form-control" name="password" value={loginData.password}
//                     onChange={handleChange} required />
//    </div>
  
//   <button type="submit" className="btn btn-primary">Submit</button>

//   {/*
//   {afterSubmit && <p>{afterSubmit}</p>}
// <p>Not yet registered? <Link to={'/product'}>Register</Link> </p>
//         */}

// {afterSubmit && <p>{afterSubmit}</p>}
// <p>Not yet registered? <Link to={'/register'}>Register</Link> </p>
  
//   </form>
//   </div>
//   </div>



//         </>
//     );
// };

// export default AdminLogin;


import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { adminLogin } from "../../redux/adminSlice";
import { useDispatch } from "react-redux";

const AdminLogin = () => {
    const [loginData, setLoginData] = useState({ username: '', password: '' });
    const [afterSubmit, setAfterSubmit] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (evt) => {
        setLoginData({
            ...loginData,
            [evt.target.name]: evt.target.value
        });
    };

    const handleLoginSubmit = (evt) => {
        evt.preventDefault();
    
        // Check if the username and password match the hardcoded values
        if (loginData.username === 'admin' && loginData.password === 'admin') {
            // If match, log in successfully
            setAfterSubmit(`Hi ${loginData.username}! You've logged in successfully!`);
            setTimeout(() => {
                setLoginData({ username: '', password: '' });
                // Dispatch action for admin login with user data
                dispatch(adminLogin({ user: loginData.username })); // Pass username as user data
                navigate('/itemlist');
            }, 2000);
        } else {
            // If not match, show invalid credentials message
            setLoginData({ username: '', password: '' });
            setAfterSubmit(`Invalid credentials!`);
        }
    };
    
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
                <div style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#fff' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>Admin-Login</h2>
                    <form onSubmit={handleLoginSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Username</label>
                            <input type="text" className="form-control" name="username" value={loginData.username}
                                onChange={handleChange} autoFocus required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" name="password" value={loginData.password}
                                onChange={handleChange} required />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        
                    </form>
                </div>
            </div>
        </>
    );
};

export default AdminLogin;