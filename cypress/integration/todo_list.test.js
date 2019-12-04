context('Add Todo', () => {
  const responseTodos = {
    1: {text: 'Test 1', completed: false},
    2: {text: 'Test 2', completed: true},
  };

  const responseKeys = Object.keys(responseTodos);

  beforeEach(() => {
    cy.server();
    cy.route('GET', 'https://todo-list-2578a.firebaseio.com/todos.json', responseTodos);
    cy.visit('/');
  });

  describe('When loading the page', () => {
    it('fetchs all the todos', () => {
      cy.get('.todo-list li')
          .should('have.length', responseKeys.length);

      cy.get('.todo-list li')
          .should('contain', responseTodos[responseKeys[0]].text)
          .and('contain', responseTodos[responseKeys[1]].text);

      cy.get('.todo-list li.completed')
          .should('have.length', 1);
    });
  });

  describe('When clicking on a todo\'s checkbox', () => {
    it('toggles the todo completed status', () => {
      const id = responseKeys[0];
      let todo = responseTodos[id];

      cy.route('PUT',
          `https://todo-list-2578a.firebaseio.com/todos/${id}.json`,
          {...todo, completed: !todo.completed, id: id});

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

      cy.route('PUT',
          `https://todo-list-2578a.firebaseio.com/todos/${id}.json`,
          {...todo, completed: todo.completed, id: id});

      cy.get('@first-todo-toggle')
          .click()
          .should('not.be.checked');

      cy.get('@first-todo')
          .should('not.have.class', 'completed');

      // cy.get('.todo-count')
      //     .should('contain', 0);
    });
  });

  describe('When clicking on a todo\'s trash can', () => {
    it('removes the todo from the list', () => {
      const id = responseKeys[0];
      const todo = responseTodos[id];

      cy.route('DELETE', `https://todo-list-2578a.firebaseio.com/todos/${idj}.json`, id);

      cy.get('.todo-list li')
          .as('list');

      cy.get('@list')
          .findByText(todo.text)
          .closest('li')
          .find('.destroy')
          .invoke('show')
          .click();

      cy.get('@list')
          .should('not.have.text', todo.text);
    });
  });
});
