import React, { Dispatch, SetStateAction, useState } from "react";
import "./App.css";

type CounterState = {
  count: number;
};

type GenreSelectProps = {
  genres: string[];
  onSelect: Dispatch<SetStateAction<string>>;
  selectedGenre: string;
};

type SearchFormProps = {
  initialValue: string;
  onSearch: (value: string) => void;
}

class Counter extends React.Component<object, CounterState> {
  constructor(props: { initialValue?: number; }) {
    super(props);
    this.state = {
      count: props.initialValue || 0,
    };

    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  increase(_e: unknown) {
    this.setState({ count: this.state.count + 1 });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  decrease(_e: unknown) {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement("h2", null, `Counter: ${this.state.count}`),
      React.createElement("button", { onClick: this.increase }, "Increase"),
      React.createElement(
        "button",
        { onClick: this.decrease, style: { marginLeft: "10px" } },
        "Decrease"
      )
    );
  }
}

const GenreSelect = ({ genres, onSelect, selectedGenre }: GenreSelectProps) => {
  return genres.map((genre) => (
    <button
      key={genre}
      onClick={() => onSelect(genre)}
      style={{
        marginRight: "10px",
        backgroundColor: genre.toLowerCase() === selectedGenre.toLowerCase() ? "red" : "inherit",
      }}
    >
      {genre}
    </button>
  ));
};

const SearchForm = ({ initialValue, onSearch }: SearchFormProps) => {
  const [searchValue, setSearchValue] = useState(initialValue);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    onSearch(searchValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

function App() {
  const genresArray = ['all', 'comedy', 'documentary', 'crime', 'horror'];
  const [selectedGenre, setSelectedGenre] = useState(genresArray[2]);

  const handleSearch = (value: string) => {
    console.log("Search value:", value);
    setSelectedGenre(value);
  };

  return (
    <>
      <h1>React Mentoring App</h1>
      <Counter />
      <SearchForm initialValue={genresArray[2]} onSearch={handleSearch} />
      <GenreSelect
        genres={genresArray}
        onSelect={setSelectedGenre}
        selectedGenre={selectedGenre}
      />
    </>
  );
}

export default App;
