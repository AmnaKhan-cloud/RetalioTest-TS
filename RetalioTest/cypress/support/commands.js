// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/*
import DatePicker from '..cypress/support/Page/DatePicker'

import DateUtils from '..cypress/support/Utility/DateUtils'
Cypress.Commands.add('selectYear', (yearName) => {

    const currentYear = new Date().getFullYear()
    DatePicker.getYearName().then(($year) =>{

        if ($year.text() == yearName) {



            cy.log(yearName + ' Year Selected succsfully ')
            return
        }



        else {
            if (yearName < currentYear) {
                DatePicker.getNavigateBack().click()

            }
            else if (yearName > currentYear) {
                DatePicker.getFNavigateForward().click()
            }

            cy.selectYear(yearName)
        }
    

    })
})
Cypress.command.add('selectMonth',(monthName)=>{

    let currentMonth=new Date().getMonth()+1
    let givenMonth=DateUtils.getMonthIndexFromName(monthName)
    DatePicker.getMonthName().then((monthName)=>{

        if($month.text().inclues(monthName)){
            cy.log(monthName+'Month Name selected now')

        }
        else if(givenMonth>currentMonth){
            DatePicker.getNavigateForward().click()


        }
        else if(givenMonth<currentMonth)
        
        {

            DatePicker.getNavigateBack().click()

        }
    

cy.selectMonth(monthName)
    

    })

})
Cypress.command.add('selectDay',dayName=>{

    DatePicker.getCalendarDays().eq(dayName-1).click()
    cy.log(dayName,'Date selected succesfully')

})       
*/ 
