// root/data/artikel.ts

export interface Pullover {
    id: string;
    name: string;
    groesse: 's' | 'm' | 'l';
}

export const pullover: Pullover[] = [
    { id: '1', name: 'Wollpullover', groesse: 's' },
    { id: '2', name: 'Rollkragenpullover', groesse: 'm' },
    { id: '3', name: 'Kapuzenpullover', groesse: 'l' },
]