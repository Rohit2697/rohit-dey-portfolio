

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
interface SuccessAlertProps {
  title: string;
  description: string;
}
export function SuccessAlert({ title, description }: SuccessAlertProps) {
  return (
    <div className="relative">
      <Alert className="absolute top-0 left-0 w-full z-10 text-center text-green-500 font-bold">
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{description}</AlertDescription>
      </Alert>
    </div>
  );
}
