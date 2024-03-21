import { SVGProps } from 'react';

const IconChevronDown = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={12}
        height={12}
        fill="none"
        {...props}
    >
        <path
            fill="#111"
            d="M5.02 9.432.407 4.82c-1.311-1.3.85-3.57 2.185-2.222l3.4 3.4 3.472-3.4c1.396-1.396 3.339 1.056 2.185 2.21L7.036 9.42c-.607.534-1.494.534-2.016 0z"
        />
    </svg>
);
export default IconChevronDown;
