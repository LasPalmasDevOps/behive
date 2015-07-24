'use strict';

/**
 * Index Helloworld test
 */
 describe('behive project is indexed on google', function() {

   it('should lists first on google under "behive github"', function() {
     browser.driver.get('https://google.com');

     // get input and btn
     var gInput = browser.driver.findElement(by.name('q'));
     var gButtn = browser.driver.findElement(by.name('btnG'));

     // fill input
     gInput.sendKeys('behive github').then(function() {
       gButtn.click().then(function() {
         // wait for ajax search
         browser.driver.sleep(3000);

         // expects google updates title
         expect(browser.driver.getTitle()).toEqual('behive github - Buscar con Google');

         // get all results rows dom els
         browser.driver.findElements(by.css('.rc .r a')).then(function(els) {
           // check if github first
           var firstEl = els[0];
           expect(firstEl.getText()).toEqual('LasPalmasDevOps/behive · GitHub');
           browser.driver.sleep(2000);
         });
       });
     });
   });

 });
