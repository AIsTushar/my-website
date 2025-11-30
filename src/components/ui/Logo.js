import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <div>
      <Link
        href={"/"}
        className="border-secondary text-secondary flex h-12 w-12 items-center justify-center rounded-full border-[2px] border-solid text-2xl"
      >
        A
      </Link>
    </div>
  );
}

export default Logo;
