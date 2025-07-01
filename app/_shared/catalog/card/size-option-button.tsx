import { Button } from '@repo/core/button';
import { Typography } from '@repo/core/typography';

function SizeOptionButton({
    onClick,
    option,
    selectedSize,
}: {
    onClick: (option: Option) => void;
    option: Option;
    selectedSize: number;
}) {
    const isSelected = selectedSize === option.size;

    function handleClick() {
        onClick(option);
    }

    return (
        <Button
            className={`flex-1 rounded-xs py-[5px] ${isSelected ? 'bg-white' : ''}`}
            form="default"
            key={option.size}
            onClick={handleClick}
            variant="default"
        >
            <Typography
                className={`${isSelected ? '' : 'text-shadow-text'} hover:text-black`}
                variant="description"
            >
                {option.size}
            </Typography>
        </Button>
    );
}

export default SizeOptionButton;
