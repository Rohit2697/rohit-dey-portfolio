import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
interface ErrorAlertProps {
  title: string;
  description: string;
}

const ErrorAlert: React.FC<ErrorAlertProps> = ({ title, description }) => {
  return (
    <div className="relative">
      <Alert
        variant="destructive"
        className="absolute top-0 left-0 w-full z-10 text-center font-bold"
      >
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{description}</AlertDescription>
      </Alert>
    </div>
  );
};
export default ErrorAlert