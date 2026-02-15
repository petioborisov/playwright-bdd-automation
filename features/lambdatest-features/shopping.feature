Feature: Product Purchase Flow

  @shopping, @positive
  Scenario: Buy an Apple product
    Given I am on the homepage
    When I navigate to Mega Menu and select Apple
    And I add the first available product to the basket
    Then I should see the product inside the shopping cart
