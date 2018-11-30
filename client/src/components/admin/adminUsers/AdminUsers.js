import React from "react";
const AdminUsers = ({ submitUser }) => {
  return (
    <div className="main-right-bottom">
      <form
        ref={el => (this.userForm = el)}
        onSubmit={submitUser}
        className="admin-form"
      >
        <div className="admin-form-question">
        <label className='label' htmlFor="fName">Name</label>

        <div className='admin-input-container'>
          <input
            className="questionInput"
            placeholder="First"
            type="text"
            name="fName"
            id="fName"
          />
          <input
            className="questionInput"
            placeholder="Last"
            type="text"
            name="lName"
            id="lName"
          />
        </div>
        </div>
        <div className="admin-form-question">
          <label htmlFor="phone">Contact Info</label>
        <div className='admin-input-container'>

          <input
            className="questionInput"
            placeholder="Phone Number"
            type="text"
            name="phone"
            id="phone"
          />
          <input
            className="questionInput"
            placeholder="Email"
            type="email"
            name="email"
            id="email"
          />
        </div>
        </div>
        <div className="admin-form-question">
          <label htmlFor="manager">Account Info</label>
        <div className='admin-input-container'>
          <input
            className="questionInput"
            placeholder="Username"
            type="text"
            name="username"
            id="username"
          />
          <input
            className="questionInput"
            placeholder="Temp Password"
            type="password"
            name="password"
            id="password"
          />
        </div>
        </div>
        <div className="button-container">
          <input className='button margin' type="submit" value="Add Employee" />
          <button className='button'>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AdminUsers;
