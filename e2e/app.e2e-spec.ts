import { NgRunPage } from './app.po';

describe('ng-run App', function() {
  let page: NgRunPage;

  beforeEach(() => {
    page = new NgRunPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
