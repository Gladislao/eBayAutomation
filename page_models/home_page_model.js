import {Selector} from "testcafe"

export default class HomePageModel {
    constructor(){
        this.searchInput = Selector(".ui-autocomplete-input")   
        this.searchButton = Selector(".btn-prim")     
    }

}