import { NgTimestableGamePage } from './app.po';

describe('ng-timestable-game App', () => {
  let page: NgTimestableGamePage;

  beforeEach(() => {
    page = new NgTimestableGamePage();
  });

  it('should display message saying app works', () => {
    NgTimestableGamePage.navigateTo();
    expect(NgTimestableGamePage.getParagraphText()).toMatch('app works!');
  });
});
