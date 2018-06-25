// @flow
import React from "react";
import { shallow } from "enzyme";
import type { NavigationScreenProp, NavigationState } from "react-navigation";
import { generateEvent, sampleOne } from "../../data/__test-data";
import ParadeMapScreen from "./component";

const navigation: NavigationScreenProp<NavigationState> = ({
  navigate: () => {}
}: any);

const stages = sampleOne(generateEvent, { seed: 5728 });

it("renders correctly", () => {
  const output = shallow(
    <ParadeMapScreen
      isFocused
      navigation={navigation}
      stages={[stages]}
      addSavedEvent={() => {}}
      removeSavedEvent={() => {}}
      onPress={() => {}}
      savedEvents={new Set()}
    />
  );
  expect(output).toMatchSnapshot();
});

it("does not render map when not focused", () => {
  const output = shallow(
    <ParadeMapScreen
      isFocused={false}
      navigation={navigation}
      stages={[stages]}
      addSavedEvent={() => {}}
      removeSavedEvent={() => {}}
      onPress={() => {}}
      savedEvents={new Set()}
    />
  );
  expect(output).toMatchSnapshot();
});
