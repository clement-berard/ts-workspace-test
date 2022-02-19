import {TRUITE_NB} from "./poissons/truitesNumbers";

export interface poiscaye {
    id: boolean,
    name: string
}

export const yolo: boolean = true;
export const titi = 'la truite 2 --- ' + TRUITE_NB.TREE;

export const myOldFunction = (options: any) => {
    return options?.toto;
}
