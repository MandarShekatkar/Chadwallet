"use client";

import { useEffect } from "react";
import { usePrivy } from "@privy-io/react-auth";

export default function CleanOAuthUrl() {
  const { authenticated } = usePrivy();

  useEffect(() => {
    if (!authenticated) return;

    const url = new URL(window.location.href);

    const params = [
      "privy_oauth_state",
      "privy_oauth_provider",
      "privy_oauth_code",
    ];

    let changed = false;

    params.forEach((param) => {
      if (url.searchParams.has(param)) {
        url.searchParams.delete(param);
        changed = true;
      }
    });

    if (changed) {
      window.history.replaceState({}, "", url.pathname + url.search);
    }
  }, [authenticated]);

  return null;
}