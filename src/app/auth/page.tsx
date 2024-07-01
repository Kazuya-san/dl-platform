"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaXTwitter } from "react-icons/fa6";
import { FaTwitch } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6";
import { IoMdArrowForward } from "react-icons/io";

const AUTH_BUTTONS = [
  {
    icon: <FaGoogle className="mr-2" size={22} />,
    name: "Google",
    providerId: "google-oauth2",
  },
  {
    icon: <FaTwitch className="mr-2" size={22} />,
    name: "Twitch",
    providerId: "twitch",
  },
  {
    icon: <FaXTwitter className="mr-2" size={22} />,
    name: "Twitter",
    providerId: "twitter",
  },
];

export default function Auth() {
  return (
    <>
      <AuthOptions />
    </>
  );
}

interface AuthOptionsProps {
  emailHandler?: (val: boolean) => void;
}

//5CCCJBTQMW1W1D7WVUBCNVN8

const AuthOptions = ({ emailHandler }: AuthOptionsProps) => {
  return (
    <>
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Hello Katz</h1>
        <p className="text-balance text-muted-foreground">Continue with</p>
      </div>
      <div className="grid gap-4">
        {AUTH_BUTTONS.map((button) => (
          <a
            key={button.name}
            href={`/api/auth/login?connection=${button.providerId}`}
          >
            <Button
              variant="outline"
              className="w-full transition-all duration-200 hover:-translate-y-[2px]"
            >
              <div className="flex">
                {button.icon} {button.name}
              </div>
            </Button>
          </a>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <hr className="w-full" />
        <p className="text-balance text-muted-foreground mx-2">or</p>

        <hr className="w-full" />
      </div>
      <div className="grid gap-4">
        <a href={`/api/auth/login?connection=email`}>
          <Button
            variant="default"
            className="w-full flex items-center justify-center"
          >
            Continue With Email
            <IoMdArrowForward className="ml-1" size={18} />
          </Button>
        </a>
      </div>
    </>
  );
};
