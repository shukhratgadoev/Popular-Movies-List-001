import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchMovieList } from "../../lib/action/moviesList";
import styled from "styled-components";
import { searchMovies } from "../../lib/action/searchMovies";
import MovieCards from "../../components/MovieCard/MovieCard";
import { MovieState } from "../../lib/reducers";
import { ChangeEvent } from "react";

const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
`;

const SearchSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 50px auto;
`;

const SearchText = styled.div`
  font-size: 30px;
  color: #00abff;
  font-weight: 700;
`;

const Input = styled.input`
  height: 40px;
  width: 50%;
  outline: none;
  display: block;
  font-size: 20px;
  text-indent: 10px;
  margin-left: 25px;
`;

type StateProps = {
  fetchMovieList: () => void;
  searchMovies: (movieTitle: string) => void;
  results: [];
};

const mapStateToProps = (state: MovieState) => {
  return {
    results: state.fetchMoviesList.moviesList
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      fetchMovieList: fetchMovieList,
      searchMovies: searchMovies
    },
    dispatch
  );
};

type State = {
  searchValue: string;
};

class MoviesList extends React.Component<StateProps, State> {
  constructor(props: StateProps) {
    super(props);
    this.state = {
      searchValue: ""
    };
  }

  componentDidMount(): void {
    this.props.fetchMovieList();
  }

  updateInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      searchValue: e.target.value
    });
    this.props.searchMovies(e.target.value);
  };

  render() {
    return (
      <>
        <SearchSection>
          <SearchText>Search Movie</SearchText>
          <Input
            type="text"
            value={this.state.searchValue}
            onChange={this.updateInputValue}
          />
        </SearchSection>
        <Content>
          <MovieCards results={this.props.results} />
        </Content>
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesList);
