System.register("chunks:///_virtual/MainPage", ['./MainPage.ts'], function () {
  return {
    setters: [null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/MainPage.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UIMgr.ts', './UIPanelBase.ts', './UIName.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, UIMgr, UIPanelBase, UIName;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      UIMgr = module.UIMgr;
    }, function (module) {
      UIPanelBase = module.UIPanelBase;
    }, function (module) {
      UIName = module.UIName;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "4350cwmgfNLtKi32NRnYEYH", "MainPage", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var MainPage = exports('MainPage', (_dec = ccclass('MainPage'), _dec(_class = /*#__PURE__*/function (_UIPanelBase) {
        _inheritsLoose(MainPage, _UIPanelBase);
        function MainPage() {
          return _UIPanelBase.apply(this, arguments) || this;
        }
        var _proto = MainPage.prototype;
        /** 点击开始按钮 */
        _proto.onClickStartBtn = function onClickStartBtn() {
          UIMgr.Instance.HidePanel(UIName.MainPage);
          UIMgr.Instance.ShowPanel(UIName.SelectLevelPage);
        };
        return MainPage;
      }(UIPanelBase)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/MainPage', 'chunks:///_virtual/MainPage'); 
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