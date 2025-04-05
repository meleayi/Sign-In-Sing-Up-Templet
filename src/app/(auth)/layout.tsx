import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter flex-row">
      {children}
      <div className="auth-asset hidden md:block">
        <div>
          <Image
            src="/images/login-right-side.jpg"
            alt="Auth image"
            width={500}
            height={500}
            className="rounded-l-xl object-contain"
          />
        </div>
      </div>
    </main>
  );
}
