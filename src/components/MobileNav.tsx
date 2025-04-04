"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Footer from "./Footer";
import { BasicUserInfo } from "@/types";

interface MobileNavProps {
  user: BasicUserInfo; // Only require what the nav actually needs
}


const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();
console.log(user)
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/images/hamburger.svg"
            width={30}
            height={30}
            alt="menu"
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">
          <SheetHeader>
            <SheetTitle className="sr-only text-red-300">
              Navigation Menu
            </SheetTitle>
          </SheetHeader>

          <Link
            href="/"
            className="cursor-pointer flex items-center gap-1 px-[12px]"
          >
            <Image
              src="/images/logo.png"
              width={34}
              height={34}
              alt="User logo"
            />
            <h1 className="text-[26px] font-ibm-plex-serif font-bold text-black">
              User Management
            </h1>
          </Link>

          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((item) => {
                  const isActive =
                    pathname === item.route ||
                    pathname.startsWith(`${item.route}/`);

                  return (
                    <SheetClose asChild key={item.route}>
                      <Link
                        href={item.route}
                        className={cn(
                          "flex gap-3 items-center p-4 rounded-lg max-w-60 w-full",
                          {
                            "bg-[#0179FE]": isActive,
                          }
                        )}
                      >
                        <Image
                          src={item.imgURL}
                          alt={item.label}
                          width={20}
                          height={20}
                          className={cn({
                            "brightness-[3] invert-0": isActive,
                          })}
                        />
                        <p
                          className={cn(
                            "text-[16px] font-semibold text-black",
                            {
                              "text-white": isActive,
                            }
                          )}
                        >
                          {item.label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}
                USER
              </nav>
            </SheetClose>
            {/* <Footer user={user} type="mobile" /> */}
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
