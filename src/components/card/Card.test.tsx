import { fireEvent, render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card component', () => {
    const props = {
        name: 'Test Pet',
        photoUrl: 'https://example.com/test.jpg',
        photoPlaceholder: 'placeholder.jpg',
        actionLabel: 'View Details',
    };

    it('renders card with correct content', () => {
        render(<Card {...props} />);

        const petName = screen.getByText(props.name);
        expect(petName).toBeInTheDocument();

        const actionButton = screen.getByText(props.actionLabel);
        expect(actionButton).toBeInTheDocument();
    });

    it('renders placeholder image if photoUrl fails to load', () => {
        render(<Card {...props} />);

        const image = screen.getByAltText(props.name) as HTMLImageElement;
        fireEvent.error(image);

        const placeholderImage = screen.getByAltText(
            props.name,
        ) as HTMLImageElement;
        expect(placeholderImage.src).toContain(props.photoPlaceholder);
    });

    it('does not render placeholder image if photoUrl loads successfully', () => {
        render(<Card {...props} />);

        const image = screen.getByAltText(props.name) as HTMLImageElement;
        fireEvent.load(image);

        const renderedImage = screen.getByAltText(
            props.name,
        ) as HTMLImageElement;
        expect(renderedImage.src).toContain(props.photoUrl);
    });
});
