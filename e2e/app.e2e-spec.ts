import { DrawingAppPage } from './app.po';

describe('drawing-app App', () => {
  let page: DrawingAppPage;

  beforeEach(() => {
    page = new DrawingAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
