import { SessionProvider } from "next-auth/react";
import NextTopLoader from "nextjs-toploader";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SessionProvider>
        <NextTopLoader color="#ffbe59" />
        {children}
      </SessionProvider>
    </>
  );
}
