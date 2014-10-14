// isValid('Ab_3fg') => true
// isValid('') => false
// isValid('aB3_') => false
// isValid('AbCdE2') => false
// isValid('abc_de2') => false
// isValid('Ab_DEF') => false
// isValid('ABC_123') => false
//

function isValid(password) {
  if (!isPasswordLongEnough(password)) {
    return false;
  }

  if (!hasUnderscore(password)) {
    return false;
  }

  if (!hasNumber(password)) {
    return false;
  }

  if (!hasUppercaseLetter(password)) {
    return false;
  }

  if (!hasLowercaseLetter(password)) {
    return false;
  }
  
  return true;

  function isPasswordLongEnough(password) {
    return password.length >= 6; 
  }

  function hasUnderscore(password) {
    return (/_/).test(password);
  }

  function hasUppercaseLetter(password) {
    return (/[A-Z]/).test(password); 
  }

  function hasLowercaseLetter(password) {
    return (/[a-z]/).test(password);
  }

  function hasNumber(password) {
    return (/\d/).test(password);
  }
}


describe("isValid", function() {
  it("should return if password is true", function() {
    expect(isValid("Ab_3fg")).toBeTruthy();
  });

  it("should return false if password is less than 6 characters long", function() {
    expect(isValid("Ab_2f")).toBeFalsy();
  });

  it("should atleast have an underscore", function() {
    expect(isValid("AbCdE2")).toBeFalsy();
  });

  it("should atleast have one number", function() {
    expect(isValid("Ab_CE_")).toBeFalsy();
  });

  it("should atleast have one uppercase character", function() {
    expect(isValid("ab_3_d")).toBeFalsy();
  });

  it("should atleast have one lowercase character", function() {
    expect(isValid("AB_2D_")).toBeFalsy();
  });
});
