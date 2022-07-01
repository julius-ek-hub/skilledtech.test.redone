import { Centralise, Container } from './StyledComponents/View';

import useDimension from '../hooks/useDimension';

function View({ children }) {

    const { height, md } = useDimension();

    return (
        <Centralise>
            <Container md={md} height={height}>
                {children}
            </Container>
        </Centralise>
    );
}

export default View;