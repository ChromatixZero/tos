import AcmeLogo from "@/app/ui/acme-logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { lusitana } from "@/app/ui/fonts";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 bg-midnight">
      <div className="flex h-200 shrink-0 items-end rounded-lg bg-tos p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-out px-6 py-6 md:w-2/5 md:px-20">
          <p className="text-green-500 text-[14px] text-center">
            <u>BONJOULE MINU, JE T'AIME!</u>
          </p>
          <p
            className={`${lusitana.className} text-xl text-white md:text-3xl md:leading-normal`}
          >
            <strong>Welcome to They Once Said!</strong> <br />
            The community-driven platform meant to test the popular idiom:{" "}
            <br />
            <br />
            &emsp;&emsp;&emsp;
            <i>
              Promises made...
              <br />
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Promises Kept?
            </i>
            <br />
            <br />
            Access the{" "}
            <a href="/dashboard" className="text-tos hover:text-hit">
              Master Dashboard here
            </a>
            .
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-tos px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-hit md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/logo.svg"
            width={1000}
            height={1000}
            className="hidden md:block"
            alt="TOS logo, fully colored"
          />
          <Image
            src="/logo.svg"
            width={150}
            height={150}
            className="block md:hidden"
            alt="TOS logo, mobile version"
          />
        </div>
      </div>
    </main>
  );
}
