<script>
    import {createEventDispatcher} from "svelte";
    const dispatch = createEventDispatcher();
   export let content;
   export let username;
   function handleClick() {

		dispatch('go-back', {})
    
   }
   function createButtonClicked(){
       dispatch("createComment")
   }

   function editButtonClicked(){
       dispatch("editPost")
   }
</script>
<button class="bg-violet-500 hover:bg-violet-400 active:bg-violet-600 flex items-start text-white rounded-md" on:click={handleClick}>
    go back
</button>
<div id="parent" style="display:flex; flex-flow:column nowrap; display:block; height:100%; border:solid 3px gold; margin-top: 0.5em; background-color:GhostWhite; margin-bottom: 1em; border-radius: 10px; overflow:hidden;">
    <div style="display:flex; justify-content:start; margin-top:0.5em; margin-right: 40px">
        <h1>
            <b>
                {content.title}
            </b>
        </h1>
    </div>
    <div style="display:flex; justify-content:start; margin-top:0.5em">
        <p>
            {content.username}
        </p>
        <div style="margin-left:auto">
            Thread# {content.unique_id}  @{content.timestamp}
        </div>
    </div>
    <div style="display:flex; justify-content:start; border:solid 2px LightCoral; min-height:250px; border-radius: 10px; overflow:hidden;">
        <p>
            {content.content}
        </p>

        {#if username == content.username}
        <button style="display:flex; margin-left:auto; margin-top:auto; color:white; background-color: DeepSkyBlue" on:click={editButtonClicked}>
        Edit Post
        </button>
        {/if}
    </div>
</div>
<button class="flex-auto bg-violet-500 hover:bg-violet-400 active:bg-violet-600 flex items-start text-white"
  on:click={createButtonClicked}>
  Create Comment
</button>