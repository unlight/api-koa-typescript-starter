const cats = [
    { id: 2, name: 'Amalia' },
    { id: 4, name: 'Sanora' },
    { id: 1, name: 'Marlin' },
    { id: 8, name: 'Alexander' },
    { id: 9, name: 'Carrie' },
];

export class CatRepository {

    async getAll() {
        return cats;
    }
}
