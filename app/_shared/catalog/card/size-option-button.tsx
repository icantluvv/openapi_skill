import { Button } from '@repo/core/button';
import { Typography } from '@repo/core/typography';
import { useState } from 'react';

function SizeOptionButton({
    onClick,
    option,
    selectedSize,
}: {
    onClick: (option: Option) => void;
    option: Option;
    selectedSize: number;
}) {
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
            className={`flex-1 rounded-xs py-[5px] ${isSelected ? 'bg-white' : ''}`}
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
