'use strict';

exports.__esModule = true;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

var _Api = require('../helpers/Api');

var _Api2 = _interopRequireDefault(_Api);

var _mappers = require('../helpers/mappers');

var _LoggedAction = require('../records/LoggedAction');

var _LoggedAction2 = _interopRequireDefault(_LoggedAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AccountActionLog = function () {
    function AccountActionLog() {
        (0, _classCallCheck3.default)(this, AccountActionLog);
    }

    AccountActionLog.getList = function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(search) {
            var apiClient, result;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            apiClient = new _Api2.default();
                            _context.next = 3;
                            return apiClient.get('account-action-log?' + search.toQueryString(true));

                        case 3:
                            result = _context.sent;
                            return _context.abrupt('return', {
                                actions: (0, _mappers.resolveAll)(result.data.data).as(_LoggedAction2.default),
                                count: result.data.count
                            });

                        case 5:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function getList(_x) {
            return _ref.apply(this, arguments);
        }

        return getList;
    }();

    return AccountActionLog;
}();

exports.default = AccountActionLog;
module.exports = exports.default;