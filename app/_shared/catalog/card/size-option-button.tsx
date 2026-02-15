import { Button } from '@repo/core/button';
import { Typography } from '@repo/core/typography';
import { useState } from 'react';

import type { Option } from '~/api/models/types';

type SizeOptionButtonProps = {
    onClick: (option: Option) => void;
    option: Option;
    selectedSize: number;
};

function SizeOptionButton({ onClick, option, selectedSize }: SizeOptionButtonProps) {
    const [isHovered, setIsHovered] = useState(false);
    const isSelected = selectedSize === option.size;

    function handleClick() {
        onClick(option);
    }

    function handleHover() {
        setIsHovered(!isHovered);
    }

    return (
        <Button
            className={`rounded-xs flex-1 py-[5px] ${isSelected ? 'bg-white' : ''}`}
            form="default"
            key={option.size}
            onClick={handleClick}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            variant="default"
        >
            <Typography
                className={isHovered || isSelected ? 'text-black' : 'text-shadow-text'}
                variant="description"
            >
                {option.size}
            </Typography>
        </Button>
    );
}

export default SizeOptionButton;
