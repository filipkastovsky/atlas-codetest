import { ItemTypes } from './ItemTypes';

export interface IRenderTree {
    id: string;
    name: string;
    type: ItemTypes;
    children: IRenderTree[];
}
