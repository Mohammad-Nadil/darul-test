"use client";


import { LuArrowLeft, LuClock3 } from "react-icons/lu";
import Button from "./Button";

type ComingSoonProps = {
  title?: string;
  description?: string;
  backHref?: string;
};

export default function ComingSoon({
  title = "শীঘ্রই আসছে",
  description = "এই অংশটি বর্তমানে প্রস্তুত করা হচ্ছে। খুব শীঘ্রই এটি ব্যবহার করা যাবে।",
  backHref = "/",
}: ComingSoonProps) {
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-5 py-16">
      <div className="w-full max-w-xl text-center">
        <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-full border border-border bg-muted/30 text-primary">
          <LuClock3 size={28} strokeWidth={1.5} />
        </div>

        <p className="mb-3 text-sm font-medium tracking-[0.18em] text-primary uppercase">
          Coming Soon
        </p>

        <h1 className="font-serif text-3xl font-semibold text-primary-dark sm:text-4xl">
          {title}
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
          {description}
        </p>

        <div className="mt-8 flex justify-center">
          <Button
            label="ফিরে যান"
            href={backHref}
            bgColor="transparent"
            borderColor="var(--border)"
            flairColor="var(--primary)"
            textColor="var(--foreground)"
            textHoverColor="#ffffff"
            leftIcon={<LuArrowLeft size={17} strokeWidth={1.8} />}
            size="sm"
          />
        </div>
      </div>
    </section>
  );
}
