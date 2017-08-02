import { StructurePage } from './app.po';

describe('structure App', function() {
  let page: StructurePage;

  beforeEach(() => {
    page = new StructurePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
