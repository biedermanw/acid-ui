import { StoryFn, Meta } from "@storybook/react";
import Navbar from "./Navbar";
import { RoutesConfigContext } from "../../context/routesConfigContext";
import { mockRoutesConfig } from "../../../.storybook/mockRoutesConfig";

export default {
  title: "Components/Navbar",
  component: Navbar,
  decorators: [
    (StoryFn) => (
      <RoutesConfigContext.Provider value={mockRoutesConfig}>
        <StoryFn />
      </RoutesConfigContext.Provider>
    ),
  ],
} as Meta;

export const Default: StoryFn = (args) => <Navbar {...args} />;
Default.parameters = { theme: "blue" };
