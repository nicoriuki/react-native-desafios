import { ADD_PHOTO } from '../actions/photoAction';
import Photo from './../../models/photo';

const initialState = {
      photos: [],
};

const photoReducer = (state = initialState, action) => {
      switch (action.type) {
            case ADD_PHOTO:
                  const newPhoto = new Photo(
                        Date.now(),
                        action.payload.title,
                        action.payload.image
                  );
                  return {
                        ...state,
                        photos: state.photos.concat(newPhoto),
                  };
            default:
                  return state;
      }
};
export default photoReducer;
