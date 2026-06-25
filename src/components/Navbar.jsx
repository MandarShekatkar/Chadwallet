"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo/light.png";
import { usePrivy } from "@privy-io/react-auth";

export default function Navbar() {
  const {
    login,
    logout,
    authenticated,
    user,
  } = usePrivy();

  return (
    <nav className="flex items-center justify-between px-4 py-4 border-b">

      <Link
        href="/"
        className="hover:opacity-80 transition"
      >
        <Image
          src={logo}
          alt="ChadWallet Logo"
          width={50}
          height={50}
          className="cursor-pointer"
        />
      </Link>

      <div className="flex items-center gap-3">

        <button className="border px-3 py-2 rounded-lg">
          App Store
        </button>

        <button className="border px-3 py-2 rounded-lg">
          Play Store
        </button>

        {!authenticated ? (
          <button
            onClick={login}
            className="bg-black text-white px-4 py-2 rounded-lg"
          >
            Login
          </button>
        ) : (
          <>
            <span className="font-medium text-green-600">
              Connected
            </span>

            <button
              onClick={logout}
              className="border px-4 py-2 rounded-lg"
            >
              Logout
            </button>
          </>
        )}

      </div>

    </nav>
  );
}