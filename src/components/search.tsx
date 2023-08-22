import { component$ } from "@builder.io/qwik";
import { LuSearch } from "@qwikest/icons/lucide";

export default component$(() => {
  return (
    <div class="rounded-full max-w-md mx-auto bg-base-100/50 shadow-2xl shadow-black h-12 text-white flex items-center px-8">
      <input
        class="bg-transparent outline-none text-white text-xl block w-full max-w-md"
        placeholder="Search"
      />
      <LuSearch class="block" />
    </div>
  );
});
