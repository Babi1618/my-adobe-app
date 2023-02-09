import { ComponentStory } from "@storybook/react";
import { ModalLink } from "../ModalLink/ModalLink";
// import { OnlyText } from "../ModalLink/ModalLink.stories";
import { OnlyTextModalLink } from "../ModalLink/ModalLink.stories";
import { ModalLinksWrapper } from "./ModalLinksWrapper";

export default {
  title: "Sections/ModalLinksWrapper",
  component: ModalLinksWrapper,
};

const wrapper = [{ text: "ciao" }];

const Template: ComponentStory<typeof ModalLink> = (args) => (
  <ModalLinksWrapper {...args} />
);

export const Default = Template.bind({});
Default.args = { wrapper};