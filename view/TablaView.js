import TablaSor from "./TablaSor.js";
class TablaView {
  #lista = [];
  constructor(lista, szuloELem) {
    this.szuloELem = szuloELem;
    this.#lista = lista;
    this.kesz = false;
    this.szuloELem.html(`<table class="table table-bordered"></table>`)
    this.tabla = this.szuloELem.children("table");
    this.tablaHead();
    this.tablaBody();
    console.log(this.tabla);
    this.SzuloTR=$("tr:last-child").children(".kesz");
    //$(".kesz:last-child")
    this.SzuloTR.on("click", () => {
    console.log("asdf")
      if (this.kesz === false) {
        $(this).closest("tr").css("background-color", "red");
        this.kesz = true;
      } else {
        $(this).closest("tr").css("background-color", "green");
        this.kesz = false;
      }
    });
    
    $(".torol").on("click", function() {
      $(this).closest("tr").remove();
    });
    
    
  }
  tablaHead(){
    let txt = `<thead><tr>`;
    txt+=`<th>Név</th><th>Születési idő</th>`
    txt+="</thead></tr>"
    this.tabla.append(txt);
  }
  tablaBody() {
    let txt = `<tbody>`;
    console.log(this.#lista)
    for (let index = 0; index < this.#lista.length; index++) {
       txt+= new TablaSor().SorLetrehozas(this.#lista, index);
    }
    txt += `</tbody>`;
    this.tabla.append(txt);
  }
}
export default TablaView;
