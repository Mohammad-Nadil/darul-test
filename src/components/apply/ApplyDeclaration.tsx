import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";

const declarationPoints: string[] = [
  "আমি মাদরাসার নির্ধারিত নিয়ম-কানুন, শৃঙ্খলা ও শিক্ষকদের প্রতি যথাযথ সম্মান বজায় রেখে চলব।",
  "আমি ইসলামী আদব-আখলাক ও মাদরাসার নির্ধারিত পোশাক-পরিচ্ছদ অনুসরণ করার চেষ্টা করব।",
  "মাদরাসা কর্তৃপক্ষকে অবহিত না করে বা অনুমতি ছাড়া অনুপস্থিত থাকা কিংবা মাদরাসা ত্যাগ করা থেকে বিরত থাকব।",
  "সহপাঠী ও মাদরাসার অন্যান্য শিক্ষার্থীদের সঙ্গে সৌহার্দ্যপূর্ণ আচরণ বজায় রাখব।",
  "মাদরাসার পরিবেশ, সম্পদ ও সুনাম রক্ষায় দায়িত্বশীল আচরণ করব।",
];

export default function ApplyDeclaration() {
  return (
    <section id="application-declaration" className="py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          {/* Section intro */}
          <div>
            <SectionHeader
              label="অঙ্গীকার"
              headingLine1="নিয়ম মেনে"
              headingLine2="শিক্ষাজীবন গড়ি"
            />

            <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">
              আবেদন জমা দেওয়ার আগে মাদরাসার নিয়মাবলি ও শিক্ষাজীবনের
              দায়িত্ব সম্পর্কে সম্মতি প্রদান করুন।
            </p>
          </div>

          {/* Declaration + Submit */}
          <div className="border-y border-border">
            <div className="divide-y divide-border">
              {declarationPoints.map((point, index) => (
                <div
                  key={point}
                  className="flex gap-4 py-5 sm:py-6"
                >
                  <span className="shrink-0 text-xs font-medium text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-sm leading-7 text-muted-foreground">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            {/* Agreement */}
            <label className="flex cursor-pointer items-start gap-3 border-t border-border py-6">
              <input
                type="checkbox"
                name="declaration"
                className="mt-1 h-4 w-4 shrink-0 accent-primary"
              />

              <span className="text-sm leading-6 text-foreground">
                আমি উপরের অঙ্গীকারগুলো পড়েছি এবং মাদরাসার নিয়মাবলি মেনে
                চলতে সম্মত আছি।
              </span>
            </label>

            {/* Submit */}
            <div className="border-t border-border py-6 sm:py-7">
              <p className="mb-4 text-xs leading-5 text-muted-foreground">
                আবেদন জমা দেওয়ার আগে আপনার দেওয়া সকল তথ্য সঠিকভাবে যাচাই করে
                নিন।
              </p>

              <button
                type="submit"
                className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                আবেদন জমা দিন
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
