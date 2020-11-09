import React from "react";
import { AddNote } from "./components/AddNote";

import { NoteList } from "./components/NoteList";

export const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-5">
          <p className="h3" style={{ textAlign: "right" }}>
            django + react
          </p>
        </div>
        <div className="col-7">
          <p className="h3">"to-do-шка"</p>
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
