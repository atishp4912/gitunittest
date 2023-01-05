
describe('verify the test', () => {

    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        });
    })

    it('verify the invalid login testcase', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        });
        cy.visit('https://demo.guru99.com/insurance/v1/index.php')
        cy.get('#email').type('pawar.atish@outlo.in')
        cy.get('#password').type('Munna@1223')
        cy.get('#login-form > div:nth-child(3) > input').click()
    })

    it('verify the valid login testcase', () => {

        cy.visit('https://demo.guru99.com/insurance/v1/index.php')
        cy.get('#email').type('pawar.atish@outlook.com')
        cy.get('#password').type('Munna#11').then(() => {
            cy.get('input[name="submit"]').click()

            cy.wait(6000)
            cy.get('div[class="header"]').should('be.visible')

            //click on reqest qotation
            cy.get('ul li[id="newquote"]').should('be.visible').click()

            //Windscreenrepair(No)
            cy.get('input[id="quotation_windscreenrepair_f"]').click()
            // type incident 
            cy.get('input[id="quotation_incidents"]').type('injures himself')

            cy.get('input[id="quotation_vehicle_attributes_registration"]').type('14/12/2022')
            cy.get('input[id="quotation_vehicle_attributes_mileage"]').type('20000')
            cy.get('input[id="quotation_vehicle_attributes_value"]').type('200000')
            cy.wait(5000)
            // select parking location
            cy.get('#quotation_vehicle_attributes_parkinglocation').select('Public place').should('have.value', 'Public place')

            // start of policy
            cy.get('#quotation_vehicle_attributes_policystart_1i').select('2020').should('have.value', '2020')
            cy.get('#quotation_vehicle_attributes_policystart_2i').select('January').should('have.value', '1')
            cy.get('#quotation_vehicle_attributes_policystart_3i').select('1').should('have.value', '1')

            // save qotation
            cy.get('input[value="Save Quotation"]').click()
            cy.wait(5000)
            cy.get('body>b').first().should('have.text', 'You have saved this quotation!')

        })

    })

    it('verify the identification number', () => {
        cy.visit('https://demo.guru99.com/insurance/v1/index.php')
        cy.get('#email').type('pawar.atish@outlook.com')
        cy.get('#password').type('Munna#11')
        cy.get('input[name="submit"]').click()
        cy.get('#retrieve').click()
        cy.get('input[placeholder="identification number"]').type('20025')
        cy.get('#getquote').click()
        cy.get('body>b>font').should('have.text', 'Retrieve Quotation')
        cy.get('[border="1"]>tbody>tr').should('have.length', '10')


    })

    it('verify the identification number', () => {
        cy.visit('https://demo.guru99.com/insurance/v1/index.php')
        cy.get('#email').type('pawar.atish@outlook.com')
        cy.get('#password').type('Munna#11')
        cy.get('input[name="submit"]').click()
        // click on profile
        cy.get('li[id="profile"]').click()
        //edit profile
        cy.get('#ui-id-5').click()
        cy.get('#user_title').select('Mr').should('have.value', 'Mr')
        cy.get('#user_surname').type('pawar')
        cy.get('#user_firstname').type('atish')
        cy.get('#user_phone').type('9823443989')
        cy.get('#user_dateofbirth_1i').select('1995').should('have.value', '1995')
        cy.get('#user_dateofbirth_2i').select('December').should('have.value', '12')
        cy.get('#user_dateofbirth_3i').select('19').should('have.value', '19')
        cy.get('#user_licencetype_t').click()
        cy.get('#user_licenceperiod').select('5').should('have.value', '5')
        cy.get('#user_occupation_id').select('Student').should('have.value','6')
        cy.get('#user_address_attributes_street').type('katraj')
        cy.get('#user_address_attributes_city').type('pune')
        cy.get('#user_address_attributes_county').type('maharastra')
        cy.get('#user_address_attributes_postcode').type('411037')
        cy.get('input[value="Update User"]').click()

        // click on logout
        cy.get('body > div.content > form > input').click()
    })
})

