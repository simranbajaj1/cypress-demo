class Login {
  
  setusername(username)
  {
    cy.get('[name="emailField"]').type(username);
  }
  setpassword(password)
  {
    cy.get('[name="passField"]').type(password);
  }
clicksubmit()
  {
   cy.get('.button_button__KhkYp > .style_typography__iN6Ax > :nth-child(1)').click();
  }
  

  

  
}
export default Login;
