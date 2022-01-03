describe('My First Test', () => {
    it('Visits the student', () => {
      cy.visit('http://localhost:8080/sms/SMS.html')
      cy.contains("Student Registration Forms")
      cy.get('#studentForm > #sid').type('2020BCOM01')
      cy.get('#fname').type('Vanu')
      cy.get('#lname').type('Gopal')
      cy.get('#address').type('#301 Sai garden jp nagar Bangalore')
      cy.get('#studentForm > #date').type('1996-04-20')
      cy.get('#yoj').type('2019')
      cy.get('[value="M"]').click()
      cy.get('#studentForm > #dept').select('B.COM2021')
      cy.get('#studentForm > #quantity').type('1')
      cy.get('#status').select('Active')
      cy.get('input[onclick="studentAdd()"]').click()

    })
  })