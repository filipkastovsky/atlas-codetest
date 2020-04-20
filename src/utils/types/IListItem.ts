import { ItemTypes } from './ItemTypes';

export interface IListItem {
    id: string;
    name: string;
    type: ItemTypes;
    parentId?: string;
}
