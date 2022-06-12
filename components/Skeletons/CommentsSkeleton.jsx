import Box from "@mui/material/Box";

import Skeleton from "@mui/material/Skeleton";

import useDimension from "../../hooks/useDimension";

function CommentsSkeleton({ total = 10 }) {
    const { maxSafeHeight } = useDimension();
    return (
        <div style={{ padding: 10, height: maxSafeHeight / 2, overflow: 'hidden' }}>
            {[...new Array(total)].map((i, j) => (
                <Box key={j} display="flex" marginTop={2}>
                    <Skeleton variant="circular" width={40} height={40} sx={{ ml: 1, mt: 2 }} />
                    <Box flexGrow={1} ml={2}>
                        <Skeleton width="50%" sx={{ transform: 'none', mt: 1 }} />
                        <Skeleton width="100%" sx={{ height: 100, transform: 'none', mt: 0.5 }} />
                    </Box>
                </Box>
            ))}
        </div>
    );
}

export default CommentsSkeleton;