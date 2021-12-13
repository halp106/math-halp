<script>
    import {createEventDispatcher} from "svelte";
    const dispatch = createEventDispatcher();
    export let props;
    export let body;

	function handleClick(row) {
		dispatch('item-clicked', {
            title: row[1],
            username: row[0],
            category: row[2]
        });
	}
</script>

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
                        {#each body.bodys as bodyContent}
                        <tr class="hover:bg-zinc-400" on:click={() => handleClick(bodyContent)}>
                                <td>{bodyContent.username}</td>
                                <td>{bodyContent.title}</td>
                                <td>{bodyContent.tag}</td>
                                <td>{bodyContent.timestamp}</td>
                                <td>edit</td>
                        </tr>
                        {/each}

                    <!-- More people... -->
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>