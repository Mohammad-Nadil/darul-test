import type { Metadata } from "next";

import ContactChannels from "@/src/components/contact/ContactChannels";
import ContactCTA from "@/src/components/contact/ContactCTA";
import ContactFAQ from "@/src/components/contact/ContactFAQ";
import ContactInfo from "@/src/components/contact/ContactInfo";

export const metadata: Metadata = {
  title: "যোগাযোগ",
  description:
    "দারুল হুদা মাদরাসার সাথে যোগাযোগ করুন। ভর্তি, বিভাগ, শিক্ষা কার্যক্রম এবং মাদরাসা সম্পর্কিত যেকোনো তথ্যের জন্য আমাদের সাথে যোগাযোগ করতে পারেন।",
  keywords: [
    "দারুল হুদা মাদরাসা",
    "যোগাযোগ",
    "মাদরাসা ভর্তি",
    "মাদরাসা যোগাযোগ",
    "ইসলামী শিক্ষা",
  ],
  openGraph: {
    title: "যোগাযোগ | দারুল হুদা মাদরাসা",
    description:
      "দারুল হুদা মাদরাসার সাথে যোগাযোগ করুন এবং ভর্তি ও শিক্ষা কার্যক্রম সম্পর্কে প্রয়োজনীয় তথ্য জেনে নিন।",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="w-full bg-background text-foreground">
      <ContactInfo />
      <ContactFAQ />
      <ContactCTA />
      <ContactChannels />
    </main>
  );
}