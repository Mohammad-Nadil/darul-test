import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";

export default function ApplyHero() {
  return (
    <section className=" py-8 sm:py-10">
      <Container className="flex flex-col items-center text-center gap-3">
        <SectionHeader
          label="ভর্তি আবেদন"
          headingLine1="অনলাইন ভর্তি "
          headingLine2="আবেদন ফর্ম"
          className="flex flex-col items-center justify-center text-center"
        />

        <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
          মাদরাসা-ই-দারুল হুদায় ভর্তির জন্য নিচের ফরমটি সঠিক তথ্য দিয়ে পূরণ
          করুন। আবেদন জমা দেওয়ার আগে প্রদত্ত তথ্যগুলো ভালোভাবে যাচাই করে নিন।
        </p>
      </Container>
    </section>
  );
}
