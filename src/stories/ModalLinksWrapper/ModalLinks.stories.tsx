import { ComponentStory } from "@storybook/react";
import { ModalLink } from "../ModalLink/ModalLink";
import {
  DefaultModalLink,
  NoImageModalLink,
  OnlyTextModalLink,
  PrimaryModalLink,
  TitleModalLink,
} from "../ModalLink/ModalLink.stories";
import { ModalLinksWrapper } from "./ModalLinksWrapper";

export default {
  title: "Sections/ModalLinksWrapper",
  component: ModalLinksWrapper,
};

const wrapper = {
  links: [
    TitleModalLink.args,
    DefaultModalLink.args,
    NoImageModalLink.args,
    PrimaryModalLink.args,
    OnlyTextModalLink.args,
  ],
};

const Template: ComponentStory<typeof ModalLink> = (args) => (
  <ModalLinksWrapper {...args} />
);

export const Default = Template.bind({});
Default.args = { wrapper };
