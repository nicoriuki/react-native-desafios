import { DELDATE, EDITDATE, NEWDATE } from '../types';

export const initialState = [];

export function datesReducer(state = initialState, action) {
      switch (action.type) {
            case NEWDATE: {
                  return [...state, action.payload];
            }

            case EDITDATE: {
                  return {};
            }
            case DELDATE: {
                  return {};
            }

            default:
                  return state;
      }
}
