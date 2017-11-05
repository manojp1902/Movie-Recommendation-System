import { browser, by, element } from 'protractor';

export class AppPage {
  	navigateTo(path = '/') {
  		browser.pause();
    	return browser.get(path);
  	}

	getParagraphText() {
	  return element(by.css('app-root h1')).getText();
	}

  	getTitle(){
        return browser.getTitle();
    }

    getLogin(){
    	return element(by.id('loginBtn2'));
    }

    getLoginFormEmail(){
		return element(by.id('inputEmail'));               
    }

	getLoginFormPassword(){
		return element(by.id('inputPassword'));         
    }

    getLoginButton(){
        return element(by.id('loginBtn2'));
    }

    getSignup(){
        return element(by.css('.btn.btn-signin'));
    }

    getSignupFormName(){
        return element(by.id('name'));
    }

    getSignupFormEmail(){
        return element(by.id('inputEmail'));
    }

    getSignupFormPassword(){
        return element(by.id('inputPassword'));
    }

    getSignupFormConfirmPassword(){
        return element(by.id('inputConfirmPassword'));
    }

    getProfile()
    {
        return element(by.id('reco'));
    }
    getReview() {
        return element(by.id('movie1'));
    }
    
    getReviewPage() {
        return element(by.id('head'));
    }
    
}
