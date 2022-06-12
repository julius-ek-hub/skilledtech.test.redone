import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useDimension from '../hooks/useDimension';

const Centralise = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: theme.palette.divider
}));

const Container = styled(Box)(({ theme, smallScreen, maxSafeHeight }) => ({
    backgroundColor: theme.palette.background.paper,
    width: smallScreen ? '100%' : 780,
    maxHeight: maxSafeHeight
}))

const Sticky = styled(Box)(({ theme }) => ({
    backgroundColor: alpha(theme.palette.background.paper, 0.5),
    backdropFilter: "blur(10px)",
    borderBottom: `1px solid ${theme.palette.divider}`
}));


function View({ children, NavBarComponent }) {

    const { smallScreen, maxSafeHeight } = useDimension();

    return (
        <>
            <Centralise>
                <Container smallScreen={smallScreen}>
                    <Sticky>{NavBarComponent}</Sticky>
                    <div style={{
                        height: maxSafeHeight || 'calc(100vh - 60px)',
                        overflow: 'auto',
                        padding: 16
                    }}>
                        {children}
                    </div>
                </Container>
            </Centralise>
        </>
    );
}

export default View;