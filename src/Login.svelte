<script>
  import { createEventDispatcher } from "svelte";
  const dispatchEvent = createEventDispatcher();
  export let Username;
  export let Password;
  let Email;
  let success = false;

  function loginSuccessful() {
    dispatchEvent("goToThread", {user: Username});
  }

  function loginUnSuccessful() {
    alert("Login Unsuccessful, please try again!");
  }

  function logintoThreadpage() {
    let key;
    let expire;
    try {
      fetch("127.0.0.1/login", {
      method: "post",
  body: JSON.stringify({
    "username": Username,
    "password": Password
  })
})
.then(response => response.json())
  .then(data => {
    key = data.auth_key
    expire = data.expiration_datetime
  })
    }catch(error) {
        console.error(error);
    }

    if (success){
    loginSuccessful();
    }else{
      loginUnSuccessful();
    }
  }

  function register(){
    try {
      fetch("127.0.0.1:8000/register", {
      method: "post",
  body: JSON.stringify({
    "username": Username,
    "email": Email,
    "password": Password
  })
})
.then(response => response.json())
  .then(data => {
    success = data.success
    })
  }catch(error) {
        console.error(error);
    }
    if (success){
    loginSuccessful();
    }else{
      loginUnSuccessful();
    }
  }
</script>

<div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
  <div class="mb-4">
    <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
      Username
    </label>
    <input
      bind:value={Username}
      class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
      id="username"
      type="text"
      placeholder="Username"
    />
  </div>
  <div class="mb-6">
    <label class="block text-grey-darker text-sm font-bold mb-2" for="email">
      email (for Registering)
    </label>
    <input
      bind:value={Email}
      class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
      id="email"
      type="text"
      placeholder="someplace@email.com"
    />
    <p class="text-red text-xs italic">Please choose a password.</p>
  </div>
  <div class="mb-6">
    <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
      Password
    </label>
    <input
      bind:value={Password}
      class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
      id="password"
      type="password"
      placeholder="******************"
    />
    <p class="text-red text-xs italic">Please choose a password.</p>
  </div>
  <div class="mb-6">
    <button
      on:click={logintoThreadpage}
      class="bg-blue hover:bg-blue-dark text-black font-bold py-2 px-4 rounded-lg"
      type="button"
    >
      Sign In
    </button>
    <button
      on:click={register}
      class="bg-blue hover:bg-blue-dark text-black font-bold py-2 px-4 rounded-lg"
      type="button"
    >
      Register
    </button>
  </div>
</div>
