import React, { useReducer } from "react";

import { HerokuContext } from "./herokuContext";
import { herokuReducer } from "./herokuReducer";
import {
  ADD_NOTE,
  FETCH_NOTES,
  INP_CHANGE,
  REMOVE_NOTE,
  INP_RES,
  SHOW_LOADER,
  START_EDIT_NOTE,
  SAVE_EDITABLE_NOTE,
} from "./types";

const url = process.env.REACT_APP_NET_DB;

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
    notes: [],
    note: {
      id: null,
      title: "",
      completed: false,
    },
    loading: false,
    editing: false,
  };

  const [state, dispatch] = useReducer(herokuReducer, initState);

  const showLoader = () => dispatch({ type: SHOW_LOADER });

  const fetchNotes = async () => {
    showLoader();
    try {
      const response = await fetch(`${url}/api/task-list/`);
      if (response.ok) {
        const data = await response.json();
        const payload = data.map((note) => {
          return note;
        });
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

    let urlAddEdit = `${url}/api/task-create/`;

    if (state.editing) {
      urlAddEdit = `${url}/api/task-update/${state.note.id}/`;
    }

    try {
      const response = await fetch(urlAddEdit, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrftoken,
        },
        body: JSON.stringify(state.note),
      });
      if (response.ok) {
        const data = await response.json();
        const payload = data;
        if (state.editing) {
          dispatch({
            type: SAVE_EDITABLE_NOTE,
            payload,
          });
        } else {
          dispatch({
            type: ADD_NOTE,
            payload,
          });
        }
      }
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const inputChange = (value) => {
    dispatch({
      type: INP_CHANGE,
      payload: value,
    });
  };

  const inputReset = () => {
    dispatch({ type: INP_RES });
  };

  const editNote = (note) => {
    dispatch({ type: START_EDIT_NOTE, payload: note });
  };

  const setStrikeUnstrike = async (note) => {
    showLoader();

    const csrftoken = getCookie("csrftoken");

    note.completed = !note.completed;
    const response = await fetch(`${url}/api/task-update/${note.id}/`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-CSRFToken": csrftoken },
      body: JSON.stringify({ completed: note.completed, title: note.title }),
    });
    if (response.ok) {
      const data = await response.json();
      const payload = data;
      dispatch({
        type: SAVE_EDITABLE_NOTE,
        payload,
      });
    }
  };

  return (
    <HerokuContext.Provider
      value={{
        note: state.note,
        notes: state.notes,
        loading: state.loading,
        fetchNotes,
        removeNote,
        addNote,
        inputChange,
        inputReset,
        editNote,
        setStrikeUnstrike,
      }}
    >
      {children}
    </HerokuContext.Provider>
  );
};
