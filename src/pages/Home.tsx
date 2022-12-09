import {Header} from "../components/Header/Header";
import {Day} from "../components/Day/Day"
import {Days} from "../components/Days/Days"

export const HomePage = () => {
    return (
        <>
            <header className="header">
                <Header />
            </header>
            <main>
                <Day/>
                <Days />
            </main>
        </>
    )
}