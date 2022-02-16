
var siteRoot =  'http://127.0.0.1:8080/';

describe('Angular v1 CRUD App tests', function() {
   
    beforeEach(function(){
        browser.get(siteRoot + '#/friend/update/1');
    });

  it('should load friend update page', function() {
    expect(browser.getTitle()).toEqual('Angular v1 CRUD sample');
    expect(browser.getCurrentUrl()).toEqual(siteRoot + '#/friend/update/1');
    expect(element(by.css('section > h2')).getText()).toEqual('Friend Update');
    expect(element(by.css('section p')).getText()).toContain('Friend Update');
  });
  
  it('should load a form', function() {
    expect(element.all(by.tagName('form')).count()).toBe(1);
    expect(element(by.css('form input#name[type="text"]')).isPresent()).toBe(true);
    expect(element(by.model('friend.name')).getAttribute('value')).toEqual('Juan');
    expect(element(by.model('friend.number')).getAttribute('value')).toEqual('666');   
  });
  
  it('should write input, submit form and update correctly', function() {
    element(by.model('friend.name')).clear().sendKeys('Juanete');
    element(by.model('friend.number')).clear().sendKeys('667');
    element(by.css('form input[value="Update Friend"]')).click();
    expect(browser.getCurrentUrl()).toEqual(siteRoot + '#/friend/list');
    expect(element(by.cssContainingText('#friend1 .friendname', 'Juanete')).isPresent()).toBe(true);
    expect(element(by.cssContainingText('#friend1 .friendnumber', '667')).isPresent()).toBe(true);

  });
  
});

/*describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    browser.get('https://angularjs.org');

    element(by.model('todoList.todoText')).sendKeys('write first protractor test');
    element(by.css('[value="add"]')).click();

    var todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).toEqual(3);
    expect(todoList.get(2).getText()).toEqual('write first protractor test');

    // You wrote your first test, cross it off the list
    todoList.get(2).element(by.css('input')).click();
    var completedAmount = element.all(by.css('.done-true'));
    expect(completedAmount.count()).toEqual(2);
  });
});
*/