describe('My First Test', () => {
    it('Visits the student', () => {
      cy.visit('http://localhost:8080/sms/SMS.html')
      cy.contains("Student Registration Forms")
      cy.get('#studentForm > #sid').type('2020BCA001')
      cy.get('input[onclick="getstudent()"]').click()
    })
  })