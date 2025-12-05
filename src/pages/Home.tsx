import LinkButton from '../components/buttons/LinkButton';
import TextButton from '../components/buttons/TextButton';

export default function Home() {
    return (
        <>
            <main>
                <section>
                    <h2>My React Components</h2>
                    <p>
                        This text is inside a paragraph!
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At reprehenderit
                        eum ratione assumenda porro soluta voluptatum, blanditiis nesciunt facere?
                        Quos quisquam est culpa, fugiat ullam, eius minima inventore dolorem placeat
                        asperiores impedit delectus fuga blanditiis eaque cupiditate magni assumenda
                        nihil reprehenderit et!
                    </p>
                </section>
                <section>
                    <h2>My Buttons</h2>
                    <div className="flexRow">
                        <TextButton label="Text Button"></TextButton>
                        <LinkButton
                            label="Link Button"
                            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a"
                        ></LinkButton>
                        <LinkButton
                            label="Button that opens a new tab!"
                            href="https://google.com"
                            newTab
                        ></LinkButton>
                    </div>
                </section>
            </main>
        </>
    );
}
