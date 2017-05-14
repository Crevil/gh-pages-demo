import { GhPagesDemoPage } from './app.po';

describe('gh-pages-demo App', () => {
  let page: GhPagesDemoPage;

  beforeEach(() => {
    page = new GhPagesDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
