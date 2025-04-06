import TechIcon from "./TechIcon";

function ToolboxItemComponent({ items, className, itemsWrapperClassName }) {
  return (
    <div
      className={`flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ${className}`}
    >
      <div
        className={`flex flex-none gap-6 py-0.5 pr-6 ${itemsWrapperClassName}`}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="inline-flex items-center gap-4 rounded-lg px-3 py-2 text-white outline-2 outline-white/10"
          >
            <TechIcon component={item.icon} />
            <span className="font-semibold">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToolboxItemComponent;
