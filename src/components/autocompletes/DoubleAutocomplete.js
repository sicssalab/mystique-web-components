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
    //onSelectStartItem,
    //onSelectEndItem,
    formatResultStartItem,
    formatResultEndItem,
    placeholderStart,
    placeholderEnd
  } = props;

  const [selectItemStart, setSelectItemStart] = useState(null);
  const [selectItemEnd, setSelectItemEnd] = useState(null);


  const onClickButton = () => {
    //TODO si tengo item1 e item2
    //TODO tengo que identificar cuando no selecciono el input item o cuando solo esta vacio
    if(!selectItemStart) {
      alert("Selecciona tu destino")
    }
    else if(!selectItemEnd) {
      alert("Selecciona tu categoria")
    }
    else if(selectItemStart && selectItemEnd) {
      alert("sdasdas")
    }
    else {
      alert("Selecciona un resultado de la lista")
    }
  }

  const onSelectStartItem = (item) => {
    console.log(item)
    setSelectItemStart(item)
  }
  
  const onSelectEndItem = (item) => {
    console.log(item)
    setSelectItemEnd(item)
  }
  
  const onClearStartItem = (item) => {
    setSelectItemStart(null)
  }
  
  const onClearEndItem = (item) => {
    setSelectItemEnd(null)
  }
  const onSearchStartItem = (text,item) => {
    //console.log(text,item)
    //setSelectItemStart(null)
  }
  
  const onSearchEndItem = (text, item) => {
    //console.log(text,item)
    //setSelectItemEnd(null)
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
