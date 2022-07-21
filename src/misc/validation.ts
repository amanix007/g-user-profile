import * as yup from 'yup'

const workExperience = {
  startDate: '',
  endDate: '',
  jobTitle: '',
  company: '',
  companyLogo: '',
  jobDescription: '',
}
export const initialValues = {
  name: '',
  age: '',
  // friends: ['jared', 'ian', 'brent'],
  workExperiences: [workExperience],
}

export const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  age: yup.number().required('Age is required'),
  workExperiences: yup.array().of(
    yup.object().shape({
      startDate: yup.string().required('startDate required'),
      endDate: yup.string().required('startDate required'),
      jobTitle: yup.string().required('startDate required'),
      company: yup.string().required('startDate required'),
      companyLogo: yup.string().required('startDate required'),
      jobDescription: yup.string().required('startDate required'),

    })
  ),
})
