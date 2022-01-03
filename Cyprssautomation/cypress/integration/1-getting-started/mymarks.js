describe('My First Test', () => {
    it('Visits the student', () => {
      cy.visit('http://localhost:8080/sms/SMS.html')
      cy.contains("Student Registration Forms")
      cy.get('#reportForm > #sid').type('2020BCA001')
      cy.get('[onclick="getStudentsMarkList()"]').click()
    })
  })