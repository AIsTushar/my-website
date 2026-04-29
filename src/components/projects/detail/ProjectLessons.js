import {
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  Boxes,
  CreditCard,
  Database,
  Grid2x2,
  ImageIcon,
  LayoutDashboard,
  Layers3,
  Palette,
  PenSquare,
  RefreshCw,
  Rocket,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Smartphone,
  UserRound,
  Zap,
} from "lucide-react";

const lessonIcons = {
  book: BookOpen,
  boxes: Boxes,
  briefcase: BriefcaseBusiness,
  bolt: Zap,
  card: CreditCard,
  chart: BarChart3,
  database: Database,
  grid: Grid2x2,
  image: ImageIcon,
  layers: Layers3,
  layout: LayoutDashboard,
  palette: Palette,
  pen: PenSquare,
  refresh: RefreshCw,
  rocket: Rocket,
  server: ServerCog,
  shield: ShieldCheck,
  smartphone: Smartphone,
  spark: Sparkles,
  user: UserRound,
};

function ProjectLessons({ lessons }) {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-semibold text-white">What I Learned</h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {lessons.map((lesson) => {
          const Icon = lessonIcons[lesson.icon] ?? Sparkles;

          return (
            <article
              key={lesson.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_18px_60px_rgba(2,8,23,0.2)]"
            >
              <div className="text-secondary flex items-center gap-3">
                <Icon className="h-5 w-5" />
                <h3 className="text-xl font-semibold text-white">
                  {lesson.title}
                </h3>
              </div>

              <p className="mt-4 text-base leading-7 text-slate-300">
                {lesson.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default ProjectLessons;
