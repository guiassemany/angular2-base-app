import { RedditClone2Page } from './app.po';

describe('reddit-clone2 App', function() {
  let page: RedditClone2Page;

  beforeEach(() => {
    page = new RedditClone2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
