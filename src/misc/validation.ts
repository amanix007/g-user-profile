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
      endDate: yup.string().required('endDate required'),
      jobTitle: yup.string().required('jobTitle required'),
      company: yup.string().required('company required'),
      companyLogo: yup.string().required('companyLogo required'),
      jobDescription: yup.string().required('jobDescription required'),

    })
  ),
})
