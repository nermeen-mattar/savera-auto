import { render, screen } from '@testing-library/react';
import { Pet } from '../../types/pet';
import PetsList from './PetsList';

const mockedPets: Pet[] = [
    {
        id: 1,
        name: 'Daamin',
        species: 'Cat',
        available: false,
        birthYear: 2012,
        dateAdded: '19-06-2021',
        photoUrl: 'https://i.imgur.com/wpfirW7l.jpg',
    },
    {
        id: 2,
        name: 'Dann',
        species: 'Dog',
        available: true,
        birthYear: 2016,
        dateAdded: '01-01-2022',
        photoUrl: 'https://i.imgur.com/ES0AHRxl.jpg',
    },
];

describe('PetsList', () => {
    it('renders correct number of pet cards', () => {
        render(<PetsList pets={mockedPets} />);
        const petCards = screen.getAllByTestId('pet-card');
        expect(petCards).toHaveLength(mockedPets.length);
    });
});
