"use client";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams();

  return (
    <div className="relative w-full">
      {/* STICKY IMAGE */}
      <div className="sticky top-0 h-screen w-full">
        {/* BACKGROUND IMAGE */}
        <Image
          src="/articles/image.jpg"
          alt="404"
          fill
          className="object-cover"
        />

        {/* CENTERED TITLE */}
        <h1 className="absolute inset-0 flex items-center justify-center px-4 text-center text-4xl font-bold text-white">
          Entry Level React Interview Questions
        </h1>

        {/* DATE AT BOTTOM */}
        <span className="absolute inset-x-0 bottom-10 text-center text-lg text-white opacity-80">
          12 December 2022
        </span>
      </div>

      {/* CONTENT SECTIONS THAT SCROLL OVER THE IMAGE */}
      <div className="relative z-10 bg-slate-900">
        <div className="mx-auto flex min-h-screen flex-col">
          <p className="max-w-lg text-left text-sm text-gray-400">
            Just ran my first race ever—the San Francisco Half Marathon. The
            experience? Surprisingly similar to building a startup. Here&lsquo;s
            what I learned...
          </p>
          <section className="mx-auto flex min-h-screen max-w-4xl flex-col gap-12 p-10">
            <h2 className="text-left text-3xl text-gray-50">
              1. Unfavorable conditions
            </h2>

            <p className="text-gray-100">
              When I woke up for race day, it was raining like crazy. By the
              time I arrived at Golden Gate Park, it was still raining. During
              the race, the rain got even worse. That&lsquo;s how it feels when
              you start your own company. You might be too late, or maybe too
              early. The market might pull you into a different direction or
              your users may not like your product at first. You might need to
              pivot, or even start from the beginning again. Whatever happens,
              conditions are never going to be perfect. Don&lsquo;t expect a
              sunny day.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
