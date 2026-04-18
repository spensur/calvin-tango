const MAPS_URL = "https://maps.app.goo.gl/Gjxd3ce46NPJVQA9A";

export function GoogleMapsButton() {
  return (
    <a
      href={MAPS_URL}
      target="_blank"
      className="
        w-61 mt-4.5
        group flex items-center gap-2 px-3.5 py-2.5 border border-[#C9A96E] rounded-full
        bg-linear-to-b from-[#fdf8ef] to-[#f5edda]
        shadow-[0_2px_8px_rgba(180,140,60,0.18)]
        transition-all duration-300
        hover:shadow-[0_4px_16px_rgba(180,140,60,0.32)]
        hover:border-[#b8893a]
        hover:from-[#f9f1e0] hover:to-[#eedfc0]
        active:scale-95 "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="size-4 fill-[#C9A96E] group-hover:fill-[#a8722a] transition-colors duration-300 shrink-0"
      >
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
      </svg>

      <span
        className="text-xs tracking-[0.12em] uppercase
              bg-linear-to-r from-[#8B6914] to-[#C9A96E]
              bg-clip-text text-transparent
              group-hover:from-[#7a5c10] group-hover:to-[#a8722a]
              transition-all duration-300 font-semibold"
      >
        Open in Google Maps
      </span>

      {/* Chevron arrow */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-3 h-3 stroke-[#C9A96E] group-hover:stroke-[#a8722a] fill-none stroke-2 transition-all duration-300 group-hover:translate-x-0.5"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
      </svg>
    </a>
  );
}
