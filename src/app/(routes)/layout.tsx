import { Navbar } from "@/components/navbar";
import { ProfileModal } from "@/components/ProfileModal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      <ProfileModal />
      <div className="mt-20">{children}</div>
    </div>
  );
}
