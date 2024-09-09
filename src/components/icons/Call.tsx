// components/CallIcon.js
'use client';
import React, {  Dispatch, SetStateAction } from 'react';
interface CallIconProps {
  setAlert: Dispatch<
    SetStateAction<{
      title: string;
      description: string;
    }>
  >;
  setSuccessAlert: Dispatch<SetStateAction<boolean>>;
  setErrorAlert: Dispatch<SetStateAction<boolean>>;
}
const CallIcon: React.FC<CallIconProps> = ({
  setAlert,
  setSuccessAlert,
  setErrorAlert,
}) => {
  const phoneNumber = '+1234567890'; // Replace with the desired phone number

  const copyToClipboard = () => {
    navigator.clipboard.writeText(phoneNumber).then(
      () => {
        setAlert({
          title: 'Heads up!',
          description: 'Phone number successfully copied to clipboard!',
        });
        setSuccessAlert(true);
        setErrorAlert(false);
      },
      () => {
        setAlert({
          title: 'Error',
          description: 'Unable to copy Phone Number!',
        });
        setErrorAlert(true);
        setSuccessAlert(false);
      }
    );
  };

  return (
    <div
      className="transition-transform duration-300 hover:scale-110 hover:border-b-2 hover:border-green-500 py-1"
      onClick={copyToClipboard}
      style={{ cursor: 'pointer' }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-phone"
        style={{ width: '24px', height: '24px' }}
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-2.91 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.1 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72 13 13 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.28-1.28a2 2 0 0 1 2.11-.45 13 13 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    </div>
  );
};

export default CallIcon;
