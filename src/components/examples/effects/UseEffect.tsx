import { useEffect, useRef } from "react";

export function ExampleUseEffect() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const isDialogOpen = dialogRef.current?.open

  useEffect(() => {
    const dialog = dialogRef.current;

    // Vi kan åpne dialog modalen
    dialog?.showModal();

    // Vi kan lukke dialog modalen når komponentet ikke lengre blir brukt
    return () => dialog?.close();
  }, []);
  return (
    <div>
      <h2>Example useEffect</h2>
      <p>Is the dialog open? {isDialogOpen ? "yes":"no"}</p>
      <dialog ref={dialogRef}>
        <p>Hello, this is an annoying little popup</p>
        <button onClick={() => dialogRef.current?.close()}>Close me</button>
      </dialog>
    </div>
  );
}
