import { ReactSearchAutocomplete } from "react-search-autocomplete";

const Autocomplete = (props) => {
    const {formatResult, items, onSelectItem, onClear, style, ...rest} = props;

  // eslint-disable-next-line no-unused-vars
  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    //TODO agregandole parametros al autocomplete y los resultados que encontro
    console.log(string, results);
  };

  // eslint-disable-next-line no-unused-vars
  const handleOnHover = (result) => {
    // the item hovered
    console.log(result);
  };

  const handleOnSelect = (item) => {
    //TODO the item selected
    //TODO return item
    onSelectItem && onSelectItem(item);
  };

  // eslint-disable-next-line no-unused-vars
  const handleOnFocus = () => {
    console.log("Focused");
  };

  return (
        <div className="container-autocomplete-single" style={{ minWidth: 200, ...style }}>
          <ReactSearchAutocomplete
            items={items}
            onClear={onClear}
            //onSearch={handleOnSearch}
            //onHover={handleOnHover}
            onSelect={handleOnSelect}
            //onFocus={handleOnFocus}
            autoFocus
            //inputSearchString={"JavaScript"}//TODO sirve para inicializar un texto pero sin informacion seleccionada
            formatResult={formatResult}
            {...rest}
          />
        </div>
  );
};

export default Autocomplete;
