import { DELDATE, EDITDATE, NEWDATE } from '../types';

export const newDate = (data) => ({
      type: NEWDATE,
      payload: data,
});

export const editDate = (data) => ({
      type: EDITDATE,
      payload: date,
});
export const deleteDate = (data) => ({
      type: DELDATE,
      payload: data,
});
