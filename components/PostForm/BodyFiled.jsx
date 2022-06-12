import FormField from './FormField';

const BodyField = () => (
    <FormField
        name="body"
        label="Body"
        multiline
        minRows={4}
        sx={{
            '& .MuiInputAdornment-root': {
                alignSelf: 'flex-start',
                mt: 1.4
            }
        }} />

);

export default BodyField;