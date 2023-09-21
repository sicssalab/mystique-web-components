import DoubleAutocomplete from "./DoubleAutocomplete";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Autocomplete/DoubleAutocomplete',
  component: DoubleAutocomplete,
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
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    label: 'Search',
    startItems: items,
    endItems: items,
    placeholderStart: "Destino",
    placeholderEnd: "Categoría",
    textEmpySearchs: "Selecciona un resultado de la lista de búsqueda",
    onSubmit: (item, itemEnd) => {
      console.info("start item", item)
    },
  },
};

export const Secondary = {
  args: {
    label: 'Search',
    startItems: [],
    endItems: [],
    placeholderStart: "Destino",
    placeholderEnd: "Categoría",
    textEmpySearchs: "Selecciona un resultado de la lista de búsqueda",
    onSubmit: (item, itemEnd) => {
      console.info("start item", item)
    },
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
