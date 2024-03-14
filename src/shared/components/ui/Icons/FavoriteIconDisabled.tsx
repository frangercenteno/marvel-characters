type Props = {
  size?: number;
  classNameIcon?: string;
} & React.SVGProps<SVGSVGElement>;

const FavoriteIconDisabled = ({ size = 26, classNameIcon, ...rest }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 26 26"
    className={classNameIcon}
    {...rest}
    data-testid="favorite-icon-disabled"
  >
    <path
      fill="#fff"
      d="m7 2.056.519-.854L7 .887l-.519.315.519.854Zm6 3.642-.519.855.519.315.519-.315L13 5.698Zm-12 0-.519-.855L0 5.135v.563h1Zm0 7.803H0v.462l.351.3.649-.761Zm12 10.232-.649.76.649.554.649-.553-.649-.761ZM25 13.5l.649.761.351-.299v-.461h-1Zm0-7.803h1v-.563l-.481-.292-.519.855Zm-6-3.642.519-.854L19 .887l-.519.315.519.854Zm-12.519.855 6 3.642 1.038-1.71-6-3.641-1.038 1.71ZM1.52 6.553l6-3.642-1.038-1.71-6 3.642 1.038 1.71ZM2 13.502V5.697H0v7.803h2Zm11.649 9.47-12-10.232L.35 14.263l12 10.232 1.298-1.522Zm0 1.522 12-10.232-1.298-1.521-12 10.23 1.298 1.523ZM26 13.502V5.697h-2v7.803h2Zm-.481-8.659-6-3.641-1.038 1.71 6 3.64 1.038-1.709ZM18.48 1.202l-6 3.641 1.038 1.71 6-3.642-1.038-1.71Z"
    />
  </svg>
);
export default FavoriteIconDisabled;
