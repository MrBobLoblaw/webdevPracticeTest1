import React, { useState } from "react";
import "./multiple.css";

export default function Multiple() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `The new shop is called: ${formData.name}, Additional Information: ${formData.description}`
    );
  };

  const handleCancel = (event) => {
    setFormData({ name: "", description: "", });
  }

  return (
    <form onSubmit={handleSubmit} onCancel={handleCancel} className="multiple">
      <h1 className="multiple__header">
        New Shop
      </h1>

      <input
        placeholder="Name"
        type="text"
        id="name"
        className="multiple__input"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <textarea
        placeholder="Description"
        id="description"
        className="multiple__textarea"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />

      <button className="multiple__button__submit" type="submit">
        Submit
      </button>
      <button className="multiple__button__cancel" type="button" onClick={handleCancel}>
        Cancel
      </button>
    </form>
  );
}
