import { FaXTwitter, FaTwitch } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { IoMdArrowForward } from 'react-icons/io';
import Image from 'next/image';
import { Mail } from '@/assets';
import { AuthButton } from '@/components/auth-button';

const AUTH_BUTTONS = [
  {
    icon: <FcGoogle size={26} />,
    name: 'Google',
    providerId: 'google-oauth2',
  },
  {
    icon: <FaTwitch color="#9146FF" size={26} />,
    name: 'Twitch',
    providerId: 'twitch',
  },
  {
    icon: <FaXTwitter size={26} />,
    name: 'Twitter',
    providerId: 'twitter',
  },
];

export default function Auth() {
  return (
    <div>
      <div className="grid gap-2 text-center">
        <h1 className="text-[28px] 1920:text-[36px] font-bold text-primary font-[family-name:var(--font-nippo)]">
          Sign up to OneShot
        </h1>
      </div>
      <div className="grid gap-4 mt-[48px]">
        {AUTH_BUTTONS.map((button) => (
          <AuthButton
            key={button.name}
            icon={button.icon}
            name={button.name}
            href={`/api/auth/login?connection=${button.providerId}`}
          />
        ))}
      </div>
      <div className="flex justify-center items-center my-4 lg:my-8 1920:my-12">
        <p className="text-balance text-[14px] 1920:text-[16px] text-muted-foreground mx-2">
          OR
        </p>
      </div>
      <div className="grid gap-4">
        <AuthButton
          icon={<Image src={Mail} alt="email icon" />}
          name="Email"
          href={`/api/auth/login?connection=Username-Password-Authentication`}
          rightIcon={<IoMdArrowForward />}
        />
        <p className="text-[12px] 1920:text-[14px] text-muted-foreground">
          By continuing you agree to our{' '}
          <strong className="text-foreground">User Agreement</strong> and
          acknowledge that you understand our{' '}
          <strong className="text-foreground">Privacy Policy</strong>
        </p>
      </div>
    </div>
  );
}
