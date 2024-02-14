import { TSVGElementProps } from '../../types/TSVGElementProps';

export function ConnectionSvgComponent(props: TSVGElementProps) {
  return (
    <svg
      width={60}
      height={60}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        clipPath="url(#clip0_42382_997)"
        stroke="#0F9AFE"
        strokeWidth={3}
        strokeLinejoin="round"
      >
        <path
          clipRule="evenodd"
          d="M58.75 46.25a12.5 12.5 0 11-25 0 12.5 12.5 0 0125 0v0z"
        />
        <path d="M52.5 46.25H40M46.25 40v12.5V40z" strokeLinecap="round" />
        <path d="M34.913 33.206c-1.938-.644-4.038-1.331-6.163-2.144v-6.25s3.75-1.543 3.75-7.5c1.956 0 1.956-5.175 0-5.175 0-.575 2.063-4.012 1.25-7.324-1.188-4.75-15.063-4.75-16.25.006-5.919-1.188-2.5 6.706-2.5 7.5-1.956 0-1.956 5 0 5 0 5.956 3.75 7.5 3.75 7.5v6.25c-6.944 2.643-15.219 4.393-16.25 7.5C1.312 42.144 1.25 48.75 1.25 48.75H27.5" />
      </g>
      <defs>
        <clipPath id="clip0_42382_997">
          <path fill="#fff" d="M0 0H60V60H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
