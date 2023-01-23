import { ComponentProps } from 'react';

type Props = ComponentProps<'svg'>;

const RepoIcon = (props: Props) => {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      {...props}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Repo</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 2.75C3 1.23122 4.23122 0 5.75 0H20.25C20.6642 0 21 0.335786 21 0.75V21.25C21 21.6642 20.6642 22 20.25 22H14.25C13.8358 22 13.5 21.6642 13.5 21.25C13.5 20.8358 13.8358 20.5 14.25 20.5H19.5V16.5H6C5.17157 16.5 4.5 17.1716 4.5 18V18.75C4.5 19.4664 4.93064 20.084 5.55028 20.3547C5.92984 20.5206 6.1031 20.9627 5.93726 21.3423C5.77143 21.7218 5.32929 21.8951 4.94972 21.7292C3.80345 21.2284 3 20.0839 3 18.75V2.75ZM19.5 1.5V15H6C5.45357 15 4.94126 15.1461 4.5 15.4013V2.75C4.5 2.05964 5.05964 1.5 5.75 1.5H19.5Z"
      />
      <path d="M7 18.25C7 18.1119 7.11193 18 7.25 18H12.25C12.3881 18 12.5 18.1119 12.5 18.25V23.2591C12.5 23.4634 12.2682 23.5814 12.103 23.4612L9.89704 21.8569C9.80938 21.7932 9.69062 21.7932 9.60296 21.8569L7.39704 23.4612C7.2318 23.5814 7 23.4634 7 23.2591V18.25Z" />{' '}
    </svg>
  );
};

export default RepoIcon;