
var siteRoot =  'http://127.0.0.1:8080/';

describe('Angular v1 CRUD App tests', function() {
   
    beforeEach(function(){
        browser.get(siteRoot + '#/friend/list');
    });

  it('should load friend list page', function() {
    expect(browser.getTitle()).toEqual('Angular v1 CRUD sample');
    expect(browser.getCurrentUrl()).toEqual(siteRoot + '#/friend/list');
    expect(element(by.css('section > h2')).getText()).toEqual('Friend list');
    expect(element(by.css('section p')).getText()).toEqual('Friend list');
  });
  
  it('should have friends, one at least', function() {
    expect(element(by.id('friends')).isPresent()).toBeTruthy();
    expect(element(by.tagName('h3')).getText()).toEqual('Friends');
    expect(element.all(by.css('.friend')).count()).toBeGreaterThan(0);
  });
  
  it('should load at least friend number 1', function() {
    expect(element(by.id('friend1')).isPresent()).toBeTruthy();
    expect(element(by.css('#friend1 .friendname')).getText()).toEqual('Juan');
    expect(element(by.css('#friend1 .friendnumber')).getText()).toEqual('666');
  });
  
  it('should load friend list page from index', function() {
    browser.get(siteRoot);
    element(by.css('a[href="#/friend/list"]')).click();
    expect(browser.getTitle()).toEqual('Angular v1 CRUD sample');
    expect(browser.getCurrentUrl()).toEqual(siteRoot + '#/friend/list');
  });
});

