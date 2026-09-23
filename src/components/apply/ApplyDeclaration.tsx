import Container from "../layout/Container";
import Button from "../ui/Button";
import SectionHeader from "../ui/SectionHeader";

type FormData = Record<string, string | boolean | File | null>;

type ApplyDeclarationProps = {
  formData: FormData;
  updateFormData: (
    field: string,
    value: string | boolean | File | null,
  ) => void;
  onPrevious: () => void;
};

const declarationPoints: string[] = [
  "আমি মাদরাসার নির্ধারিত নিয়ম-কানুন, শৃঙ্খলা ও শিক্ষকদের প্রতি যথাযথ সম্মান বজায় রেখে চলব।",
  "আমি ইসলামী আদব-আখলাক ও মাদরাসার নির্ধারিত পোশাক-পরিচ্ছদ অনুসরণ করার চেষ্টা করব।",
  "মাদরাসা কর্তৃপক্ষকে অবহিত না করে বা অনুমতি ছাড়া অনুপস্থিত থাকা কিংবা মাদরাসা ত্যাগ করা থেকে বিরত থাকব।",
  "সহপাঠী ও মাদরাসার অন্যান্য শিক্ষার্থীদের সঙ্গে সৌহার্দ্যপূর্ণ আচরণ বজায় রাখব।",
  "মাদরাসার পরিবেশ, সম্পদ ও সুনাম রক্ষায় দায়িত্বশীল আচরণ করব।",
];

const fieldLabels: Record<string, string> = {
  studentName: "শিক্ষার্থীর নাম",
  dateOfBirth: "জন্মতারিখ",
  bloodGroup: "রক্তের গ্রুপ",
  studentCategory: "শিক্ষার্থীর ধরন",
  residenceType: "আবাসিক অবস্থা",
  branch: "শাখা",
  department: "বিভাগ",
  desiredClass: "ভর্তির শ্রেণি / জামাত",

  fatherName: "পিতার নাম",
  fatherOccupation: "পিতার পেশা",
  fatherMobile: "পিতার মোবাইল",
  motherName: "মাতার নাম",
  motherOccupation: "মাতার পেশা",
  motherMobile: "মাতার মোবাইল",
  guardianRelation: "অভিভাবকের সাথে সম্পর্ক",
  guardianMobile: "অভিভাবকের মোবাইল",
  guardianName: "বর্তমান অভিভাবকের নাম",
  guardianAddress: "অভিভাবকের ঠিকানা",

  presentAddress: "বর্তমান ঠিকানা",
  permanentAddress: "স্থায়ী ঠিকানা",
  previousInstitution: "পূর্ববর্তী প্রতিষ্ঠান",
  previousClass: "পূর্বের জামাত / শ্রেণি",
  hifzParas: "হিফজ সম্পন্ন করা পারা",
  readParas: "পড়া পারার সংখ্যা",
  transferReason: "মাদরাসা পরিবর্তনের কারণ",
  specialCircumstances: "অসচ্ছলতা / অসহায়ত্বের বিবরণ",

  additionalDocumentInfo: "অতিরিক্ত তথ্য",
};

const sectionFields = [
  {
    title: "শিক্ষার্থীর তথ্য",
    fields: [
      "studentName",
      "dateOfBirth",
      "bloodGroup",
      "studentCategory",
      "residenceType",
      "branch",
      "department",
      "desiredClass",
    ],
  },
  {
    title: "অভিভাবকের তথ্য",
    fields: [
      "fatherName",
      "fatherOccupation",
      "fatherMobile",
      "motherName",
      "motherOccupation",
      "motherMobile",
      "guardianRelation",
      "guardianMobile",
      "guardianName",
      "guardianAddress",
    ],
  },
  {
    title: "শিক্ষা ও ঠিকানা",
    fields: [
      "presentAddress",
      "permanentAddress",
      "previousInstitution",
      "previousClass",
      "hifzParas",
      "readParas",
      "transferReason",
      "specialCircumstances",
    ],
  },
  {
    title: "কাগজপত্র",
    fields: [
      "studentPhoto",
      "educationDocument",
      "otherDocument",
      "additionalDocumentInfo",
    ],
  },
];

const getDisplayValue = (
  field: string,
  value: string | boolean | File | null | undefined,
) => {
  if (value instanceof File) {
    return value.name;
  }

  if (typeof value === "boolean") {
    return value ? "হ্যাঁ" : "না";
  }

  if (value === null || value === undefined || value === "") {
    return "তথ্য দেওয়া হয়নি";
  }

  return value;
};

export default function ApplyDeclaration({
  formData,
  updateFormData,
  onPrevious,
}: ApplyDeclarationProps) {
  const declarationAccepted = formData.declaration === true;

  return (
    <section id="application-declaration" className="pt-10 pb-16 sm:pb-20">
      <Container className="max-w-5xl">
        {/* Section intro */}
        <div className="flex flex-col items-center text-center">
          <SectionHeader
            label=""
            headingLine1="ধাপ ০৫"
            headingLine2="তথ্য যাচাই ও অঙ্গীকার"
            className="flex flex-col items-center justify-center text-center"
          />

          <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
            আবেদন জমা দেওয়ার আগে আপনার দেওয়া সকল তথ্য একবার ভালোভাবে যাচাই করুন।
            কোনো তথ্য ভুল হলে পূর্ববর্তী ধাপে ফিরে গিয়ে সংশোধন করতে পারবেন।
          </p>
        </div>

        {/* Review */}
        <div className="mx-auto mt-8 max-w-3xl ">
          <div className="">
            {sectionFields.map((section) => {
              const visibleFields = section.fields.filter(
                (field) => formData[field] !== undefined,
              );

              return (
                <div key={section.title} className="py-7 sm:py-8">
                  <h3 className="text-sm font-semibold text-foreground">
                    {section.title}
                  </h3>

                  <div className="mt-5 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                    {visibleFields.map((field) => (
                      <div
                        key={field}
                        className={
                          field === "guardianAddress" ||
                          field === "presentAddress" ||
                          field === "permanentAddress" ||
                          field === "specialCircumstances" ||
                          field === "additionalDocumentInfo"
                            ? "sm:col-span-2"
                            : ""
                        }
                      >
                        <p className="text-xs text-muted-foreground">
                          {fieldLabels[field]}
                        </p>

                        <p className="mt-1 break-words text-sm  text-foreground">
                          {getDisplayValue(field, formData[field])}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Declaration */}
        <div className="mx-auto mt-8  border-y border-border">
          <div className="py-7 sm:py-8">
            <h3 className="text-sm font-semibold text-foreground">
              অঙ্গীকারনামা
            </h3>

            <div className="mt-5 divide-y divide-border">
              {declarationPoints.map((point, index) => (
                <div
                  key={point}
                  className="flex gap-4 py-5 first:pt-0 last:pb-0"
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
          </div>

          {/* Agreement */}
          <label className="flex cursor-pointer items-start gap-3 border-t border-border py-6">
            <input
              type="checkbox"
              name="declaration"
              checked={declarationAccepted}
              onChange={(event) =>
                updateFormData("declaration", event.target.checked)
              }
              className="mt-1 h-4 w-4 shrink-0 accent-primary"
            />

            <span className="text-sm leading-6 text-foreground">
              আমি উপরের অঙ্গীকারগুলো পড়েছি এবং মাদরাসার নিয়মাবলি মেনে চলতে সম্মত
              আছি।
            </span>
          </label>

          {/* Submit information */}
          <div className="border-t border-border py-6 sm:py-7">
            <p className="text-xs leading-5 text-muted-foreground">
              তথ্যগুলো সঠিকভাবে যাচাই করে এবং অঙ্গীকারে সম্মতি দেওয়ার পর আবেদন
              জমা দিন।
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="mx-auto mt-8 flex max-w-3xl items-center justify-between gap-4">
          <Button
            label="পূর্ববর্তী ধাপ"
            bgColor="transparent"
            borderColor="var(--border)"
            flairColor="var(--primary)"
            textColor="var(--foreground)"
            textHoverColor="#ffffff"
            leftIcon={<span aria-hidden="true">←</span>}
            onClick={onPrevious}
            className="py-1"
          />

          <Button
            type="submit"
            label="আবেদন জমা দিন"
            bgColor="var(--primary)"
            borderColor="var(--primary)"
            flairColor="#ffffff"
            textColor="#ffffff"
            textHoverColor="var(--primary-foreground)"
            rightIcon={<span aria-hidden="true">→</span>}
            disabled={!declarationAccepted}
            className="py-1"
          />
        </div>
      </Container>
    </section>
  );
}
