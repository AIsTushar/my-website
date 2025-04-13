import Image from "next/image";

function TechIcon({ component: Component }) {
  return (
    <>
      <Image
        src={Component}
        alt="Icon Image"
        width={500}
        height={500}
        className="size-6 fill-[url(#techIconGradient)]"
      />
      <svg className="absolute size-0">
        <linearGradient id="techIconGradient">
          <stop offset="0%" stopColor="rbg(110 231 183)" />
          <stop offset="100%" stopColor="rbg(56 189 248)" />
        </linearGradient>
      </svg>
    </>
  );
}

export default TechIcon;
