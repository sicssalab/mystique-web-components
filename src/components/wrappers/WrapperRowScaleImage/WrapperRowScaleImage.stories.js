import WrapperRowScaleImage from "./WrapperRowScaleImage";
import image from "../../../assets/image/default.jpg";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Wrapper/WrapperRowScaleImage',
  component: WrapperRowScaleImage,
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
    title: "Wedding planning starts here",
    description: "We help couples discover vendors and ideas and provide them with online tools to help them create their ideal wedding day."
  },
};

export const Secondary = {
  args: {
    imageOrder: 2,
    descriptionOrder: 1,
    srcImage: image,
    alt:"alt",
    title: "Wedding planning starts here",
    description: "We help couples discover vendors and ideas and provide them with online tools to help them create their ideal wedding day."
  },
};

export const EmptyImage = {
  args: {
    imageOrder: 2,
    descriptionOrder: 1,
    srcImage: "",
    alt:"alt",
    title: "Sin imagen",
    description: "We help couples discover vendors and ideas and provide them with online tools to help them create their ideal wedding day."
  },
};

