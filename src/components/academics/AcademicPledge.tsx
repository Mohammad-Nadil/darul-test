import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";

const studentCommitments = [
  "নিয়মিত ক্লাসে উপস্থিত থেকে পাঠ্যক্রম ও শিক্ষকদের নির্দেশনা যথাযথভাবে অনুসরণ করা।",
  "ইসলামী আদব-আখলাক, শিষ্টাচার ও শৃঙ্খলা বজায় রেখে শিক্ষক, কর্মকর্তা ও সহপাঠীদের সম্মান করা।",
  "মাদরাসার নির্ধারিত পোশাক, পরিচয়পত্র ও অন্যান্য একাডেমিক নির্দেশনা মেনে চলা।",
  "অনুমতি ছাড়া অনুপস্থিতি, ক্লাস ত্যাগ বা মাদরাসার নিয়মবহির্ভূত কোনো কার্যক্রমে অংশ না নেওয়া।",
  "সহপাঠীদের সঙ্গে সৌহার্দ্য বজায় রেখে কোনো অসামাজিক, বিশৃঙ্খল বা ক্ষতিকর কর্মকাণ্ড থেকে বিরত থাকা।",
];

const guardianCommitments = [
  "সন্তানের নিয়মিত উপস্থিতি, পড়াশোনা ও একাডেমিক অগ্রগতির বিষয়ে সচেতন থাকা।",
  "অনুপস্থিতির প্রয়োজন হলে মাদরাসার নির্ধারিত নিয়ম অনুযায়ী ছুটির আবেদন করা।",
  "ক্লাস চলাকালীন অপ্রয়োজনীয়ভাবে শ্রেণিকক্ষে প্রবেশ না করে কর্তৃপক্ষের নির্দেশনা অনুসরণ করা।",
  "মাদরাসার ভর্তি, ফি, পোশাক, শৃঙ্খলা ও অন্যান্য প্রাতিষ্ঠানিক নিয়ম মেনে চলতে সহযোগিতা করা।",
];

export default function AcademicPledge() {
  return (
    <section id="academic-commitment" className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeader
              label="অঙ্গীকার ও সহযোগিতা"
              headingLine1="শিক্ষা শুধু"
              headingLine2="শ্রেণিকক্ষে সীমাবদ্ধ নয়"
            />

            <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
              শিক্ষার্থীর জ্ঞানার্জনের পাশাপাশি তার আদব, শৃঙ্খলা ও দায়িত্ববোধ
              গড়ে তুলতে মাদরাসা ও পরিবারের পারস্পরিক সহযোগিতা গুরুত্বপূর্ণ।
            </p>
          </div>

          <div className="divide-y divide-border border-y border-border">
            <article className="py-7 sm:py-8">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs font-medium tracking-wide text-primary">
                    শিক্ষার্থীর অঙ্গীকার
                  </p>

                  <h3 className="mt-2 text-lg font-semibold text-foreground sm:text-xl">
                    ইলম, আমল ও আখলাকের পথে
                  </h3>
                </div>

                <span
                  aria-hidden="true"
                  className="hidden text-2xl text-primary/70 sm:block"
                >
                  ۞
                </span>
              </div>

              <ul className="mt-5 space-y-3">
                {studentCommitments.map((commitment) => (
                  <li
                    key={commitment}
                    className="flex items-start gap-3 text-sm leading-6 text-muted-foreground"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    />
                    <span>{commitment}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="py-7 sm:py-8">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs font-medium tracking-wide text-primary">
                    অভিভাবকের অঙ্গীকার
                  </p>

                  <h3 className="mt-2 text-lg font-semibold text-foreground sm:text-xl">
                    সন্তানের শিক্ষায় পরিবারের সহযোগিতা
                  </h3>
                </div>

                <span
                  aria-hidden="true"
                  className="hidden text-2xl text-primary/70 sm:block"
                >
                  ۞
                </span>
              </div>

              <ul className="mt-5 space-y-3">
                {guardianCommitments.map((commitment) => (
                  <li
                    key={commitment}
                    className="flex items-start gap-3 text-sm leading-6 text-muted-foreground"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    />
                    <span>{commitment}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}