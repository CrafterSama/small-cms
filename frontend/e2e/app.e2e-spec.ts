import { SaCmsPage } from './app.po';

describe('sa-cms App', function() {
  let page: SaCmsPage;

  beforeEach(() => {
    page = new SaCmsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
