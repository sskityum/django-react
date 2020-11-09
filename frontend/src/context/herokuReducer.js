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

const handlers = {
  [SHOW_LOADER]: (state) => ({ ...state, loading: true }),
  [FETCH_NOTES]: (state, { payload }) => ({
    ...state,
    notes: payload,
    loading: false,
  }),
  [REMOVE_NOTE]: (state, { payload }) => ({
    ...state,
    notes: state.notes.filter((note) => note.id !== payload),
    loading: false,
  }),
  [ADD_NOTE]: (state, { payload }) => ({
    ...state,
    notes: [...state.notes, { ...payload }],
    loading: false,
  }),
  [INP_CHANGE]: (state, { payload }) => ({
    ...state,
    note: { ...state.note, title: payload },
  }),
  [INP_RES]: (state) => ({
    ...state,
    note: {
      id: null,
      title: "",
      completed: false,
    },
  }),
  [START_EDIT_NOTE]: (state, { payload }) => ({
    ...state,
    note: {
      id: payload.id,
      title: payload.title,
      completed: payload.completed,
    },
    editing: true,
  }),
  [SAVE_EDITABLE_NOTE]: (state, { payload }) => ({
    ...state,
    notes: state.notes.map((note) =>
      note.id === payload.id ? (note = payload) : note
    ),
    loading: false,
    editing: false,
  }),
  DEFAULT: (state) => state,
};

export const herokuReducer = (state, action) => {
  const handle = handlers[action.type] || action.DEFAULT;
  return handle(state, action);
};
