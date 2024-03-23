import { SVGProps } from 'react';

const IconPet = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={40}
        height={40}
        viewBox="0 0 60 60"
        fill="none"
        {...props}
    >
        <circle
            cx={30}
            cy={30}
            r={28.5}
            fill="#D01012"
            stroke="#111"
            strokeWidth={3}
        />
        <path
            fill="#F8CF47"
            d="M28.96 29.528h1.643q2.305 0 3.449-.902 1.144-.919 1.144-2.659 0-1.755-.967-2.594-.951-.838-2.997-.838H28.96zm11.28-3.738q0 3.803-2.386 5.817-2.369 2.014-6.751 2.014H28.96V42h-4.995V18.442h7.525q4.285 0 6.51 1.853 2.24 1.838 2.24 5.495"
        />
        <path
            fill="#111"
            fillRule="evenodd"
            d="M34.229 23.373q-.772-.68-2.269-.809-.345-.029-.728-.029H28.96v6.993h1.643q.738 0 1.357-.092 1.314-.197 2.092-.81 1.144-.919 1.144-2.659 0-1.755-.967-2.594m-2.066 2.916c.012-.043.033-.143.033-.322 0-.151-.01-.262-.022-.34a2 2 0 0 0-.214-.043v.787a1 1 0 0 0 .203-.082m.153-.613-.002-.001ZM31.96 45H20.965V15.442H31.49c3.228 0 6.194.69 8.42 2.541 2.36 1.94 3.33 4.73 3.33 7.807 0 3.206-1.038 6.07-3.446 8.106-2.108 1.79-4.829 2.584-7.834 2.708zm-3-11.379h2.143q4.382 0 6.752-2.014 2.385-2.015 2.384-5.817 0-3.657-2.24-5.495-2.223-1.853-6.51-1.853h-7.524V42h4.995z"
            clipRule="evenodd"
        />
    </svg>
);
export default IconPet;
