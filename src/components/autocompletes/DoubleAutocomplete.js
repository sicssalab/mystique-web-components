import { Button } from "react-bootstrap";
import Autocomplete from "./Autocomplete";

const DoubleAutocomplete = (props) => {
  const {
    label,
    classNameButton,
    styleButton,
    startItems,
    endItems,
    onSelectStartItem,
    onSelectEndItem,
    formatResultStartItem,
    formatResultEndItem,
    placeholderStart,
    placeholderEnd
  } = props;
  return (
    <div className="mystick-double-autocomplete">
      <Autocomplete
        items={startItems}
        onSelectItem={onSelectStartItem}
        formatResult={formatResultStartItem}
        placeholder={placeholderStart}
      />
      <Autocomplete
        items={endItems}
        onSelectItem={onSelectEndItem}
        formatResult={formatResultEndItem}
        showIcon={false}
        placeholder={placeholderEnd}
      />
      <Button
        className={`text-white ${classNameButton}`}
        style={styleButton}
        size="lg"
      >
        {label}
      </Button>
    </div>
  );
};

export default DoubleAutocomplete;
