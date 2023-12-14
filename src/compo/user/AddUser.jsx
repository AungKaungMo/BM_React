import React, { useState } from "react";

function AddUser(props) {
  const [uuid, setUuid] = useState(null);
  const [image, setImage] = useState(null);
  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [cell, setCell] = useState(null);

  const handleUuidChange = (event) => {
    setUuid(event.target.value);
  };
  const handleImageChange = (event) => {
    setImage(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  const handleCellChange = (event) => {
    setCell(event.target.value);
  };
    const addUser = (e) => {
        e.preventDefault();
        let user = {
            uuid: uuid,
            name: name,
            image: image,
            phone: phone,
            cell: cell
        }
        props.addUserData(user);
    }
  return (
    <div className="my-3 bg-black text-white p-3 rounded">
      <form onSubmit={addUser}>
        <div className="form-group mb-3">
          <label htmlFor="exampleInputUuid">Uuid</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputUuid"
            placeholder="Uuid"
            onChange={handleUuidChange}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="exampleInputImage">Image</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputImage"
            placeholder="Image"
            onChange={handleImageChange}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="exampleInputName">Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            placeholder="Name"
            onChange={handleNameChange}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="exampleInputPhone">Phone</label>
          <input
            type="tel"
            className="form-control"
            id="exampleInputPhone"
            placeholder="Phone"
            onChange={handlePhoneChange}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="exampleInputCell">Cell</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputCell"
            placeholder="Cell"
            onChange={handleCellChange}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={addUser}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddUser;
