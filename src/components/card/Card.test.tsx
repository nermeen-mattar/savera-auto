import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card component', () => {
    const props = {
        name: 'Test Pet',
        photoUrl: 'https://example.com/test.jpg',
        photoPlaceholder: 'placeholder.jpg',
        actionLabel: 'View Details',
    };

    it('renders card with the passed content', () => {
        render(<Card {...props} />);

        const petName = screen.getByText(props.name);
        expect(petName).toBeInTheDocument();

        const actionButton = screen.getByText(props.actionLabel);
        expect(actionButton).toBeInTheDocument();
    });
});
