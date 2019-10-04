import {Selector} from "testcafe"

export default class ResultPageModel{
    constructor(){
        this.checkboxSelection = Selector(".x-refine__multi-select-cbx")
        this.filterPicker = Selector(".srp-carousel-list__item-link")
        this.resultCounter = Selector(".srp-controls__count-heading")
        this.orderByDropdown = Selector(".srp-controls__sort-label").nextSibling(0)
        this.orderByLowPrice = Selector(".srp-controls__sort-label").nextSibling(1).child(0).child(0).child(3)
        this.resultName = Selector(".s-item__title")
        this.resultPrice = Selector(".s-item__price")
    }

   async printResult(resultNumber){
        const name = this.resultName.nth(resultNumber)
        const price = this.resultPrice.nth(resultNumber)
        console.log(`${resultNumber+1} - Name: ${await name.textContent} and Price: ${await price.textContent}`)
   }
   
   async printAscendantName(numberResults){
       let results = []
       for(let i=0; i<numberResults; i++){
        results[i] = await this.resultName.nth(i).textContent
       }
       console.log(results.sort())
   }

   async printDescendantPrice(numberResults){
       let results = []
       for (let i=0; i<numberResults; i++){
           results.push({'name': await this.resultName.nth(i).textContent,
                        'price': await this.resultPrice.nth(i).textContent
       })
    }
       console.log(results.sort((a, b) => parseFloat(b.price.substring(1)) - parseFloat(a.price.substring(1))))
   }
}

