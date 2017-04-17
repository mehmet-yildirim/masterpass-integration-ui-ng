import { MasterpassIntegrationUiNgPage } from './app.po';

describe('masterpass-integration-ui-ng App', () => {
  let page: MasterpassIntegrationUiNgPage;

  beforeEach(() => {
    page = new MasterpassIntegrationUiNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
