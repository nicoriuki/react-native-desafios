import {
      ALLPATIENTS,
      SETPATIENT,
      GETPATIENT,
      EDITPATIENT,
      DELPATIENT,
} from '../types';

export const initialState = {
      list: [],
};

export function patientsReducer(state = initialState, action) {
      switch (action.type) {
            case ALLPATIENTS: {
                  return {
                        ...state,
                        list: action.payload,
                  };
            }

            case SETPATIENT: {
                  return [...state, action.payload];
            }
            case GETPATIENT: {
                  let patient = state.filter((el) => el.id === action.payload);
                  return patient;
            }
            case EDITPATIENT: {
                  let newData = state.map((el) =>
                        el.id === action.payload.id ? action.payload : el
                  );

                  return {
                        ...state,
                        newData,
                  };
            }
            case DELPATIENT: {
                  let newData = state.filter((el) => el.id !== action.payload);
                  return {
                        ...state,
                        newData,
                  };
            }

            default:
                  return state;
      }
}
