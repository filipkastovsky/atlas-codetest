import { IRenderTree } from './types/IRenderTree';
import clone from 'lodash/cloneDeep';
import uniqBy from 'lodash/uniqBy';

export const insertIntoTree = (
    tree: IRenderTree,
    insertionNodeId: string,
    insertedNodes: IRenderTree[],
) => {
    // Side effect: throws on failure to find path

    // Note: Doesn't mutatate original tree
    const mutableTree = clone(tree);

    //* Breadth first search
    const queue: IRenderTree[] = [mutableTree];

    while (queue.length) {
        const currentNode = queue.shift();

        if (currentNode?.id === insertionNodeId) {
            currentNode!.children = uniqBy(
                [...currentNode!.children, ...insertedNodes],
                'id',
            );
            return mutableTree;
        }

        currentNode?.children?.forEach((child) => queue.push(child));
    }

    throw new Error('Unable to find path to node');
};
