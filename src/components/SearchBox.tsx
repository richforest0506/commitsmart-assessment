import { FC, useState, ChangeEvent, KeyboardEvent } from "react";

interface SearchBoxProps {
  placeholder: string;
  onSearch: (v: string) => void
}

export const SearchBox: FC<SearchBoxProps> = ({ onSearch, placeholder }: SearchBoxProps) => {
  const [keyword, setKeyword] = useState<string>('');

  const onChangeValue = (evt: ChangeEvent<HTMLInputElement>) => {
    setKeyword(evt.target.value);
  };

  const onKeyHandle = (evt: KeyboardEvent<HTMLInputElement>) => {
    if (evt.code === 'Enter') {
      onSearch(keyword);
      setKeyword('');
    }
  }

  return (
    <div className="search-bar">
      <div className=""></div>
      <input type="text"
        value={keyword}
        onChange={onChangeValue}
        onKeyUp={onKeyHandle}
        placeholder={placeholder}
      />
    </div>
  )
}
