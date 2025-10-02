import { Camera, ShoppingCart } from "lucide-react";
import { IconButton } from "../ui/buttons/iconButton";

export function ButtonExamples() {
  return (
    <section>
      <h1>Se hvor mange knapper vi har</h1>
      <span className="flex gap-2 flex-wrap">
        <IconButton icon={<Camera />} label="min knapp" />
        <IconButton icon={<ShoppingCart />} label="kjøp nå!" />
        <IconButton icon={<Camera />} label="min knapp" />
      </span>
    </section>
  );
}
