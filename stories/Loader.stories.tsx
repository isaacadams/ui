import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ILoaderProps, Loader } from "../components/Loader";

export default {
  title: "Example/Loader",
  component: Loader,
  argTypes: {},
  args: {
    size: 2,
  },
} as Meta;

const Template: Story<ILoaderProps> = (args) => <Loader size={args.size} />;

export const Primary = Template.bind({});
Primary.args = {};
