import { useEffect, useState } from "react";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';
import Home from "./home";
import Login from '../Login';

const Dashboard = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        if (!auth) return; // Firebase not configured yet
        onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user);
            } else {
                setUser(null);
            }
        })
    }, []);

    if (!auth) {
        return (
            <div style={{ textAlign: 'center', marginTop: '60px' }}>
                Dashboard is disabled until Firebase is configured.
            </div>
        );
    }

    return (
       <div>
           {user ? <Home /> : <Login />}
       </div>
    )
}

export default Dashboard;