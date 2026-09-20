import Container from "@/src/components/layout/Container";
import SectionHeader from "@/src/components/ui/SectionHeader";
const branches = [
  {
    number: "০১",
    title: "পুরুষ শাখা",
    intro:
      "প্রাথমিক শিক্ষা থেকে মাদানী নিসাবের তৃতীয় বর্ষ পর্যন্ত ধারাবাহিক শিক্ষার ব্যবস্থা।",
    programs: [
      "নূরানী কিন্ডারগার্টেন",
      "হিফজুল কুরআন",
      "মাদানী নিসাব — ৩য় বর্ষ পর্যন্ত",
    ],
  },
  {
    number: "০২",
    title: "মহিলা শাখা",
    intro:
      "প্রাথমিক শিক্ষা থেকে দাওরায়ে হাদীস পর্যন্ত বিস্তৃত দ্বীনি শিক্ষার ব্যবস্থা।",
    programs: [
      "নূরানী কিন্ডারগার্টেন",
      "হিফজুল কুরআন",
      "কিতাব বিভাগ — তাইসির জামাত থেকে দাওরায়ে হাদীস",
    ],
  },
];
export default function Branches() {
  return (
    <section className="bg-background pt-20 sm:pt-24 lg:pt-28">
      <Container>
        <SectionHeader
          label="শিক্ষার পরিধি"
          headingLine1="প্রতিটি শাখায়"
          headingLine2="আলাদা শিক্ষার ধারা"
        />
        <div className="mt-14 flex flex-col overflow-hidden rounded-2xl border border-border lg:flex-row">
          {branches.map((branch, index) => (
            <article
              key={branch.number}
              className={`relative flex flex-1 flex-col p-7 sm:p-9 lg:p-11 ${index === 0 ? "border-b border-border lg:border-b-0 lg:border-r" : ""}`}
            >
              {/* Number */}
              <div className="flex items-center justify-between">
                <span className="font-serif text-5xl font-semibold leading-none text-primary/10 sm:text-6xl">
                  {branch.number}
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-accent/20 text-sm text-accent">
                  ۞
                </span>
              </div>
              {/* Title */}
              <div className="mt-8">
                <p className="text-xs font-semibold  text-accent">
                  শিক্ষা শাখা
                </p>
                <h3 className="mt-2 font-serif text-3xl font-semibold  text-foreground sm:text-4xl">
                  {branch.title}
                </h3>
                <div className="mt-4 h-px w-12 bg-primary" />
              </div>
              {/* Intro */}
              <p className="mt-6 max-w-md text-sm leading-7 text-foreground/55 sm:text-base sm:leading-8">
                {branch.intro}
              </p>
              {/* Programs */}
              <div className="mt-9 border-t border-border pt-7">
                <p className="text-xs font-semibold text-foreground/40">
                  শিক্ষার স্তরসমূহ
                </p>
                <ul className="mt-5 flex flex-col">
                  {branch.programs.map((program, programIndex) => (
                    <li
                      key={program}
                      className="flex items-start gap-4 border-b border-border py-4 first:pt-0 last:border-b-0 last:pb-0"
                    >
                      <span className="mt-0.5 text-xs font-semibold text-primary/60">
                        {String(programIndex + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm leading-6 text-foreground/70 sm:text-[15px]">
                        {program}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
