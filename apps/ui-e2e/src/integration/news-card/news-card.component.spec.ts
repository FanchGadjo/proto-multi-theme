describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=newscardcomponent--primary&args=title;'));
  it('should render the component', () => {
    cy.get('xyz-news-card').should('exist');
  });
});