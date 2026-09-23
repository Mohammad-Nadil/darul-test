import Container from "../layout/Container";
import Button from "../ui/Button";
import SectionHeader from "../ui/SectionHeader";

type FormData = Record<string, string | boolean | File | null>;

type ApplyStudentInformationProps = {
  formData: FormData;
  updateFormData: (field: string, value: string | boolean) => void;
  onNext: () => void;
};

export default function ApplyStudentInformation({
  formData,
  updateFormData,
  onNext,
}: ApplyStudentInformationProps) {
  const branch = formData.branch as string;

  const handleChange = (field: string, value: string | boolean) => {
    updateFormData(field, value);
  };

  return (
    <section id="student-information" className="pt-10 pb-16 sm:pb-20">
      <Container className="max-w-5xl" >
        {/* Section intro */}
        <div className="flex flex-col items-center text-center">
          <SectionHeader
            label=""
            headingLine1="ধাপ ০১"
            headingLine2="শিক্ষার্থীর তথ্য"
            className="flex flex-col items-center justify-center text-center"
          />

          <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
            শিক্ষার্থীর ব্যক্তিগত ও ভর্তি সংক্রান্ত প্রাথমিক তথ্যগুলো সঠিকভাবে
            প্রদান করুন।
          </p>
        </div>

        {/* Form fields */}
        <div className="mx-auto mt-8  ">
          <div className="grid gap-x-8 gap-y-6 py-7 sm:grid-cols-2 lg:grid-cols-3 sm:py-8">
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
                value={(formData.studentName as string) ?? ""}
                onChange={(event) =>
                  handleChange("studentName", event.target.value)
                }
                placeholder="পূর্ণ নাম লিখুন"
                className="mt-2 py-1 w-full border-b border-border bg-transparent px-0 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
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
                value={(formData.dateOfBirth as string) ?? ""}
                onChange={(event) =>
                  handleChange("dateOfBirth", event.target.value)
                }
                className="mt-2 py-1 w-full border-b border-border bg-transparent px-0 text-sm text-foreground outline-none transition-colors focus:border-primary"
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

              <select
                id="blood-group"
                name="bloodGroup"
                value={(formData.bloodGroup as string) ?? ""}
                onChange={(event) =>
                  handleChange("bloodGroup", event.target.value)
                }
                className="mt-2 py-1 w-full border-b border-border bg-transparent px-0 text-sm text-foreground outline-none transition-colors focus:border-primary"
              >
                <option value="">নির্বাচন করুন</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
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
                value={(formData.studentCategory as string) ?? ""}
                onChange={(event) =>
                  handleChange("studentCategory", event.target.value)
                }
                className="mt-2 py-1 w-full border-b border-border bg-transparent px-0 text-sm text-foreground outline-none transition-colors focus:border-primary"
              >
                <option value="">নির্বাচন করুন</option>
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
                আবাসিক অবস্থা <span className="text-primary">*</span>
              </label>

              <select
                id="residence-type"
                name="residenceType"
                value={(formData.residenceType as string) ?? ""}
                onChange={(event) =>
                  handleChange("residenceType", event.target.value)
                }
                className="mt-2 py-1 w-full border-b border-border bg-transparent px-0 text-sm text-foreground outline-none transition-colors focus:border-primary"
              >
                <option value="">নির্বাচন করুন</option>
                <option value="residential">আবাসিক</option>
                <option value="non-residential">অনাবাসিক</option>
                <option value="day-care">ডে-কেয়ার</option>
              </select>
            </div>

            {/* Branch */}
            <div>
              <label
                htmlFor="branch"
                className="text-sm font-medium text-foreground"
              >
                শাখা <span className="text-primary">*</span>
              </label>

              <select
                id="branch"
                name="branch"
                value={branch ?? ""}
                onChange={(event) => handleChange("branch", event.target.value)}
                className="mt-2 py-1 w-full border-b border-border bg-transparent px-0 text-sm text-foreground outline-none transition-colors focus:border-primary"
              >
                <option value="">শাখা নির্বাচন করুন</option>
                <option value="male">পুরুষ শাখা</option>
                <option value="female">মহিলা শাখা</option>
              </select>
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
                value={(formData.department as string) ?? ""}
                onChange={(event) =>
                  handleChange("department", event.target.value)
                }
                disabled={!branch}
                className="mt-2 py-1 w-full border-b border-border bg-transparent px-0 text-sm text-foreground outline-none transition-colors disabled:cursor-not-allowed disabled:opacity-50 focus:border-primary"
              >
                <option value=""> বিভাগ নির্বাচন করুন</option>

                <option value="nurani">নূরানী</option>
                <option value="nazera">নাজেরা</option>
                <option value="hifz">হিফজুল কুরআন</option>
                <option value="kitab">কিতাব বিভাগ</option>
              </select>
            </div>

            {/* Desired class */}
            <div>
              <label
                htmlFor="desired-class"
                className="text-sm font-medium text-foreground"
              >
                যে শ্রেণিতে ভর্তি হতে ইচ্ছুক
                <span className="text-primary">*</span>
              </label>

              <input
                id="desired-class"
                name="desiredClass"
                type="text"
                value={(formData.desiredClass as string) ?? ""}
                onChange={(event) =>
                  handleChange("desiredClass", event.target.value)
                }
                placeholder="শ্রেণি / জামাত লিখুন"
                className="mt-2 py-1 w-full border-b border-border bg-transparent px-0 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
              />
            </div>
          </div>
        </div>

        {/* Next button */}
        <div className="mx-auto mt-8 flex  justify-end">
          <Button
            label="পরবর্তী ধাপ"
            bgColor="var(--primary)"
            flairColor="#ffffff"
            borderColor="var(--primary)"
            textColor="#ffffff"
            textHoverColor="var(--primary)"
            onClick={onNext}
            rightIcon={<span aria-hidden="true">→</span>}
          />
        </div>
      </Container>
    </section>
  );
}
