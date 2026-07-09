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
            {/*
            <p className="mt-2 text-lg text-primary">
              Computer Science Graduate Student
            </p>
            */}
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
          <img
            src="/avatar.webp"
            alt="Tico Tico avatar"
            className="size-32 rounded-full border-2 border-border object-cover md:size-40"
          />
          <div className="absolute -bottom-1 -right-1 size-6 rounded-full border-2 border-background bg-primary md:size-8" />
        </div>
      </section>

      {/* P2P Metronome Link */}
      <section className="w-full max-w-lg">
        <a
          href="https://metronome.tico-tico.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col gap-1 rounded-2xl border border-border bg-secondary px-6 py-4 transition-colors hover:border-primary"
        >
          <span className="text-lg font-semibold text-foreground">
            P2Pメトロノーム
          </span>
          <span className="text-sm text-muted-foreground">
            https://metronome.tico-tico.com
          </span>
        </a>
        <a
          href="https://github.com/tico-tico-16/WebRTC-Metronome"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          GitHub: https://github.com/tico-tico-16/WebRTC-Metronome
        </a>
      </section>
    </div>
  );
}
