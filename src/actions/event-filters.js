// @flow
import type { DateRange, Time } from "../data/date-time";
import type {
  Area,
  Price,
  Audience,
  VenueDetail,
  AccessibilityOption
} from "../data/event-filters";
import type { StandardAction } from "./";

type EventFiltersActionType =
  | "STAGE_EVENT_FILTERS"
  | "COMMIT_EVENT_FILTERS"
  | "CLEAR_STAGED_EVENT_FILTERS";
type EventFiltersPayload = {
  date?: ?DateRange,
  timeOfDay?: Set<Time>,
  price?: Set<Price>,
  categories?: Set<string>,
  audience?: Set<Audience>,
  venueDetails?: Set<VenueDetail>,
  accessibilityOptions?: Set<AccessibilityOption>,
  area?: Set<Area>
};

export type EventFiltersAction = StandardAction<
  EventFiltersActionType,
  EventFiltersPayload
>;

export const stageEventFilters = (updates: EventFiltersPayload) => (
  dispatch: Dispatch<EventFiltersAction>
) => {
  dispatch({
    type: "STAGE_EVENT_FILTERS",
    payload: updates
  });
};

export const commitEventFilters = () => (
  dispatch: Dispatch<EventFiltersAction>
) => dispatch({ type: "COMMIT_EVENT_FILTERS" });

export const clearStagedEventFilters = () => (
  dispatch: Dispatch<EventFiltersAction>
) => dispatch({ type: "CLEAR_STAGED_EVENT_FILTERS" });
