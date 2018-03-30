'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regex = require('../data/regex.js');

var _regex2 = _interopRequireDefault(_regex);

var _sendStart = require('../messages/sendStart.js');

var _sendStart2 = _interopRequireDefault(_sendStart);

var _sendRole = require('../messages/sendRole.js');

var _sendRole2 = _interopRequireDefault(_sendRole);

var _sendMemberCard = require('../messages/sendMemberCard.js');

var _sendMemberCard2 = _interopRequireDefault(_sendMemberCard);

var _sendSocialLinks = require('../messages/sendSocialLinks.js');

var _sendSocialLinks2 = _interopRequireDefault(_sendSocialLinks);

var _handleCallback = require('../utils/handleCallback.js');

var _handleCallback2 = _interopRequireDefault(_handleCallback);

var _helpers = require('../utils/helpers.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initActions = function initActions(bot) {
  bot.onText(_regex2.default.start, function (msg) {
    return (0, _sendStart2.default)(msg, bot);
  });
  bot.onText(_regex2.default.roles, function (msg) {
    return (0, _sendRole2.default)(msg, bot);
  });
  bot.onText(_regex2.default.members, function (msg) {
    return (0, _sendMemberCard2.default)(msg, bot);
  });
  bot.onText(_regex2.default.social, function (msg) {
    return (0, _sendSocialLinks2.default)(msg, bot);
  });
  bot.on(_helpers.callbackQuery, function (resp) {
    return (0, _handleCallback2.default)(resp, bot);
  });
};

exports.default = initActions;
//# sourceMappingURL=actions.js.map