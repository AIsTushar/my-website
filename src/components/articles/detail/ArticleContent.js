import ArticleCodeBlock from "./ArticleCodeBlock";

function ArticleContent({ sections }) {
  return (
    <div className="space-y-10">
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="scroll-mt-32 border-b border-white/10 pb-10 last:border-b-0 last:pb-0"
        >
          <div className="space-y-5">
            <h2 className="text-4xl font-semibold tracking-tight text-white">
              {section.title}
            </h2>

            {section.paragraphs?.map((paragraph) => (
              <p
                key={paragraph}
                className="text-lg leading-9 text-slate-300"
              >
                {paragraph}
              </p>
            ))}

            {section.bullets?.length ? (
              <ul className="space-y-4 pt-1">
                {section.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-3 text-lg leading-8 text-slate-300"
                  >
                    <span className="bg-secondary mt-3 h-2 w-2 shrink-0 rounded-full" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            {section.questions?.length ? (
              <div className="space-y-8 pt-2">
                {section.questions.map((question) => (
                  <article
                    key={question.id}
                    id={question.id}
                    className="scroll-mt-32 space-y-4"
                  >
                    <h3 className="text-3xl font-semibold tracking-tight text-white">
                      {question.title}
                    </h3>

                    <p className="text-lg leading-8 text-slate-300">
                      {question.answer}
                    </p>

                    {question.code ? (
                      <ArticleCodeBlock code={question.code} />
                    ) : null}
                  </article>
                ))}
              </div>
            ) : null}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ArticleContent;
