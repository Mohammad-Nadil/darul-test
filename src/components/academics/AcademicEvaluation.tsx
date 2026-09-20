import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";

type evaluationsType = {
  title: string;
  time: string;
  description: string;
};

const evaluations: evaluationsType[] = [
  {
    title: "১ম সাময়িক পরীক্ষা",
    time: "মুহররমের দিকে",
    description:
      "শিক্ষাবর্ষের প্রথম পর্যায়ে শিক্ষার্থীদের পাঠ্যক্রমের অগ্রগতি ও প্রস্তুতি মূল্যায়ন করা হয়।",
  },
  {
    title: "২য় সাময়িক পরীক্ষা",
    time: "রবিউল আউয়াল / রবিউস সানির দিকে",
    description:
      "পরবর্তী পর্যায়ে অর্জিত জ্ঞান ও পাঠ্যক্রমের ধারাবাহিকতা যাচাইয়ের জন্য পরীক্ষা নেওয়া হয়।",
  },
  {
    title: "বার্ষিক পরীক্ষা",
    time: "রমজানের পূর্বে",
    description:
      "শিক্ষাবর্ষের সামগ্রিক শিক্ষাগত অগ্রগতি মূল্যায়নের মাধ্যমে বার্ষিক ফলাফল প্রস্তুত করা হয়।",
  },
];

const resultPoints = [
  "বিষয়ভিত্তিক প্রাপ্ত নম্বর ও পূর্ণমান",
  "পরীক্ষাভিত্তিক সর্বোচ্চ নম্বর",
  "মোট ও গড় নম্বর",
  "মেধাস্থান",
  "শিক্ষকের মন্তব্য ও স্বাক্ষর",
  "অভিভাবকের মন্তব্য ও স্বাক্ষর",
];

export default function AcademicEvaluation() {
  return (
    <section id="evaluation" className="py-16 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          <SectionHeader
            label="পরীক্ষা ও মূল্যায়ন"
            headingLine1="শেখার অগ্রগতি"
            headingLine2="মূল্যায়নের মাধ্যমে"
          />

          <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">
            নিয়মিত মূল্যায়নের মাধ্যমে শিক্ষার্থীদের পাঠ্যক্রমের অগ্রগতি,
            প্রস্তুতি ও অর্জন পর্যবেক্ষণ করা হয়।
          </p>
        </div>

        <div className="mt-10 grid border-y border-border lg:grid-cols-[1.25fr_0.75fr]">
          <div className="lg:border-r lg:border-border lg:pr-10">
            {evaluations.map((evaluation) => (
              <article
                key={evaluation.title}
                className="border-b border-border py-6 last:border-b-0"
              >
                <h3 className="text-base font-semibold text-foreground sm:text-lg">
                  {evaluation.title}
                </h3>

                <p className="mt-2 text-sm font-medium ">
                  সম্ভাব্যসময়:{" "}
                  <span className="text-muted">{evaluation.time}</span>
                </p>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
                  {evaluation.description}
                </p>
              </article>
            ))}
          </div>

          <div className="py-6 lg:pl-10">
            <p className="text-sm font-semibold text-foreground">
              ফলাফল কার্ডে মূল্যায়ন
            </p>

            <ul className="mt-5 space-y-3">
              {resultPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm leading-6 text-muted-foreground"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                  />

                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-5 text-xs leading-5 text-muted-foreground">
          * পরীক্ষার নির্দিষ্ট তারিখ ও সময়সূচী কর্তৃপক্ষের নোটিশের মাধ্যমে
          জানানো হবে।
        </p>
      </Container>
    </section>
  );
}
