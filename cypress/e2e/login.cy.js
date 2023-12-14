describe("Login Page Testing of Admin UI", ()=>{
    beforeEach(()=>{
        const url = "https://squareadmin.tstvixr.in/";
        cy.visit(url);
    })

    it("Testing Login By Credential", ()=>{
        //Click on login icon
        cy.get('a[href="/login-with-email"]').click();
        //Input Email 
        cy.get(':nth-child(4) > .w-full').type('demo@vixr.io');
        //Input Password
        cy.get('.relative > .w-full').type("demoBoss@123");
        //Click on Login Button
        cy.get('.bg-default-button').click();


    })
})