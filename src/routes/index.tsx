import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Search from "~/components/search";
export default component$(() => {
  return (
    <div class="bg-base-100">
      <div class="rounded-tl-[3em] h-32 bg-base-200 p-8">
        <Search />
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "cool_cloud_storage_app_ui",
  meta: [
    {
      name: "description",
      content: "a cool ui for a cloud storage app i found on insta idk",
    },
  ],
};
