import Container from "../layout/Container";
import Button from "../ui/Button";
import SectionHeader from "../ui/SectionHeader";

type FormData = Record<string, string | boolean | File | null>;

type ApplyGuardianInformationProps = {
  formData: FormData;
  updateFormData: (field: string, value: string | boolean) => void;
  onPrevious: () => void;
  onNext: () => void;
};

export default function ApplyGuardianInformation({
  formData,
  updateFormData,
  onPrevious,
  onNext,
}: ApplyGuardianInformationProps) {
  const handleChange = (field: string, value: string) => {
    updateFormData(field, value);
  };

  return (
    <section id="guardian-information" className="pt-10 pb-16 sm:pb-20">
      <Container className="max-w-0">
        {/* Section intro */}
        <div className="flex flex-col items-center text-center">
          <SectionHeader
            label=""
            headingLine1="ধাপ ০২"
            headingLine2="অভিভাবকের তথ্য"
            className="flex flex-col items-center justify-center text-center"
          />

          <p className="mt-4 max-w-xl text-sm  text-muted-foreground sm:text-base">
            শিক্ষার্থীর অভিভাবক ও জরুরি যোগাযোগের জন্য প্রয়োজনীয় তথ্যগুলো
            সঠিকভাবে প্রদান করুন।
          </p>
        </div>

        {/* Form */}
        <div className="mx-auto mt-8  ">
          <div className="grid gap-x-8 gap-y-6 py-7 grid-cols-2 lg:grid-cols-3 sm:py-8">
            {/* Father name */}
            <div className="col-span-2 lg:col-span-1">
              <label
                htmlFor="father-name"
                className="text-sm font-medium text-foreground"
              >
                পিতার নাম <span className="text-primary">*</span>
              </label>

              <input
                id="father-name"
                name="fatherName"
                type="text"
                value={(formData.fatherName as string) ?? ""}
                onChange={(event) =>
                  handleChange("fatherName", event.target.value)
                }
                placeholder="পিতার পূর্ণ নাম"
                className="mt-2 py-1 w-full border-b border-border bg-transparent px-0 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
              />
            </div>

            {/* Father occupation */}
            <div>
              <label
                htmlFor="father-occupation"
                className="text-sm font-medium text-foreground"
              >
                পিতার পেশা
              </label>

              <input
                id="father-occupation"
                name="fatherOccupation"
                type="text"
                value={(formData.fatherOccupation as string) ?? ""}
                onChange={(event) =>
                  handleChange("fatherOccupation", event.target.value)
                }
                placeholder="পেশা লিখুন"
                className="mt-2 py-1 w-full border-b border-border bg-transparent px-0 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
              />
            </div>

            {/* Father mobile */}
            <div>
              <label
                htmlFor="father-mobile"
                className="text-sm font-medium text-foreground"
              >
                পিতার মোবাইল নম্বর <span className="text-primary">*</span>
              </label>

              <input
                id="father-mobile"
                name="fatherMobile"
                type="tel"
                inputMode="tel"
                value={(formData.fatherMobile as string) ?? ""}
                onChange={(event) =>
                  handleChange("fatherMobile", event.target.value)
                }
                placeholder="০১XXXXXXXXX"
                className="mt-2 py-1 w-full border-b border-border bg-transparent px-0 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
              />
            </div>

            {/* Mother name */}
            <div className="col-span-2 lg:col-span-1">
              <label
                htmlFor="mother-name"
                className="text-sm font-medium text-foreground"
              >
                মাতার নাম
              </label>

              <input
                id="mother-name"
                name="motherName"
                type="text"
                value={(formData.motherName as string) ?? ""}
                onChange={(event) =>
                  handleChange("motherName", event.target.value)
                }
                placeholder="মাতার পূর্ণ নাম"
                className="mt-2 py-1 w-full border-b border-border bg-transparent px-0 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
              />
            </div>

            {/* Mother occupation */}
            <div>
              <label
                htmlFor="mother-occupation"
                className="text-sm font-medium text-foreground"
              >
                মাতার পেশা
              </label>

              <input
                id="mother-occupation"
                name="motherOccupation"
                type="text"
                value={(formData.motherOccupation as string) ?? ""}
                onChange={(event) =>
                  handleChange("motherOccupation", event.target.value)
                }
                placeholder="পেশা লিখুন"
                className="mt-2 py-1 w-full border-b border-border bg-transparent px-0 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
              />
            </div>

            {/* Mother mobile */}
            <div>
              <label
                htmlFor="mother-mobile"
                className="text-sm font-medium text-foreground"
              >
                মাতার মোবাইল নম্বর
              </label>

              <input
                id="mother-mobile"
                name="motherMobile"
                type="tel"
                inputMode="tel"
                value={(formData.motherMobile as string) ?? ""}
                onChange={(event) =>
                  handleChange("motherMobile", event.target.value)
                }
                placeholder="০১XXXXXXXXX"
                className="mt-2 py-1 w-full border-b border-border bg-transparent px-0 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
              />
            </div>

            {/* Guardian name */}
            <div className="col-span-2 lg:col-span-1">
              <label
                htmlFor="guardian-name"
                className="text-sm font-medium text-foreground"
              >
                বর্তমান অভিভাবকের নাম <span className="text-primary">*</span>
              </label>

              <input
                id="guardian-name"
                name="guardianName"
                type="text"
                value={(formData.guardianName as string) ?? ""}
                onChange={(event) =>
                  handleChange("guardianName", event.target.value)
                }
                placeholder="অভিভাবকের পূর্ণ নাম"
                className="mt-2 py-1 w-full border-b border-border bg-transparent px-0 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
              />
            </div>
            {/* Guardian relation */}
            <div>
              <label
                htmlFor="guardian-relation"
                className="text-sm font-medium text-foreground"
              >
                বর্তমান <br className=" sm:hidden" /> অভিভাবকের সাথে
                সম্পর্ক{" "}
              </label>

              <input
                id="guardian-relation"
                name="guardianRelation"
                type="text"
                value={(formData.guardianRelation as string) ?? ""}
                onChange={(event) =>
                  handleChange("guardianRelation", event.target.value)
                }
                placeholder="যেমন: পিতা / মাতা / অন্যান্য"
                className="mt-2 py-1 w-full border-b border-border bg-transparent px-0 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
              />
            </div>

            {/* Guardian mobile */}
            <div>
              <label
                htmlFor="guardian-mobile"
                className="text-sm font-medium text-foreground"
              >
                অভিভাবকের মোবাইল নম্বর
              </label>

              <input
                id="guardian-mobile"
                name="guardianMobile"
                type="tel"
                inputMode="tel"
                value={(formData.guardianMobile as string) ?? ""}
                onChange={(event) =>
                  handleChange("guardianMobile", event.target.value)
                }
                placeholder="০১XXXXXXXXX"
                className="mt-2 py-1 w-full border-b border-border bg-transparent px-0 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
              />
            </div>

            {/* Guardian address */}
            <div className="sm:col-span-2">
              <label
                htmlFor="guardian-address"
                className="text-sm font-medium text-foreground"
              >
                বর্তমান অভিভাবকের ঠিকানা{" "}
              </label>

              <textarea
                id="guardian-address"
                name="guardianAddress"
                value={(formData.guardianAddress as string) ?? ""}
                onChange={(event) =>
                  handleChange("guardianAddress", event.target.value)
                }
                placeholder="বর্তমান ঠিকানা লিখুন"
                className="mt-2 w-full resize-none border-b border-border bg-transparent px-0 py-2 text-sm  text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
              />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between gap-3">
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
            label="পরবর্তী ধাপ"
            bgColor="var(--primary)"
            borderColor="var(--primary)"
            flairColor="#ffffff"
            textColor="#ffffff"
            textHoverColor="var(--primary)"
            rightIcon={<span aria-hidden="true">→</span>}
            onClick={onNext}
            className="py-1"
          />
        </div>
      </Container>
    </section>
  );
}
