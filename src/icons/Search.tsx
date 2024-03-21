import { SVGProps } from 'react';

const IconSearch = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        fill="none"
        {...props}
    >
        <g clipPath="url(#search_svg__a)">
            <path
                fill="#111"
                d="M2.182 2.162a7.487 7.487 0 0 1 10.505 0 7.44 7.44 0 0 1 .808 9.596l6.182 6.181c1.07 1.071-.707 2.768-1.738 1.738l-6.161-6.182c-2.526 1.778-6.627 2.182-9.596-.808-2.91-2.889-2.91-7.596 0-10.505zm8.788 8.808c1.919-1.92 1.96-5.091 0-7.071s-5.112-1.92-7.071 0c-1.96 1.92-1.859 5.192 0 7.07 1.858 1.88 5.151 1.92 7.07 0"
            />
        </g>
        <defs>
            <clipPath id="search_svg__a">
                <path fill="#fff" d="M20 0H0v20h20z" />
            </clipPath>
        </defs>
    </svg>
);
export default IconSearch;
