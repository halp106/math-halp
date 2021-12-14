<script>
  import { createEventDispatcher } from "svelte";
  const dispatchEvent = createEventDispatcher();
  export let username;
  export let comment;
  

  function editComment() {
    alert("editing in db")
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
      bind:value={comment}
      class="flex-auto shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
      id="ThreadTitle"
      type="text"
      placeholder="Comment"
    />
    </div>
    
    <button
      on:click={editComment}
      class="bg-blue hover:bg-blue-dark text-black font-bold py-2 px-4 rounded"
    >
      edit Comment
    </button>
</div>