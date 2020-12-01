import { EfAngular2Page } from './app.po';

describe('ef-angular2 App', function() {
  let page: EfAngular2Page;

  beforeEach(() => {
    page = new EfAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
