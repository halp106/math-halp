<script>
    import { createEventDispatcher } from "svelte";
  const dispatchEvent = createEventDispatcher();
  export let username;
  let threadTitle;
  let threadTag;
  let threadPost;

  function createNewPost() {
    try {
      fetch("127.0.0.1/thread/create", {
      method: "post",
  body: JSON.stringify({
    "title":threadTitle,
    "tag":threadTag,
    "content":threadPost
  })
})
.then(response => {
    data = JSON.parse(response)
    key = data.auth_key
    expire = data.expiration_datetime
  })
    }catch(error) {
        console.error(error);
        alert(error)
    }
    goBack();
  }

  function goBack() {
      dispatchEvent("goToThread");
  }
  
</script>
<button
  class="bg-violet-500 hover:bg-violet-400 active:bg-violet-600 flex items-start text-white"
  on:click={goBack}
>
  go back
</button>
<div id="parent" style="display:flex; flex-flow:column nowrap; display:block; height:100%; border:solid 1px gold; margin-top: 0.5em; background-color:GhostWhite; margin-bottom: 1em;">
    <div style="display:flex; justify-content:start;">
       <textarea
      bind:value={threadTitle}
      class="flex-auto shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
      id="ThreadTitle"
      type="text"
      placeholder="Thread Title"
    />
    </div>
    <div style="display:flex; justify-content:start; border:SkyBlue; margin-top:0.5em">
      <textarea
        bind:value={threadTag}
        class="flex-auto shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
        id="ThreadTag"
        type="text"
         placeholder="Category"
        />
      </div>
    <div style="display:flex; justify-content:start; border:solid 2px red; min-height:250px;">
        <textarea
        bind:value={threadPost}
        class="flex-auto shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
        id="ThreadPost"
        type="text"
         placeholder="Begin a Disscusion"
        />
    </div>
    <button
      on:click={createNewPost}
      class="bg-blue hover:bg-blue-dark text-black font-bold py-2 px-4 rounded"
    >
      Create Post
    </button>
</div>