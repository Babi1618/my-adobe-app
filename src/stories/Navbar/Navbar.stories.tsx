import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Navbar } from "./Navbar";

export default {
  title: "Sections/Navbar",
  component: Navbar,
  argTypes: {
    isMobile: {
      options: [false, true],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  isMobile: false,
};

export const MobileNavbar = Template.bind({});
MobileNavbar.args = {
  isMobile: true,
};
