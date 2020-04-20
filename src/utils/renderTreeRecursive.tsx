import React from 'react';
import { TreeItem } from '@material-ui/lab';
import { IRenderTree } from './types/IRenderTree';
import FileCopyOutlined from '@material-ui/icons/FileCopyOutlined';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
import Folder from '@material-ui/icons/Folder';
import { ItemTypes } from './types/ItemTypes';
import { clickHandlerType } from './types/clickHandlerType';

export const renderTreeRecursive = ({
    id,
    name,
    type,
    children,
}: IRenderTree) => (handler?: clickHandlerType) => (
    <TreeItem
        key={id}
        nodeId={id}
        label={name}
        onClick={(e) => handler && handler(e, type, id)}
        endIcon={
            type === ItemTypes.File ? (
                <FileCopyOutlined color="primary" />
            ) : (
                <Folder color="primary" />
            )
        }
        collapseIcon={<ExpandLess color="primary" />}
        expandIcon={<ExpandMore color="primary" />}
    >
        {children && children.map((node) => renderTreeRecursive(node)(handler))}
    </TreeItem>
);
