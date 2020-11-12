import React, { useContext } from "react";

import { HerokuContext } from "../context/herokuContext";

export const AddNote = () => {
  const { note, changeNote, addNote, clearingNote } = useContext(HerokuContext);

  const handlerChange = (e) => {
    changeNote(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (note.title.trim()) {
      addNote();
    }
    clearingNote();
  };

  return (
    <form onSubmit={handlerSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="add here ..."
          value={note.title}
          onChange={handlerChange}
        />
      </div>
      <button type="submit" className="btn btn-secondary">
        Submit
      </button>
    </form>
  );
};
