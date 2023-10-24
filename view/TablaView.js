import TablaSor from "./TablaSor.js";
class TablaView {
  #lista = [];
  constructor(lista, szuloELem) {
    this.szuloELem = szuloELem;
    this.#lista = lista;
    
    this.szuloELem.html(`<table class="table table-bordered"></table>`)
    this.tabla = this.szuloELem.children("table");
    this.tablaBody();
    console.log(this.tabla)
  }
  tablaHead(){
    let txt = `<thead><tr>`;

    txt+="</thead></tr>"
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
