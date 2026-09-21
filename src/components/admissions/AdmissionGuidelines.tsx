import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";

const guidelines: string[] = [
  "ভর্তি ফরমের তথ্য সঠিক ও সম্পূর্ণভাবে পূরণ করে প্রয়োজনীয় কাগজপত্র প্রস্তুত রাখুন।",
  "ভর্তি ও মাসিক ফি কর্তৃপক্ষ নির্ধারিত নিয়মে পরিশোধ করতে হবে। আবাসিক শিক্ষার্থীদের জন্য খাবার ও সংশ্লিষ্ট আবাসিক নিয়ম প্রযোজ্য হবে।",
  "ভর্তি সংক্রান্ত সর্বশেষ তারিখ, আসন ও পরিবর্তিত তথ্যের জন্য মাদরাসার সর্বশেষ নোটিশ অনুসরণ করুন।",
  "কোনো বিষয় পরিষ্কার না হলে ভর্তি সম্পন্ন করার আগে মাদরাসার অফিসে যোগাযোগ করে বিস্তারিত জেনে নিন।",
];

export default function AdmissionGuidelines() {
  return (
    <section id="admission-guidelines" className="py-14 sm:py-16">
      <Container>
        <div className="overflow-hidden rounded-2xl border border-border">
          <div className="grid lg:grid-cols-[0.7fr_1.3fr]">
            <div className="border-b border-border p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <SectionHeader
                label="গুরুত্বপূর্ণ নির্দেশনা"
                headingLine1="ভর্তির আগে"
                headingLine2="জেনে নিন"
              />

              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                ভর্তি প্রক্রিয়া সম্পন্ন করার আগে প্রয়োজনীয় বিষয়গুলো জেনে
                প্রস্তুতি নিন।
              </p>
            </div>

            <div className="grid sm:grid-cols-2">
              {guidelines.map((guideline, index) => (
                <div
                  key={guideline}
                  className={`p-5 sm:p-6 ${
                    index % 2 === 0 ? "sm:border-r sm:border-border" : ""
                  } ${index < 2 ? "border-b border-border" : ""}`}
                >
                  <span className="text-xs font-medium text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {guideline}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}