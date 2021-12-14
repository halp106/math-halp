<script>
    export let commentContent;
    export let isEditable;
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
    </div>
    <button style="display:flex; justify-content:end; color:white; background-color: DeepSkyBlue">
        Edit
    </button>
</div>