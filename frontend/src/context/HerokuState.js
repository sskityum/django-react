import React, { useReducer } from "react";

import { HerokuContext } from "./herokuContext";
import { herokuReducer } from "./herokuReducer";
import {
  ADD_NOTE,
  CHANGE_NOTE,
  CLEARING_NOTE,
  FETCH_NOTES,
  REMOVE_NOTE,
  SAVE_EDT_NOTE,
  SHOW_LODER,
  START_EDT_NOTE,
} from "./types";

const url = process.env.REACT_APP_HEROKU_URL;

export const HerokuState = ({ children }) => {
  const getCookie = (name) => {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) === name + "=") {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  };

  const initState = {
    note: {
      id: null,
      title: "",
      completed: false,
    },
    notes: [],
    loading: false,
    editing: false,
  };

  const [state, dispatch] = useReducer(herokuReducer, initState);

  const showLoader = () => dispatch({ type: SHOW_LODER });

  const fetchNotes = async () => {
    showLoader();
    try {
      const response = await fetch(`${url}/api/task-list/`);
      if (response.ok) {
        const payload = await response.json();
        dispatch({
          type: FETCH_NOTES,
          payload,
        });
      }
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const removeNote = async (id) => {
    showLoader();
    const csrftoken = getCookie("csrftoken");
    await fetch(`${url}/api/task-delete/${id}/`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json", "X-CSRFToken": csrftoken },
    });
    dispatch({
      type: REMOVE_NOTE,
      payload: id,
    });
  };

  const addNote = async () => {
    showLoader();
    const csrftoken = getCookie("csrftoken");
    let urlEdtAdd = `${url}/api/task-create/`;

    if (state.editing) {
      urlEdtAdd = `${url}/api/task-update/${state.note.id}/`;
    }

    try {
      const response = await fetch(urlEdtAdd, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrftoken,
        },
        body: JSON.stringify(state.note),
      });
      if (response.ok) {
        const payload = await response.json();
        if (state.editing) {
          dispatch({ type: SAVE_EDT_NOTE, payload });
        } else {
          dispatch({ type: ADD_NOTE, payload });
        }
      }
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const changeNote = (title) => dispatch({ type: CHANGE_NOTE, payload: title });

  const clearingNote = () => dispatch({ type: CLEARING_NOTE });

  const startEdtNote = (note) =>
    dispatch({ type: START_EDT_NOTE, payload: note });

  const setStrikeUnstrike = async (note) => {
    const csrftoken = getCookie("csrftoken");
    note.completed = !note.completed;
    try {
      const response = await fetch(`${url}/api/task-update/${note.id}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrftoken,
        },
        body: JSON.stringify({ completed: note.completed, title: note.title }),
      });
      if (response.ok) {
        const payload = await response.json();
        dispatch({ type: SAVE_EDT_NOTE, payload });
      }
    } catch (err) {
      throw new Error(err.message);
    }
  };

  return (
    <HerokuContext.Provider
      value={{
        loading: state.loading,
        note: state.note,
        notes: state.notes,
        fetchNotes,
        removeNote,
        addNote,
        changeNote,
        clearingNote,
        startEdtNote,
        setStrikeUnstrike,
      }}
    >
      {children}
    </HerokuContext.Provider>
  );
};
