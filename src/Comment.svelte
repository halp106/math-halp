<script>
    export let commentContent;
    export let username;
</script>

<div id="parent" style="display:flex; display:block; height:100%; border:solid 1px gold; background-color:GhostWhite">

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
        <button style="display:flex; margin-left:auto; margin-top:auto; color:white; background-color: DeepSkyBlue">
            Edit
        </button>
    {/if}
    </div>
</div>