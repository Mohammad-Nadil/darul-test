import Link from "next/link";

import Container from "../layout/Container";
import Button from "../ui/Button"
import { HiArrowUpRight } from "react-icons/hi2";

export default function AdmissionCTA() {
  return (
    <section id="admission-cta" className="pb-16 pt-8 sm:pb-24 sm:pt-10">
      <Container>
        <div className="grid  border-y border-border lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left */}
          <div className=" flex flex-col gap-5 py-12 sm:py-16 lg:py-20 lg:pr-16">
            <p className="text-xs font-medium tracking-[0.18em] text-primary">
              ADMISSIONS
            </p>

            <h2 className=" max-w-2xl text-3xl font-semibold leading-[1.2] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              আপনার সন্তানের
              <br />
              <span className="text-primary">শিক্ষার পথচলা</span> শুরু হোক
            </h2>

            <p className=" max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
              দ্বীনি শিক্ষা, জ্ঞানচর্চা ও সুন্দর আখলাকের সমন্বয়ে একটি সুশৃঙ্খল
              শিক্ষাজীবনের জন্য ভর্তি সংক্রান্ত বিস্তারিত তথ্য জেনে নিন।
            </p>
            <Button
              label="অনলাইনে আবেদন করুন"
              bgColor=""
              borderColor="var(--primary)"
              flairColor="var(--primary)"
              href="/admissions/apply"
              textColor="var(--primary)"
              textHoverColor="#ffffff"
              className="w-fit"
              rightIcon={<HiArrowUpRight  className="font-black!" />}
            />
          </div>

          {/* Right */}
          <div className="flex flex-col justify-between border-t border-border py-8 sm:py-10 lg:border-l lg:border-t-0 lg:px-10 lg:py-12">
            <div>
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium tracking-wide text-primary">
                  ভর্তি অফিস
                </p>

                <span aria-hidden="true" className="text-xl text-primary/70">
                  ۞
                </span>
              </div>

              <h3 className="mt-4 text-xl font-semibold text-foreground">
                মাদরাসা-ই-দারুল হুদা
              </h3>

              <div className="mt-7 space-y-5">
                <div>
                  <p className="text-xs text-muted-foreground">অফিস</p>
                  <p className="mt-1 text-sm leading-6 text-foreground">
                    ২০৯/৪, বিজিবি ২নং গেট,
                    <br />
                    লালবাগ রোড, ঢাকা-১২১১
                  </p>
                </div>

                <div>
                  <p className="text-xs text-muted-foreground">যোগাযোগ</p>

                  <a
                    href="tel:01735867755"
                    className="mt-1 inline-block text-sm font-medium text-foreground transition-colors hover:text-primary"
                  >
                    ০১৭৩৫-৮৬৭৭৫৫
                  </a>
                </div>
              </div>
            </div>

            <p className="mt-8 border-t border-border pt-5 text-xs leading-5 text-muted-foreground">
              ভর্তি সংক্রান্ত সর্বশেষ তথ্য ও আসন নিশ্চিত করতে অফিসে যোগাযোগ
              করুন।
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
