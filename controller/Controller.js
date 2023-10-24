import DataService from "../model/DataService.js";
import AdatView from "../view/AdatView.js";
import HibaView from "../view/HibaView.js";
import TablaView from "../view/TablaView.js";
class Controller {
  constructor() {

    this.DATASERVICE = new DataService();
    //this.DATASERVICE.getData("../adatt.json", this.adatokMegj, this.hibaMegj);
    
    this.DATASERVICE.getData("../adat.json", this.adatokMegj, this.hibaMegj)

  }
  adatokMegj(lista){
   
    //new AdatView(lista, $(".lista"));
    new TablaView(lista, $(".elem"));
  }
  hibaMegj(error){
    console.log(error);
    new HibaView(error, $(".lista"))
  }
}
export default Controller;
