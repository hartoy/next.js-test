import { HttpBaseAPI } from "./htpp.service";

const API_URL = "http://localhost:3000/api";
const API_PUBLIC_ENDPOINT = `/public`;

class HttpexternalAPI extends HttpBaseAPI{

constructor(){
    super(API_URL,API_PUBLIC_ENDPOINT )
 }
}

const httpexternalApi = new HttpexternalAPI();
export default httpexternalApi;