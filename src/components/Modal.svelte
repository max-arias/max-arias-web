<script>
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";
  import { clickOutside } from "../utils/clickOutside";

  const dispatch = createEventDispatcher();

  const closeModal = () => {
    dispatch("close-modal");
  };
</script>

<div
  class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
  transition:fade={{ duration: 500 }}
>
  <div class="relative w-auto my-6 mx-auto max-w-3xl">
    <!--content-->
    <div
      class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
      use:clickOutside
      on:click-outside={closeModal}
    >
      <!--header-->
      <div
        class="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t"
      >
        <h3 class="text-3xl font-semibold">Time spent breakdown</h3>
        <button
          class="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
          on:click={closeModal}
        >
          <span
            class="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none"
          >
            ×
          </span>
        </button>
      </div>
      <!--body-->
      <div class="relative p-6 flex-auto">
        <img
          alt="Time breakdown"
          src="https://wakatime.com/share/@64b889a6-18f2-44e2-8192-24c1d569918b/01f617a9-f99e-4658-971a-903f22aae09e.png"
        />
      </div>
    </div>
  </div>
</div>
