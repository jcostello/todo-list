context('Add Todo', () => {
  beforeEach(() => {
    cy.server();
    cy.route('GET', 'https://todo-list-2578a.firebaseio.com/todos.json', []);
    cy.visit('/');
  });

  it('renders', () => {
    const text = 'Test Todo';

    cy.route('POST', 'https://todo-list-2578a.firebaseio.com/todos.json',
        {text: text});

    cy.get('.add-todo')
        .type(`${text} {enter}`);

    cy.get('.todo-list li')
        .should('have.length', 1);

    cy.get('.todo-list li')
        .first()
        .should('contain', text);
  });
});
