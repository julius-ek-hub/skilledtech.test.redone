import React from "react";

import Skeleton from "@mui/material/Skeleton";

import useDimension from "../../hooks/useDimension";

function PostSkeleton({ total = 10 }) {
    const { maxSafeHeight } = useDimension();
    return (
        <div style={{ padding: 10, height: maxSafeHeight, overflow: 'hidden' }}>
            {[...new Array(total)].map((i, j) => (
                <React.Fragment key={j}>
                    <Skeleton width="100%" sx={{ transform: 'none', mt: 2 }} />
                    <Skeleton width="100%" sx={{ height: 100, transform: 'none', mt: 0.5 }} />
                    <Skeleton width="50%" sx={{ transform: 'none', mt: 1 }} />
                </React.Fragment>
            ))}
        </div>
    );
}

export default PostSkeleton;