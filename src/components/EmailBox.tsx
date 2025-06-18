import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { X } from 'lucide-react';
import { Loader2 } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from '@/hooks/use-toast';
import { Check } from 'lucide-react';
import validator from 'validator';
export default function EmailBox({ onClose }: { onClose: () => void }) {
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [subject, setSubject] = useState('');
  const [recipient, setRecipient] = useState('');
  const handleSend = async () => {
    // Simulate sending email
    if (!recipient.trim() || !validator.isEmail(recipient)) {
      toast({
        title: 'Error',
        description: 'Please enter valid email address',
        variant: 'destructive',
      });
      return;
    }
    if (!message.trim() || !subject.trim()) {
      toast({
        title: 'Error',
        description: 'Please fill in both subject and message fields.',
        variant: 'destructive',
      });
      return;
    }
    setIsSending(true);
    const customMessage = `
    From: 
    ${recipient}
    Message: 
    ${message}`;
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: customMessage, subject }),
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
    setMessage('');
    setIsSending(false);
    onClose();
  };

  return (
    <Card className="w-full max-w-lg mx-auto my-6 bg-black text-white border border-gray-800 shadow-lg rounded-2xl">
      <CardContent className="p-6 sm:p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Email Me</h2>
          <Button
            variant="ghost"
            onClick={onClose}
            className="text-gray-400 hover:text-black transition hover:bg-red-500"
            disabled={isSending}
          >
            <X className="h-6 w-6" />
          </Button>
        </div>

        <div className="space-y-5">
          <Input
            id="recipient"
            type="email"
            placeholder="Your email address"
            value={recipient}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setRecipient(e.target.value)
            }
            disabled={isSending}
            className="bg-zinc-900 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#22C55E] border border-zinc-700"
          />

          <Input
            id="subject"
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSubject(e.target.value)
            }
            disabled={isSending}
            className="bg-zinc-900 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#22C55E] border border-zinc-700"
          />

          <Textarea
            id="message"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={isSending}
            className="w-full min-h-[180px] p-3 bg-zinc-900 text-white placeholder-gray-400 border border-zinc-700 rounded-md focus:ring-2 focus:ring-[#22C55E]"
          />

          <Button
            onClick={handleSend}
            disabled={isSending}
            className="w-full bg-[#22C55E] text-black font-medium hover:bg-[#1ea34d] transition disabled:opacity-50 disabled:cursor-not-allowed"
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
