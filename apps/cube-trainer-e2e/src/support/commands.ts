// ***********************************************

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Chainable<Subject> {
    login(email: string, password: string): void;
    deleteUserByEmail(
      email: string,
      supabaseUrl: string,
      supabaseServiceRoleKey: string
    ): void;
  }
}
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => {
  console.log('Custom command example: Login', email, password);
});
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add(
  'deleteUserByEmail',
  (email, supabaseUrl, supabaseServiceRoleKey) => {
    cy.exec(
      `npx ts-node --require tsconfig-paths/register ./src/support/delete-user.ts "${email}" "${supabaseUrl}" "${supabaseServiceRoleKey}"`,
      { failOnNonZeroExit: false }
    );
  }
);
