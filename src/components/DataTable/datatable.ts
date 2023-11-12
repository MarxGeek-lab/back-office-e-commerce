export const selectLine = () => {
    const allLines: NodeListOf<Element> = document.querySelectorAll(".DataTable-bodyLine");

    for (const line of allLines) {
      const input = line.querySelector(".CheckBox input") as HTMLInputElement | null;
      input?.addEventListener("click", () => {
        input.checked = true;

        for (const otherLines of allLines) {
          const otherInput = otherLines.querySelector(".CheckBox input") as HTMLInputElement | null;
          if (otherInput && input !== otherInput) {
            otherInput.checked = false;
            otherLines.classList.remove("selected");
          }
        }

        const clickedLine = input.closest(".DataTable-bodyLine");
        if (clickedLine) {
          clickedLine.classList.toggle("selected", input.checked);
        }
      });
    }
  };