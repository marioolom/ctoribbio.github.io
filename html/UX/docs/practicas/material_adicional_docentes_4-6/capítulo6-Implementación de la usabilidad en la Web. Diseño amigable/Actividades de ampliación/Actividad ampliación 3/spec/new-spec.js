
var siteRoot =  'http://127.0.0.1:8080/';

describe('Angular v1 CRUD App tests', function() {
   
    beforeEach(function(){
        browser.get(siteRoot + '#/friend/new');
    });

  it('should load friend detail page', function() {
    expect(browser.getTitle()).toEqual('Angular v1 CRUD sample');
    expect(browser.getCurrentUrl()).toEqual(siteRoot + '#/friend/new');
    expect(element(by.css('section > h2')).getText()).toEqual('Friend New');
    expect(element(by.css('section p')).getText()).toContain('Friend New');
  });
  
  it('should load a form', function() {
    expect(element.all(by.tagName('form')).count()).toBe(1);
    expect(element(by.css('form input#name')).isPresent()).toBe(true);
    expect(element(by.css('form input#number')).isPresent()).toBe(true);
  });
  
  it('should write input and submit form', function() {
    element(by.model('friend.name')).sendKeys('Protractor');
    element(by.model('friend.number')).sendKeys('424242');
    element(by.css('form input[value="Save new Friend"]')).click();
    expect(browser.getCurrentUrl()).toEqual(siteRoot + '#/friend/list');
    expect(element.all(by.cssContainingText('.friendnumber', '424242')).count()).toBe(1);
    expect(element.all(by.cssContainingText('.friendname', 'Protractor')).count()).toBe(1);
  });
  
});
