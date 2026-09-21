import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";

type documentsTypes = {
  number: string;
  title: string;
  description: string;
};

const documents: documentsTypes[] = [
  {
    number: "01",
    title: "শিক্ষার্থীর তথ্য",
    description: "নাম, জন্মতারিখ, ঠিকানা ও প্রয়োজনীয় ব্যক্তিগত তথ্য।",
  },
  {
    number: "02",
    title: "অভিভাবকের তথ্য",
    description: "নাম, সম্পর্ক ও যোগাযোগের প্রয়োজনীয় তথ্য।",
  },
  {
    number: "03",
    title: "পূর্ববর্তী শিক্ষার তথ্য",
    description: "আগের মাদরাসা বা শিক্ষা প্রতিষ্ঠানের প্রয়োজনীয় তথ্য।",
  },
  {
    number: "04",
    title: "শিক্ষাগত কাগজপত্র",
    description: "প্রয়োজন অনুযায়ী সনদ, ফলাফল বা সংশ্লিষ্ট নথি।",
  },
];

export default function AdmissionDocuments() {
  return (
    <section id="admission-documents" className="py-14 sm:py-16">
      <Container>
            <SectionHeader
              label="প্রয়োজনীয় তথ্য"
              headingLine1="ভর্তির আগে"
              headingLine2="যা প্রস্তুত রাখবেন"
              className="flex flex-col items-center justify-center mx-auto w-full text-center"
            />

        <div className="mt-8 grid border-y border-border sm:grid-cols-2">
          {documents.map((document, index) => (
            <article
              key={document.number}
              className={`flex gap-4 py-5 ${
                index % 2 === 0
                  ? "sm:border-r sm:border-border sm:pr-8"
                  : "sm:pl-8"
              } ${index < 2 ? "border-b border-border" : ""}`}
            >
              <span className="shrink-0 text-xs font-medium text-primary">
                {document.number}
              </span>

              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  {document.title}
                </h3>

                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {document.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-4 text-xs text-muted-foreground">
          * বিভাগ বা শিক্ষাস্তর অনুযায়ী অতিরিক্ত কাগজপত্র প্রয়োজন হলে কর্তৃপক্ষ
          তা জানিয়ে দেবে।
        </p>
      </Container>
    </section>
  );
}
