import logo from "@/assets/media/logo.svg";

export function SiteLogo( {isInverted}: { isInverted?: boolean}) {
  return (
    <a href="/">
      <img 
        src={logo} 
        className={`h-full aspect-square ${isInverted ? "invert" : ""}`}
        alt="Fontenehuset sin logo" />
    </a>
  );
}
