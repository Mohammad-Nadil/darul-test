import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";

export default function ApplyDocuments() {
  return (
    <section id="application-documents" className="py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          {/* Section intro */}
          <div>
            <SectionHeader
              label="প্রয়োজনীয় তথ্য"
              headingLine1="আবেদনের সঙ্গে"
              headingLine2="যা প্রস্তুত রাখবেন"
            />

            <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">
              আবেদন সম্পন্ন করার আগে প্রয়োজনীয় তথ্য ও কাগজপত্র প্রস্তুত
              রাখুন। বিভাগ বা শিক্ষাস্তর অনুযায়ী অতিরিক্ত তথ্য প্রয়োজন হতে
              পারে।
            </p>
          </div>

          {/* Information */}
          <div className="border-y border-border">
            <div className="divide-y divide-border">
              <div className="grid gap-2 py-6 sm:grid-cols-[190px_1fr] sm:gap-8">
                <p className="text-sm font-medium text-foreground">
                  শিক্ষার্থীর ছবি
                </p>

                <p className="text-sm leading-6 text-muted-foreground">
                  সাম্প্রতিক পাসপোর্ট সাইজের ছবি প্রস্তুত রাখুন।
                </p>
              </div>

              <div className="grid gap-2 py-6 sm:grid-cols-[190px_1fr] sm:gap-8">
                <p className="text-sm font-medium text-foreground">
                  পূর্ববর্তী শিক্ষার তথ্য
                </p>

                <p className="text-sm leading-6 text-muted-foreground">
                  পূর্ববর্তী মাদরাসা বা শিক্ষা প্রতিষ্ঠানের নাম ও সর্বশেষ
                  পড়াশোনার তথ্য প্রদান করুন।
                </p>
              </div>

              <div className="grid gap-2 py-6 sm:grid-cols-[190px_1fr] sm:gap-8">
                <p className="text-sm font-medium text-foreground">
                  প্রয়োজনীয় কাগজপত্র
                </p>

                <p className="text-sm leading-6 text-muted-foreground">
                  বিভাগ বা শিক্ষাস্তর অনুযায়ী প্রয়োজনীয় সনদ, ফলাফল বা
                  অন্যান্য নথি প্রস্তুত রাখুন।
                </p>
              </div>

              <div className="grid gap-2 py-6 sm:grid-cols-[190px_1fr] sm:gap-8">
                <p className="text-sm font-medium text-foreground">
                  অতিরিক্ত তথ্য
                </p>

                <p className="text-sm leading-6 text-muted-foreground">
                  ভর্তি প্রক্রিয়ার সময় কর্তৃপক্ষ প্রয়োজন অনুযায়ী অতিরিক্ত
                  তথ্য বা কাগজপত্র চাইতে পারে।
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}