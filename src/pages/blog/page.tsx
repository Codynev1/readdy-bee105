import { useState } from "react";
import PageLayout from "@/components/feature/PageLayout";
import PageHero from "@/components/feature/PageHero";
import CtaBand from "@/components/feature/CtaBand";
import Reveal from "@/components/base/Reveal";
import { blogPosts, blogCategories } from "@/mocks/posts";

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <PageLayout>
      <PageHero
        eyebrow="Blog"
        title="TeleRay Insights"
        intro="Practical writing on virtual care, imaging workflows, cloud PACS and integration from the team building the platform."
      />

      <section className="bg-background-50 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <Reveal>
            <div className="flex flex-wrap justify-center gap-2">
              {blogCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-selected={activeCategory === category}
                  className={`cursor-pointer whitespace-nowrap rounded-full px-4 py-2.5 text-xs font-semibold transition-colors md:text-sm ${
                    activeCategory === category
                      ? "bg-primary-500 text-background-50"
                      : "bg-background-100 text-foreground-700 hover:text-primary-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post, index) => (
              <Reveal key={post.id} delay={index * 70}>
                <article className="flex h-full flex-col overflow-hidden rounded-lg border border-background-200 bg-background-100">
                  <div className="h-48 w-full bg-background-200">
                    <img
                      src={post.image}
                      alt={post.title}
                      title={post.title}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-xs">
                      <span className="rounded-full bg-secondary-100 px-3 py-1 font-semibold text-secondary-800">
                        {post.category}
                      </span>
                      <span className="text-foreground-500">{post.readTime}</span>
                    </div>
                    <h2 className="mt-4 font-heading text-base font-semibold leading-snug text-foreground-950 md:text-lg">
                      {post.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground-600">
                      {post.excerpt}
                    </p>
                    <div className="mt-5 flex items-center justify-between border-t border-background-200 pt-4">
                      <span className="text-xs text-foreground-500">
                        {post.author} · {post.date}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary-700">
                        Read
                        <i className="ri-arrow-right-line" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="mt-12 text-center text-sm text-foreground-600">
              No articles in this category yet.
            </p>
          ) : null}
        </div>
      </section>

      <CtaBand
        title="Want TeleRay insights in your inbox?"
        body="Reach out and we will keep you posted on new product releases, integrations and best practices."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        contactLabel="Explore Solutions"
        contactHref="/solutions"
      />
    </PageLayout>
  );
}