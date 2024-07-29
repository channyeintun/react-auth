import { useFetch } from "../../hooks/useFetch";
import { login, loginApi } from "../../services/api/login";
import useAuthStore from "../../store/auth";

const Login: React.FC = () => {

    const { setToken } = useAuthStore();

    const { trigger, error, loading } = useFetch<loginApi>(login);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        trigger({
            mobileNumber: formData.get("phone") as string,
            password: formData.get("password") as string
        })
            .then(data => {
                if (data) {
                    setToken(data.accessToken)
                }
            })
    }

    return (
        <form className="grid columns-2 max-w-96 mx-auto gap-5 mt-20" onSubmit={onSubmit}>
            {error && <h1 className="text-red-600">{error}</h1>}
            <div className="flex flex-col gap-2">
                <label htmlFor="phone">Phone:</label>
                <input
                    className="bg-neutral-200"
                    id="phone"
                    name="phone"
                    type="text"
                    required />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="password">Password:</label>
                <input
                    className="bg-neutral-200"
                    id="password"
                    name="password"
                    type="password"
                    required />
            </div>
            <button
                className="p-2 bg-slate-900 text-white"
                disabled={loading}
                type="submit">Login</button>
        </form>
    )
}

export default Login;