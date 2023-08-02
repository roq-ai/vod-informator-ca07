import * as yup from 'yup';

export const movieValidationSchema = yup.object().shape({
  name: yup.string().required(),
  year: yup.number().integer().required(),
  category: yup.string().required(),
  vod_service: yup.string().required(),
  cost: yup.number().integer().required(),
  interesting_facts: yup.string().nullable(),
});
