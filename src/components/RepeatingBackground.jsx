import BackgroundWallpaper from "../assets/background-wallpaper.webp";

export function RepeatingBackground({ tileHeight = "100vh" }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-white">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: `calc(${i} * ${tileHeight})`,
            left: 0,
            width: "100%",
            height: tileHeight,
            backgroundImage: `url(${BackgroundWallpaper})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            transform: i % 2 === 1 ? "scaleY(-1)" : "none",
          }}
        />
      ))}
    </div>
  );
}