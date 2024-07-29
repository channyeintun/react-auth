import { useFetch } from "../../hooks/useFetch";
import { getCurrentUser, getCurrentUserApi } from "../../services/api/getCurrentUser";

const CurrentUser:React.FC = ()=>{

    const { loading, trigger, data } = useFetch<getCurrentUserApi>(getCurrentUser);

    return (
        <div className="flex flex-col gap-8 max-w-52 mx-auto p-8">
                {data && data.fullName}
                <button
                    disabled={loading}
                    className="border border-black"
                    type="button"
                    onClick={() => trigger()}>
                    Get current user
                </button>
            </div>
    )
}

export default CurrentUser;