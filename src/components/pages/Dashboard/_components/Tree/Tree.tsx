import React, { useState, useEffect, useContext } from 'react';
import { IRenderTree } from '../../../../../utils/types/IRenderTree';
import { rootFolder } from '../../../../../utils/rootFolder';
import { useQuery } from 'react-apollo';
import { GET_LIST_BY_ID_QUERY } from '../../../../../graphql/queries/GET_LIST_BY_ID_QUERY';
import { insertIntoTree } from '../../../../../utils/insertIntoTree';
import { TreeComponent } from './TreeComponent';
import { AppContext } from '../../../../../context/AppContext';

import styled from 'styled-components';

const StyledTreeComponent = styled(TreeComponent)`
    width: 20vw;
    height: 100%;
`;

export const Tree = () => {
    const {
        state: { listId },
    } = useContext(AppContext);

    const [tree, setTree] = useState<IRenderTree>(rootFolder);

    const { data, error } = useQuery(GET_LIST_BY_ID_QUERY, {
        variables: { id: listId },
        fetchPolicy: 'cache-first',
    });

    useEffect(() => {
        if (data) {
            const dataWithChildren = data.getList.map((item: any) => ({
                ...item,
                children: [],
            }));

            const newTree = insertIntoTree(tree, listId, dataWithChildren);

            setTree(newTree);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    useEffect(() => {
        if (error) throw error;
    }, [error]);

    return <StyledTreeComponent {...{ tree }} />;
};
