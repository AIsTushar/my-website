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
        <section className="flex min-h-screen items-center p-10">
          <div>
            <h1 className="mb-4 text-4xl font-bold">
              Entry Level React Interview Questions
            </h1>
            <p>
              10 questions and relatively short but comprehensive answers for
              entry-level devs.
            </p>
          </div>
        </section>

        <section className="flex min-h-screen items-center p-10">
          <p>Second section content goes here...</p>
        </section>

        <section className="flex min-h-screen items-center p-10">
          <p>Third section content goes here...</p>
        </section>
      </div>
    </div>
  );
}
