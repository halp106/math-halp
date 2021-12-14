<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    export let commentContent;
    export let username;

    function editComment(){
        dispatch("editComment", {content: commentContent.content})
    }
</script>

<div id="parent" style="display:flex; display:block; height:100%; border:solid 1px gold; background-color:GhostWhite; border-radius: 5px; overflow:hidden;">

    <div style="display:flex; justify-content:start">
        <p>
            {commentContent.username}:
        </p>
        <div style="margin-left:auto"> Comment# {commentContent.unique_comment_id}  @{commentContent.timestamp}</div>
    </div>

    <div style="display:flex; justify-content:start">
        <p>
            {commentContent.content}
        </p>

        {#if username == commentContent.username}
        <button style="display:flex; margin-left:auto; margin-top:auto; color:white; background-color: DeepSkyBlue; border-radius: 5px; overflow:hidden;"
        on:click={editComment}>
            Edit
        </button>
    {/if}
    </div>
</div>