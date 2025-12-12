import { Counter } from '../components/assignment/Counter';
import { DropdownMenu } from '../components/assignment/DropdownMenu';

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
        </>
    );
}

export default App;
