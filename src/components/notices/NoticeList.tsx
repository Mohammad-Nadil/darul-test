"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { FiDownload, FiFileText, FiSearch, FiX } from "react-icons/fi";
import { TiPinOutline } from "react-icons/ti";

type NoticeCategory = "all" | "academic" | "exam" | "holiday" | "general";

type Notice = {
  id: number;
  title: string;
  date: string;
  category: Exclude<NoticeCategory, "all">;
  pinned: boolean;
  desc: string;
  pdf?: string;
};

const notices: Notice[] = [
  {
    id: 1,
    title: "অর্ধবার্ষিক পরীক্ষা ২০২৬-এর সময়সূচি",
    date: "2026-07-05",
    category: "exam",
    pinned: true,
    desc: "অর্ধবার্ষিক পরীক্ষা আগামী ১৫ জুলাই থেকে শুরু হবে। পরীক্ষার সময়সূচি ও প্রয়োজনীয় নির্দেশনা নোটিশে উল্লেখ করা হয়েছে।",
    pdf: "/notices/half-yearly-exam-routine-2026.pdf",
  },
  {
    id: 2,
    title: "গ্রীষ্মকালীন ছুটির বিজ্ঞপ্তি",
    date: "2026-06-20",
    category: "holiday",
    pinned: false,
    desc: "মাদরাসার নিয়মিত কার্যক্রম গ্রীষ্মকালীন ছুটির কারণে নির্ধারিত সময় পর্যন্ত বন্ধ থাকবে। ছুটি শেষে যথাসময়ে পাঠদান শুরু হবে।",
    pdf: "/notices/summer-vacation-2026.pdf",
  },
  {
    id: 3,
    title: "নতুন শিক্ষাবর্ষে ভর্তি সংক্রান্ত বিজ্ঞপ্তি",
    date: "2026-06-10",
    category: "academic",
    pinned: false,
    desc: "নতুন শিক্ষাবর্ষে বিভিন্ন বিভাগে শিক্ষার্থী ভর্তি কার্যক্রম শুরু হয়েছে। ভর্তি সংক্রান্ত প্রয়োজনীয় তথ্য অফিস থেকে জানা যাবে।",
    pdf: "/notices/admission-2026.pdf",
  },
  {
    id: 4,
    title: "মাসিক অভিভাবক সমাবেশ",
    date: "2026-06-02",
    category: "general",
    pinned: false,
    desc: "শিক্ষার্থীদের পড়াশোনা, আমল-আখলাক ও সামগ্রিক অগ্রগতি নিয়ে আলোচনা করার জন্য মাসিক অভিভাবক সমাবেশ অনুষ্ঠিত হবে।",
  },
];

const tabs: {
  value: NoticeCategory;
  label: string;
}[] = [
  { value: "all", label: "সকল নোটিশ" },
  { value: "academic", label: "একাডেমিক" },
  { value: "exam", label: "পরীক্ষা" },
  { value: "holiday", label: "ছুটি" },
  { value: "general", label: "সাধারণ" },
];

const categoryLabels: Record<Exclude<NoticeCategory, "all">, string> = {
  academic: "একাডেমিক",
  exam: "পরীক্ষা",
  holiday: "ছুটি",
  general: "সাধারণ",
};

const formatDate = (date: string) => {
  return new Intl.DateTimeFormat("bn-BD", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
};

export default function NoticeList() {
  const [activeTab, setActiveTab] = useState<NoticeCategory>("all");
  const [search, setSearch] = useState("");
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!selectedNotice) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedNotice(null);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [selectedNotice]);

  const filteredNotices = useMemo(() => {
    const query = search.trim().toLowerCase();

    return notices.filter((notice) => {
      const matchesTab = activeTab === "all" || notice.category === activeTab;

      const matchesSearch =
        !query ||
        notice.title.toLowerCase().includes(query) ||
        notice.desc.toLowerCase().includes(query);

      return matchesTab && matchesSearch;
    });
  }, [activeTab, search]);

  const handleDownload = (notice: Notice) => {
    if (!notice.pdf) return;

    const link = document.createElement("a");
    link.href = notice.pdf;
    link.download = "";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.click();
  };

  return (
    <>
      <div className="mx-auto mt-10 w-full max-w-4xl">
        {/* Search */}
        <div className="relative">
          <FiSearch
            aria-hidden="true"
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/35"
          />

          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="নোটিশ খুঁজুন..."
            aria-label="নোটিশ খুঁজুন"
            className="h-12 w-full rounded-xl border border-border bg-background pl-11 pr-4 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-foreground/30 focus:border-primary/40 focus:ring-4 focus:ring-primary/5"
          />

          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              aria-label="অনুসন্ধান মুছে ফেলুন"
              className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-md text-foreground/35 transition-colors hover:bg-muted hover:text-foreground"
            >
              <FiX className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Filter Tabs */}
        <div className="mt-5 flex flex-wrap gap-2">
          {tabs.map((tab) => {
            const active = activeTab === tab.value;

            return (
              <button
                key={tab.value}
                type="button"
                onClick={() => setActiveTab(tab.value)}
                className={`rounded-lg px-4 py-2 text-xs font-medium transition-all duration-300 sm:text-sm ${
                  active
                    ? "bg-primary text-background shadow-sm"
                    : "border border-border bg-background text-foreground/55 hover:border-primary/25 hover:text-primary"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Notice List */}
        <div className="mt-8 space-y-3">
          {filteredNotices.length > 0 ? (
            filteredNotices.map((notice) => (
              <article
                key={notice.id}
                onClick={() => setSelectedNotice(notice)}
                className="group relative cursor-pointer overflow-hidden rounded-xl border border-border bg-background p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-md sm:p-5"
              >
                <div className="flex items-center gap-4">
                  {/* Icon */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/[0.07] text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-background">
                    <FiFileText className="h-[18px] w-[18px]" />
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="truncate font-serif text-sm font-semibold text-foreground transition-colors duration-300 group-hover:text-primary sm:text-base">
                        {notice.title}
                      </h3>

                      {notice.pinned && (
                        <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-accent/10 px-2 py-0.5 text-[9px] font-semibold text-accent">
                          <TiPinOutline className="h-2.5 w-2.5" />
                          গুরুত্বপূর্ণ
                        </span>
                      )}
                    </div>

                    <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-foreground/40">
                      <span>{formatDate(notice.date)}</span>

                      <span className="h-1 w-1 rounded-full bg-foreground/20" />

                      <span>{categoryLabels[notice.category]}</span>
                    </div>
                  </div>

                  {/* Download */}
                  {notice.pdf && (
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        handleDownload(notice);
                      }}
                      aria-label={`${notice.title} ডাউনলোড করুন`}
                      className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-lg text-foreground/30 transition-all duration-300 hover:bg-primary/[0.07] hover:text-primary sm:flex"
                    >
                      <FiDownload className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </article>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border px-6 py-20 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted text-foreground/30">
                <FiFileText className="h-6 w-6" />
              </div>

              <h3 className="mt-5 font-serif text-lg font-semibold">
                কোনো নোটিশ পাওয়া যায়নি
              </h3>

              <p className="mt-2 max-w-sm text-sm leading-6 text-foreground/45">
                আপনার অনুসন্ধান বা নির্বাচিত বিভাগের সাথে মিলে এমন কোনো নোটিশ
                বর্তমানে পাওয়া যাচ্ছে না।
              </p>

              {(search || activeTab !== "all") && (
                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setActiveTab("all");
                  }}
                  className="mt-5 text-xs font-semibold text-primary transition-colors hover:text-accent"
                >
                  সব নোটিশ দেখুন
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Notice Modal */}
      {selectedNotice && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedNotice(null);
            }
          }}
        >
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="notice-modal-title"
            className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-background shadow-2xl"
          >
            {/* Top accent */}
            <div className="h-1 w-full bg-primary" />

            <div className="p-6 sm:p-8">
              {/* Close */}
              <button
                type="button"
                onClick={() => setSelectedNotice(null)}
                aria-label="নোটিশ বন্ধ করুন"
                className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-lg text-foreground/35 transition-colors hover:bg-muted hover:text-foreground"
              >
                <FiX className="h-5 w-5" />
              </button>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-2 pr-10">
                <span className="rounded-full bg-primary/[0.07] px-2.5 py-1 text-[10px] font-semibold text-primary">
                  {categoryLabels[selectedNotice.category]}
                </span>

                {selectedNotice.pinned && (
                  <span className="rounded-full bg-accent/10 px-2.5 py-1 text-[10px] font-semibold text-accent">
                    গুরুত্বপূর্ণ নোটিশ
                  </span>
                )}
              </div>

              <h2
                id="notice-modal-title"
                className="mt-5 pr-6 font-serif text-2xl font-semibold leading-tight tracking-tight sm:text-3xl"
              >
                {selectedNotice.title}
              </h2>

              <p className="mt-3 text-xs text-foreground/40">
                প্রকাশের তারিখ: {formatDate(selectedNotice.date)}
              </p>

              <div className="my-6 h-px bg-border" />

              <p className="text-sm leading-7 text-foreground/65 sm:text-base">
                {selectedNotice.desc}
              </p>

              {selectedNotice.pdf && (
                <button
                  type="button"
                  onClick={() => handleDownload(selectedNotice)}
                  className="group mt-7 inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-background transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/10"
                >
                  <FiDownload className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                  PDF ডাউনলোড করুন
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
