import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ModalSection } from "./ModalSection";

export default {
  title: "Sections/ModalSection",
  component: ModalSection,
  argTypes: {
    isMobile: {
      options: [false, true],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof ModalSection>;

const Template: ComponentStory<typeof ModalSection> = (args) => (
  <ModalSection {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: "Navlink",
};
