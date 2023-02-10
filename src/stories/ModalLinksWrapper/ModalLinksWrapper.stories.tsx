import { ComponentStory } from "@storybook/react";
import { ModalLink } from "../ModalLink/ModalLink";
import { ModalLinksWrapper } from "./ModalLinksWrapper";
import data from "../../utils/data.json";

export default {
  title: "Sections/ModalLinksWrapper",
  component: ModalLinksWrapper,
};

const wrapper = [
  { text: "Learning resources", type: "title" },
  { text: "text", description: "lorem ipsum" },
  { text: "text", description: "lorem ipsum" },
  { text: "text", description: "lorem ipsum" },
  { text: "text", description: "lorem ipsum" },
];

const Template: ComponentStory<typeof ModalLinksWrapper> = (args) => {
  const { links } = args;
  console.log(args);

  return (
    <ModalLinksWrapper links={links}/>
  );
};

export const Default = Template.bind({});
Default.args = {
  links: wrapper,
};
