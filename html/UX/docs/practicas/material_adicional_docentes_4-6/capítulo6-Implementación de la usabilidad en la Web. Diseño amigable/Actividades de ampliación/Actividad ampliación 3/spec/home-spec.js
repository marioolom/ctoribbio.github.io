
var siteRoot =  'http://127.0.0.1:8080/';

describe('Angular v1 CRUD App tests', function() {
   
    beforeEach(function(){
        browser.get(siteRoot + '#/home');
    });

  it('should load home page', function() {
    expect(browser.getTitle()).toEqual('Angular v1 CRUD sample');
    expect(browser.getCurrentUrl()).toEqual(siteRoot + '#/home');
    expect(element(by.css('section > h2')).getText()).toEqual('Home');
    expect(element(by.css('section p')).getText()).toEqual('Crud Sample Home');
  });
  
  it('should load home page from index', function() {
    browser.get(siteRoot);
    element(by.css('a[href="#/home"]')).click();
    expect(browser.getTitle()).toEqual('Angular v1 CRUD sample');
    expect(browser.getCurrentUrl()).toEqual(siteRoot + '#/home');
  });
});
