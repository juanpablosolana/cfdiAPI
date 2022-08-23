import { Header } from "../components/Header";
import { mount } from "enzyme";

describe("Header", () => {
  test("should render correctly", () => {
    const header = mount(<Header />);
    expect(header.length).toEqual(1);
  });
});
