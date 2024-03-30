
import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";

const LogIn = () => {
    const [user, setUser] = useState(null);

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    const handleGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const logInUser = result.user;
            console.log(logInUser);
            setUser(logInUser);
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
        });
    };
    const handleSignOut = () => {
        signOut(auth)
        .then( (result) => {
            console.log(result);
            setUser(null);
        } )
        .catch(
            console.log('paici')
        )
    }

  return (
    <div className="h-[80vh] flex items-center justify-center">
      <div className="text-center">
        <h1> I m on Log in Page </h1>

        <div className="my-4" >
            {/* { user ? 'log Out' : 'log in' } */}
        { user ? 
        <button onClick={handleSignOut} className="mx-2 btn border border-gray-400 "> Log Out</button> :
          <button onClick={handleGoogle} className="mx-2 btn border border-gray-400 "> Google Log in </button>}
        </div>
        <div>
            <h1> User : {user?.displayName} </h1>
        </div>
        {
            user && <div>
            <h1>New Style</h1>
            <h1> User : {user?.displayName}  </h1>
        </div>
        }
      </div>
    </div>
  );
}

export default LogIn;
