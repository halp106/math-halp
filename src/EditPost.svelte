<script>
    import { createEventDispatcher } from "svelte";
  const dispatchEvent = createEventDispatcher();
  export let username;
  export let threadID;
  export let threadTitle;
  export let threadContent;
  export let key;

  function editPost() {
    alert("Post edited "+threadTitle+"\n ID:"+threadID);
    goBack();
  }

  function goBack() {
      dispatchEvent("goToPost");
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
      class="flex-auto shadow appearance-none border rounded w-full py-2 text-grey-darker"
      id="ThreadTitle"
      type="text"
      placeholder="Thread Title"
    ></textarea>
    </div>
    
    <div style="display:flex; justify-content:start; border:solid 2px red; min-height:250px;">
        <textarea
        bind:value={threadContent}
        class="flex-auto shadow appearance-none border rounded w-full py-2 text-grey-darker"
        id="ThreadPost"
        type="text"
         placeholder="Begin a Disscusion"
        />
    </div>
    <button
      on:click={editPost}
      class="bg-blue hover:bg-blue-dark text-black font-bold py-2 px-4 rounded"
    >
      Edit Post
    </button>
</div>