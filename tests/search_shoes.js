import HomePageModel from "../page_models/home_page_model"
import ResultPageModel from "../page_models/result_page_model"


const home_page_model = new HomePageModel()
const result_page_model = new ResultPageModel()

fixture("Search shoes")
.page('https://www.ebay.com/')
    .beforeEach(async t => {
        await t.maximizeWindow()
    })


    test("Search shoes by brand and price ascendant", async t => {
        const resultsCounter = result_page_model.resultCounter
        
        await t
        .typeText(home_page_model.searchInput, "shoes")
        .click(home_page_model.searchButton)
        .click(result_page_model.checkboxSelection.withExactText("PUMA"))
        .expect(result_page_model.filterPicker.nth(0).textContent).eql("PUMARemove filter")
        .click(result_page_model.filterPicker.withText("10"))
        .wait(3000)

        console.log(`\n Number of results: ${await resultsCounter.innerText}`)

        await t
        .hover(result_page_model.orderByDropdown)
        .expect(result_page_model.orderByLowPrice).ok()
        .click(result_page_model.orderByLowPrice)
        .expect(result_page_model.resultName.nth(0).textContent).ok()
        .expect(result_page_model.resultName.nth(1).textContent).ok()
        .expect(result_page_model.resultName.nth(2).textContent).ok()
        .expect(result_page_model.resultName.nth(3).textContent).ok()
        .expect(result_page_model.resultName.nth(4).textContent).ok()
        
        console.log(`\n List of shoes - brand PUMA`)
        await result_page_model.printResult(0)
        await result_page_model.printResult(1)
        await result_page_model.printResult(2)
        await result_page_model.printResult(3)
        await result_page_model.printResult(4)
        
        console.log(`\n List of shoes - ordered by name ascendant`)
        await result_page_model.printAscendantName(5)

        console.log(`\n List of shoes - ordered by price descendant`)
        await result_page_model.printDescendantPrice(5)

    })