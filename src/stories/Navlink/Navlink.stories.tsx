import React, { Dispatch, SetStateAction, useCallback, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Navlink } from "./Navlink";

export default {
  title: "Atoms/Navlink",
  component: Navlink,
  argTypes: {
    text: { control: "text" },
    linkSelected: { control: "number" },
    setLinkSelected: {},
  },
} as ComponentMeta<typeof Navlink>;

const Template: ComponentStory<typeof Navlink> = (args) => {
  const [linkSelected, setLinkSelected] = useState(1);
  return (
    <Navlink
      {...args}
      linkSelected={linkSelected}
      setLinkSelected={setLinkSelected}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  text: "Navlink",
  onClick: () => console.log("prova"),
};

export const NavlinkArrowLeft = Template.bind({});
NavlinkArrowLeft.args = {
  arrowLeft: true,
  text: "Navlink arrows",
  id: 1,
  linkSelected: 0,
};
