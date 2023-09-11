import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function Home(){
    const { signout } = useAuth();
    const navigate = useNavigate();
    return(
        <>
        <h1>HOME</h1>
        <Link to="/workspace">&nbsp;Workspace</Link>
        <button onClick={() => [signout(), navigate("/")]}>Sair</button>
        </>
    )
}
export default Home