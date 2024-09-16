import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { X } from 'lucide-react';
import { Loader2 } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from '@/hooks/use-toast';
import { Check } from 'lucide-react';
export default function EmailBox({ onClose }: { onClose: () => void }) {
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [subject, setSubject] = useState('');
  const handleSend = async () => {
    // Simulate sending email
    if (!message.trim() || !subject.trim()) {
      toast({
        title: 'Error',
        description: 'Please fill in both subject and message fields.',
        variant: 'destructive',
      });
      return;
    }
    setIsSending(true);

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message, subject }),
      });
      // const result = await response.json();
      if (!response.ok) {
        throw new Error();
      }

      setSubject('');
      setMessage('');
      onClose();
      toast({
        title: 'Success',
        description: (
          <div className="flex items-center">
            <Check className="w-5 h-5 text-green-500 mr-2" />
            <span>Email sent successfully!</span>
          </div>
        ),
        duration: 2000,
      });
    } catch (err) {
      toast({
        title: 'Error',
        description: 'Failed to send email. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSending(false);
    }
    console.log('Sending email:', message);
    setMessage('');
    setIsSending(false);
    onClose();
  };

  return (
    <Card className="w-full m-auto">
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Email Me</h2>
          <Button
            variant="ghost"
            onClick={onClose}
            className="text-gray-500"
            disabled={isSending}
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        <div className="space-y-4">
          <div>
            <Input
              id="subject"
              type="text"
              placeholder="Enter email subject"
              value={subject}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSubject(e.target.value)
              }
              disabled={isSending}
            />
          </div>
          <div>
            <Textarea
              id="message"
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full min-h-[200px] p-2 border rounded-md"
              disabled={isSending}
            />
          </div>
          <Button
            onClick={handleSend}
            className="w-full bg-[#22C55E] text-white hover:bg-[#1ea34d] disabled:opacity-50"
            disabled={isSending}
          >
            {isSending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              'Send'
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
