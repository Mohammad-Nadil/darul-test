import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";

const feeRows = [
  {
    department: "মক্তব",
    admission: "১,০০০/-",
    monthly: "১,০০০/-",
    food: "২,০০০/-",
  },
  {
    department: "নূরানী (প্রাইমারী)",
    admission: "২,১০০/-",
    monthly: "১,২০০/-",
    food: "২,০০০/-",
  },
  {
    department: "নাযেরা",
    admission: "২,১০০/-",
    monthly: "১,২০০/-",
    food: "২,০০০/-",
  },
  {
    department: "হিফজুল কুরআন",
    admission: "২,১০০/-",
    monthly: "১,২০০/-",
    food: "২,০০০/-",
  },
  {
    department: "কিতাব বিভাগ",
    admission: "২,১০০/-",
    monthly: "১,২০০/-",
    food: "২,০০০/-",
  },
];

export default function AdmissionFees() {
  return (
    <section id="admission-fees" className="py-14 sm:py-16">
      <Container>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            label="ভর্তি ও মাসিক খরচ"
            headingLine1="ফি সম্পর্কে"
            headingLine2="আগেই জেনে নিন"
            className="text-nowrap"
          />

          <p className="sm:w-1/2 md:max-w-sm text-sm leading-6 text-muted-foreground sm:pb-1">
            প্রকাশিত তথ্যের ভিত্তিতে বর্তমান ফি কাঠামো দেওয়া হয়েছে। পরিবর্তন হলে
            কর্তৃপক্ষের সর্বশেষ নির্দেশনা প্রযোজ্য হবে।
          </p>
        </div>

        {/* Desktop */}
        <div className="mt-8 hidden overflow-hidden border-y border-border sm:block">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-border">
                <th className="px-5 py-4 text-xs font-medium text-muted-foreground">
                  বিভাগের নাম
                </th>
                <th className="px-5 py-4 text-xs font-medium text-muted-foreground">
                  ভর্তি ফি
                </th>
                <th className="px-5 py-4 text-xs font-medium text-muted-foreground">
                  মাসিক বেতন
                </th>
                <th className="px-5 py-4 text-xs font-medium text-muted-foreground">
                  খোরাকি
                </th>
              </tr>
            </thead>

            <tbody>
              {feeRows.map((row) => (
                <tr
                  key={row.department}
                  className="border-b border-border last:border-b-0"
                >
                  <td className="px-5 py-4 text-sm font-medium text-foreground">
                    {row.department}
                  </td>

                  <td className="px-5 py-4 text-sm text-muted-foreground">
                    {row.admission}
                  </td>

                  <td className="px-5 py-4 text-sm text-muted-foreground">
                    {row.monthly}
                  </td>

                  <td className="px-5 py-4 text-sm text-muted-foreground">
                    {row.food}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile */}
        <div className="mt-7 divide-y divide-border border-y border-border sm:hidden">
          {feeRows.map((row) => (
            <article key={row.department} className="py-5">
              <h3 className="text-sm font-semibold text-foreground">
                {row.department}
              </h3>

              <div className="mt-4 grid grid-cols-3 gap-3">
                <div>
                  <p className="text-[11px] text-muted-foreground">ভর্তি ফি</p>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    {row.admission}
                  </p>
                </div>

                <div>
                  <p className="text-[11px] text-muted-foreground">
                    মাসিক বেতন
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    {row.monthly}
                  </p>
                </div>

                <div>
                  <p className="text-[11px] text-muted-foreground">খোরাকি</p>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    {row.food}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 flex flex-col gap-2 text-xs leading-5 text-muted-foreground sm:flex-row sm:justify-between">
          <p>
            ভর্তি ফরমের মূল্য:{" "}
            <span className="text-foreground">১০০/- টাকা</span>
          </p>
          <div>
            <p className="text-xs text-muted-foreground">আবাসিক খরচ</p>
            <p className="mt-1 text-sm font-medium text-foreground">
              মাসিক বেতন + খোরাকি = ৩,২০০/- টাকা
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
