import React from 'react';
import {BackButton, Name} from './styles';
import { Feather } from '@expo/vector-icons';

import { WebView } from 'react-native-webview';


function ModalLink({link, title, closeModal}){
    return(
//Quando for preciso utilizar uma view, mas não preciso usar uma view eu uso o fragmente, uma tag fazia
     <>
        <BackButton onPress={closeModal}>
            <Feather name="x" size={35} color="#FFF" />
            <Name numberOfLines={1}>{title}</Name>
        </BackButton>
        
        <WebView
         source={{ uri: link}}
        />  
      </>
    )
}

export default ModalLink;