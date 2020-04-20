import React from 'react';
import Close from '@material-ui/icons/Close';
import styled from 'styled-components';

export interface ILabelProps {
    onClickClose: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}

const StyledDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: 'bottom';
`;

export const Label: React.FC<ILabelProps> = ({ children, onClickClose }) => {
    return (
        <StyledDiv>
            {children}
            <Close onClick={onClickClose} />
        </StyledDiv>
    );
};
