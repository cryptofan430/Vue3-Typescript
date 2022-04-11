import * as Yup from 'yup'

export const schema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    budget: Yup.number().required('Budget value is required').positive('Budget value is positive number'),
    currency: Yup.string().required('Budget currency is required'),
    platforms: Yup.string().required('Platforms is required'),
    ids: Yup.string().required('FilesIds is required'),
    description: Yup.string().required('Description is required'),
})