import { StoryFn, Meta } from "@storybook/react"; 
import Footer, { FooterProps } from "./Footer";

export default {
  title: "Components/Footer",
  component: Footer,
} as Meta;

const Template: StoryFn<FooterProps> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
  links: [
    { text: "Home", url: "/" },
    { text: "About", url: "/about" },
    { text: "Contact", url: "/contact" },
  ],
};
