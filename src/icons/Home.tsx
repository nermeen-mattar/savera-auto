import { SVGProps } from 'react';

const IconHome = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <g clipPath="url(#home_svg__a)">
            <path d="M4.593 12.463 2.667 14.39a1.482 1.482 0 1 1-2.074-2.074l10.37-10.37a1.48 1.48 0 0 1 2.074 0l10.37 10.37a1.482 1.482 0 1 1-2.074 2.074l-1.926-1.926v7.556a2.22 2.22 0 0 1-2.148 2.222H6.815a2.22 2.22 0 0 1-2.222-2.222zM7.556 9.5v9.778h8.888V9.5L12 5.056z" />
        </g>
        <defs>
            <clipPath id="home_svg__a">
                <path d="M0 0h24v24H0z" />
            </clipPath>
        </defs>
    </svg>
);
export default IconHome;
