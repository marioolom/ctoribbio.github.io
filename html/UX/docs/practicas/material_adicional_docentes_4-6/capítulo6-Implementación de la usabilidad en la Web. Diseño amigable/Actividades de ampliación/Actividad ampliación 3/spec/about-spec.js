
var siteRoot =  'http://127.0.0.1:8080/';

describe('Angular v1 CRUD App tests', function() {
   
    beforeEach(function(){
        browser.get(siteRoot + '#/about');
    });

  it('should load about page', function() {
    expect(browser.getTitle()).toEqual('Angular v1 CRUD sample');
    expect(browser.getCurrentUrl()).toEqual(siteRoot + '#/about');
    expect(element(by.id('title')).getText()).toEqual('About');
  });
  
  it('should load about page from index', function() {
    browser.get(siteRoot);
    element(by.css('a[href="#/about"]')).click();
    expect(browser.getTitle()).toEqual('Angular v1 CRUD sample');
    expect(browser.getCurrentUrl()).toEqual(siteRoot + '#/about');
  });
});
