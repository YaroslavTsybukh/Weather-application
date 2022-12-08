import {Header} from "../components/Header/Header";
import {Day} from "../components/Day/Day"

export const HomePage = () => {
    return (
        <>
            <header className="header">
                <Header />
            </header>
            <main>
                <Day />
            </main>
        </>
    )
}