///<reference types="cypress" />

import { any } from "cypress/types/bluebird"
import { getScript } from "cypress/types/jquery"
import { getTypeParameterOwner } from "typescript"



class HomeSearchPage {
  
 

  getwhereToGo() {
    return cy.get('[id=bigsearch-query-detached-query-input]')

  }
  getSelectdestination() {


    return cy.get('#bigsearch-query-detached-query-listbox li')
  }
  
getAdults(){
  return cy.get('[data-testid=stepper-adults-increase-button] > ._8ovatg')
}

getChildren() {
  return cy.get('[data-testid=stepper-children-increase-button] > ._8ovat')

}

getInfants() {
  return cy.get('[data-testid=stepper-infants-increase-button] > ._8ovat')
}

getclickGuest() {

  return cy.get('[data-testid=structured-search-input-field-guests-button] > ._seuyf > ._uh2dzp')

}
getYear(){
    return cy.get('_umpo2eg')
  }
  
  getNavigateBack(){
    return cy.get('body.with-new-header:nth-child(2) div._16grqhk div._siy8gh:nth-child(1) div._1gw6tte header._v4y20qh div._b1kaj00 div._2ox3s8 div._1isvo38d div._1lveqk8 form._1keztfl div._1jxweeom div._1c7nvmy div._1l6jpwo:nth-child(3) div._her4moe div._3hmsj div._1qswu1v div._1siedz7 div._si4jfmp div._14676s3 div._17w2za div._owpl6c4:nth-child(1) div._nztsc8l button._187sg6v span._e296pg > svg:nth-child(1)')
  }
  
  getNavigateForward(){
 
      return cy.get('body.with-new-header:nth-child(2) div._16grqhk div._siy8gh:nth-child(1) div._1gw6tte header._pjnd8ef div._b1kaj00 div._2ox3s8 div._1isvo38d div._1lveqk8 form._1keztfl div._1jxweeom div._1c7nvmy div._1l6jpwo:nth-child(3) div._her4moe div._3hmsj div._1qswu1v div._1siedz7 div._si4jfmp div._14676s3 div._17w2za div._owpl6c4:nth-child(2) div._13tn83am > button._187sg6v')

  }
 getCalendarDays(){

 return cy.get('_umpo2eg')
 }

 getMonth(){
   return cy.get('_umpo2eg')
 }
 getCheckinDate(){
  return cy.get('[data-testid=structured-search-input-field-split-dates-0] > ._seuyf > ._uh2dzp')
}
getCheckOutDate(){
  return cy.get('[data-testid=structured-search-input-field-split-dates-1] > ._seuyf > ._uh2dzp')
}

  getListingPage(){
    return cy.get('._14lk9e14 > svg > g > path')

  }


  setWhereToGo(value: any) {

   if(this.getwhereToGo().should('be.visible')){
    this.getwhereToGo().type(value)

    cy.wait(5000)

   }
   else throw Error('Destination input field is not avialable.')
    

  }

  selectDestination(input: any) {


    this.getSelectdestination().should('have.length', 5)
    this.getSelectdestination().each(($el, index, $list) => {
      cy.log($el.text());

      if ($el.text() == (input)) {

        cy.log('Destination Found in Autosuggestion succesfully')
        $el.click()
        cy.wait(5000)







      }
    })
  }


  clickGuests() {

    cy.scrollTo('top')
    cy.wait(5000)
   if( this.getclickGuest().should('exist')){
    this.getclickGuest().click({ force: true })

    cy.wait(3000)

  }
  else throw Error('Guests popup is not appearing on screen after click')
}


  setAdults(Adults: number) {
    for (var i = 0; i < Adults; i++) {


      this.getAdults().click()


    }
  }


  setChildren(Children: number) {
    cy.scrollTo('top')
    this.clickGuests()
    cy.wait(6000)
    for (var i = 0; i < Children; i++) {


      this.getChildren().click()
    }
  }

  setInfants(Infants: number) {
    cy.scrollTo('top')
    this.clickGuests()
    for (var i = 0; i < Infants; i++) {
      this.getInfants().click()
    }

  }
  clickCheckinDate(check_in:any)
  {

    this.getCheckinDate().click()
check_in.split(check_in,'/')

  }

  clickCheckoutDate(check_out:any)
  {

    this.getCheckOutDate().click()
check_out.split(check_out,'/')

  }

  selectYear(selectYear:any){
   const currentYear = new Date().getFullYear()
    

        if (this.getYear().text() ==selectYear) {


              this.getYear().click()
            cy.log(selectYear + ' Year Selected succsfully ')
            return
        }



        else {
            if (selectYear < currentYear) {
                this.getNavigateBack().click()
            }
            else if (selectYear> currentYear) {
              this.getNavigateForward().click()
                        }
                      }

  }
  selectMonth(monthName:any){

  
  let currentMonth=new Date().getMonth()+1
 


      if(this.getMonth().text().inclues(monthName)){
          cy.log(monthName+'Month Name selected now')

      }
      else if(this.getMonth()>monthName){
          this.getNavigateForward().click()


      }
      else if(this.getMonth()<monthName)
      
      {

        this.getNavigateBack().click()

      }
    }


  
selectday(selectDay:any){
  getCalendarDays().eq(selectDay-1).click()
  

}


    clickSearch() {
if(this.getListingPage().should('be.visible')){

    this.getListingPage().click()
}
else
      throw new Error('Search button not aviavable.')
    

  }
}







export default HomeSearchPage






