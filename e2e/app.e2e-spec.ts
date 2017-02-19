import { MinesweeperAngularPage } from './app.po';

describe('minesweeper-angular App', function() {
  let page: MinesweeperAngularPage;

  beforeEach(() => {
    page = new MinesweeperAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
