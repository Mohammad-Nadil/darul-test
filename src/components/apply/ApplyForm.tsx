
"use client";

import ApplyAcademicInformation from "./ApplyAcademicInformation";
import ApplyDeclaration from "./ApplyDeclaration";
import ApplyDocuments from "./ApplyDocuments";
import ApplyGuardianInformation from "./ApplyGuardianInformation";
import ApplyStudentInformation from "./ApplyStudentInformation";

export default function ApplyForm() {
  return (
    <form>
      <ApplyStudentInformation />
      <ApplyGuardianInformation />
      <ApplyAcademicInformation />
      <ApplyDocuments />
      <ApplyDeclaration />
    </form>
  );
}