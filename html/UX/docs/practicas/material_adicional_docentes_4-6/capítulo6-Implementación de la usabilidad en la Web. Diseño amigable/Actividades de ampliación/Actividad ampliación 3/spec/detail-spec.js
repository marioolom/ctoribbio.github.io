
var siteRoot =  'http://127.0.0.1:8080/';

describe('Angular v1 CRUD App tests', function() {
   
    beforeEach(function(){
        browser.get(siteRoot + '#/friend/detail/1');
    });

  it('should load friend detail page', function() {
    expect(browser.getTitle()).toEqual('Angular v1 CRUD sample');
    expect(browser.getCurrentUrl()).toEqual(siteRoot + '#/friend/detail/1');
    expect(element(by.css('section > h2')).getText()).toEqual('Friend Detail');
    expect(element(by.css('section p')).getText()).toContain('Friend Detail');
  });
  
  it('should load correct details', function() {
    expect(element.all(by.css('.friend')).count()).toBe(1);
    expect(element(by.css('.friendname')).getText()).toEqual('Juan');
    expect(element(by.css('.friendid')).getText()).toEqual('1');
    expect(element(by.css('.friendnumber')).getText()).toEqual('666');
  });
  
});
