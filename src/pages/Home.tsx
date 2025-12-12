import { Counter } from '../components/assignment/Counter';
import { DropdownMenu } from '../components/assignment/DropdownMenu';
import { SignUp } from '../components/assignment/SignUp';
import { SpotTheError } from '../components/assignment/SpotTheError';

function App() {
    const dropdownLinks = [
        { label: 'Home', href: '/' },
        {
            label: 'Assignments',
            href: 'https://github.com/Fontenehuset-Bergen/react-workshop/blob/main/docs/3_states/assignment.md',
        },
        {
            label: 'Readme',
            href: 'https://github.com/Fontenehuset-Bergen/react-workshop/blob/main/docs/3_states/README.md',
        },
    ];

    return (
        <>
            <Counter />

            <DropdownMenu links={dropdownLinks} />

            <div className="card">
                <SpotTheError title="Spot The Error!" />
            </div>

            <SignUp />
        </>
    );
}

export default App;
