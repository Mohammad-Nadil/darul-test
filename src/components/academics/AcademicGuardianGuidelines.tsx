import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";

type guidelinesType = {
  title: string;
  description: string;
};

const guidelines: guidelinesType[] = [
  {
    title: "নিয়মিত উপস্থিতি নিশ্চিত করুন",
    description:
      "সন্তানকে যথাসময়ে মাদরাসায় পাঠাতে হবে এবং নিয়মিত ক্লাসে উপস্থিত থাকার বিষয়ে অভিভাবককে সচেতন থাকতে হবে।",
  },
  {
    title: "ছুটির নিয়ম মেনে চলুন",
    description:
      "সন্তানের ছুটির প্রয়োজন হলে নির্ধারিত নিয়মে আবেদন করতে হবে। বিশেষ ছুটির ক্ষেত্রে কর্তৃপক্ষের অনুমোদন নেওয়া জরুরি।",
  },
  {
    title: "মাদরাসা খোলার দিনে উপস্থিতি",
    description:
      "ছুটি শেষে মাদরাসা খোলার নির্ধারিত তারিখে শিক্ষার্থীকে যথাসময়ে উপস্থিত করতে হবে। বিশেষ অসুবিধা হলে কর্তৃপক্ষকে অবহিত করতে হবে।",
  },
  {
    title: "ক্লাস চলাকালে সাক্ষাৎ নয়",
    description:
      "শিক্ষাকার্যক্রম চলাকালে অভিভাবকদের শ্রেণিকক্ষে প্রবেশ বা শিক্ষার্থীর সঙ্গে সাক্ষাৎ করা থেকে বিরত থাকতে হবে।",
  },
  {
    title: "নির্ধারিত সময়ে সাক্ষাৎ",
    description:
      "আবাসিক শিক্ষার্থীদের সঙ্গে সাক্ষাতের ক্ষেত্রে মাদরাসার নির্ধারিত সময় ও নিয়ম অনুসরণ করতে হবে।",
  },
  {
    title: "বৈধ অভিভাবকের মাধ্যমে আনা-নেওয়া",
    description:
      "শিক্ষার্থীকে মাদরাসায় আনা-নেওয়ার ক্ষেত্রে অনুমোদিত ও বৈধ অভিভাবকের মাধ্যম ব্যবহার করতে হবে।",
  },
];

export default function AcademicGuardianGuidelines() {
  return (
    <section id="guardian-guidelines" className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <SectionHeader
              label="অভিভাবকদের জন্য"
              headingLine1="শিক্ষার পথে"
              headingLine2="অভিভাবকের সহযোগিতা"
            />

            <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
              একজন শিক্ষার্থীর নিয়মিত ও সুন্দর একাডেমিক জীবনের পেছনে অভিভাবকের
              সচেতনতা ও সহযোগিতা গুরুত্বপূর্ণ ভূমিকা রাখে।
            </p>
          </div>

          <div className="grid border-t border-border sm:grid-cols-2 sm:gap-x-8">
            {guidelines.map((guideline) => (
              <article
                key={guideline.title}
                className="border-b border-border py-6"
              >
                <h3 className="text-base font-semibold text-foreground sm:text-lg">
                  {guideline.title}
                </h3>

                <p className="mt-2 text-sm leading-6 opacity-75">
                  {guideline.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
