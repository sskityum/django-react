import {
  FETCH_NOTES,
  SHOW_LODER,
  REMOVE_NOTE,
  ADD_NOTE,
  CHANGE_NOTE,
  CLEARING_NOTE,
  START_EDT_NOTE,
  SAVE_EDT_NOTE,
} from "./types";

const handlers = {
  [SHOW_LODER]: (state) => ({ ...state, loading: true }),
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
  [CHANGE_NOTE]: (state, { payload }) => ({
    ...state,
    note: { ...state.note, title: payload },
  }),
  [CLEARING_NOTE]: (state) => ({
    ...state,
    note: {
      id: null,
      title: "",
      completed: false,
    },
  }),
  [START_EDT_NOTE]: (state, { payload }) => ({
    ...state,
    note: {
      id: payload.id,
      title: payload.title,
      completed: payload.completed,
    },
    editing: true,
  }),
  [SAVE_EDT_NOTE]: (state, { payload }) => ({
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
