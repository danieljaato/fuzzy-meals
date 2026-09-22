function Button() {
  return (
    <button
      className="
        h-[22px]
        px-[10px]
        bg-[#00e8f5]
        text-[#061014]
        font-mono
        text-[6px]
        font-bold
        tracking-[0.7px]
        uppercase
        flex
        items-center
        gap-[7px]
        transition-colors
        hover:bg-[#48f3ff]
      "
      style={{
        clipPath:
          "polygon(0 0, 96% 0, 100% 50%, 96% 100%, 0 100%)",
      }}
    >
      <span>CONFIGURE YOUR BUILD</span>
      <span className="text-[8px]">↗</span>
    </button>
  );
}

export default Button;
