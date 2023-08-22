import { component$ } from "@builder.io/qwik";
import { LuCloud, LuMenu, LuUser } from "@qwikest/icons/lucide";
export default component$(() => {
  return (
    <>
      <nav class="flex flex-col h-32 items-center justify-center  px-4 bg-base-100 rounded-t-2xl rounded-br-[3rem] rounded-bl-[-3rem]">
        <div class="flex justify-between items-center text-white w-full">
          <LuCloud class="h-6 w-6" />
          <LuMenu class="h-6 w-6" />
        </div>
        <div class="flex justify-center items-center w-18 translate-y-6">
          <div class="bg-base-200 h-8 w-8 translate-y-[0.8em]">
            <div class="bg-base-100 h-8 w-8 rounded-br-[4em]"></div>
          </div>
          <div class="bg-base-200 rounded-t-[5em] p-4">
            <LuUser class="h-12 w-12 text-white bg-base-100 rounded-full shadow-md shadow-base-100 p-2" />
          </div>
          <div class="bg-base-200 h-8 w-8 translate-y-[0.8em]">
            <div class="bg-base-100 h-8 w-8 rounded-bl-[4em]"></div>
          </div>
        </div>
      </nav>
    </>
  );
});
