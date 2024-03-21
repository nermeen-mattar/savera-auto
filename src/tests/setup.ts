import matchers from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/react';
import { vitest } from 'vitest';
import { expect } from 'vitest';

expect.extend(matchers);

afterEach(() => {
    cleanup();
});

vitest.mock('react-i18next', () => ({
    useTranslation: () => ({ t: (key: string) => key }),
}));
