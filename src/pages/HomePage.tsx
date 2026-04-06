export function HomePage() {
  return (
    <div className="flex flex-col items-start gap-12 pt-8 md:pt-16">
      {/* Hero Section */}
      <section className="flex flex-col-reverse items-start gap-8 md:flex-row md:items-center md:gap-12">
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              tico-tico
            </h1>
            <p className="mt-2 text-lg text-primary">
              Computer Science Graduate Student
            </p>
          </div>
          {/*
          <p className="max-w-lg text-pretty leading-relaxed text-muted-foreground">
            Web開発を中心に活動しているソフトウェアエンジニアです。
            フロントエンドからバックエンドまで幅広く対応し、
            使いやすく美しいプロダクトを作ることを目指しています。
          </p>
          */}

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/tico-tico-16"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Avatar */}
        <div className="relative shrink-0">
          <div className="flex size-32 items-center justify-center overflow-hidden rounded-full border-2 border-border bg-secondary md:size-40">
            <span className="text-5xl font-bold text-primary md:text-6xl">
              T
            </span>
          </div>
          <div className="absolute -bottom-1 -right-1 size-6 rounded-full border-2 border-background bg-primary md:size-8" />
        </div>
      </section>
    </div>
  );
}
