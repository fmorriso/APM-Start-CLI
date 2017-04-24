import { APMRoutedPage } from './app.po';

describe('apm-start-cli App', () => {
  let page: APMRoutedPage;

  beforeEach(() => {
    page = new APMRoutedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
