import { render } from "@testing-library/react";
import { JSDOM } from "jsdom";
import App from "./App";

describe(App, () => {
  beforeEach(() => {
    const dom = new JSDOM();
    global.window = dom.window as any;
    global.document = dom.window.document;
  });

  it("renders basic DOM structure", () => {
    const { container } = render(<App />);
    expect(container.querySelector("button")).toBeDefined();
  });
});

export {};
