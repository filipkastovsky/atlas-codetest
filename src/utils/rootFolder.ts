import { IRenderTree } from './types/IRenderTree';
import { ItemTypes } from './types/ItemTypes';

export const rootFolder: IRenderTree = {
    id: 'root',
    name: '/',
    type: ItemTypes.Folder,
    children: [],
};
