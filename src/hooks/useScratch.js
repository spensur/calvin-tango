import { useRef, useEffect, useCallback, useState } from "react";

function useScratch(threshold = 0.40) {
  const canvasRef = useRef(null);
  const isDrawing = useRef(false);
  const revealed = useRef(false);
  const [isRevealed, setIsRevealed] = useState(false);

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    revealed.current = false;
    setIsRevealed(false);
    canvas.style.opacity = "1";
    canvas.style.transition = "";
    canvas.style.pointerEvents = "auto";

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#ECE2CE";
    ctx.beginPath();
    ctx.roundRect(0, 0, canvas.width, canvas.height, 14);
    ctx.fill();

    ctx.fillStyle = "#B7A787";
    ctx.font = "16px serif";
    ctx.textAlign = "center";
    ctx.letterSpacing = "3px";
    ctx.fillText("SCRATCH HERE", canvas.width / 2, canvas.height / 2);
  }, []);

  const scratch = useCallback((x, y) => {
    if (revealed.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 22, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = "source-over";

    // Sample every 4th pixel for perf
    const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let transparent = 0;
    for (let i = 3; i < data.length; i += 16) {
      if (data[i] < 128) transparent++;
    }
    const pct = (transparent * 4) / (canvas.width * canvas.height);
    if (pct >= threshold) triggerReveal();
  }, [threshold]);

  const triggerReveal = useCallback(() => {
    if (revealed.current) return;
    revealed.current = true;
    setIsRevealed(true);
    const canvas = canvasRef.current;
    canvas.style.transition = "opacity 0.8s ease";
    canvas.style.opacity = "0";
    canvas.style.pointerEvents = "none";
  }, []);

  const getPos = (e, canvas) => {
    const rect = canvas.getBoundingClientRect();
    const sx = canvas.width / rect.width;
    const sy = canvas.height / rect.height;
    const src = e.touches ? e.touches[0] : e;
    return { x: (src.clientX - rect.left) * sx, y: (src.clientY - rect.top) * sy };
  };

  useEffect(() => {
    initCanvas();
    const canvas = canvasRef.current;

    const onDown  = e => { isDrawing.current = true;  const p = getPos(e, canvas); scratch(p.x, p.y); };
    const onMove  = e => { if (!isDrawing.current) return; e.preventDefault(); const p = getPos(e, canvas); scratch(p.x, p.y); };
    const onUp    = () => isDrawing.current = false;

    canvas.addEventListener("mousedown",  onDown);
    canvas.addEventListener("mousemove",  onMove);
    canvas.addEventListener("mouseup",    onUp);
    canvas.addEventListener("mouseleave", onUp);
    canvas.addEventListener("touchstart", onDown, { passive: false });
    canvas.addEventListener("touchmove",  onMove, { passive: false });
    canvas.addEventListener("touchend",   onUp);

    return () => {
      canvas.removeEventListener("mousedown",  onDown);
      canvas.removeEventListener("mousemove",  onMove);
      canvas.removeEventListener("mouseup",    onUp);
      canvas.removeEventListener("mouseleave", onUp);
      canvas.removeEventListener("touchstart", onDown);
      canvas.removeEventListener("touchmove",  onMove);
      canvas.removeEventListener("touchend",   onUp);
    };
  }, [initCanvas, scratch]);

  return { canvasRef, isRevealed };
}

export default useScratch;