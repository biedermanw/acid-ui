import { StoryFn, Meta } from "@storybook/react";
import Layout, { LayoutProps } from "./Layout";

export default {
  title: "Components/Layout",
  component: Layout,
} as Meta;

const Template: StoryFn<LayoutProps> = (args) => <Layout {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <div>Sample Content</div>,
};
Default.parameters = { theme: "blue" };
