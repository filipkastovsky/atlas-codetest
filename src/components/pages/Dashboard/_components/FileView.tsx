import React, { useContext, useRef, useEffect } from 'react';
import { AppContext } from '../../../../context/AppContext';
import { useLazyQuery } from 'react-apollo';
import { GET_FILE_BY_ID_QUERY } from '../../../../graphql/queries/GET_FILE_BY_ID_QUERY';
import styled from 'styled-components';
import { Colors } from '../../../../theme/Colors';
import { closeFile } from '../../../../context/actions/closeFile';

const StyledDiv = styled.div`
    color: ${Colors.FONT_LIGHT};
`;

export const FileView = () => {
    const {
        state: { fileId },
        dispatch,
    } = useContext(AppContext);
    const initialRender = useRef<boolean>(true);

    const [getFile, { data, error }] = useLazyQuery(GET_FILE_BY_ID_QUERY);

    useEffect(() => {
        if (initialRender.current) initialRender.current = false;
        else fileId && getFile({ variables: { id: fileId } }); // A bit hacky
    }, [fileId, getFile]);

    useEffect(() => {
        if (error && fileId) {
            dispatch(closeFile(fileId));
            alert('This file cannot be opened');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, error]);

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
