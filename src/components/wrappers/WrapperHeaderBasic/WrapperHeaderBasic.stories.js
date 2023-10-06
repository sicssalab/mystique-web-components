import WrapperHeaderBasic from "./WrapperHeaderBasic";
import image from "../../../assets/image/profile-cover.jpg";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Wrapper/WrapperHeaderBasic',
  component: WrapperHeaderBasic,
  parameters: {
  },
  tags: ['autodocs'],
  argTypes: {
  },
};

export const Primary = {
  args: {
    srcImage: image,
    alt:"alt",
    title: "Reception Venues",
  },
};

