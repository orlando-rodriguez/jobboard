describe("Form submission", () => {
    it("Has a working profile page", () => {
        cy.visit("/");

        cy.get("#profiles > li").should("have.length.gte", 3);

        cy.get("#profiles > li")
            .eq(0).find(".skills-list > li").should("satisfy", hiddenOrMissing);

        cy.get("#profiles > li header")
            .eq(0).click();

        cy.get("#profiles > li")
            .eq(0).find(".skills-list > li")
                .eq(0).should("have.text", "stepping on things");
        cy.get("#profiles > li")
            .eq(0).find(".skills-list > li")
                .eq(1).should("have.text", "musing on life");
        cy.get("#profiles > li")
            .eq(0).find(".skills-list > li")
                .eq(2).should("have.text", "MS Office");

        cy.get("#profiles > li header")
            .eq(0).click();

        cy.get("#profiles > li")
            .eq(0).find(".skills-list > li").should("satisfy", hiddenOrMissing);

        cy.get("#profiles > li header")
            .eq(1).click();

        cy.get("#profiles > li")
            .eq(1).find(".skills-list > li")
                .eq(0).should("have.text", "being contrary");
    });
});

function hiddenOrMissing([element]){
    return !element
        ? true
        : element.offsetWidth == 0 && element.offsetHeight == 0; // not visible
}
