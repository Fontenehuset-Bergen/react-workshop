import LinkButton from '../components/buttons/LinkButton';
import TextButton from '../components/buttons/TextButton';
import { Badge } from '../components/text/Badge';
import { Paragraph } from '../components/text/Paragraph';

export default function Home() {
    return (
        <>
            <main>
                <section>
                    <h2>My React Components</h2>
                    <Paragraph
                        text={`This text is inside a paragraph!
                        
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At reprehenderit
                        eum ratione assumenda porro soluta voluptatum, blanditiis nesciunt facere?
                        Quos quisquam est culpa, fugiat ullam, eius minima inventore dolorem placeat
                        asperiores impedit delectus fuga blanditiis eaque cupiditate magni assumenda
                        nihil reprehenderit et!`}
                        textSize="larger"
                    />

                    <Paragraph
                        text="This is a small paragraph with smaller text"
                        textSize="smaller"
                    />

                    <Paragraph text="This one has specific a size unit" textSize="3rem" />
                </section>
                <section>
                    <h2>My Buttons</h2>
                    <div className="flexRow">
                        <TextButton label="Text Button" />
                        <LinkButton
                            label="Link Button"
                            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a"
                        />
                        <LinkButton
                            label="Button that opens a new tab!"
                            href="https://google.com"
                            newTab
                        />
                    </div>
                </section>
                <section>
                    <h2>My Badges</h2>
                    <div className="flexRow">
                        <Badge label="Badge" />
                        <Badge label="Success!" level="success" />
                        <Badge label="Warning!!" level="warning" />
                        <Badge label="INFO" level="info" />
                    </div>
                </section>
            </main>
        </>
    );
}
