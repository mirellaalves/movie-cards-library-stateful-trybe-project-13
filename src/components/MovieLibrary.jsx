import React, { Component } from 'react';

// import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
    this.insertSearch = this.insertSearch.bind(this);
    this.changeBookMark = this.changeBookMark.bind(this);
    this.selectGenre = this.selectGenre.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  insertSearch(event) {
    this.setState({ searchText: event.target.value });
  }

  changeBookMark(event) {
    this.setState({ bookmarkedOnly: event.target.checked });
  }

  selectGenre(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  addMovie(movie) {
    this.setState((state) => ({ movies: [state.movies, movie] }));
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.insertSearch}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.changeBookMark}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.selectGenre}
        />
        {/* <MovieList movies={this.props.movies} /> */}
        <AddMovie onClick={this.addMovie} />
      </div>
    );
  }
}

export default MovieLibrary;
