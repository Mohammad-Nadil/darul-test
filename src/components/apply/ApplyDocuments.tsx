import Container from "../layout/Container";
import Button from "../ui/Button";
import SectionHeader from "../ui/SectionHeader";

type FormData = Record<string, string | boolean | File | null>;

type ApplyDocumentsProps = {
  formData: FormData;
  updateFormData: (
    field: string,
    value: string | boolean | File | null,
  ) => void;
  onPrevious: () => void;
  onNext: () => void;
};

export default function ApplyDocuments({
  formData,
  updateFormData,
  onPrevious,
  onNext,
}: ApplyDocumentsProps) {
  const handleFileChange = (field: string, file: File | null) => {
    updateFormData(field, file);
  };

  return (
    <section id="application-documents" className="pt-10 pb-16 sm:pb-20">
      <Container className="max-w-5xl">
        {/* Section intro */}
        <div className="flex flex-col items-center text-center">
          <SectionHeader
            label=""
            headingLine1="ধাপ ০৪"
            headingLine2="প্রয়োজনীয় কাগজপত্র"
            className="flex flex-col items-center justify-center text-center"
          />

          <p className="mt-4 max-w-xl text-sm  text-muted-foreground sm:text-base">
            আবেদন সম্পন্ন করার জন্য প্রয়োজনীয় ছবি ও কাগজপত্র প্রস্তুত রাখুন।
            বিভাগ বা শিক্ষাস্তর অনুযায়ী অতিরিক্ত নথি প্রয়োজন হতে পারে।
          </p>
        </div>

        {/* Form */}
        <div className="mx-auto mt-8  ">
          <div className="divide-y divide-border">
            {/* Student photo */}
            <div className="py-7 sm:py-8">
              <div className="grid gap-3 sm:grid-cols-[190px_1fr] sm:gap-8">
                <div>
                  <label
                    htmlFor="student-photo"
                    className="text-sm font-medium text-foreground"
                  >
                    শিক্ষার্থীর ছবি <span className="text-primary">*</span>
                  </label>

                  <p className="mt-1 text-xs -5 text-muted-foreground">
                    সাম্প্রতিক ছবি
                  </p>
                </div>

                <div>
                  <input
                    id="student-photo"
                    name="studentPhoto"
                    type="file"
                    accept="image/*"
                    onChange={(event) =>
                      handleFileChange(
                        "studentPhoto",
                        event.target.files?.[0] ?? null,
                      )
                    }
                    className="block w-full text-sm text-white file:mr-4 file:rounded-full file:border-0 file:bg-primary file:px-4 file:py-2 file:text-xs file:font-medium file:text-primary-foreground hover:file:opacity-90"
                  />

                  {formData.studentPhoto instanceof File && (
                    <p className="mt-2 text-xs text-muted-foreground">
                      নির্বাচিত: {formData.studentPhoto.name}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Previous education document */}
            <div className="py-7 sm:py-8">
              <div className="grid gap-3 sm:grid-cols-[190px_1fr] sm:gap-8">
                <div>
                  <label
                    htmlFor="education-document"
                    className="text-sm font-medium text-foreground"
                  >
                    পূর্ববর্তী শিক্ষার কাগজপত্র
                  </label>

                  <p className="mt-1 text-xs -5 text-muted-foreground">
                    প্রযোজ্য হলে
                  </p>
                </div>

                <div>
                  <input
                    id="education-document"
                    name="educationDocument"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(event) =>
                      handleFileChange(
                        "educationDocument",
                        event.target.files?.[0] ?? null,
                      )
                    }
                    className="block w-full text-sm text-white file:mr-4 file:rounded-full file:border-0 file:bg-primary file:px-4 file:py-2 file:text-xs file:font-medium file:text-primary-foreground hover:file:opacity-90"
                  />

                  {formData.educationDocument instanceof File && (
                    <p className="mt-2 text-xs text-muted-foreground">
                      নির্বাচিত: {formData.educationDocument.name}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Other documents */}
            <div className="py-7 sm:py-8">
              <div className="grid gap-3 sm:grid-cols-[190px_1fr] sm:gap-8">
                <div>
                  <label
                    htmlFor="other-document"
                    className="text-sm font-medium text-foreground"
                  >
                    অন্যান্য কাগজপত্র
                  </label>

                  <p className="mt-1 text-xs -5 text-muted-foreground">
                    প্রয়োজন অনুযায়ী
                  </p>
                </div>

                <div>
                  <input
                    id="other-document"
                    name="otherDocument"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(event) =>
                      handleFileChange(
                        "otherDocument",
                        event.target.files?.[0] ?? null,
                      )
                    }
                    className="block w-full text-sm text-white file:mr-4 file:rounded-full file:border-0 file:bg-primary file:px-4 file:py-2 file:text-xs file:font-medium file:text-primary-foreground hover:file:opacity-90"
                  />

                  {formData.otherDocument instanceof File && (
                    <p className="mt-2 text-xs text-muted-foreground">
                      নির্বাচিত: {formData.otherDocument.name}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Additional information */}
            <div className="py-7 sm:py-8">
              <label
                htmlFor="additional-document-info"
                className="text-sm font-medium text-foreground"
              >
                অতিরিক্ত তথ্য
              </label>

              <p className="mt-1 text-xs  text-muted-foreground">
                প্রয়োজন হলে অতিরিক্ত কোনো তথ্য উল্লেখ করুন।
              </p>

              <textarea
                id="additional-document-info"
                name="additionalDocumentInfo"
                rows={1}
                value={(formData.additionalDocumentInfo as string) ?? ""}
                onChange={(event) =>
                  updateFormData("additionalDocumentInfo", event.target.value)
                }
                placeholder="অতিরিক্ত তথ্য লিখুন"
                className="mt-4 w-full resize-none border-b border-border bg-transparent px-0 py-2 text-sm  text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
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
