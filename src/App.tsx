import React, { useState } from "react";
import "./App.css";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialValue || 0,
    };

    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase(e) {
    this.setState({ count: this.state.count + 1 });
  }

  decrease(e) {
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

const GenreSelect = ({ genres, onSelect, selectedGenre }) => {
  return genres.map((genre) => (
    <button
      key={genre}
      onClick={() => onSelect(genre)}
      style={{
        marginRight: "10px",
        backgroundColor: genre === selectedGenre ? "red" : "inherit",
      }}
    >
      {genre}
    </button>
  ));
};

const SearchForm = ({ initialValue, onSearch }) => {
  const [searchValue, setSearchValue] = useState(initialValue);

  const handleSubmit = (e) => {
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
  const genresArray = ["Action", "Drama", "Comedy", "Horror", "Sci-Fi"];
  const [selectedGenre, setSelectedGenre] = useState(genresArray[2]);

  const handleSearch = (value) => {
    console.log("Search value:", value);
  };

  return (
    <>
      <h1>React Mentoring App</h1>
      <Counter />
      <SearchForm initialValue="Pulp Fiction" onSearch={handleSearch} />
      <GenreSelect
        genres={genresArray}
        onSelect={setSelectedGenre}
        selectedGenre={selectedGenre}
      />
    </>
  );
}

export default App;
