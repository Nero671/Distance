import * as Yup from 'yup';

const fileValidationSchema = Yup.object().shape({
    file: Yup.array().of(Yup.object.shape({
        file: Yup.mixed().test('fileSize', 'File size bigger than 10 bytes', (value) => {
            if (!value) return false
                return value.size < 10
        }),
        type: Yup.string().oneOf([], 'Wrong format'),
        name: Yup.string(),
    }).typeError('Add file'))
});

export default fileValidationSchema;
