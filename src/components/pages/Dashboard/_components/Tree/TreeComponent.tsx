import React, { useCallback, useContext } from 'react';
import { IRenderTree } from '../../../../../utils/types/IRenderTree';
import { renderTreeRecursive } from '../../../../../utils/renderTreeRecursive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { TreeView, SingleSelectTreeViewProps } from '@material-ui/lab';
import { clickHandlerType } from '../../../../../utils/types/clickHandlerType';
import { ItemTypes } from '../../../../../utils/types/ItemTypes';
import { AppContext } from '../../../../../context/AppContext';
import { setListId } from '../../../../../context/actions/setListId';
import { openFile } from '../../../../../context/actions/openFile';

export interface ITreeComponentProps extends SingleSelectTreeViewProps {
    tree: IRenderTree;
}

export const TreeComponent: React.FC<ITreeComponentProps> = ({
    tree,
    children,
    ...props
}) => {
    const { dispatch } = useContext(AppContext);

    const clickHandler = useCallback<clickHandlerType>(
        (_e, type, nodeId) => {
            switch (type) {
                case ItemTypes.Folder:
                    return dispatch(setListId(nodeId));
                case ItemTypes.File: {
                    return dispatch(openFile(nodeId));
                }
            }
        },
        [dispatch],
    );

    return (
        <>
            {tree && (
                <TreeView
                    color="primary"
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                    {...props}
                >
                    {renderTreeRecursive(tree)(clickHandler)}
                    {children}
                </TreeView>
            )}
        </>
    );
};
