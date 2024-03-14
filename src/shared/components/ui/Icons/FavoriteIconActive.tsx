type Props = {
  size?: number;
  classNameIcon?: string;
} & React.SVGProps<SVGSVGElement>;

const FavoriteIconActive = ({ size = 24, classNameIcon, ...rest }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 26 26"
    className={classNameIcon}
    {...rest}
    data-testid="favorite-icon-active"
  >
    <path
      fill="#EC1D24"
      fillRule="evenodd"
      d="M12 3.812 6 .171 0 3.812v7.804l12 10.231 12-10.231V3.812L18 .171l-6 3.641Z"
      clipRule="evenodd"
    />
  </svg>
);
export default FavoriteIconActive;
