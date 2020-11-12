import React, { useContext, useEffect } from "react";

import { HerokuContext } from "../context/herokuContext";
import { Note } from "./Note";

export const NoteList = () => {
  const { loading, notes, fetchNotes } = useContext(HerokuContext);

  useEffect(() => {
    fetchNotes();
    // eslint-disable-next-line
  }, []);

  return (
    <ul className="list-group">
      {loading ? (
        <p className="h3">loading ...</p>
      ) : notes.length ? (
        notes.map((note, index) => {
          return <Note key={index} index={index} note={note} />;
        })
      ) : (
        <p className="h3">all tasks completed ...</p>
      )}
    </ul>
  );
};
