const URI = 'http://127.0.0.1:8000';

export default {
    async fetchCollege() {
        try {
                let response = await fetch(URI + '/api/cldis');
                let responseJsonData = await response.json();
                return responseJsonData;
            }
        catch(e) {
            console.log(e)
        }
    }
}