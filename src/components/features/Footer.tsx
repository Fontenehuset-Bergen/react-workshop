export function Footer() {
  return (
    <footer id="example-footer">
      <div style={{ flex: 1 }}>
        <h2 style={{textAlign: "center"}}>Backstory</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quae
        nemo laudantium quod quo, quas dicta optio magnam eos sed totam
        provident repellendus reiciendis in sequi voluptatem neque vitae labore
        aut. Amet voluptatem, sit illo molestiae explicabo, harum saepe quae
        inventore quisquam temporibus reiciendis hic accusantium rerum,
        exercitationem incidunt earum esse veniam aperiam quasi nisi officiis.
        Alias cumque deserunt, quos excepturi molestiae illum vel. 
      </div>
      <div style={{ flex: 1 }}>
        <h2 style={{textAlign: "center"}}>Want to know more?</h2>
        <nav
          style={{ display: "flex", flexFlow: "column nowrap", gap: "0.5em" }}
        >
          <a href="https://react.dev/" target="_blank">
            Check out react docs
          </a>
          <a
            href="https://github.com/Fontenehuset-Bergen/react-workshop"
            target="_blank"
          >
            Go to our github repo
          </a>
        </nav>
      </div>
    </footer>
  );
}
