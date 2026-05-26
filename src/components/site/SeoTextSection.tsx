import { useLang } from "@/contexts/LanguageContext";

export function SeoTextSection() {
  const { t } = useLang();
  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="space-y-6 text-base lg:text-lg leading-relaxed text-muted-foreground">
          <p>{t.seoBlock.p1}</p>
          <p>{t.seoBlock.p2}</p>
          <p>{t.seoBlock.p3}</p>
        </div>
      </div>
    </section>
  );
}
