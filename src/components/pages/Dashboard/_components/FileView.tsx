import React, { useContext, useRef, useEffect } from 'react';
import { AppContext } from '../../../../context/AppContext';
import { useLazyQuery } from 'react-apollo';
import { GET_FILE_BY_ID_QUERY } from '../../../../graphql/queries/GET_FILE_BY_ID_QUERY';
import styled from 'styled-components';
import { Colors } from '../../../../theme/Colors';

const StyledDiv = styled.div`
    color: ${Colors.FONT_LIGHT};
`;

export const FileView = () => {
    const {
        state: { fileId },
    } = useContext(AppContext);
    const initialRender = useRef<boolean>(true);

    const [getFile, { data, error }] = useLazyQuery(GET_FILE_BY_ID_QUERY);

    useEffect(() => {
        if (initialRender.current) initialRender.current = false;
        else fileId && getFile({ variables: { id: fileId } }); // A bit hacky
    }, [fileId, getFile]);

    useEffect(() => {
        if (error) throw error;
    }, [error]);

    return (
        <>
            {data && fileId && (
                <StyledDiv>
                    <h2>{data.getFile.name}</h2>
                    {data.getFile.text}
                </StyledDiv>
            )}
        </>
    );
};
