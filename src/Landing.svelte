<script>
  import { createEventDispatcher } from "svelte";
  const dispatchEvent = createEventDispatcher();

  function checkAuthenticated() {
    let authenticated = false;
    if(authenticated){
      dispatchEvent("authenticated");
    }else{
    dispatchEvent("sign-in");
    }
  }
  
</script>
<div class = "flex:auto">
  <div class="text-center flex flex-col p-4 md:text-left md:flex-row md:items-center md:justify-between md:p-12 bg-purple-100 rounded-md">
    <div class="text-2xl font-semibold">
      <div class="text-gray-900">Math Halp is here when you go like "halp. ;^;"</div>
      <div class="text-purple-500">Teachers always ready for you</div>
    </div>

    <div class="mt-3 md:mt-0 md:ml-2">
      <div class="flex:auto inline-block rounded-md text-lg font-semibold py-2 px-4 text-black bg-purple-500" on:click={checkAuthenticated}>
        Get Started
      </div>
    </div>
  </div>
</div>