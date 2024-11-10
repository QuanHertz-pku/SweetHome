import axios from 'axios';
const PostSender = (url,data) => {
  console.log(data)
  return axios.post(
    (process.env.API_URL +url ),data
  ).then(res=>res.data)
};

export default PostSender;
