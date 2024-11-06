'use client';

import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function AuthModal({
  setIsAuthenticated,
}: {
  setIsAuthenticated: (value: boolean) => void;
}) {
  const [open, setOpen] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleAuth = () => {
    if (username === 'TXO25' && password === 'TXOLETSGO') {
      setOpen(false);
      setIsAuthenticated(true);
      localStorage.setItem('txoAuth', 'true');
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    // Check if already authenticated
    const isAuth = localStorage.getItem('txoAuth');
    if (isAuth === 'true') {
      setOpen(false);
    }
  }, []);

  // Force dialog to stay open
  useEffect(() => {
    if (!open) {
      setOpen(true);
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]" hideClose>
        <DialogHeader>
          <DialogTitle>Authentication Required</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Input
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && (
            <p className="text-sm text-red-500">
              Invalid credentials. Please try again.
            </p>
          )}
          <Button onClick={handleAuth}>Login</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
