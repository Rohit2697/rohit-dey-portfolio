import React, { Dispatch, SetStateAction } from 'react';
interface EmailIconProps {
  setAlert: Dispatch<
    SetStateAction<{
      title: string;
      description: string;
    }>
  >;
  setSuccessAlert: Dispatch<SetStateAction<boolean>>;
  setErrorAlert: Dispatch<SetStateAction<boolean>>;
}

const Email: React.FC<EmailIconProps> = ({
  setAlert,
  setSuccessAlert,
  setErrorAlert,
}) => {
  const email = 'rohit.dey2697@gmail.com';
  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(
      () => {
        setAlert({
          title: 'Heads up!',
          description: 'Email successfully copied to clipboard!',
        });
        setSuccessAlert(true);
        setErrorAlert(false);
      },
      () => {
        setAlert({
          title: 'Error',
          description: 'Unable to copy Email!',
        });
        setErrorAlert(true);
        setSuccessAlert(false);
      }
    );
  };
  return (
    <div
      onClick={copyToClipboard}
      className="transition-transform duration-300 hover:scale-110 hover:border-b-2 hover:border-green-500 py-1"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 6L12 13L2 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default Email;
