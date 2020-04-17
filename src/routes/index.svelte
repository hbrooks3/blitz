<style>
    * {
        font-family: Roboto;
        text-align: center;
    }

    h1 {
        font-size: 48px;
        margin-top: 30px;
    }

    h2 {
        font-size: 24px;
    }

    p {
        font-size: 18px;
        padding: 0px 20px;
    }

    a.button {
        box-sizing: border-box;
        text-decoration: none;
        background-color: black;
        border: 5px solid white;
        font-size: 32px;
        width: 240px;
        margin: 15px auto;
        display: block;
    }

    p.displayName {
        font-size: 12px;
        max-width: 240px;
        margin: 0 auto;
    }
</style>

<script>
    import { onMount } from 'svelte';
    let auth, provider, login, logout, user;

    onMount(() => {
        auth = firebase.auth();
        provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('profile');
        provider.addScope('email');
        login = () => {
            console.log("Login clicked")
            auth.signInWithRedirect(provider)
        };
        logout = () => auth.signOut();

        auth.onAuthStateChanged(_user => {
            if (_user) {
                user = _user
                console.log(`${user.displayName} is logged in`)
            } else {
                user = null
                console.log("Nobody logged in")
            }
        });
    });

    let not_ready = () => alert("This feature is coming soon!");
</script>

<h1>BODYWEIGHT BLITZ</h1>

<h2>THE WORKOUT</h2>

<p>A SIMPLE BODYWEIGHT WORKOUT. 100 PUSH-UPS. 100 SQUATS. 100 SIT-UPS.</p>

<h2>THE CHALLENGE</h2>

<p>
    DO AS MANY REPS AS POSSIBLE FOR THE FIRST SET OF EACH EXERCISE.
    <br>
    EVERY WORKOUT, TRY TO DO MORE REPS ON YOUR FIRST SET, OR BEAT YOUR TIME.
</p>

<a href="/workout/" class=button>
    START
</a>

<a href="/" class=button on:click={not_ready}>
    HISTORY
</a>

{#if user}

<a href="/" class=button on:click={logout}>
    LOGOUT
</a>

<p class=displayName>LOGGED IN AS {user.displayName}</p>

{:else}

<a href="/" class=button on:click={login}>
    LOGIN
</a>

{/if}