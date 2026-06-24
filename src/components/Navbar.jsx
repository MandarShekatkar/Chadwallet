import Image from "next/image";
import logo from "../assets/logo/light.png";


export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 py-4 border-b">
          <Image
              src={logo}
              alt="ChadWallet Logo"
              width={50}
              height={50}
          />

      <div className="flex items-center gap-3">
        <button className="border px-3 py-2 rounded-lg">
          App Store
        </button>

        <button className="border px-3 py-2 rounded-lg">
          Play Store
        </button>

        <button className="bg-black text-white px-4 py-2 rounded-lg">
          Login
        </button>
      </div>
    </nav>
  );
}