import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

const APIKey =  "?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

const query = "&q=" + "trump";

const startDate = "&begin_date=" + "2017" + "0101";

const endDate = "&end_date=" + "2018" + "0101";

export default {
    articleSearch: function(query, startDate, endDate) {
        return axios.get(BASEURL + APIKey + query + startDate + endDate);
    },
    // {
    // // save article    
    // }
};