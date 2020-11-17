/**
 * 
  enum SPY_USER_ROLE {
    USER, // 默认下标是从0开始
    ADMIN,
    MANAGER,
  }
 */

var SPY_USER_ROLE;
(function (SPY_USER_ROLE) {
  SPY_USER_ROLE[(SPY_USER_ROLE["USER"] = 0)] = "USER";
  SPY_USER_ROLE[(SPY_USER_ROLE["ADMIN"] = 1)] = "ADMIN";
  SPY_USER_ROLE[(SPY_USER_ROLE["MANAGER"] = 2)] = "MANAGER";
})(SPY_USER_ROLE || (SPY_USER_ROLE = {}));

/**
 * 
enum SPY_USER_ROLE {
  USER = "abc",
  ADMIN = 6, // 否则TS不知道如何推断
  MANAGER,
}
 */

var SPY_USER_ROLE;
(function (SPY_USER_ROLE) {
  SPY_USER_ROLE["USER"] = "abc";
  SPY_USER_ROLE[(SPY_USER_ROLE["ADMIN"] = 6)] = "ADMIN";
  SPY_USER_ROLE[(SPY_USER_ROLE["MANAGER"] = 7)] = "MANAGER";
})(SPY_USER_ROLE || (SPY_USER_ROLE = {}));
