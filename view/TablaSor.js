class TablaSor{
    constructor(){

    }
    SorLetrehozas(lista, index){
        let txt = `<tr>`;
        for (const key in lista[index]) {
            txt+= `<td>${lista[index][key]}</td>`;
        }
        txt+= `<td><button type="button" class="btn btn-primary kesz">✅</button></td><td><button  type="button" class="btn btn-default torol" >❌</button></td>`;
         txt += "</tr>";
        return txt;
    }
}
export default TablaSor;