import { StoryFn, Meta } from "@storybook/react";
import Footer from "./Footer";
import { RoutesConfigContext } from "../../context/routesConfigContext";
import { mockRoutesConfig } from "../../../.storybook/mockRoutesConfig";

export default {
  title: "Components/Footer",
  component: Footer,
  decorators: [
    (StoryFn) => (
      <RoutesConfigContext.Provider value={mockRoutesConfig}>
        <StoryFn />
      </RoutesConfigContext.Provider>
    ),
  ],
} as Meta;

export const Default: StoryFn = (args) => <Footer {...args} />;
