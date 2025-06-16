import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AppEvent } from "../../lib/types";

type State = {
  events: AppEvent[];
  selectedEvent: AppEvent | null;
};

const initialState: State = {
  events: [],
  selectedEvent: null,
};  

export const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    setEvents: (state, action: PayloadAction<AppEvent[]>) => {
      state.events = action.payload;
    },
    createEvent: (state, action: PayloadAction<AppEvent>) => {
      state.events.push(action.payload);
    },
    updateEvent: (state, action: PayloadAction<AppEvent>) => {
      const index = state.events.findIndex(event => event.id === action.payload.id);
      if (index !== -1) {
        state.events[index] = action.payload;
      }
    },
    deleteEvent: (state, action: PayloadAction<string>) => {
      state.events = state.events.filter(event => event.id !== action.payload);
    },
    selectEvent: (state, action: PayloadAction<AppEvent | null>) => {
      state.selectedEvent = action.payload;
    },

  },
}); 

export const {setEvents, createEvent, updateEvent, deleteEvent, selectEvent} = eventSlice.actions;





