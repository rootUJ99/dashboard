import get from "lodash/get";

import { importState } from "common/ducks/state";
import { stateProps } from "common/utils/mock";

import {
  reducerWithInitialState,
  actionCreators,
  createWidget,
  removeWidget,
  Widget,
} from "../duck";

const initialState = {
  "date-time-01": {
    type: "date-time",
    options: {},
    data: {},
    meta: {},
  },
} as Record<string, Widget>;

describe("Widget duck", () => {
  test("updates the widget's option value", () => {
    const updatedState = reducerWithInitialState()(
      initialState,
      actionCreators.setOptions({
        id: "date-time-01",
        values: { content: "mock" },
      })
    );

    expect(get(updatedState, "date-time-01.options.content")).toEqual("mock");
  });

  test("updates the widget's data value", () => {
    const updatedState = reducerWithInitialState()(
      initialState,
      actionCreators.setData({
        id: "date-time-01",
        values: { content: "mock" },
      })
    );

    expect(get(updatedState, "date-time-01.data.content")).toEqual("mock");
  });

  test("creates and removes a widget", () => {
    let updatedState = reducerWithInitialState()(
      initialState,
      createWidget({
        id: "date-time-01",
        type: "date-time",
      })
    );

    expect(get(updatedState, "date-time-01.data")).toBeDefined();

    updatedState = reducerWithInitialState()(
      initialState,
      removeWidget("date-time-01")
    );
    expect(get(updatedState, "date-time-01.data")).toBeUndefined();
  });

  test("imports the state", () => {
    const widgets = {
      "search-01": {
        type: "search",
        options: {},
        data: {},
        meta: {},
      },
    } as Record<string, Widget>;

    const updatedState = reducerWithInitialState()(
      initialState,
      importState({
        ...stateProps,
        widgets,
      })
    );

    expect(updatedState).toBe(widgets);
  });
});
