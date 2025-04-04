// import { Button } from "@/components/ui/button";

import HeaderBox from "@/components/HeaderBox";
import HeaderCard from "@/components/HeaderCard";

export default function Home() {
  const loggedIn = { firstName: " Melese" };

  return (
    <section className="bg-gray-50 min-h-screen flex items-center gap-2 flex-col">
      <HeaderBox
        type="greeting"
        title="Welcome"
        user={loggedIn?.firstName || "Desta"}
        subtitle="use can you this templet for doing other smart login and registration page"
      />
      <HeaderCard />
    </section>
  );
}
