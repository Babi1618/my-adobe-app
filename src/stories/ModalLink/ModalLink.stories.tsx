import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ModalLink } from "./ModalLink";

export default {
  title: "Atoms/ModalLink",
  component: ModalLink,
} as ComponentMeta<typeof ModalLink>;

const Template: ComponentStory<typeof ModalLink> = (args) => (
  <ModalLink {...args} />
);

export const Default = Template.bind({});
Default.args = {
  img: "https://www.adobe.com/content/dam/cc/icons/Adobe_Corporate_Horizontal_Red_HEX.svg",
  text: "prova",
  description: "descrizione",
};

export const NoImage = Template.bind({});
NoImage.args = {
  text: "prova",
  description: "descrizione",
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: "prova",
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  text: "prova",
};
