import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { Layout } from "react-grid-layout";

import Widget from "components/widget/Widget";
import Dashboard from "../Dashboard";

describe("<Dashboard />", () => {
  let wrapper: ShallowWrapper;

  const layout = [] as Layout[];

  beforeEach(() => {
    wrapper = shallow(
      <Dashboard
        layout={layout}
        isLayoutEditable={false}
        saveLayout={() => null}
        columns={3}
        rows={2}
        widgetIDs={["id-01", "id-02"]}
      />
    );
  });

  const shouldUpdate = ({
    columns,
    widgetIDs
  }: {
    columns?: number;
    widgetIDs?: string[];
  }) =>
    // @ts-ignore
    wrapper.instance().shouldComponentUpdate({
      columns: columns || 3,
      widgetIDs: widgetIDs || ["id-02", "id-01"],
      isLayoutEditable: false,
      layout
    });

  xit("renders widgets", () => {
    test.todo("Write tests for connected component"); // TODO
    expect(wrapper.find(Widget)).toHaveLength(2);
  });

  it("does not perform unnecessary re-renders", () => {
    expect(shouldUpdate({})).toBe(false);
    expect(shouldUpdate({ columns: 3, widgetIDs: ["id-02", "id-01"] })).toBe(
      false
    );
    expect(shouldUpdate({ columns: 99 })).toBe(true);
    expect(shouldUpdate({ widgetIDs: ["id-01"] })).toBe(true);
  });
});
