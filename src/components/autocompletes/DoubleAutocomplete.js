import { Button } from "react-bootstrap";
import Autocomplete from "./Autocomplete";
import { useState } from "react";

const DoubleAutocomplete = (props) => {
  const {
    label,
    classNameButton,
    styleButton,
    startItems,
    endItems,
    formatResultStartItem,
    formatResultEndItem,
    placeholderStart,
    placeholderEnd,
    onSubmit,
    textEmpySearchs,
    startInputSearchString,
    endInputSearchString,
    itemStartInitial,
    itemEndInitial,
  } = props;

  const [selectItemStart, setSelectItemStart] = useState(null);
  const [selectItemEnd, setSelectItemEnd] = useState(null);

  const onClickButton = () => {
    if (!selectItemStart || !selectItemEnd) {
      let auxStart = null;
      let auxEnd = null;
      if (!selectItemStart && itemStartInitial) auxStart = itemStartInitial; else auxStart = selectItemStart;
      if (!selectItemEnd && itemEndInitial) auxEnd = itemEndInitial; else auxEnd = selectItemEnd;

      if (!auxStart || !auxEnd) alert(textEmpySearchs);
      else onSubmit && onSubmit(auxStart, auxEnd);
    } else {
      onSubmit && onSubmit(selectItemStart, selectItemEnd);
    }
  };

  const onSelectStartItem = (item) => {
    setSelectItemStart(item);
  };

  const onSelectEndItem = (item) => {
    setSelectItemEnd(item);
  };

  const onClearStartItem = (item) => {
    setSelectItemStart(null);
  };

  const onClearEndItem = (item) => {
    setSelectItemEnd(null);
  };
  const onSearchStartItem = (text, item) => {};

  const onSearchEndItem = (text, item) => {};

  return (
    <div className="mystick-double-autocomplete">
      <Autocomplete
        items={startItems}
        onSelectItem={onSelectStartItem}
        formatResult={formatResultStartItem}
        placeholder={placeholderStart}
        onSearch={onSearchStartItem}
        style={{ zIndex: 2 }}
        onClear={onClearStartItem}
        inputSearchString={startInputSearchString}
      />
      <Autocomplete
        items={endItems}
        onSelectItem={onSelectEndItem}
        formatResult={formatResultEndItem}
        showIcon={false}
        placeholder={placeholderEnd}
        onSearch={onSearchEndItem}
        onClear={onClearEndItem}
        style={{ zIndex: 1 }}
        inputSearchString={endInputSearchString}
      />
      <Button
        className={`text-white ${classNameButton}`}
        style={styleButton}
        size="lg"
        onClick={onClickButton}
      >
        {label}
      </Button>
    </div>
  );
};

export default DoubleAutocomplete;
