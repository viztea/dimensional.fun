import { PropsWithStyling } from 'lib/types';
import { PropsWithChildren } from 'react';

function Dropdown({ children }) {

}

Dropdown.Label = function Label({ children, ...props }: PropsWithChildren<PropsWithStyling>) {
    return (
        <div {...props}>
            {children}
        </div>
    )
};

export default Dropdown;
