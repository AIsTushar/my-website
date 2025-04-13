function CardHeader({ icon: Icon, title, description, className }) {
  return (
    <div className={`flex flex-col px-6 py-6 md:px-10 md:py-8 ${className}`}>
      <div className={`inline-flex items-center gap-2 text-emerald-300`}>
        <Icon />
        <h3 className="font-serif text-3xl">{title}</h3>
      </div>

      <p className="mt-2 text-sm text-white/50">{description}</p>
    </div>
  );
}

export default CardHeader;
