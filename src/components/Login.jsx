import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.init";
import { useState } from "react";


const Login = () => {
    const provider = new GoogleAuthProvider()
    const gitHubProvider = new GithubAuthProvider()
    const [user, setUser] = useState(null)

    const handleGoogleSingIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user)
                console.log(result.user);


            }).catch((error) => {
                console.log(error);

            })

    }
    const handleGithubSingIn = () => {
        signInWithPopup(auth, gitHubProvider)
            .then((result) => {
                setUser(result.user)
            })
            .catch(error => console.log(error))
    }
    const handleSingOut = () => {
        signOut(auth)
            .then(() => {
                console.log('Sing Out successful')
                setUser(null)
            })
            .catch(error => console.log(error))

    }

    return (
        <div>


            {
                user && <div>
                    <h3>{user.displayName}</h3>
                    <h3>{user.email}</h3>
                    <img src={user.photoURL} alt="" />
                </div>
            }
            {
                user ?
                    <button onClick={handleSingOut}>Sing out</button>
                    :
                    <>
                        <button onClick={handleGoogleSingIn}>Login With Google</button>
                        <button onClick={handleGithubSingIn}>Login With GitHub</button>
                    </>
            }
        </div>
    );
};

export default Login;