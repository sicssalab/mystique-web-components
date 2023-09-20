import MystiqueTallCard from "./MystiqueTallCard";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Cards/MystiqueTallCard',
  component: MystiqueTallCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    //layout: 'centered', //TODO delete item center
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Primary = {
  args: {
    href:"#",
    srcImage: "https://media-api.xogrp.com/images/e913da1b-9675-4dd0-bbc8-bbc0bee1e907~sc_300.250",
    alt:"alt",
    name: "Reception Venues"
  },
};

export const Secondary = {
  args: {
    href:"#",
    srcImage: "https://media-api.xogrp.com/images/e913da1b-9675-4dd0-bbc8-bbc0bee1e907~sc_300.250",
    alt:"alt",
    name: "Reception Venues Reception Venues Reception Venues"
  },
};

