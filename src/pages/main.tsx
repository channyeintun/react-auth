import { useFetch } from "../hooks/useFetch"
import { getCurrentUser, getCurrentUserApi } from "../services/api/getCurrentUser"

const Main: React.FC = () => {

    const { trigger } = useFetch<getCurrentUserApi>(getCurrentUser);

    return (
        <>
            <h1>main page</h1>
            <button className="border border-black" type="button" onClick={() => trigger()}>get current user</button>
        </>
    )
}

export default Main;