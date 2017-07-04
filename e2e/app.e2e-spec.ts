import { AngularConciliacionPage } from './app.po';

describe('angular-conciliacion App', () => {
  let page: AngularConciliacionPage;

  beforeEach(() => {
    page = new AngularConciliacionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
