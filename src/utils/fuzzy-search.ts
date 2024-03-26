import Fuse from 'fuse.js';

export function fuzzySearch(input: string, items: string[], threshold = 0.8) {
    input = input.toLowerCase();
    return items.filter((item) => {
        const itemLowerCase = item.toLowerCase();
        let i = 0;
        for (let j = 0; j < itemLowerCase.length; j++) {
            if (itemLowerCase[j] === input[i]) {
                i++;
            }
        }
        return i / input.length > threshold;
    });
}

export const simpleFuzzySearch = (input: string, items: string[]): string[] => {
    const words = input.trim().toLowerCase().split(' ');
    return items.filter((item) => {
        const itemLowerCase = item.toLowerCase();
        return words.some(
            (word) =>
                itemLowerCase.includes(word) || word.includes(itemLowerCase),
        );
    });
};

export const accurateFuzzySearch = (
    input: string,
    items: string[],
): string[] => {
    const options = {
        keys: ['name'],
        threshold: 0.6,
        ignoreLocation: true,
        ignoreFieldNorm: true,
    };

    const fuse = new Fuse(
        items.map((item) => ({ name: item })),
        options,
    );
    const result = fuse.search(input);

    return result.map(({ item }) => item.name);
};
