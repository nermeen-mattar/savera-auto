import { SVGProps } from 'react';

const IconClock = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <path
            fill={props.fill}
            fillRule="evenodd"
            d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0m0 2.667c-5.147 0-9.333 4.186-9.333 9.333S6.853 21.333 12 21.333s9.333-4.186 9.333-9.333S17.147 2.667 12 2.667m0 2.666c.736 0 1.333.598 1.333 1.334v3.999H16a1.334 1.334 0 0 1 0 2.667h-4A1.334 1.334 0 0 1 10.667 12V6.667c0-.736.597-1.334 1.333-1.334"
            clipRule="evenodd"
        />
    </svg>
);
export default IconClock;
