import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};

const apiUrl = 'http://35.244.42.248:3005/mcu';

function getCharacter(id){
  let endPoint = `/character/id/${id}`;
  return _callApi(endPoint);
}

function getAllCharacters(){
  let endPoint = '/character/all';
  return _callApi(endPoint);
}

function characterSuggest(searchString){
  let endPoint = `/character/search?q=${searchString}`;
  return _callApi(endPoint);
}

function _callApi(endPoint){
  let params = {
    headers: headers,
    url: `${apiUrl}${endPoint}`
  };

  return axios(params).then(function(response){
    if(response.data.success){
      return response.data.result;
    }
  }).catch(function(err){
    return null;
  });
}

const mcuController = {
  getCharacter,
  getAllCharacters,
  characterSuggest
}

export default mcuController;
