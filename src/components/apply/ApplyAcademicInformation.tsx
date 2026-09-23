import Container from "../layout/Container";
import Button from "../ui/Button";
import SectionHeader from "../ui/SectionHeader";

type FormData = Record<string, string | boolean | File | null>;

type ApplyAcademicInformationProps = {
  formData: FormData;
  updateFormData: (field: string, value: string | boolean) => void;
  onPrevious: () => void;
  onNext: () => void;
};

export default function ApplyAcademicInformation({
  formData,
  updateFormData,
  onPrevious,
  onNext,
}: ApplyAcademicInformationProps) {
  const handleChange = (field: string, value: string) => {
    updateFormData(field, value);
  };

  const department = formData.department as string;

  const isHifzDepartment = department === "hifz";

  return (
    <section id="academic-information" className="pt-10 pb-16 sm:pb-20">
      <Container className="max-w-5xl">
        {/* Section intro */}
        <div className="flex flex-col items-center text-center">
          <SectionHeader
            label=""
            headingLine1="ধাপ ০৩"
            headingLine2="শিক্ষা ও ঠিকানা"
            className="flex flex-col items-center justify-center text-center"
          />

          <p className="mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
            শিক্ষার্থীর বর্তমান ও স্থায়ী ঠিকানা এবং পূর্ববর্তী শিক্ষার প্রয়োজনীয়
            তথ্য প্রদান করুন।
          </p>
        </div>

        {/* Form */}
        <div className="mx-auto mt-8  ">
          <div className="grid gap-y-8 py-7 sm:py-8 ">
            {/* Address */}
            <div>
              <p className="text-sm font-semibold text-foreground">ঠিকানা</p>

              <div className="mt-5 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                {/* Present address */}
                <div className="">
                  <label
                    htmlFor="present-address"
                    className="text-sm font-medium text-foreground"
                  >
                    বর্তমান ঠিকানা <span className="text-primary">*</span>
                  </label>

                  <input
                    id="present-address"
                    name="presentAddress"
                    value={(formData.presentAddress as string) ?? ""}
                    onChange={(event) =>
                      handleChange("presentAddress", event.target.value)
                    }
                    placeholder="বর্তমান ঠিকানা লিখুন"
                    className="mt-2 w-full resize-none border-b border-border bg-transparent px-0 py-2 text-sm  text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                  />
                </div>

                {/* Permanent address */}
                <div className="">
                  <label
                    htmlFor="permanent-address"
                    className="text-sm font-medium text-foreground"
                  >
                    স্থায়ী ঠিকানা <span className="text-primary">*</span>
                  </label>

                  <input
                    id="permanent-address"
                    name="permanentAddress"
                    value={(formData.permanentAddress as string) ?? ""}
                    onChange={(event) =>
                      handleChange("permanentAddress", event.target.value)
                    }
                    placeholder="স্থায়ী ঠিকানা লিখুন"
                    className="mt-2 w-full resize-none border-b border-border bg-transparent px-0 py-2 text-sm  text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                  />
                </div>
              </div>
            </div>

            {/* Previous education */}
            <div>
              <p className="text-sm font-semibold text-foreground">
                পূর্ববর্তী শিক্ষা
              </p>

              <div className="mt-5 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                {/* Previous institution */}
                <div className="">
                  <label
                    htmlFor="previous-institution"
                    className="text-sm font-medium text-foreground"
                  >
                    পূর্ববর্তী প্রতিষ্ঠান
                  </label>

                  <input
                    id="previous-institution"
                    name="previousInstitution"
                    type="text"
                    value={(formData.previousInstitution as string) ?? ""}
                    onChange={(event) =>
                      handleChange("previousInstitution", event.target.value)
                    }
                    placeholder="মাদরাসা / শিক্ষা প্রতিষ্ঠানের নাম"
                    className="mt-2 py-1 w-full border-b border-border bg-transparent px-0 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                  />
                </div>

                {/* Previous class */}
                <div>
                  <label
                    htmlFor="previous-class"
                    className="text-sm font-medium text-foreground"
                  >
                    পূর্বে যে জামাতে পড়েছে
                  </label>

                  <input
                    id="previous-class"
                    name="previousClass"
                    type="text"
                    value={(formData.previousClass as string) ?? ""}
                    onChange={(event) =>
                      handleChange("previousClass", event.target.value)
                    }
                    placeholder="জামাত / শ্রেণি"
                    className="mt-2 py-1 w-full border-b border-border bg-transparent px-0 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                  />
                </div>

                {/* Hifz completed paras */}
                {isHifzDepartment && (
                  <div>
                    <label
                      htmlFor="hifz-paras"
                      className="text-sm font-medium text-foreground"
                    >
                      হিফজ সম্পন্ন করা পারা
                    </label>

                    <input
                      id="hifz-paras"
                      name="hifzParas"
                      type="number"
                      min="0"
                      max="30"
                      value={(formData.hifzParas as string) ?? ""}
                      onChange={(event) =>
                        handleChange("hifzParas", event.target.value)
                      }
                      placeholder="পারা সংখ্যা"
                      className="mt-2 py-1 w-full border-b border-border bg-transparent px-0 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                    />
                  </div>
                )}

                {/* Read paras */}
                {isHifzDepartment && (
                  <div>
                    <label
                      htmlFor="read-paras"
                      className="text-sm font-medium text-foreground"
                    >
                      পড়া পারার সংখ্যা
                    </label>

                    <input
                      id="read-paras"
                      name="readParas"
                      type="number"
                      min="0"
                      max="30"
                      value={(formData.readParas as string) ?? ""}
                      onChange={(event) =>
                        handleChange("readParas", event.target.value)
                      }
                      placeholder="পারা সংখ্যা"
                      className="mt-2 py-1 w-full border-b border-border bg-transparent px-0 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                    />
                  </div>
                )}

                {/* Transfer reason */}
                <div className={isHifzDepartment ? "" : "sm:col-span-2"}>
                  <label
                    htmlFor="transfer-reason"
                    className="text-sm font-medium text-foreground"
                  >
                    মাদরাসা পরিবর্তনের কারণ
                  </label>

                  <input
                    id="transfer-reason"
                    name="transferReason"
                    type="text"
                    value={(formData.transferReason as string) ?? ""}
                    onChange={(event) =>
                      handleChange("transferReason", event.target.value)
                    }
                    placeholder="প্রযোজ্য হলে লিখুন"
                    className="mt-2 py-1 w-full border-b border-border bg-transparent px-0 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                  />
                </div>

                {/* Special circumstances */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="special-circumstances"
                    className="text-sm font-medium text-foreground"
                  >
                    আর্থিকভাবে অসচ্ছল / অসহায় হলে বিবরণ
                  </label>

                  <textarea
                    id="special-circumstances"
                    name="specialCircumstances"
                    rows={1}
                    value={(formData.specialCircumstances as string) ?? ""}
                    onChange={(event) =>
                      handleChange("specialCircumstances", event.target.value)
                    }
                    placeholder="প্রযোজ্য হলে সংক্ষেপে লিখুন"
                    className="mt-2 w-full resize-none border-b border-border bg-transparent px-0 py-2 text-sm  text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                  />
                </div>
              </div>
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
