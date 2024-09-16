import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function ComposeEmail() {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    // Here you would typically handle sending the email
    console.log('Sending email:', message);
    setMessage(''); // Clear the message after sending
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Compose Email</CardTitle>
      </CardHeader>
      <CardContent>
        <Textarea
          placeholder="Type your message here..."
          value={message}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setMessage(e.target.value)
          }
          className="min-h-[200px]"
        />
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={handleSend}>Send</Button>
      </CardFooter>
    </Card>
  );
}
