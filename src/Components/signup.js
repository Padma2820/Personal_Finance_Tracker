// import React, { useRef } from "react";
// import { useUserContext } from "../context/UserContext";

// const Signup = () => {
//   const emailRef = useRef();
//   const nameRef = useRef();
//   const psdRef = useRef();
//   const { registerUser } = useUserContext();

//   const onSubmit = (e) => {
//     e.preventDefault();
//     const email = emailRef.current.value;
//     const name = nameRef.current.value;
//     const password = psdRef.current.value;
//     if (email && password && name) registerUser(email, password, name);
//   };

//   return (
//     <div className="form">
//       <h2> New User</h2>
//       <form onSubmit={onSubmit}>
//         <label>Name</label>
//         <input placeholder="Name" type="name" ref={nameRef} />
//         <label>Email</label>
//         <input placeholder="Email" type="email" ref={emailRef} />
//         <label>Password</label>
//         <input placeholder="Password" type="password" ref={psdRef} />
//         <input placeholder="Confirm Password" type="password" ref={psdRef} />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;










import React, { useRef } from "react";
import { useUserContext } from "../context/UserContext";
import './Signin.css';

const Signup = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const psdRef = useRef();
  const { registerUser } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = psdRef.current.value;
    if (email && password && name) registerUser(email, password, name);
  };

  return (
    <div className="form">
      <h2>New User</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input placeholder="Name" type="name" id="name" ref={nameRef} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input placeholder="Email" type="email" id="email" ref={emailRef} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input placeholder="Password" type="password" id="password" ref={psdRef} />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input placeholder="Confirm Password" type="password" id="confirmPassword" ref={psdRef} />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Signup;
