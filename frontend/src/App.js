import React from "react";
import { AddNote } from "./components/AddNote";

import { NoteList } from "./components/NoteList";

export const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12" style={{ textAlign: "center" }}>
          <h1 className="display-2">django+react-todo to heroku</h1>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-12">
          <AddNote />
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-12">
          <NoteList />
        </div>
      </div>
    </div>
  );
};
