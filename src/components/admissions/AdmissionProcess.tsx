import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";

const steps = [
  {
    number: "01",
    arabic: "الاستعلام",
    title: "তথ্য জানুন",
    description:
      "ভর্তি, বিভাগ ও প্রয়োজনীয় শর্ত সম্পর্কে অফিস থেকে প্রাথমিক তথ্য জেনে নিন।",
  },
  {
    number: "02",
    arabic: "التقديم",
    title: "আবেদন করুন",
    description:
      "নির্ধারিত পদ্ধতিতে ভর্তি আবেদন সম্পন্ন করে প্রয়োজনীয় তথ্য প্রদান করুন।",
  },
  {
    number: "03",
    arabic: "القبول",
    title: "ভর্তি নিশ্চিত করুন",
    description:
      "প্রয়োজনীয় যাচাই ও আনুষ্ঠানিকতা শেষে ভর্তি প্রক্রিয়া চূড়ান্ত করুন।",
  },
];

export default function AdmissionProcess() {
  return (
    <section id="admission-process" className="py-14 sm:py-18 lg:py-24">
      <Container>
        <div className="flex flex-col items-center text-center">
          <SectionHeader
            label="ভর্তি প্রক্রিয়া"
            headingLine1="তিন ধাপে"
            headingLine2="ভর্তির সম্পূর্ণ পথ"
            className="text-center flex flex-col justify-center items-center"
          />

          <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
            ভর্তি সম্পর্কে প্রাথমিক তথ্য জানা থেকে শুরু করে আবেদন ও চূড়ান্ত
            ভর্তি—প্রক্রিয়াটি ধাপে ধাপে সম্পন্ন করা হয়।
          </p>
        </div>

        <div className="relative mt-12 lg:mt-16">
          {/* Connecting line */}
          <div
            aria-hidden="true"
            className="absolute left-[16.66%] right-[16.66%] top-6 hidden border-t border-border lg:block"
          />

          <div className="grid gap-10 lg:grid-cols-3 lg:gap-8">
            {steps.map((step) => (
              <article
                key={step.number}
                className="relative text-center lg:px-6"
              >
                <div className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-primary bg-background text-sm font-semibold text-primary">
                  {step.number}
                </div>

                <div className="flex flex-col gap-1 pt-4">
                  <span dir="rtl" className=" font-black text-primary/70">
                    {step.arabic}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mx-auto  max-w-xs text-sm leading-6 text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
