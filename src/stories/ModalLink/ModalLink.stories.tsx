import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ModalLink } from "./ModalLink";

export default {
  title: "Atoms/ModalLink",
  component: ModalLink,
} as ComponentMeta<typeof ModalLink>;

const Template: ComponentStory<typeof ModalLink> = (args) => (
  <ModalLink {...args} />
);

export const DefaultModalLink = Template.bind({});
DefaultModalLink.args = {
  img: "https://www.adobe.com/content/dam/cc/icons/Adobe_Corporate_Horizontal_Red_HEX.svg",
  text: "Testo",
  description: "descrizione",
};

export const NoImageModalLink = Template.bind({});
NoImageModalLink.args = {
  text: "Testo",
  description: "descrizione",
};

export const OnlyTextModalLink = Template.bind({});
OnlyTextModalLink.args = {
  text: "Testo",
};

export const PrimaryModalLink = Template.bind({});
PrimaryModalLink.args = {
  primary: true,
  text: "Testo",
};

export const TitleModalLink = Template.bind({});
TitleModalLink.args = {
  text: "Title",
  type: "title",
};
