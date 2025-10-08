import { Outlet } from "react-router"

export default function FAQLayout() {
    return 
    <div>
        <aside>
            <h1>Question</h1>
            <ul>
                <li>
                    hva er react?
                </li>
            </ul>
        </aside>
        <main>
            <h1>Answers</h1>
            <Outlet />
        </main>
    </div>
}