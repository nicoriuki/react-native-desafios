import * as FileSystem from 'expo-file-system';

export const ADD_PHOTO = 'ADD_PHOTO';

export const addPhoto = (title, image) => {
      //return { type: ADD_PLACE, payload: {title}}
      console.log(image);
      return async (dispatch) => {
            const fileName = image.split('/').pop();
            const Path = FileSystem.documentDirectory + fileName;

            try {
                  await FileSystem.moveAsync({
                        from: image,
                        to: Path,
                  });
            } catch (error) {
                  console.log('error', error.message);
                  throw error;
            }

            dispatch({ type: ADD_PHOTO, payload: { title, image: Path } });
      };
};
