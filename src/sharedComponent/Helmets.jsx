
import { Helmet } from 'react-helmet-async';

// eslint-disable-next-line react/prop-types
const Helmets = ({heading}) => {
    return (
        <div>
            <Helmet>
                <title>Quora BD | {heading}</title>
            </Helmet>
            
        </div>
    );
};

export default Helmets;