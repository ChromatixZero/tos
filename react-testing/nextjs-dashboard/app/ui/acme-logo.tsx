import { lusitana } from "@/app/ui/fonts";
import Image from "next/image";

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-black`}
    >
      <Image
        src="/logo-icon.svg"
        placeholder="empty"
        width={50}
        height={50}
        alt="TOS logo"
      />
      <p className="text-[50px]">
        &nbsp;<strong>TOS</strong>
      </p>
    </div>
  );
}
