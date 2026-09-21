import Link from "next/link";

import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";
import { BsArrowDown } from "react-icons/bs";
import { HiArrowUpRight } from "react-icons/hi2";

export default function AdmissionHero() {
  return (
    <section id="admission-hero" className="py-10 lg:py-14">
      <Container>
        <div className="flex flex-col sm:flex-row items-end gap-10  ">
          <div className=" flex flex-col gap-5 w-full sm:w-1/2">
            <SectionHeader
              label="ভর্তি তথ্য"
              headingLine1="সঠিক শিক্ষার"
              headingLine2="সুন্দর সূচনা"
            />

            <p className=" max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
              মাদরাসা-ই-দারুল হুদায় শিক্ষার্থীর দ্বীনি শিক্ষা, আমল, আখলাক ও
              প্রয়োজনীয় জ্ঞানচর্চার সমন্বয়ে শিক্ষা কার্যক্রম পরিচালিত হয়। ভর্তি
              সংক্রান্ত প্রয়োজনীয় তথ্য নিচে দেওয়া হয়েছে।
            </p>
            <div className="flex items-center gap-3">
              <Button
                label="অনলাইনে আবেদন ফরম"
                bgColor="var(--primary)"
                borderColor="var(--primary)"
                flairColor="#ffffff"
                href="/admissions/apply"
                textColor="#ffffff"
                textHoverColor="var(--primary)"
                className="w-fit"
                rightIcon={<HiArrowUpRight className="font-black!" />}
              />

              <Button
                label="ভর্তি প্রক্রিয়া "
                bgColor=""
                borderColor="var(--primary)"
                flairColor="var(--primary)"
                href="#admission-process"
                textColor="var(--primary)"
                textHoverColor="#ffffff"
                className="w-fit"
                rightIcon={<BsArrowDown className="font-black!" />}
              />
            </div>
          </div>

          <div className="relative overflow-hidden border-y border-border py-7 sm:py-8 w-full sm:w-1/2">
            <div className="flex items-center justify-between border-b border-border pb-5">
              <div>
                <p className="text-xs font-medium tracking-wide text-primary">
                  ADMISSION
                </p>
                <h2 className="mt-2 text-xl font-semibold text-foreground sm:text-2xl">
                  ভর্তি কার্যক্রম
                </h2>
              </div>

              <span aria-hidden="true" className="text-3xl text-primary/70">
                ۞
              </span>
            </div>

            <div className="mt-6 grid grid-cols-3 divide-x divide-border">
              <div className="pr-4">
                <p className="text-xs text-muted-foreground">ধাপ</p>
                <p className="mt-2 text-2xl font-semibold text-foreground">
                  ০৩
                </p>
                <p className="mt-1 text-xs text-muted-foreground">প্রধান ধাপ</p>
              </div>

              <div className="px-4">
                <p className="text-xs text-muted-foreground">শাখা</p>
                <p className="mt-2 text-2xl font-semibold text-foreground">
                  ০২
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  পুরুষ ও মহিলা
                </p>
              </div>

              <div className="pl-4">
                <p className="text-xs text-muted-foreground">তথ্য</p>
                <p className="mt-2 text-2xl font-semibold text-foreground">
                  ০১
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  ভর্তি নির্দেশনা
                </p>
              </div>
            </div>

            <p className="mt-7 max-w-md text-sm leading-6 text-muted-foreground">
              নির্দিষ্ট ভর্তি তারিখ, আসন ও অন্যান্য পরিবর্তনশীল তথ্য কর্তৃপক্ষের
              সর্বশেষ নোটিশ অনুযায়ী কার্যকর হবে।
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
