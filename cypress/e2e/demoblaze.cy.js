describe('Demoblaze User Flow', () => {
  const user = {
    username: 'testuser',
    password: 'Test@123'
  };

  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/');
  });

  it('Registers a new user', () => {
    cy.contains('Sign up').click();
    cy.get('#sign-username').type(user.username);
    cy.get('#sign-password').type(user.password);
    cy.contains('Sign up').click();
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Sign up successful');
    });
  });

  it('Logs in with existing user', () => {
    cy.contains('Log in').click();
    cy.get('#loginusername').type(user.username);
    cy.get('#loginpassword').type(user.password);
    cy.contains('Log in').click();
    cy.contains(`Welcome ${user.username}`).should('be.visible');
  });

  it('Adds Samsung Galaxy S6 to the cart', () => {
    cy.contains('Samsung galaxy s6').click();
    cy.contains('Add to cart').click();
    cy.get('#cartur').click();
    cy.contains('Samsung galaxy s6').should('be.visible');
  });
});
