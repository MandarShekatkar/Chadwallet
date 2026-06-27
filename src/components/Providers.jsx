"use client";

import { PrivyProvider } from "@privy-io/react-auth";
import CleanOAuthUrl from "@/components/CleanOAuthUrl";

export default function Providers({ children }) {
  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID}
      config={{
        loginMethods: ["google"],
        appearance: {
          theme: "light",
          accentColor: "#000000",
        },
        embeddedWallets: {
          solana: {
            createOnLogin: "users-without-wallets",
          },
        },
      }}
    >
      <CleanOAuthUrl />
      {children}
    </PrivyProvider>
  );
}