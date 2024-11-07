'use server';

export async function authenticate(creds: {
  username: string;
  password: string;
}) {
  const { username, password } = creds;
  if (username === 'TXO25' && password === 'TXOLETSGO') {
    return true;
  }
  return false;
}
