import * as yup from 'yup';

export const favoriteValidationSchema = yup.object().shape({
  user_id: yup.string().nullable().required(),
  movie_id: yup.string().nullable().required(),
});
