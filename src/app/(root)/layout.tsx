import Image from "next/image";
import { redirect } from "next/navigation";

// src/app/(root)/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const loggedIn = true; // await getLoggedInUser();

  if (!loggedIn) redirect("/sign-in");

  return (
    <main className="flex h-screen w-full font-inter ">
      {/* <Sidebar user={loggedIn} /> */}
      <div className=" hidden md:block">sidebar</div>
      <div className="flex size-full flex-col">
        <div className="flex h-16 items-center justify-between p-5  md:hidden bg-gray-50">
          <Image src="/images/logo.png" width={60} height={60} alt="logo" />
          <div>
            mobile view
            {/* <MobileNav user={loggedIn} /> */}
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
