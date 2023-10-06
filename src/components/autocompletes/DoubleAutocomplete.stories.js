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
const funcionGlobals = {
  onSubmit: (item, itemEnd) => {
    console.info("start item", item)
    console.info("end item", itemEnd)
  },
}
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    label: 'Search',
    startItems: items,
    endItems: items,
    startInputSearchString: "JavaScript",
    endInputSearchString: "Basic",
    placeholderStart: "Destino",
    placeholderEnd: "Categoría",
    textEmpySearchs: "Selecciona un resultado de la lista de búsqueda",
    ...funcionGlobals
  },
};

export const Secondary = {
  args: {
    label: 'Search',
    startItems: items,
    endItems: items,
    placeholderStart: "Destino",
    placeholderEnd: "Categoría",
    textEmpySearchs: "Selecciona un resultado de la lista de búsqueda",
    ...funcionGlobals
  },
};

export const EmptyElement = {
  args: {
    label: 'Search',
    startItems: [],
    endItems: [],
    placeholderStart: "Destino",
    placeholderEnd: "Categoría",
    textEmpySearchs: "Selecciona un resultado de la lista de búsqueda",
    ...funcionGlobals
  },
};

export const ElementSelectDefault = {
  args: {
    label: 'Search',
    startItems: items,
    endItems: items,
    startInputSearchString: "JavaScript",
    endInputSearchString: "Basic",
    itemStartInitial: {
      id: 1,
      name: "JavaScript",
    },
    itemEndInitial: {
      id: 2,
      name: "Basic",
    },
    placeholderStart: "Destino",
    placeholderEnd: "Categoría",
    textEmpySearchs: "Selecciona un resultado de la lista de búsqueda",
    ...funcionGlobals
  },
};
