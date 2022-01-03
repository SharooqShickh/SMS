describe('My First Test', () => {
    it('Visits the student', () => {
      cy.visit('http://localhost:8080/sms/SMS.html')
      cy.contains("Student Registration Forms")
      cy.get('#marksForm > #sid').type('2020BSC003')
      cy.get('#marksForm > #dept').select('BSC2021')
      cy.get('#marksForm > #quantity').type('3')
      cy.get('select[name="course1_ID"]').select('BSC303')
      cy.get('[name="marks1"]').type('58')
      cy.get('select[name="course2_ID"]').select('BSC306')
      cy.get('[name="marks2"]').type('66')
      cy.get('select[name="course3_ID"]').select('BSC309')
      cy.get('[name="marks3"]').type('71')
      cy.get('#examStatus').select('Present')
      cy.get('#month').type('2022-06')
      cy.get('#marksForm > [type="button"]').click()

    })
})