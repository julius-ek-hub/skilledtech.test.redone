import MuiMenu from '@mui/material/Menu';
import MuiMenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIconIcon from '@mui/icons-material/Edit';

import usePostMenu from '../../hooks/usePostMenu';

const MenuItem = ({ title, Icon, ...rest }) => (
    <MuiMenuItem {...rest}>
        <ListItemIcon sx={{ minWidth: '25px !important' }}>
            <Icon fontSize="small" />
        </ListItemIcon>
        {title}
    </MuiMenuItem>
);

export default function Menu() {
    const { post, handleClose, ...rest } = usePostMenu();

    return (
        <>
            <IconButton
                onClick={rest.handleClick}
                size="small"
                sx={{ ml: 'auto', alignSelf: 'flex-start' }}
            >
                <MoreHorizIcon />
            </IconButton>
            <MuiMenu
                anchorEl={rest.anchorEl}
                open={rest.open}
                onClose={handleClose}
                onClick={handleClose}
            >

                <MenuItem title="Delete" Icon={DeleteIcon} onClick={() => rest.deletePost(post.id)} />
                <MenuItem title="Edit" Icon={EditIconIcon} onClick={() => rest.router.push(`/posts/${post.id}`)} />
            </MuiMenu>
        </>
    );
}

