import axios from "axios";

const url_api = "http://localhost:3030";

export const login = async(props) => {
  console.log('ini props login', props);
  const data = axios.get(`${url_api}/users?email=${props}`);
  const response = await data;
  console.log(response.data, 'ini data login');
  return response;
}

export const getDataAllUser = async() => {
  const data = axios.get(`${url_api}/users`);
  const response = await data;
  return response;
}




