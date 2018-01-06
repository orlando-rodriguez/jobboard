describe("Form submission", () => {
    it("submits a job", () => {
        cy.visit("http://localhost:8080");

        cy.get("input[name=title]").should("be.empty");
        cy.get("input[name=pay]").should("be.empty");
        cy.get("textarea[name=description]").should("be.empty");

        cy.get("input[name=title]").type("Job Title");
        cy.get("input[name=pay]").type("Pay");
        cy.get("textarea[name=description]").type("Description");
        cy.get("input[type=submit]").click();

        cy.get("input[name=title]").should("be.empty");
        cy.get("input[name=pay]").should("be.empty");
        cy.get("textarea[name=description]").should("be.empty");

        cy.get("#job-listings li").eq(0).find("h4").should("have.text", "Job Title");
        cy.get("#job-listings li").eq(0).find("small").eq(0).should("have.text", "Pay");
        cy.get("#job-listings li").eq(0).find("p").should("have.text", "Description");
        cy.get("#job-listings li").eq(0).find("small").eq(1).should("have.text", "0 dinos are interested in this job");
    });
});
