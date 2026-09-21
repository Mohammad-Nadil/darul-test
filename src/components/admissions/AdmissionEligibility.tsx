import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";

type eligibilityPointsTypes = {
  title: string;
  description: string;
};

const eligibilityPoints: eligibilityPointsTypes[] = [
  {
    title: "উপযুক্ত শিক্ষাস্তর",
    description:
      "যে শিক্ষাস্তরে ভর্তি হতে ইচ্ছুক, শিক্ষার্থীকে সেই স্তরের পূর্ববর্তী প্রয়োজনীয় শিক্ষা সম্পন্ন করতে হবে।",
  },
  {
    title: "জ্ঞান যাচাই",
    description:
      "শিক্ষার্থীর পূর্ববর্তী শিক্ষার মান ও উপযুক্ত স্তর নির্ধারণের জন্য কর্তৃপক্ষ প্রয়োজন অনুযায়ী যাচাই বা ভর্তি পরীক্ষা নিতে পারে।",
  },
  {
    title: "আসন প্রাপ্যতা",
    description:
      "নির্ধারিত বিভাগে আসন প্রাপ্যতা ও শিক্ষার্থীর উপযুক্ততার ভিত্তিতে ভর্তি প্রক্রিয়া এগিয়ে নেওয়া হবে।",
  },
  {
    title: "কর্তৃপক্ষের অনুমোদন",
    description:
      "প্রয়োজনীয় যাচাই ও আনুষ্ঠানিকতা সম্পন্ন হওয়ার পর কর্তৃপক্ষের অনুমোদনের মাধ্যমে ভর্তি চূড়ান্ত করা হবে।",
  },
];

const admissionLevels: string[] = [
  "প্রাথমিক/নূরানী পর্যায়ে নতুন শিক্ষার্থী",
  "হিফজ বিভাগে পূর্ববর্তী শিক্ষার ভিত্তিতে উপযুক্ত পর্যায়",
  "কিতাব বা উচ্চতর স্তরে পূর্ববর্তী জামাতের উপযুক্ততা অনুযায়ী ভর্তি",
];

export default function AdmissionEligibility() {
  return (
    <section id="admission-eligibility" className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <SectionHeader
              label="ভর্তির যোগ্যতা"
              headingLine1="কোন পর্যায়ে"
              headingLine2="ভর্তি হতে পারবেন?"
            />

            <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
              শিক্ষার্থীর পূর্ববর্তী পড়াশোনা ও বর্তমান শিক্ষাগত অবস্থার ভিত্তিতে
              উপযুক্ত শ্রেণি বা বিভাগ নির্ধারণ করা হবে।
            </p>

            <div className="mt-8 border-l-2 border-primary/30 pl-5">
              <p className="text-sm font-semibold text-foreground">
                সম্ভাব্য ভর্তি পর্যায়
              </p>

              <ul className="mt-4 space-y-3">
                {admissionLevels.map((level) => (
                  <li
                    key={level}
                    className="flex items-start gap-3 text-sm leading-6 text-muted-foreground"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    />
                    <span>{level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-y border-border">
            {eligibilityPoints.map((item) => (
              <article
                key={item.title}
                className="border-b border-border py-6 last:border-b-0 sm:py-7"
              >
                <div className="grid gap-2 sm:grid-cols-[180px_1fr] sm:gap-8">
                  <h3 className="text-base font-semibold text-foreground">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <p className="mt-6 text-xs leading-5 text-muted-foreground">
          * নির্দিষ্ট বয়স, শ্রেণি বা ভর্তি পরীক্ষার শর্ত থাকলে তা সংশ্লিষ্ট
          ভর্তি বিজ্ঞপ্তিতে জানানো হবে।
        </p>
      </Container>
    </section>
  );
}
