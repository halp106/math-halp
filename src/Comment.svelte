<script>
    export let commentContent;
</script>

<div id="parent" style="display:flex; display:block; height:100%; border:solid 1px gold">

    <div style="display:flex; justify-content:start">
        <p>
            {commentContent.username}
        </p>
        <div style="margin-left:auto"> Comment# {commentContent.unique_comment_id}  @{commentContent.timestamp}</div>
    </div>

    <div style="display:flex; justify-content:start">
        <p>
            {commentContent.content}
        </p>
    </div>
</div>