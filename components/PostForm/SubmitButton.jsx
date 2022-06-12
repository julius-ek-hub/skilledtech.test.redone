import Link from 'next/link';

import Box from "@mui/material/Box";
import Button from '@mui/material/Button'

import { useFormikContext } from "formik";

function SubmitButton() {
    const { submitForm } = useFormikContext();

    return (
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
            <Button variant="contained" onClick={submitForm}>Save</Button>
            <Link href="/posts">
                <Button>Exit</Button>
            </Link>
        </Box>
    );
}

export default SubmitButton;
