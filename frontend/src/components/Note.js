import React, { useContext } from "react";

import { HerokuContext } from "../context/herokuContext";

export const Note = ({ note, index }) => {
  const { removeNote, startEdtNote, setStrikeUnstrike } = useContext(
    HerokuContext
  );

  return (
    <li
      className="list-group-item"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <ul className="list-group list-group-horizontal" style={{ width: "85%" }}>
        <li
          className="list-group-item"
          style={{ width: "4rem", textAlign: "center" }}
        >
          <small>{index + 1}</small>
        </li>
        <li
          className="list-group-item"
          style={{ width: "100%", cursor: 'pointer' }}
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
          className="btn btn-secondary"
          onClick={() => startEdtNote(note)}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => removeNote(note.id)}
        >
          Remove
        </button>
      </div>
    </li>
  );
};
