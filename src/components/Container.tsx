import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

export interface IContainerProps extends HTMLAttributes<HTMLDivElement> {
    flex?: number;
    bg?: string;
}

export const Container = styled(({ flex, bg, ...props }: IContainerProps) => (
    <div {...props} />
))<IContainerProps>`
    overflow: scroll;
    position: relative;
    display: flex;
    flex: ${({ flex }) => flex};
    padding: 10px;
    background: ${({ bg }) => bg};
    &::-webkit-scrollbar {
        display: none;
    }
`;
