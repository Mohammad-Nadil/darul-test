import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";

export default function ApplyAcademicInformation() {
  return (
    <section id="academic-information" className="py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          {/* Section intro */}
          <div>
            <SectionHeader
              label="ধাপ ০৩"
              headingLine1="শিক্ষা ও"
              headingLine2="ঠিকানা"
            />

            <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">
              শিক্ষার্থীর বর্তমান ও স্থায়ী ঠিকানা এবং পূর্ববর্তী শিক্ষার
              প্রয়োজনীয় তথ্য প্রদান করুন।
            </p>
          </div>

          {/* Form */}
          <div className="border-y border-border">
            <div className="grid gap-x-8 gap-y-8 py-7 sm:py-8">
              {/* Address */}
              <div>
                <p className="text-sm font-semibold text-foreground">
                  ঠিকানা
                </p>

                <div className="mt-5 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="present-address"
                      className="text-sm font-medium text-foreground"
                    >
                      বর্তমান ঠিকানা <span className="text-primary">*</span>
                    </label>

                    <textarea
                      id="present-address"
                      name="presentAddress"
                      rows={3}
                      placeholder="বর্তমান ঠিকানা লিখুন"
                      className="mt-2 w-full resize-none border-b border-border bg-transparent px-0 py-2 text-sm leading-6 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="permanent-address"
                      className="text-sm font-medium text-foreground"
                    >
                      স্থায়ী ঠিকানা <span className="text-primary">*</span>
                    </label>

                    <textarea
                      id="permanent-address"
                      name="permanentAddress"
                      rows={3}
                      placeholder="স্থায়ী ঠিকানা লিখুন"
                      className="mt-2 w-full resize-none border-b border-border bg-transparent px-0 py-2 text-sm leading-6 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                    />
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-border" />

              {/* Previous education */}
              <div>
                <p className="text-sm font-semibold text-foreground">
                  পূর্ববর্তী শিক্ষা
                </p>

                <div className="mt-5 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div className="sm:col-span-2">
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
                      placeholder="মাদরাসা / শিক্ষা প্রতিষ্ঠানের নাম"
                      className="mt-2 h-11 w-full border-b border-border bg-transparent px-0 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                    />
                  </div>

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
                      placeholder="জামাত / শ্রেণি"
                      className="mt-2 h-11 w-full border-b border-border bg-transparent px-0 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                    />
                  </div>

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
                      placeholder="পারা সংখ্যা"
                      className="mt-2 h-11 w-full border-b border-border bg-transparent px-0 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                    />
                  </div>

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
                      placeholder="পারা সংখ্যা"
                      className="mt-2 h-11 w-full border-b border-border bg-transparent px-0 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                    />
                  </div>

                  <div>
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
                      placeholder="প্রযোজ্য হলে লিখুন"
                      className="mt-2 h-11 w-full border-b border-border bg-transparent px-0 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                    />
                  </div>

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
                      rows={3}
                      placeholder="প্রযোজ্য হলে সংক্ষেপে লিখুন"
                      className="mt-2 w-full resize-none border-b border-border bg-transparent px-0 py-2 text-sm leading-6 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
