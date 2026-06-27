"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo/light.png";
import { usePrivy } from "@privy-io/react-auth";

export default function Navbar() {
  const { login, logout, authenticated } = usePrivy();

  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4 py-4">

        {/* Logo */}
        <Link href="/" className="hover:opacity-80 transition">
          <Image
            src={logo}
            alt="ChadWallet Logo"
            width={50}
            height={50}
            priority
          />
        </Link>

        {/* Right Side */}
        <div className="flex flex-wrap justify-center items-center gap-3">

          <Link
            href="https://apps.apple.com/us/app/chadwallet/id6757367474"
            target="_blank"
            rel="noopener noreferrer"
            className="border px-4 py-2 rounded-lg hover:bg-black hover:text-white transition"
          >
            App Store
          </Link>

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
      </div>
    </nav>
  );
}