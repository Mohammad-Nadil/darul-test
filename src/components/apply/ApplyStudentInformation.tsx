import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";

export default function ApplyStudentInformation() {
  return (
    <section id="student-information" className="py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          {/* Section intro */}
          <div>
            <SectionHeader
              label="ধাপ ০১"
              headingLine1="শিক্ষার্থীর"
              headingLine2="তথ্য"
            />

            <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">
              শিক্ষার্থীর ব্যক্তিগত ও ভর্তি সংক্রান্ত প্রাথমিক তথ্যগুলো
              সঠিকভাবে প্রদান করুন।
            </p>
          </div>

          {/* Form */}
          <div className="border-y border-border">
            <div className="grid gap-x-8 gap-y-6 py-7 sm:grid-cols-2 sm:py-8">
              {/* Student name */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="student-name"
                  className="text-sm font-medium text-foreground"
                >
                  শিক্ষার্থীর নাম <span className="text-primary">*</span>
                </label>

                <input
                  id="student-name"
                  name="studentName"
                  type="text"
                  placeholder="পূর্ণ নাম লিখুন"
                  className="mt-2 h-11 w-full border-b border-border bg-transparent px-0 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                />
              </div>

              {/* Date of birth */}
              <div>
                <label
                  htmlFor="date-of-birth"
                  className="text-sm font-medium text-foreground"
                >
                  জন্মতারিখ <span className="text-primary">*</span>
                </label>

                <input
                  id="date-of-birth"
                  name="dateOfBirth"
                  type="date"
                  className="mt-2 h-11 w-full border-b border-border bg-transparent px-0 text-sm text-foreground outline-none transition-colors focus:border-primary"
                />
              </div>

              {/* Blood group */}
              <div>
                <label
                  htmlFor="blood-group"
                  className="text-sm font-medium text-foreground"
                >
                  রক্তের গ্রুপ
                </label>

                <input
                  id="blood-group"
                  name="bloodGroup"
                  type="text"
                  placeholder="যেমন: B+"
                  className="mt-2 h-11 w-full border-b border-border bg-transparent px-0 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                />
              </div>

              {/* Student category */}
              <div>
                <label
                  htmlFor="student-category"
                  className="text-sm font-medium text-foreground"
                >
                  শিক্ষার্থীর ধরন <span className="text-primary">*</span>
                </label>

                <select
                  id="student-category"
                  name="studentCategory"
                  defaultValue=""
                  className="mt-2 h-11 w-full border-b border-border bg-transparent px-0 text-sm text-foreground outline-none transition-colors focus:border-primary"
                >
                  <option value="" disabled>
                    নির্বাচন করুন
                  </option>
                  <option value="new">নতুন শিক্ষার্থী</option>
                  <option value="existing">পুরাতন শিক্ষার্থী</option>
                </select>
              </div>

              {/* Residence type */}
              <div>
                <label
                  htmlFor="residence-type"
                  className="text-sm font-medium text-foreground"
                >
                  শিক্ষার্থীর ধরন <span className="text-primary">*</span>
                </label>

                <select
                  id="residence-type"
                  name="residenceType"
                  defaultValue=""
                  className="mt-2 h-11 w-full border-b border-border bg-transparent px-0 text-sm text-foreground outline-none transition-colors focus:border-primary"
                >
                  <option value="" disabled>
                    নির্বাচন করুন
                  </option>
                  <option value="residential">আবাসিক</option>
                  <option value="non-residential">অনাবাসিক</option>
                  <option value="day-care">ডে-কেয়ার</option>
                </select>
              </div>

              {/* Desired class */}
              <div>
                <label
                  htmlFor="desired-class"
                  className="text-sm font-medium text-foreground"
                >
                  যে শ্রেণিতে ভর্তি হতে ইচ্ছুক{" "}
                  <span className="text-primary">*</span>
                </label>

                <input
                  id="desired-class"
                  name="desiredClass"
                  type="text"
                  placeholder="শ্রেণি / জামাত লিখুন"
                  className="mt-2 h-11 w-full border-b border-border bg-transparent px-0 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                />
              </div>

              {/* Department */}
              <div>
                <label
                  htmlFor="department"
                  className="text-sm font-medium text-foreground"
                >
                  বিভাগ <span className="text-primary">*</span>
                </label>

                <select
                  id="department"
                  name="department"
                  defaultValue=""
                  className="mt-2 h-11 w-full border-b border-border bg-transparent px-0 text-sm text-foreground outline-none transition-colors focus:border-primary"
                >
                  <option value="" disabled>
                    বিভাগ নির্বাচন করুন
                  </option>
                  <option value="nurani">নূরানী</option>
                  <option value="hifz">হিফজুল কুরআন</option>
                  <option value="kitab">কিতাব বিভাগ</option>
                  <option value="other">অন্যান্য</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
