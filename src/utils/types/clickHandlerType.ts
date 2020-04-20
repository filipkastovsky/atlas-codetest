import { ItemTypes } from './ItemTypes';

export type clickHandlerType = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    nodeType: ItemTypes,
    nodeId: string,
) => void;
