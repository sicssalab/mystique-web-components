import Autocomplete from "./Autocomplete";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Autocomplete/Autocomplete',
  component: Autocomplete,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const items = [
  {
    id: 0,
    name: "Cobol",
  },
  {
    id: 1,
    name: "JavaScript",
  },
  {
    id: 2,
    name: "Basic",
  },
  {
    id: 3,
    name: "PHP",
  },
  {
    id: 4,
    name: "Java",
  },
];

const formatResult = (item) => {
  return (
    <>
      <span style={{ display: "block", textAlign: "left" }}>
        id: {item.id}
      </span>
      <span style={{ display: "block", textAlign: "left" }}>
        name: {item.name}
      </span>
    </>
  );
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
const funcionGlobals = {
  onSelectItem: (item) => {
    console.info(item)
  }
}
export const Primary = {
  args: {
    primary: true,
    label: 'Search',
    items,
    formatResult,
    ...funcionGlobals
  },
};

// export const Secondary = {
//   args: {
//     label: 'Button',
//   },
// };

// export const Large = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };
