Feature: Account Authentication

  @smoke, @login, @positive
  Scenario: Login with valid credentials
    Given I am on the login page
    When I login with email "petio.borisov@gmail.com" and password "123454321"
    Then I should be logged in successfully

  @login, @negative
  Scenario: Login with invalid credentials
    Given I am on the login page
    When I login with email "wrong@example.com" and password "wrongpass"
    Then I should see an error message
