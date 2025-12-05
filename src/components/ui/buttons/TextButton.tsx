export function TextButton({ label }: { label: string }) {
  return (
    <button type="button" style={{ backgroundColor: "skyblue" }}>
      {label}
    </button>
  );
}
