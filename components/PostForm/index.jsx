import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import View from '../View';
import Form from './Form';
import TitleField from './TitleField';
import BodyField from './BodyFiled';
import SubmitButton from './SubmitButton';

import userPostForm from '../../hooks/userPostForm';

const LoadingIndicator = () => (
    <Box display="flex">
        <CircularProgress size={25} />
        <Typography marginLeft={1}>Please wait...</Typography>
    </Box>
)

function UsersForm() {

    const form = userPostForm();

    const ViewNavBar = (
        <Typography
            variant='h6'
            padding={2}
            fontWeight="bolder">
            {form.error ? 'Error' : (form.loading ? <LoadingIndicator /> : ((form.isNewPost ? 'New' : 'Edit') + ' Post'))}
        </Typography>
    );

    const error = <Typography color="error">{form.error}</Typography>;

    return (
        <View NavBarComponent={ViewNavBar}>
            {(form.loading || form.saving) ? <LoadingIndicator /> : (
                <>
                    {form.error && error}
                    <Form
                        initialValues={form.initialValues}
                        onSubmit={form.handleSubmit}>
                        <TitleField />
                        <BodyField />
                        <SubmitButton />
                    </Form>
                </>
            )}
        </View>
    );
}

export default UsersForm;