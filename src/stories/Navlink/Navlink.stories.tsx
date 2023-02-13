import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Navlink } from "./Navlink";

export default {
  title: "Atoms/Navlink",
  component: Navlink,
  argTypes: {
    text: { control: "text" },
  },
} as ComponentMeta<typeof Navlink>;

const Template: ComponentStory<typeof Navlink> = (args) => {
  console.log(args);
  return <Navlink {...args} />;
};
export const Default = Template.bind({});
Default.args = {
  text: "Navlink",
};

export const NavlinkArrowLeft = Template.bind({});
NavlinkArrowLeft.args = {
  arrowLeft: true,
  text: "Navlink arrows",
};
