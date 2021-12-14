<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let props;
  export let body;

  function handleClick(row) {
    dispatch("item-clicked", {
      unique_id: row.unique_id,
      title: row.title,
      username: row.creator_uid,
      timestamp: row.creation_timestamp,
      tag: row.tag,
      content: row.content,
    });
  }
  function createButtonClicked() {
    dispatch("createNewThread");
  }
</script>

<button
  class="flex-auto bg-violet-500 hover:bg-violet-400 active:bg-violet-600 flex items-start text-white"
  on:click={createButtonClicked}
>
  create thread
</button>

<div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                    <tr>
                        {#each props.headings as headingContent}
                            <th scope="col"
                                class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                {headingContent}
                            </th>
                        {/each}
                    </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        {#each body.threads as bodyContent}
                        <tr class="hover:bg-zinc-400" on:click={() => handleClick(bodyContent)}>
                                <td>{bodyContent.creator_uid}</td>
                                <td>{bodyContent.title}</td>
                                <td>{bodyContent.tag}</td>
                                <td>{bodyContent.creation_timestamp}</td>
                                <td></td>
                        </tr>
                        {/each}

            <!-- More people... -->
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
