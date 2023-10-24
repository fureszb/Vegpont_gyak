class DataService {
  constructor() {}
  getData(apiVegpont, callback, hibaCallback) {
    axios
      .get(apiVegpont)
      .then(function (response) {
        // handle success
        /*console.log("Válasz objektum",response);
        console.log("Adatok",response.data.nevek);
        console.log("Státusz",response.status);
        console.log("Státusz szöveg",response.statusText);
        console.log("Válasz fejléc",response.headers);
        console.log("Válasz config",response.config);*/
        callback(response.data.nevek);
      })
      .catch(function (error) {
        // handle error
        hibaCallback(error);
      })
      .finally(function () {
        // always executed
      });
  }
}
export default DataService;
