type Props = {
  size?: number;
  classNameIcon?: string;
} & React.SVGProps<SVGSVGElement>;

const SearchIcon = ({ size = 13, className, ...rest }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={13}
    viewBox="0 0 13 13"
    className={className}
    fill="none"
    {...rest}
  >
    <path
      fill="#000"
      d="M11.906 10.992c.117.117.117.305 0 .399l-.539.539c-.094.117-.281.117-.398 0L8.133 9.094a.378.378 0 0 1-.07-.211v-.305A4.935 4.935 0 0 1 4.874 9.75 4.871 4.871 0 0 1 0 4.875C0 2.203 2.18 0 4.875 0 7.547 0 9.75 2.203 9.75 4.875a4.908 4.908 0 0 1-1.195 3.188h.304c.07 0 .141.046.211.093l2.836 2.836ZM4.875 8.625a3.746 3.746 0 0 0 3.75-3.75 3.761 3.761 0 0 0-3.75-3.75 3.746 3.746 0 0 0-3.75 3.75 3.731 3.731 0 0 0 3.75 3.75Z"
    />
  </svg>
);

export default SearchIcon;
