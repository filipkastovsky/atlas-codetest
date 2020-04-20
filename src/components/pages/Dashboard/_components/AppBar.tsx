import React, { useContext, useCallback } from 'react';
import { AppContext } from '../../../../context/AppContext';
import { Tabs, Tab, AppBar as MuiAppBar } from '@material-ui/core';
import { Colors } from '../../../../theme/Colors';
import { setFileId } from '../../../../context/actions/setFileId';
import { closeFile } from '../../../../context/actions/closeFile';
import styled from 'styled-components';
import { Label } from './Label';

const StyledTabs = styled(Tabs)`
    max-height: 5%;
    background: ${Colors.BROWN_DARK};
    color: ${Colors.FONT_LIGHT};
`;

export const AppBar = () => {
    const {
        state: { fileId, openFileIds },
        dispatch,
    } = useContext(AppContext);

    const onClickClose = useCallback(
        (id: string) => (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
            e.stopPropagation();
            dispatch(closeFile(id));
        },
        [dispatch],
    );

    return (
        <>
            {!!openFileIds.length && (
                <MuiAppBar>
                    <StyledTabs
                        indicatorColor="primary"
                        value={fileId || false}
                        onChange={(_e, newFileId) =>
                            dispatch(setFileId(newFileId))
                        }
                        variant="scrollable"
                        scrollButtons="auto"
                    >
                        {openFileIds.map((id) => (
                            <Tab
                                key={id}
                                value={id}
                                label={
                                    <Label onClickClose={onClickClose(id)}>
                                        {id}
                                    </Label>
                                }
                            />
                        ))}
                    </StyledTabs>
                </MuiAppBar>
            )}
        </>
    );
};
