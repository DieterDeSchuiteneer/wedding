import { cn } from "@sglara/cn";

export default function RsvpFrom() {
  return (
    <form className={cn("w-full flex gap-0 flex-row p-4 font-retro text-xl")}>
      <label className="w-full cursor-pointer">
        <input
          type="radio"
          name="attendance"
          value="coming"
          className="peer sr-only"
        />
        <span className="block w-full rounded-l-full border border-mauve-800 border-r-0 text-center transition-all peer-checked:bg-mauve-500">
          Ik kom
        </span>
      </label>
      <label className="w-full cursor-pointer">
        <input
          type="radio"
          name="attendance"
          value="not-coming"
          className="peer sr-only"
        />
        <span className="block w-full rounded-r-full border border-mauve-800 border-l-0 text-center transition-all peer-checked:bg-mauve-500">
          Ik kom niet
        </span>
      </label>
    </form>
  );
}
