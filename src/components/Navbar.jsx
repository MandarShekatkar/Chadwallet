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
  } = usePrivy();

  return (
    <nav className="flex items-center justify-between px-4 py-4 border-b">

      {/* Logo */}
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

      {/* Right Side */}
      <div className="flex items-center gap-3">

        {/* App Store */}
        <Link
          href="https://apps.apple.com/us/app/chadwallet/id6757367474"
          target="_blank"
          rel="noopener noreferrer"
          className="border px-4 py-2 rounded-lg hover:bg-black hover:text-white transition"
        >
          App Store
        </Link>

        {/* Play Store */}
        <Link
          href="https://play.google.com/store/apps/details?id=xyz.chadwallet.www"
          target="_blank"
          rel="noopener noreferrer"
          className="border px-4 py-2 rounded-lg hover:bg-black hover:text-white transition"
        >
          Play Store
        </Link>

        {!authenticated ? (
          <button
            onClick={login}
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Login
          </button>
        ) : (
          <>
            <span className="font-semibold text-green-600">
              Connected
            </span>

            <button
              onClick={logout}
              className="border px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white transition"
            >
              Logout
            </button>
          </>
        )}

      </div>

    </nav>
  );
}