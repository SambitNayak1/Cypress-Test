describe("/user/register", () => {
  const registerEndPoint = "http://localhost:3800/api/user/register";
  //Test for response status of the request api with body
  it("Create User with valid body", () => {
    let body = {
      name: "TestName",
      email: "stest988@gmail.com",
      password: "SAmir@123",
    };
    cy.request("POST", registerEndPoint, body).then((response) => {
      expect(response.status).to.eq(201);
    });
  });

  //Test for response status of the request api with no body
  it("create user with no body", () => {
    cy.request({
      method: "POST",
      url: registerEndPoint,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
    });
  });

  // Test for resonse status as well as body contain match actual with expectation
  it("return Response status 201 with other responses when hit /Register with body", () => {
    let body = {
      name: "TestName",
      email: "stest988@gmail.com",
      password: "SAmir@123",
    };
    cy.request("POST", registerEndPoint, body).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.name).to.contain("TestName");
      expect(response.body.email).to.contain("stest988@gmail.com");
    });
  });
});
