import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";

export default function ApplyGuardianInformation() {
  return (
    <section id="guardian-information" className="py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          {/* Section intro */}
          <div>
            <SectionHeader
              label="ধাপ ০২"
              headingLine1="অভিভাবকের"
              headingLine2="তথ্য"
            />

            <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">
              শিক্ষার্থীর অভিভাবক ও জরুরি যোগাযোগের জন্য প্রয়োজনীয় তথ্য
              প্রদান করুন।
            </p>
          </div>

          {/* Form */}
          <div className="border-y border-border">
            <div className="grid gap-x-8 gap-y-6 py-7 sm:grid-cols-2 sm:py-8">
              {/* Father name */}
              <div>
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
                  placeholder="পিতার পূর্ণ নাম"
                  className="mt-2 h-11 w-full border-b border-border bg-transparent px-0 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
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
                  placeholder="পেশা লিখুন"
                  className="mt-2 h-11 w-full border-b border-border bg-transparent px-0 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                />
              </div>

              {/* Father mobile */}
              <div>
                <label
                  htmlFor="father-mobile"
                  className="text-sm font-medium text-foreground"
                >
                  পিতার মোবাইল নম্বর{" "}
                  <span className="text-primary">*</span>
                </label>

                <input
                  id="father-mobile"
                  name="fatherMobile"
                  type="tel"
                  inputMode="tel"
                  placeholder="০১XXXXXXXXX"
                  className="mt-2 h-11 w-full border-b border-border bg-transparent px-0 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                />
              </div>

              {/* Mother name */}
              <div>
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
                  placeholder="মাতার পূর্ণ নাম"
                  className="mt-2 h-11 w-full border-b border-border bg-transparent px-0 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
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
                  placeholder="পেশা লিখুন"
                  className="mt-2 h-11 w-full border-b border-border bg-transparent px-0 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
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
                  placeholder="০১XXXXXXXXX"
                  className="mt-2 h-11 w-full border-b border-border bg-transparent px-0 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                />
              </div>

              {/* Guardian relation */}
              <div>
                <label
                  htmlFor="guardian-relation"
                  className="text-sm font-medium text-foreground"
                >
                  বর্তমান অভিভাবকের সাথে সম্পর্ক{" "}
                  <span className="text-primary">*</span>
                </label>

                <input
                  id="guardian-relation"
                  name="guardianRelation"
                  type="text"
                  placeholder="যেমন: পিতা / মাতা / অন্যান্য"
                  className="mt-2 h-11 w-full border-b border-border bg-transparent px-0 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                />
              </div>

              {/* Guardian mobile */}
              <div>
                <label
                  htmlFor="guardian-mobile"
                  className="text-sm font-medium text-foreground"
                >
                  অভিভাবকের মোবাইল নম্বর{" "}
                  <span className="text-primary">*</span>
                </label>

                <input
                  id="guardian-mobile"
                  name="guardianMobile"
                  type="tel"
                  inputMode="tel"
                  placeholder="০১XXXXXXXXX"
                  className="mt-2 h-11 w-full border-b border-border bg-transparent px-0 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                />
              </div>

              {/* Guardian name */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="guardian-name"
                  className="text-sm font-medium text-foreground"
                >
                  বর্তমান অভিভাবকের নাম{" "}
                  <span className="text-primary">*</span>
                </label>

                <input
                  id="guardian-name"
                  name="guardianName"
                  type="text"
                  placeholder="অভিভাবকের পূর্ণ নাম"
                  className="mt-2 h-11 w-full border-b border-border bg-transparent px-0 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                />
              </div>

              {/* Guardian address */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="guardian-address"
                  className="text-sm font-medium text-foreground"
                >
                  বর্তমান অভিভাবকের ঠিকানা{" "}
                  <span className="text-primary">*</span>
                </label>

                <textarea
                  id="guardian-address"
                  name="guardianAddress"
                  rows={3}
                  placeholder="বর্তমান ঠিকানা লিখুন"
                  className="mt-2 w-full resize-none border-b border-border bg-transparent px-0 py-2 text-sm leading-6 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}