import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";
import InputAdornment from '@mui/material/InputAdornment';

import Edit from '@mui/icons-material/Edit';

import { useFormikContext } from "formik";

function FormField({ name, label, ...rest }) {
    const { errors, setFieldTouched, touched, values, setFieldValue } =
        useFormikContext();
    const error = errors[name];
    const properError = error && touched[name];

    return (
        <Box sx={{ mt: 2 }}>
            <TextField
                onChange={({ target: { value } }) => setFieldValue(name, value)}
                onBlur={() => setFieldTouched(name)}
                value={values[name]}
                error={properError}
                helperText={properError && error}
                fullWidth
                placeholder={'Aa'}
                label={label}
                InputProps={{
                    startAdornment: <InputAdornment position="start"><Edit /></InputAdornment>,
                }}
                {...rest}
            />
        </Box>
    );
}

export default FormField;
