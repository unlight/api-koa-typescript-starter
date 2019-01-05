const cats = [
    { id: 1, name: 'Amalia' },
    { id: 2, name: 'Sanora' },
    { id: 3, name: 'Marlin' },
    { id: 4, name: 'Alexander' },
    { id: 5, name: 'Carrie' },
];

export class CatRepository {

    async getAll() {
        return cats;
    }

    async addCat(cat: any) {
        const result = { id: Math.floor(Math.random() * 1000), name: cat.name };
        cats.push(result);
        return result;
    }
}
