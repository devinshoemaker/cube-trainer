describe('auth', () => {
  const email = 'test@email.com';

  beforeEach(() => {
    cy.visit('/');
  });

  afterEach(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
  });

  it('should allow users to sign up', () => {
    cy.findByText(/sign up/i).click();
    cy.findByPlaceholderText(/your email address/i).type(email);
    cy.findByPlaceholderText(/your password/i).type('password');
    cy.findByText(/sign up/i).click();
    cy.findByText(/welcome/i).should('exist');

    cy.deleteUserByEmail(
      email,
      Cypress.env('SUPABASE_URL'),
      Cypress.env('SUPABASE_SERVICE_ROLE_KEY')
    );
  });

  it('should not allow two users with the same email to be registered', () => {
    cy.findByText(/sign up/i).click();
    cy.findByPlaceholderText(/your email address/i).type(email);
    cy.findByPlaceholderText(/your password/i).type('password');
    cy.findByText(/sign up/i).click();
    cy.findByText(/welcome/i).should('exist');
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.visit('/');
    cy.findByText(/sign up/i).click();
    cy.findByPlaceholderText(/your email address/i).type(email);
    cy.findByPlaceholderText(/your password/i).type('password');
    cy.findByText(/sign up/i).click();
    cy.findByText(/User already registered/i);

    cy.deleteUserByEmail(
      email,
      Cypress.env('SUPABASE_URL'),
      Cypress.env('SUPABASE_SERVICE_ROLE_KEY')
    );
  });

  it('should show an error if a user attempts to log in with invalid credentials', () => {
    cy.findByPlaceholderText(/your email address/i).type(email);
    cy.findByPlaceholderText(/your password/i).type('password2');
    cy.findByText(/Sign in/i).click();
    cy.findByText(/Invalid login credentials/i);
  });
});
