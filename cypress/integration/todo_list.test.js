context('Add Todo', () => {
  const todos = [
    {id: 1, text: 'Test 1', completed: false},
    {id: 2, text: 'Test 2', completed: true},
  ];

  beforeEach(() => {
    cy.server();
    cy.route('GET', 'https://todo-list-2578a.firebaseio.com/todos.json', todos);
    cy.visit('/');
  });

  describe('When loading the page', () => {
    it('fetchs all the todos', () => {
      cy.get('.todo-list li')
          .should('have.length', todos.length);

      cy.get('.todo-list li')
          .should('contain', todos[0].text)
          .and('contain', todos[1].text);

      cy.get('.todo-list li.completed')
          .should('have.length', 1);
    });
  });

  describe('When clicking on a todo\'s checkbox', () => {
    it('toggles the todo completed status', () => {
      cy.route('PUT',
          `https://todo-list-2578a.firebaseio.com/todos/${todos[0].id}.json`,
          {...todos[0], completed: !todos[0].completed});

      cy.get('.todo-list li')
          .first()
          .as('first-todo');

      cy.get('@first-todo')
          .first()
          .find('.toggle')
          .as('first-todo-toggle');

      cy.get('@first-todo-toggle')
          .click()
          .should('be.checked');

      cy.get('@first-todo')
          .should('have.class', 'completed');

      cy.get('@first-todo-toggle')
          .click()
          .should('not.be.checked');

      cy.get('@first-todo')
          .should('not.have.class', 'completed');

      // cy.get('.todo-count')
      //     .should('contain', 0);
    });
  });

  describe.only('When clicking on a todo\'s trash can', () => {
    it('removes the todo from the list', () => {
      cy.route('DELETE', `https://todo-list-2578a.firebaseio.com/todos/${todos[0].id}.json`,
          {...todos[0]});

      cy.get('.todo-list li')
          .as('list');

      cy.get('@list')
          .findByText(todos[0].text)
          .closest('li')
          .find('.destroy')
          .invoke('show')
          .click();

      cy.get('@list')
          .should('not.have.text', todos[0].text);
    });
  });
});
