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
        text-decoration: none;
        background-color: black;
        border: 5px solid white;
        font-size: 32px;
        width: 240px;
        margin: 15px auto;
        display: block;
    }
</style>

<h1>BODYWEIGHT BLITZ</h1>

<h2>THE WORKOUT</h2>

<p>A SIMPLE BODYWEIGHT WORKOUT. 100 PUSH-UPS. 100 SQUATS. 100 SIT-UPS.</p>

<h2>THE CHALLENGE</h2>

<p>
    DO AS MANY REPS AS POSSIBLE FOR THE FIRST SET OF EACH EXERCISE.
    <br>
    EVERY WORKOUT, TRY TO DO MORE REPS ON YOUR FIRST SET, OR BEAT YOUR TIME.
</p>

<script>
    let not_ready = () => alert("This feature is coming soon!");
</script>

<a href="/workout/" class=button>
    START
</a>

<a href="/" class=button on:click={not_ready}>
    HISTORY
</a>

<a href="/" class=button on:click={not_ready}>
    LOGIN
</a>