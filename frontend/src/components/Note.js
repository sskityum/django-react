import React, { useContext } from "react";
import { HerokuContext } from "../context/herokuContext";

export const Note = ({ note, index }) => {
  const { removeNote, editNote, setStrikeUnstrike } = useContext(HerokuContext);

  return (
    <li
      className="list-group-item"
      style={{ display: "flex", justifyContent: "space-between" }}
      key={index}
    >
      <ul className="list-group list-group-horizontal" style={{ width: "90%" }}>
        <li
          className="list-group-item"
          style={{ width: "4rem", textAlign: "center" }}
        >
          <small>{index + 1}</small>
        </li>
        <li
          className="list-group-item"
          style={{ width: "100%", cursor: "pointer" }}
          onClick={() => setStrikeUnstrike(note)}
        >
          {note.completed ? (
            <strong style={{ textDecoration: "line-through", opacity: 0.2 }}>
              {note.title}
            </strong>
          ) : (
            <strong>{note.title}</strong>
          )}
        </li>
      </ul>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => editNote(note)}
          style={{ marginRight: "3px" }}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => removeNote(note.id)}
        >
          Del
        </button>
      </div>
    </li>
  );
};
