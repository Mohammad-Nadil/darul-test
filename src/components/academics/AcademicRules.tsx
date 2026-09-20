import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";

type ruleGroupsType = {
  title: string;
  rules: string[];
};

const ruleGroups: ruleGroupsType[] = [
  {
    title: "উপস্থিতি ও সময়ানুবর্তিতা",
    rules: [
      "শিক্ষার্থীদের নির্ধারিত সময়ে মাদরাসায় উপস্থিত হয়ে নিয়মিত ক্লাসে অংশগ্রহণ করতে হবে।",
      "মাদরাসা খোলার নির্ধারিত তারিখে উপস্থিত থাকতে হবে এবং অপ্রয়োজনীয় অনুপস্থিতি এড়িয়ে চলতে হবে।",
    ],
  },
  {
    title: "ছুটি ও অনুমতি",
    rules: [
      "প্রয়োজনীয় ছুটির জন্য নির্ধারিত নিয়মে আবেদন করতে হবে। অনুমতি ছাড়া ছুটিতে থাকা যাবে না।",
      "বিশেষ ছুটির ক্ষেত্রে নির্ধারিত ফরমে আবেদন করে কর্তৃপক্ষের অনুমোদন নিতে হবে।",
    ],
  },
  {
    title: "ক্লাসের শৃঙ্খলা",
    rules: [
      "ক্লাস চলাকালে শিক্ষাকার্যক্রমে মনোযোগী থাকতে এবং শ্রেণিকক্ষের নিয়ম-শৃঙ্খলা বজায় রাখতে হবে।",
      "ক্লাস চলাকালে অভিভাবকদের শ্রেণিকক্ষে প্রবেশ বা শিক্ষার্থীর সঙ্গে সাক্ষাৎ করা যাবে না।",
    ],
  },
  {
    title: "পরিচয় ও পোশাক",
    rules: [
      "মাদরাসার নির্ধারিত পোশাক পরিধান করে উপস্থিত হতে হবে।",
      "মাদরাসায় উপস্থিতির সময় প্রয়োজনীয় আইডি সঙ্গে রাখতে হবে।",
    ],
  },
];

export default function AcademicRules() {
  return (
    <section
      id="academic-rules"
      className=" py-16 sm:py-20"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeader
              label="একাডেমিক নিয়মাবলি"
              headingLine1="শৃঙ্খলার"
              headingLine2="মাধ্যমে শিক্ষা"
            />

            <p className="mt-5 max-w-md text-sm leading-7  sm:text-base">
              একটি সুন্দর শিক্ষার পরিবেশ বজায় রাখতে উপস্থিতি, ছুটি, শ্রেণিকক্ষের
              আচরণ ও দৈনন্দিন শৃঙ্খলার কিছু নিয়ম অনুসরণ করা প্রয়োজন।
            </p>

            <div className="mt-8 hidden border-l-2 border-primary pl-5 lg:block">
              <p className="text-sm font-medium leading-6 ">
                নিয়ম মেনে চলা শুধু শৃঙ্খলা নয়—
                <br />
                এটি শিক্ষারই একটি অংশ।
              </p>
            </div>
          </div>

          <div className="border-t border-border">
            {ruleGroups.map((group) => (
              <article
                key={group.title}
                className="border-b border-border py-6 sm:py-7"
              >
                <div className="grid gap-4 sm:grid-cols-[190px_1fr] sm:gap-8">
                  <h3 className="text-base font-semibold ">{group.title}</h3>

                  <ul className="space-y-3">
                    {group.rules.map((rule) => (
                      <li
                        key={rule}
                        className="flex items-start gap-3 text-sm leading-6 opacity-75"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                        />

                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
