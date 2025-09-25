import Login from "../Page/loginpage"
import Dashboard from "../Page/dashboardpage"
import Application from "../Page/applicationpage"




describe('Dashboardvsapplicationcount', () => {
  it('loginapp', () => {
   cy.visit('https://sandbox20.cloudeagle.info/app/application');
cy.wait(10000)

 const ln = new Login();
 const ds =new Dashboard();
 const app = new Application();

    ln.setusername("support+sandbox20@cloudeagle.ai");
    ln.setpassword("[x1nkS6]8~f]A#U;");
    cy.wait(5000);
    ln.clicksubmit();
cy.wait(15000)
cy.get('a[href="/app/dashboard"]').click();

    let dashboardcount;
  ds.getManagedApplicationsCount().invoke('text').then(text => {
    dashboardcount =text.trim();
    });

 cy.wait(10000)
   
    ds.clickManagedApplicationsCard();

    let appcount;
    app.getApplicationsCount().invoke('text').then(text => {
      const appcount = text.trim();
  
      expect(appcount).to.eq(dashboardcount.toString());
    });

  });

});




