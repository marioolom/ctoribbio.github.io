
var siteRoot =  'http://127.0.0.1:8080/';

describe('Angular v1 CRUD App tests', function() {
   
    beforeEach(function(){
        browser.get(siteRoot + '#/friend/list');
    });

  it('should delete a friend with one click', function() {
    expect(browser.getTitle()).toEqual('Angular v1 CRUD sample');
    expect(browser.getCurrentUrl()).toEqual(siteRoot + '#/friend/list');

    expect(element(by.cssContainingText('#friend1 .friendname', 'Juan')).isPresent()).toBe(true);
    expect(element(by.cssContainingText('#friend1 .friendnumber', '666')).isPresent()).toBe(true);
    element(by.css('a[href="#/friend/delete/1"]')).click();
    expect(browser.getCurrentUrl()).toEqual(siteRoot + '#/friend/list');
    expect(element(by.cssContainingText('#friend1 .friendname', 'Juan')).isPresent()).toBe(false);
    expect(element(by.cssContainingText('#friend1 .friendnumber', '666')).isPresent()).toBe(false);
  });
  
  it('should delete from detail page', function() {
    element(by.css('a[href="#/friend/detail/2"]')).click();
    expect(browser.getCurrentUrl()).toEqual(siteRoot + '#/friend/detail/2');
    expect(element(by.css('.friendid')).getText()).toEqual('2');
    expect(element(by.css('.friendname')).getText()).toEqual('Merlin');
    element(by.css('a[href="#/friend/delete/2"]')).click();
    expect(browser.getCurrentUrl()).toEqual(siteRoot + '#/friend/list');
    expect(element(by.cssContainingText('#friend2 .friendname', 'Merlin')).isPresent()).toBe(false);
    expect(element(by.cssContainingText('#friend2 .friendnumber', '777')).isPresent()).toBe(false);
  });

      // Actividad Ampliación 3 - 1
   it('deleted element link shoud disappear from home', function() {
    expect(browser.getTitle()).toEqual('Angular v1 CRUD sample');
    expect(browser.getCurrentUrl()).toEqual(siteRoot + '#/friend/list');

    expect(element(by.cssContainingText('#friend1 .friendname', 'Juan')).isPresent()).toBe(true);
    expect(element(by.cssContainingText('#friend1 .friendnumber', '666')).isPresent()).toBe(true);
    element(by.css('a[href="#/friend/delete/1"]')).click();
    expect(browser.getCurrentUrl()).toEqual(siteRoot + '#/friend/list');
    expect( element(by.css('a[href="#/friend/delete/1"]')).isPresent()).toBe(false);
   });

     // Actividad Ampliación 3  - 2
   it('deleted element link shoud disappear from home', function() {
    expect(browser.getTitle()).toEqual('Angular v1 CRUD sample');
    expect(browser.getCurrentUrl()).toEqual(siteRoot + '#/friend/list');
    expect(element.all(by.css('.friend')).count()).toBe(2);
    element(by.css('a[href="#/friend/delete/1"]')).click();
    expect(browser.getCurrentUrl()).toEqual(siteRoot + '#/friend/list');
    expect(element.all(by.css('.friend')).count()).toBe(1);
   });
  
});
