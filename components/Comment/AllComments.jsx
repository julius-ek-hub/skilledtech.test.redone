import Box from '@mui/material/Box';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Accordion from '@mui/material/Accordion';
import List from '@mui/material/List';

import { styled, lighten } from '@mui/material/styles';

import CommentsCount from './CommentsCount';
import Comment from '.';
import LoadMore from '../LoadMore';
import CommentsSkeleton from '../Skeletons/CommentsSkeleton';

import usePostContext from '../../hooks/usePostContext';

const StyledCommentBox = styled(Box)(({ theme }) => ({
    color: theme.palette.text.primary,
    marginLeft: '1rem',
    borderLeft: `2px solid ${lighten(theme.palette.primary.main, 0.5)}`,
}))



const unset = {
    padding: 0,
    margin: 0,
    minHeight: 'unset'
}

export default function AllComments() {

    const { availablePostComments, post, fetch10Comments, onCommentsOpen, isCommentsLoading, isPostOpened } = usePostContext();

    return (
        <Accordion expanded={isPostOpened(post.id)} onChange={() => onCommentsOpen(post.id)} sx={{
            boxShadow: 'none',
            '&:before': { backgroundColor: 'unset' },
            '& .MuiAccordionSummary-content, &.Mui-expanded': unset,
            '& .MuiAccordionSummary-content.Mui-expanded': unset
        }}>
            <AccordionSummary sx={{
                '& .Mui-expanded': unset,
                '&.MuiAccordionSummary-root': unset
            }}><CommentsCount /></AccordionSummary>
            <AccordionDetails>
                <StyledCommentBox>
                    <List>
                        {availablePostComments(post.id).map(Comment)}
                    </List>
                    {isCommentsLoading(post.id) && <CommentsSkeleton />}
                    <LoadMore onClick={() => fetch10Comments(post.id)} />
                </StyledCommentBox>
            </AccordionDetails>
        </Accordion>
    );
}

