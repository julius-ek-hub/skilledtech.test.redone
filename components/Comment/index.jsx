import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

export default function Comment({ name, id, body }) {
    return (
        <ListItem alignItems="flex-start" key={id}>
            <ListItemAvatar>
                <Avatar sizes='10px' sx={{ backgroundColor: theme => theme.palette.primary.main }} />
            </ListItemAvatar>
            <ListItemText
                primary={<Typography variant='h6' fontWeight="bold">{name}</Typography>}
                secondary={body}
                secondaryTypographyProps={{ variant: 'div' }}
            />
        </ListItem>
    );
}

