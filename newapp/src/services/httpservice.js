import logger from '../services/loggerservice'
import axios from 'axios';
import { toast} from 'react-toastify';
axios.interceptors.response.use(null,error => {
    const expectederrors = error.response && error.response.status >= 400 && error.response.status < 500
if(!expectederrors){
 logger.capture(error);
 toast('An unexpected error occured in the application')
 
}
return Promise.reject(error);

})

export default {
get:axios.get,
put:axios.put,
patch:axios.patch,
post:axios.post,
delete:axios.delete
}