import Container from "@/src/components/layout/Container";
import Button from "@/src/components/ui/Button";
import { LuLockKeyhole, LuMail } from "react-icons/lu";

export default function LoginPage() {
  return (
    <main className=" bg-background">
      <Container>
        <div className="flex  items-center justify-center py-16">
          <div className="w-full max-w-md">
            {/* Header */}
            <div className="mb-8 text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-border bg-primary/5 text-primary">
                <LuLockKeyhole size={24} strokeWidth={1.6} />
              </div>

              <p className="mb-2 text-xs font-medium tracking-[0.2em] text-primary uppercase">
                Admin Panel
              </p>

              <h1 className="font-serif text-3xl font-semibold text-primary-dark sm:text-4xl">
                অ্যাডমিন লগইন
              </h1>

              <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
                মাদরাসা-ই-দারুল হুদা প্রশাসনিক ব্যবস্থাপনায় প্রবেশ করুন।
              </p>
            </div>

            {/* Login Form */}
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <form className="space-y-5">
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    ইমেইল
                  </label>

                  <div className="relative">
                    <LuMail
                      size={18}
                      strokeWidth={1.7}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                    />

                    <input
                      id="email"
                      type="email"
                      placeholder="admin@example.com"
                      className="h-12 w-full rounded-xl border border-border bg-background pl-11 pr-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    পাসওয়ার্ড
                  </label>

                  <div className="relative">
                    <LuLockKeyhole
                      size={18}
                      strokeWidth={1.7}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                    />

                    <input
                      id="password"
                      type="password"
                      placeholder="পাসওয়ার্ড লিখুন"
                      className="h-12 w-full rounded-xl border border-border bg-background pl-11 pr-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                    />
                  </div>
                </div>

                {/* Submit */}
                <Button
                  href="/admin"
                  label="লগইন করুন"
                  bgColor="var(--primary-light)"
                  borderColor="var(--primary)"
                  flairColor="var(--primary)"
                  textColor="var(--primary)"
                  textHoverColor="#ffffff"
                  size="md"
                  className="w-fit"
                />
              </form>
            </div>

            <p className="mt-6 text-center text-xs text-muted-foreground">
              মাদরাসা-ই-দারুল হুদা · প্রশাসনিক ব্যবস্থাপনা
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
