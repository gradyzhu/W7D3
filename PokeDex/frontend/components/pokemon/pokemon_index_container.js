import {connect} from 'react-redux';
import {selectAllPokemon} from "../../reducers/selectors";
import PokemonIndex from './pokemon_index';

const mapStateToProps = (state, banana) => {
  id: banana.match.params.id // 3
  return {
    id: banana.match.params.id, // return id of pokemon
    pokemon: selectAllPokemon(state)}
};

const mapDispatchToProps = dispatch => ({
  requestAllPokemon: () => (dispatch(requestAllPokemon()))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonIndex);