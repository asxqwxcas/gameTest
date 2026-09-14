System.register("chunks:///_virtual/GamePage", ['./GamePage.ts'], function () {
  return {
    setters: [null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/GamePage.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UIPanelBase.ts', './LevelMgr.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, UIPanelBase, LevelMgr;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      UIPanelBase = module.UIPanelBase;
    }, function (module) {
      LevelMgr = module.LevelMgr;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "ef7d4ewhcpOW4XDN87dUstl", "GamePage", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GamePage = exports('GamePage', (_dec = ccclass('GamePage'), _dec(_class = /*#__PURE__*/function (_UIPanelBase) {
        _inheritsLoose(GamePage, _UIPanelBase);
        function GamePage() {
          return _UIPanelBase.apply(this, arguments) || this;
        }
        var _proto = GamePage.prototype;
        /** 返回选择关卡页面 */
        _proto.ReturnToSelectLevelPage = function ReturnToSelectLevelPage() {
          // UIMgr.Instance.HidePanel(UIName.GamePage);
          LevelMgr.Instance.ExitLevel();
        };
        return GamePage;
      }(UIPanelBase)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/GamePage', 'chunks:///_virtual/GamePage'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});