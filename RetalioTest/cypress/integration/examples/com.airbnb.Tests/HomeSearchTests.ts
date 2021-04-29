///<reference types="cypress" />
import HomeSearchPage from '../com.airbnb.Pages/HomeSearchPage'



import { expect } from 'chai'
import { any } from 'cypress/types/bluebird'


declare var i: any
var cdata: any = []

before(function () {
  cy.fixture('data').then(function (data: any) {


    for (var k in data) {

      cdata.push(data[k].city);
      cdata.push(data[k].check_in);
      cdata.push(data[k].check_out);
      cdata.push(data[k].Adults);
      cdata.push(data[k].Children);
      cdata.push(data[k].Infants);


    }



  })
})

describe('Automation Initialization ', function () {
  it('Open an Application to Launch', function () {

    const Search = new HomeSearchPage()
    
    try {
      cy.viewport(1280, 720)
      cy.visit(Cypress.env('baseUrl'), { failOnStatusCode: false });
      cy.wait(5000)


      var i: any = 0

      for (i; i < cdata.length; i++) {

        Search.setWhereToGo(cdata[i])
        Search.selectDestination(cdata[i])
        Search.clickCheckinDate(cdata[i])
        i++
        Search.clickCheckoutDate(cdata[i])
        i++
        Search.clickGuests()
        Search.setAdults(cdata[i])
        i++
        Search.setChildren(cdata[i])
        i++
        Search.setInfants(cdata[i])
        i++
        Search.clickSearch()
      }
      
    }
    catch (error) {
      cy.log(error)
    }

  })
})





