interface LinkButtonProps {
  label: string;
  href: string;
}

export function LinkButton({ label, href }: LinkButtonProps) {
  return (
    <a
      href={href}
      style={{
        border: "1px solid blue",
        backgroundColor: "skyblue",
        color: "white",
        padding: "2px 6px",
      }}
    >
      {label}
    </a>
  );
}
