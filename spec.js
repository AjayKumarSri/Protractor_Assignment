describe('Protractor Demo App', function() {
  browser.ignoreSynchronization = true;
  it('should few actions', function() {
   
    browser.get("https://sso.teachable.com/secure/673/users/sign_up?flow_school_id=673");
    
      element(by.id("user_name")).sendKeys("Ajay_Kumar");
      element(by.id("user_email")).sendKeys("ajay.kumar321@srijan.net");
      element(by.id("user_password")).sendKeys("Ajay@Srijan");
      element(by.id("user_password_confirmation")).sendKeys("Ajay@Srijan");
      element(by.id("user_agreed_to_terms")).sendKeys("Ajay@Srijan");
      element(by.id("user_agreed_to_terms")).click();
       element(by.name("commit")).click();
        browser.sleep(1000);
        browser.get("https://sso.teachable.com/secure/673/users/sign_in?flow_school_id=673")
    }) 
    it('login to the aplication', function()
  {
     element(by.id("user_email")).sendKeys("ajay.kumar321@srijan.net");
     element(by.id("user_password")).sendKeys("Ajay@Srijan");
     element(by.name("commit")).click(); 

  })
  });