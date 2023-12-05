describe('React Social App', () => {
  describe('Login Page', () => {
    it('Visits the sign-in page check if URL includes "sign-in" as main path and if includes "WELCOME" header', () => {
      cy.visit('/');
      const path = 'sign-in';

      cy.url().then(($url) => {
        $url.includes(path);
      });

      cy.contains('Welcome!');
    });

    describe('Submit Login form without filling', () => {
      it('Submit button needs to be disabled without filling any input fields and if the form is not valid', () => {
        cy.get('button[type="submit"]').should('be.disabled');
      });
    });

    describe('Email Input', () => {
      it('Focus and blur on email input then enter not valid email and get a validation error', () => {
        cy.get('input[id="email"]').focus().type('asd');
        cy.contains('Please enter a valid email format.');
      });

      it('After non valid email is cleared, the required validation should return error', () => {
        cy.get('input[id="email"]').focus().clear();
        cy.contains('This field is required.');
      });

      it('After valid email is filled, it should not have email validation error', () => {
        cy.get('input[id="email"]').focus().type('valid@email.com');
        cy.contains('Please enter a valid email format.').should('not.exist');
      });
    });

    describe('Password Input', () => {
      it('Should have required error after email input is filled', () => {
        cy.contains('This field is required.');
      });

      it('Focus password input and type one character, it should return small & capital letter validation error ', () => {
        cy.get('input[id="password"]').focus().type('a');
        cy.contains('Password should contain at least one small and one capital letter.');
      });

      it('Type same character and it should return repeating character validation error', () => {
        cy.get('input[id="password"]').focus().type('a');
        cy.contains('Password should not contain repeating numbers, letters, or special characters.');
      });

      it('Clear the input, type one capital and one small character, it should return at least one number validation error', () => {
        cy.get('input[id="password"]').focus().clear().type('aA');
        cy.contains('Password should contain at least one number.');
      });

      it('Add number to the input, it should return special character validation error', () => {
        cy.get('input[id="password"]').focus().type('1');
        cy.contains('Password should contain at special character.');
      });

      it('Add special character to the input, it should return minimum character validation error', () => {
        cy.get('input[id="password"]').focus().type('.');
        cy.contains('Password should contain minimum of 8 characters.');
      });

      it('Add characters without breaking any validation rules and exceed maximum character limit, it should return maximum character validation error', () => {
        cy.get('input[id="password"]').focus().type('1234567890!@#$%^&*()_+');
        cy.contains('Password should contain maximum of 16 characters.');
      });

      it('Clear input, add characters without breaking any validation rule and there should be no validation error', () => {
        cy.get('input[id="password"]').focus().clear().type('aA1234567890.');
        cy.contains('This field is required.').should('not.exist');
        cy.contains('Password should contain at least one small and one capital letter.').should('not.exist');
        cy.contains('Password should not contain repeating numbers, letters, or special characters.').should('not.exist');
        cy.contains('Password should contain at least one number.').should('not.exist');
        cy.contains('Password should contain at special character.').should('not.exist');
        cy.contains('Password should contain minimum of 8 characters.').should('not.exist');
        cy.contains('Password should contain maximum of 16 characters.').should('not.exist');
      });

      it('Submit button needs to be enabled without any validation error', () => {
        cy.get('button[type="submit"]').should('not.be.disabled');
      });
    });
  });

  describe('After login information is filled & sign in button clicked', () => {
    it('Check if "isLoggedIn" state is updated to "true"', () => {
      cy.get('button[type="submit"]').click();

      const path = cy.window().its('store').invoke('getState').its('app.lastVisitedURL') as any;

      cy.url().then(($url) => {
        $url.includes(path);
        cy.window().its('store').invoke('getState').its('app.isLoggedIn').should('eq', true);
      });
    });

    it('Redirection url should be the "lastVisitedUrl" from state', () => {
      const path = cy.window().its('store').invoke('getState').its('app.lastVisitedURL') as any;

      cy.url().then(($url) => {
        $url.includes(path);
      });
    });
  });

  describe('Home Page', () => {
    it('Visits the home page check if URL includes "/" as main path and if includes "React Social" as Header', () => {
      cy.visit('/');
      cy.contains('React Social');
    });

    it('When user profile picture is clicked, "User Settings" popover should be visible', () => {
      cy.get('div[title="User Settings"]').click();
      cy.contains('User Settings');
    });

    it('When "Log Out" is clicked, user should be redirected to sign-in page', () => {
      cy.get('div').contains('Log Out').click();

      const path = 'sign-in';

      cy.url().then(($url) => {
        $url.includes(path);
      });

      cy.contains('Welcome!');
    });

    it('Check if "isLoggedIn" state is updated to "false"', () => {
      cy.window().its('store').invoke('getState').its('app.isLoggedIn').should('eq', false);
    });
  });
});
