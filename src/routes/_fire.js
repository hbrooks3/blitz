export const getCurrentUser = firebase => {
    return new Promise((resolve, reject) => {
        const unsubscribe = getAuth(firebase).onAuthStateChanged(user => {
            unsubscribe();
            resolve(user);
        }, reject);
    });
}

let provider;
const getProvider = firebase => {
    if (provider) return provider;

    console.log("Loading provider");
    provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');

    return provider;
}

let auth;
const getAuth = firebase => {
    if (auth) return auth;
    console.log("Loading auth");

    auth = firebase.auth();

    return auth;
}

export const getLogin = firebase => () => {
    console.log("Login clicked");
    getAuth(firebase).signInWithRedirect(getProvider(firebase));
}

export const getLogout = firebase => () => {
    console.log("Logout clicked");
    getAuth(firebase).signOut();
}