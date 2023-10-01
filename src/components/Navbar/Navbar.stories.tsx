import { StoryFn, Meta } from "@storybook/react";
import Navbar from "./Navbar";

export default {
  title: "Components/Navbar",
  component: Navbar,
} as Meta;

const Template: StoryFn = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.parameters = { theme: "blue" };
