import { environment } from './environments/environment';
import axios from "axios";

export const api =  axios.create({
  baseURL: environment.URL_DEV,
})

