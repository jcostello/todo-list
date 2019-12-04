context('Auth', () => {
  beforeEach(() => {
    cy.server();
    cy.route('POST', 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=**',
        {
          idToken: 'token',
          refreshToken: 'refresh_token',
          expiresIn: '3600',
        });
    cy.visit('/auth');
  });

  describe('Sign Up', () => {
    it('creates a user', () => {
      cy.get('#email')
          .type('fake@email.com');

      cy.get('#password')
          .type('password');

      cy.findByText('Sign Up')
          .click();

      cy.location('pathname')
          .should('be.equal', '/');
    });
  });
});
