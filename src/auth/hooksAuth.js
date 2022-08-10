import { useState } from "react";
import { fakeAuth, fakePost } from "../services/apiFake";

export function useProvideAuth() {
    const [user, setUser] = useState(null);
    const [postagens, setPostagens] = useState([]);

    const signin = cb => {
        return fakeAuth.signin(() => {
            setUser("user");
            cb();
        });
    }
    const signup = cb => {
        return fakeAuth.signup(() => {
            setUser(null);
            cb();
        });
    }
    const signout = cb => {
        return fakeAuth.signout(() => {
            setUser(null);
            cb();
        })
    }
    const getPosts = cb => {
        return fakePost.getPosts(() => {
            setPostagens(fakePost.posts);
            cb();
        })
    }
    return {
        user,
        postagens,
        signin,
        signup,
        signout,
        getPosts
    }
}