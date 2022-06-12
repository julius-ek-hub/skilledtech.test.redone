import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import LoadMoreIcon from '@mui/icons-material/Replay'


const LoadMore = ({ onClick }) => (
    <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        mb: 2,
        '& button': {
            color: '#000',
            textTransform: 'none'
        }
    }}>
        <Button onClick={onClick} disableRipple>Load more <LoadMoreIcon /></Button>
    </Box>
)


export default LoadMore;