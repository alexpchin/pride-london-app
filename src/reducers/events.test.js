import reducer from "./events";

describe("Events reducer", () => {
  it("initialises with default state", () => {
    const state = reducer(undefined, {});

    expect(state).toMatchSnapshot();
  });

  it("sets loading flag for REQUEST_CMS_DATA action", () => {
    const initialState = {
      entries: [],
      assets: [],
      loading: false,
      refreshing: false
    };
    const state = reducer(initialState, { type: "REQUEST_CMS_DATA" });

    expect(state.loading).toBe(true);
    expect(state.refreshing).toBe(false);
  });

  it("sets refreshing flag for REQUEST_UPDATE_CMS_DATA action", () => {
    const initialState = {
      entries: [],
      assets: [],
      loading: false,
      refreshing: false
    };
    const state = reducer(initialState, { type: "REQUEST_UPDATE_CMS_DATA" });

    expect(state.loading).toBe(false);
    expect(state.refreshing).toBe(true);
  });

  it("saves events from RECEIVE_CMS_DATA action", () => {
    const initialState = {
      entries: [],
      assets: [],
      loading: true,
      refreshing: false
    };
    const newCmsData = { entries: [{ id: "1" }], assets: [{ id: "1" }] };
    const state = reducer(initialState, {
      type: "RECEIVE_CMS_DATA",
      payload: newCmsData
    });

    expect(state.loading).toBe(false);
    expect(state.refreshing).toBe(false);
    expect(state.entries).toBe(newCmsData.entries);
    expect(state.assets).toBe(newCmsData.assets);
  });
});
