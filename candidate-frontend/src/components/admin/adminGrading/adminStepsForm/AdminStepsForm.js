import React from "react";

const AdminStepsForm = () => {
  return (
    <div>
      <form onSubmit={submitStep}>
        <input type="text" name="name" id="name" />
        <input type="text" name="progressionLevel" id="progressionLevel"/>
        <select name="required" id="required">
        <option value={1}>Yes</option>
        <option value={0}>No</option>
      </select>
      <select name="enabled" id="enabled">
        <option value={1}>Yes</option>
        <option value={0}>No</option>
      </select>
      <input type="number" name="weight" id="weight"/>
      <select name="type" id="type">
      <option value='Document'>Document</option>
      <option value='Non Document'>Non Document</option>
    </select>
      </form>
    </div>
  );
};

export default AdminStepsForm;
