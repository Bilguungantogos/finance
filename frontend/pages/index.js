import Cards from "@/components/Cards";
import Charts from "@/components/Charts";
import Records from "@/components/Records";
import Header from "@/components/Header";
import { useContext, useEffect } from "react";
import { UserContext } from "@/context/UserProvider";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);

  if (!user) {
    return null;
  }

  return (
    <>
      <Header />
      <main className="h-full px-[120px] pt-8 bg-[#F3F4F6] ">
        <Cards />
        <Charts />
        <Records />
      </main>
    </>
  );
}
