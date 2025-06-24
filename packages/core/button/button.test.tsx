import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Button, buttonVariants } from './button';

describe('<Button />', () => {
    it('renders the button with default variant and size', () => {
        const { getByRole } = render(<Button>Button</Button>);

        expect(getByRole('button')).toHaveClass(buttonVariants({ variant: 'default' }));
    });

    it('triggers onClick', () => {
        const onClick = vi.fn();
        const { getByRole } = render(<Button onClick={onClick}>Button</Button>);

        fireEvent.click(getByRole('button'));

        expect(onClick).toHaveBeenCalled();
    });

    it('does not render a button element when asChild is true', () => {
        const { container } = render(
            <div>
                <Button asChild>Child Button</Button>
            </div>
        );

        expect(container.querySelector('button')).toBeNull();
    });
});
