import MobileNav from "@/components/MobileNav";
import SideBar from "@/components/SideBar";
import Image from "next/image";
import { redirect } from "next/navigation";

// src/app/(root)/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const loggedIn = { firstName: "Melese", lastName: "Ayichlie" }; // await getLoggedInUser();

  if (!loggedIn) redirect("/sign-in");

  return (
    <main className="flex h-screen w-full font-inter  items-center text-center m-20 pr-0">
      <SideBar user={loggedIn} />
      <div className="flex size-full flex-col m-0 p-0">
        <div className="flex h-16 items-center justify-between  md:hidden bg">
          <Image src="/images/logo.png" width={60} height={60} alt="logo" />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
