interface PageHeaderProps {
  title: string;
  description?: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="w-full pt-16 pb-12">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10 flex flex-col items-center gap-4 text-center">
        <h1 className="text-5xl md:text-7xl font-primary text-text">{title}</h1>
        <span className="h-[3px] w-16 rounded-full bg-gradient-to-r from-primary to-primary/25" />
        {description ? (
          <p className="font-secondary text-lg text-body max-w-2xl">{description}</p>
        ) : null}
      </div>
    </section>
  );
}
