import { SVGProps } from 'react';

const IconPin = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <g clipPath="url(#pin_svg__a)">
            <path d="M11.982 2.91c3.636 0 7.273 2.42 7.273 7.272 0 3.214-3.2 7.49-5.353 10.014a2.525 2.525 0 0 1-3.84 0c-2.153-2.523-5.353-6.8-5.353-10.014 0-4.851 3.636-7.273 7.273-7.273zm0-2.91C6.89 0 1.8 3.498 1.8 10.182c0 3.193 2.036 7.2 6.05 11.905a5.433 5.433 0 0 0 8.263 0c4.014-4.705 6.05-8.712 6.05-11.905C22.164 3.498 17.074 0 11.983 0z" />
            <path d="M11.957 13.091a2.909 2.909 0 1 0 0-5.818 2.909 2.909 0 0 0 0 5.818" />
        </g>
        <defs>
            <clipPath id="pin_svg__a">
                <path d="M0 0h24v24H0z" />
            </clipPath>
        </defs>
    </svg>
);
export default IconPin;
