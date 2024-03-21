interface Props {
    fillColor?: string;
}

export default function ArrowRightIcon({ fillColor = '' }: Props) {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill={fillColor}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 12H20"
                stroke="#111111"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M13 5L20 12L13 19"
                stroke="#111111"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
