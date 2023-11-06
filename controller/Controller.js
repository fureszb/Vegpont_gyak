import DataService from "../model/DataService.js";
import AdatView from "../view/AdatView.js";
import HibaView from "../view/HibaView.js";
import TablaView from "../view/TablaView.js";
import Adatleiro from "../model/adatLeiro.js";
import UrlapView from "../view/UrlapView.js";

class Controller {
  constructor() {

    this.Adatleiro = new Adatleiro();
    this.urlapView = new UrlapView($(".urlap"), this.Adatleiro.getLeiro());

    $(window).on("AdatKiir", (event) => {
        console.log(event.detail);
    });


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
