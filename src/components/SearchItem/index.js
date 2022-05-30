import React from 'react';

import {Container, Banner, Title, RateContainer, Rate} from './styles';

import {Ionicons} from '@expo/vector-icons';

function SearchItem({ data, navigatePage }){

  function detailMovie(){
    //aqui se não tiver nada para mostrar na pesquisa do filme
    //caso ele não tenha sido lançado ainda
    if(data.release_data === ''){
      alert('Filme ainda sem data');
      return;
    }
    navigatePage(data);
  }
  return(
      <Container activeOpacity={0.7} onPress={detailMovie}>
        { data?.poster_path ? (
          <Banner
            resizeMethod="resize"
            source={{ uri: `https://image.tmdb.org/t/p/w500/${data?.poster_path}` }}
          />
        ) : (
            <Banner
            resizeMethod="resize"
            source={require('../../assets/sem1.png') }
          /> 
        )}

        <Title>{data?.title}</Title>
        <RateContainer>
          <Ionicons name="md-star" size={12} color="#E7A74e" />
          <Rate>{data?.vote_average}/10</Rate>    
        </RateContainer>             
      </Container>
  )
}

export default SearchItem;