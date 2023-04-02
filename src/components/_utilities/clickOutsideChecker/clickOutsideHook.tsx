import { useEffect } from "react";

export const useOutsideToggler = (
    ref: HTMLDivElement | null,
    setThisToFalse: Function,
    isOpen: boolean
) => {
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      const bla: Event = event as Event;

      if (ref && !ref.contains(bla.target as Node)) {
        console.log("clicked outside");
        setThisToFalse();
      }
    };

    if (isOpen) {
      // Set up event listener only when the menu is open
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [ref, setThisToFalse, isOpen]);
};
