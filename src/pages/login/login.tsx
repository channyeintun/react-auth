import { useFetch } from "../../hooks/useFetch";
import { login, loginApi } from "../../services/api/login";

const Login: React.FC = () => {

    const { trigger, error, loading} = useFetch<loginApi>(login);

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();

    }

    return (
        <form onSubmit={onSubmit}>
            {error && <h1>{error}</h1>}
            <label htmlFor="email">
                Email:
                <input id="email" name="email" type="email" required />
            </label>
            <label htmlFor="password">
                Password:
                <input id="password" name="password" type="password" required />
            </label>
            <button disabled={loading} type="submit">Login</button>
        </form>
    )
}

export default Login;