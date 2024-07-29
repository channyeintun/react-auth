import { Outlet } from "react-router-dom";

const Main: React.FC = () => {
    return (
        <main>
            <h1 className="mx-auto bg-sky-950 text-white p-4">React Auth Demo</h1>
            <Outlet />
        </main>
    )
}

export default Main;