import { fireEvent, render, screen } from "@testing-library/react";
import type { AccordionItemProps } from "../Accordion";
import Accordion from "../Accordion";

const ACCORDION_CONTENTS: AccordionItemProps[] = [
  {
    title: "Title 1",
    content: <p>{"Content 1"}</p>,
  },
  {
    title: "Title 2",
    content: <p>{"Content 2"}</p>,
  },
  {
    title: "Title 3",
    content: <p>{"Content 3"}</p>,
  },
];

describe("Accordion", () => {
  test("should render correctly", () => {
    render(<Accordion items={ACCORDION_CONTENTS} />);

    for (let i = 1; i <= 3; i++) {
      expect(screen.getByText(`Title ${i}`)).toBeInTheDocument();
      expect(screen.queryByText(`Content ${i}`)).not.toBeInTheDocument();
    }
  });

  test("should handle collapsing well", () => {
    render(<Accordion items={ACCORDION_CONTENTS} />);
    for (let i = 1; i <= 3; i++) {
      expect(screen.getByText(`Title ${i}`)).toBeInTheDocument();
      expect(screen.queryByText(`Content ${i}`)).not.toBeInTheDocument();
      fireEvent.click(screen.getByTestId(`accordion-item-${i - 1}-title`));
      expect(screen.getByText(`Content ${i}`)).toBeInTheDocument();
    }
  });
});
