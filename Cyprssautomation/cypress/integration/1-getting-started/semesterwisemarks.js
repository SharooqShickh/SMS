describe('My First Test', () => {
    it('Visits the student', () => {
      cy.visit('http://localhost:8080/sms/SMS.html')
      cy.contains("Student Registration Forms")
      cy.get('#reportForm > #quantity').type('1')
      cy.get('[onclick="getSemesterWiselist()"]').click()
    })
  })