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
  } = props;

  const [selectItemStart, setSelectItemStart] = useState(null);
  const [selectItemEnd, setSelectItemEnd] = useState(null);


  const onClickButton = () => {
    if(!selectItemStart || !selectItemEnd) {
      alert(textEmpySearchs)
    }
    else {
      onSubmit && onSubmit(selectItemStart, selectItemEnd);
    }
  }

  const onSelectStartItem = (item) => {
    setSelectItemStart(item)
  }
  
  const onSelectEndItem = (item) => {
    setSelectItemEnd(item)
  }
  
  const onClearStartItem = (item) => {
    setSelectItemStart(null)
  }
  
  const onClearEndItem = (item) => {
    setSelectItemEnd(null)
  }
  const onSearchStartItem = (text,item) => {
  }
  
  const onSearchEndItem = (text, item) => {
  }

  return (
    <div className="mystick-double-autocomplete">
      <Autocomplete
        items={startItems}
        onSelectItem={onSelectStartItem}
        formatResult={formatResultStartItem}
        placeholder={placeholderStart}
        onSearch={onSearchStartItem}
        style={{zIndex: 2}}
        onClear={onClearStartItem}
      />
      <Autocomplete
        items={endItems}
        onSelectItem={onSelectEndItem}
        formatResult={formatResultEndItem}
        showIcon={false}
        placeholder={placeholderEnd}
        onSearch={onSearchEndItem}
        onClear={onClearEndItem}
        style={{zIndex: 1}}
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
