System.register("chunks:///_virtual/LevelItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UIMgr.ts', './LevelConfig.ts', './UIName.ts', './LevelMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Component, UIMgr, LevelConfig, UIName, LevelMgr;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      UIMgr = module.UIMgr;
    }, function (module) {
      LevelConfig = module.LevelConfig;
    }, function (module) {
      UIName = module.UIName;
    }, function (module) {
      LevelMgr = module.LevelMgr;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "73badhJTlpBz5ne6Yf0Vejy", "LevelItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LevelItem = exports('LevelItem', (_dec = ccclass('LevelItem'), _dec2 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LevelItem, _Component);
        function LevelItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "levelNameLabel", _descriptor, _assertThisInitialized(_this));
          _this.levelData = null;
          return _this;
        }
        var _proto = LevelItem.prototype;
        /** 初始化关卡项 */
        _proto.Init = function Init(levelID) {
          this.levelData = LevelConfig.GetLevelData(levelID);
          if (!this.levelData) {
            console.warn("\u4E0D\u5B58\u5728\u5173\u5361" + levelID);
            this.node.destroy();
          }
          this.levelNameLabel.string = this.levelData.name;
        };
        _proto.onClickLevelItem = function onClickLevelItem() {
          // console.log(`点击关卡${this.levelData.id}`);
          UIMgr.Instance.HidePanel(UIName.SelectLevelPage);
          LevelMgr.Instance.EnterLevel(this.levelData);
        };
        return LevelItem;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "levelNameLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LevelPage.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LevelItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, Layout, instantiate, Component, LevelItem;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Layout = module.Layout;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      LevelItem = module.LevelItem;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "ea15fp0QQ5CrYKcJp9/vw0y", "LevelPage", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LevelPage = exports('LevelPage', (_dec = ccclass('LevelPage'), _dec2 = property({
        type: Prefab,
        tooltip: "关卡预制体"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LevelPage, _Component);
        function LevelPage() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "levelItemPrefab", _descriptor, _assertThisInitialized(_this));
          _this.currentPage = 0;
          _this.curLevelID = [];
          return _this;
        }
        var _proto = LevelPage.prototype;
        _proto.Init = function Init(page, curLevelID) {
          this.currentPage = page;
          this.curLevelID = curLevelID || [];

          // 1. 如果子节点不足，创建补齐
          while (this.node.children.length < this.curLevelID.length) {
            this.CreateLevelItem();
          }

          // 2. 遍历所有已存在的子节点：在范围内的显示并初始化，多余的隐藏
          for (var i = 0; i < this.node.children.length; i++) {
            var itemNode = this.node.children[i];
            if (i < this.curLevelID.length) {
              var _itemNode$getComponen;
              itemNode.active = true;
              (_itemNode$getComponen = itemNode.getComponent(LevelItem)) == null || _itemNode$getComponen.Init(this.curLevelID[i]);
            } else {
              // 超出当前页关卡数量的多余节点直接隐藏（避免使用 destroy 导致的帧末延迟销毁与鬼影显示）
              itemNode.active = false;
            }
          }

          // 3. 强制当前页 Layout 刷新排版（隐藏的节点 Layout 会自动忽略）
          var layout = this.node.getComponent(Layout);
          if (layout) {
            layout.updateLayout();
          }
        }

        /** 创建关卡项 */;
        _proto.CreateLevelItem = function CreateLevelItem() {
          var levelItem = instantiate(this.levelItemPrefab);
          levelItem.parent = this.node;
        };
        return LevelPage;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "levelItemPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SelectLevelPage", ['./LevelItem.ts', './LevelPage.ts', './SelectLevelPage.ts'], function () {
  return {
    setters: [null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/SelectLevelPage.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UIPanelBase.ts', './LevelConfig.ts', './LevelPage.ts', './UIMgr.ts', './UIName.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _createClass, cclegacy, _decorator, PageView, Prefab, ScrollView, Layout, instantiate, UIPanelBase, LevelConfig, LevelPage, UIMgr, UIName;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      PageView = module.PageView;
      Prefab = module.Prefab;
      ScrollView = module.ScrollView;
      Layout = module.Layout;
      instantiate = module.instantiate;
    }, function (module) {
      UIPanelBase = module.UIPanelBase;
    }, function (module) {
      LevelConfig = module.LevelConfig;
    }, function (module) {
      LevelPage = module.LevelPage;
    }, function (module) {
      UIMgr = module.UIMgr;
    }, function (module) {
      UIName = module.UIName;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "6992f2EVpxIsLP2IinxQShh", "SelectLevelPage", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SelectLevelPage = exports('SelectLevelPage', (_dec = ccclass('SelectLevelPage'), _dec2 = property(PageView), _dec3 = property({
        type: Prefab,
        tooltip: "关卡页预制体"
      }), _dec4 = property({
        tooltip: "每一页的关卡数量"
      }), _dec5 = property({
        tooltip: "预生成物理页数（建议固定为3：左、中、右，支持无限轮播）"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_UIPanelBase) {
        _inheritsLoose(SelectLevelPage, _UIPanelBase);
        function SelectLevelPage() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _UIPanelBase.call.apply(_UIPanelBase, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "levelPageView", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "levelPagePrefab", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "levelPerPage", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "preLevelPage", _descriptor4, _assertThisInitialized(_this));
          /** 关卡逻辑总页数 */
          _this.totalPage = 0;
          /** 当前逻辑页码（0 ~ totalPage - 1） */
          _this.currentPage = 0;
          /** 已创建的物理关卡页节点（0:左, 1:中, 2:右） */
          _this.pageNodes = [];
          /** 缓存的 LevelPage 组件实例，避免频繁 getComponent */
          _this.pageComps = [];
          /** 是否正在执行归中复位（防重入） */
          _this.isSwapping = false;
          /** 是否正在进行翻页动画（防频繁连点） */
          _this.isPageTurning = false;
          /** 页码变更事件回调 (当前页码 0-based, 总页数) */
          _this.onPageChanged = void 0;
          return _this;
        }
        var _proto = SelectLevelPage.prototype;
        _proto.onLoad = function onLoad() {
          var _this$levelPageView;
          _UIPanelBase.prototype.onLoad.call(this);
          if (!((_this$levelPageView = this.levelPageView) != null && _this$levelPageView.node)) {
            console.error("[SelectLevelPage] levelPageView 节点未绑定！");
            return;
          }
          // 监听滚动停止事件：在滑动吸附完全结束后执行无感数据更新与归中
          this.levelPageView.node.on(ScrollView.EventType.SCROLL_ENDED, this.OnScrollEnded, this);
          // 监听翻页过程事件：用于外部实时指示器等即时预览
          this.levelPageView.node.on(PageView.EventType.PAGE_TURNING, this.OnPageTurning, this);
        };
        _proto.onEnable = function onEnable() {
          this.InitData(this.currentPage);
        };
        _proto.onDisable = function onDisable() {
          // 清理所有挂起的延时回调，防止退出面板后定时器继续执行
          this.unscheduleAllCallbacks();
          if (this.levelPageView) {
            this.levelPageView.stopAutoScroll();
          }
          this.isSwapping = false;
          this.isPageTurning = false;
        };
        _proto.onDestroy = function onDestroy() {
          var _this$levelPageView2;
          if ((_this$levelPageView2 = this.levelPageView) != null && _this$levelPageView2.node) {
            this.levelPageView.node.off(ScrollView.EventType.SCROLL_ENDED, this.OnScrollEnded, this);
            this.levelPageView.node.off(PageView.EventType.PAGE_TURNING, this.OnPageTurning, this);
          }
          this.ClearLevelPages();
        }

        /**
         * 初始化页面数据
         * @param targetPage 初始进入的逻辑页码（默认为第 0 页）
         */;
        _proto.InitData = function InitData(targetPage) {
          var _LevelConfig$levelArr,
            _updatePageView,
            _ref,
            _this2 = this;
          if (targetPage === void 0) {
            targetPage = 0;
          }
          if (!this.levelPageView || !this.levelPagePrefab) {
            return;
          }
          var totalLevels = ((_LevelConfig$levelArr = LevelConfig.levelArrayID) == null ? void 0 : _LevelConfig$levelArr.length) || 0;
          this.totalPage = Math.max(1, Math.ceil(totalLevels / this.levelPerPage));
          this.currentPage = this.wrapPage(targetPage);
          this.levelPageView.stopAutoScroll();

          // 仅在总页数 >= 2 时使用 preLevelPage(3) 物理节点无限循环；只有 1 页时仅需 1 个物理节点
          var requiredPageCount = this.totalPage > 1 ? this.preLevelPage : 1;
          // 优化点：复用已创建节点，避免反复 destroy 和 instantiate
          this.EnsurePageNodes(requiredPageCount);

          // 控制滑动开关：只有 1 页时禁用滑动，防止无意义的回弹及事件触发
          this.levelPageView.horizontal = this.totalPage > 1;

          // 刷新所有物理节点的关卡数据
          this.RefreshAllPages();

          // 1. 强制 Layout 立即完成物理坐标计算
          var layout = this.levelPageView.content.getComponent(Layout);
          if (layout) {
            layout.updateLayout();
          }

          // 2. 刷新 PageView 内部页面偏移缓存
          (_updatePageView = (_ref = this.levelPageView)._updatePageView) == null || _updatePageView.call(_ref);

          // 3. 初始物理定位到中心节点（单页时定位到 0）
          var initialIndex = this.totalPage > 1 ? this.centerIndex : 0;
          this.isSwapping = true;
          this.levelPageView.scrollToPage(initialIndex, 0);

          // 双重校准：下一帧再次确保定位正确，防止引擎首帧 start 生命周期重置 content
          this.scheduleOnce(function () {
            var _this2$node;
            if ((_this2$node = _this2.node) != null && _this2$node.activeInHierarchy && _this2.levelPageView) {
              _this2.levelPageView._updatePageView == null || _this2.levelPageView._updatePageView();
              _this2.levelPageView.stopAutoScroll();
              _this2.levelPageView.scrollToPage(initialIndex, 0);
            }
            _this2.isSwapping = false;
          }, 0.05);
          this.NotifyPageChanged();
          console.log("[SelectLevelPage] \u521D\u59CB\u5316\u5B8C\u6210\uFF0C\u603B\u9875\u6570: " + this.totalPage + ", \u5F53\u524D\u5C55\u793A\u7B2C: " + (this.currentPage + 1) + " \u9875");
        }

        /**
         * 确保物理节点数量与组件缓存正确（池化复用）
         */;
        _proto.EnsurePageNodes = function EnsurePageNodes(count) {
          if (this.pageNodes.length === count) {
            return; // 数量完全一致，直接复用已有节点，零 GC 损耗
          }

          this.ClearLevelPages();
          for (var i = 0; i < count; i++) {
            var pageNode = instantiate(this.levelPagePrefab);
            this.levelPageView.addPage(pageNode);
            this.pageNodes.push(pageNode);
            this.pageComps.push(pageNode.getComponent(LevelPage));
          }
        }

        /** 清理所有关卡页 */;
        _proto.ClearLevelPages = function ClearLevelPages() {
          if (this.levelPageView) {
            this.levelPageView.removeAllPages();
          }
          for (var _iterator = _createForOfIteratorHelperLoose(this.pageNodes), _step; !(_step = _iterator()).done;) {
            var node = _step.value;
            node.destroy();
          }
          this.pageNodes.length = 0;
          this.pageComps.length = 0;
          this.isSwapping = false;
          this.isPageTurning = false;
        }

        /**
         * 滑动停止事件：吸附动画完全结束后触发无感归中与数据刷新
         */;
        _proto.OnScrollEnded = function OnScrollEnded() {
          this.isPageTurning = false;
          if (this.isSwapping || !this.node.activeInHierarchy || this.totalPage <= 1) {
            return;
          }
          var curIndex = this.levelPageView.getCurrentPageIndex();
          var delta = curIndex - this.centerIndex;
          if (delta === 0) {
            return; // 原地吸附回弹，未发生跨页切换
          }

          this.ResetToCenter(delta);
        }

        /**
         * 无感归中核心逻辑
         * @param delta 相对于中心节点的偏移量（+1 向右翻页，-1 向左翻页）
         */;
        _proto.ResetToCenter = function ResetToCenter(delta) {
          var _this3 = this;
          this.isSwapping = true;

          // 1. 更新当前逻辑页码
          this.currentPage = this.wrapPage(this.currentPage + delta);

          // 2. 刷新所有物理节点数据
          this.RefreshAllPages();

          // 3. 瞬间无动画重置 PageView 坐标到中心物理节点
          this.levelPageView.stopAutoScroll();
          this.levelPageView.scrollToPage(this.centerIndex, 0);

          // 4. 短延迟释放锁，避免事件队列残留的滚动事件导致二次跳页
          this.scheduleOnce(function () {
            _this3.isSwapping = false;
            _this3.isPageTurning = false;
          }, 0.08);
          this.NotifyPageChanged();
          console.log("[SelectLevelPage] \u7FFB\u9875\u5B8C\u6210\uFF0C\u5F53\u524D\u9875\u7801: " + (this.currentPage + 1) + "/" + this.totalPage);
        }

        /** 翻页过程中触发（用于指示器即时预览） */;
        _proto.OnPageTurning = function OnPageTurning() {
          if (this.totalPage <= 1) {
            return;
          }
          var curPhysicalIndex = this.levelPageView.getCurrentPageIndex();
          var delta = curPhysicalIndex - this.centerIndex;
          var previewPage = this.wrapPage(this.currentPage + delta);
          // 可视需要触发预览事件
        }

        /** 刷新所有物理节点的关卡数据 */;
        _proto.RefreshAllPages = function RefreshAllPages() {
          for (var i = 0; i < this.pageComps.length; i++) {
            var offset = i - this.centerIndex;
            var dataPage = this.wrapPage(this.currentPage + offset);
            var levelPage = this.pageComps[i];
            if (levelPage) {
              var levelIDs = this.GetLevelIDs(dataPage);
              levelPage.Init(dataPage, levelIDs);
            }
          }
        }

        /** 获取指定逻辑页码的关卡ID数组 */;
        _proto.GetLevelIDs = function GetLevelIDs(page) {
          var list = LevelConfig.levelArrayID;
          if (!list || list.length === 0) {
            return [];
          }
          var start = page * this.levelPerPage;
          return list.slice(start, start + this.levelPerPage);
        }

        /** 环形页码映射工具函数（统一解决负数取模） */;
        _proto.wrapPage = function wrapPage(page) {
          if (this.totalPage <= 0) return 0;
          return (page % this.totalPage + this.totalPage) % this.totalPage;
        }

        /** 触发页码变更通知 */;
        _proto.NotifyPageChanged = function NotifyPageChanged() {
          var _this$onPageChanged;
          (_this$onPageChanged = this.onPageChanged) == null || _this$onPageChanged.call(this, this.currentPage, this.totalPage);
        }

        // ================== 外部主动控制 API（支持按钮点击翻页） ==================

        /** 翻到上一页（可绑定左翻页箭头按钮或代码调用） */;
        _proto.ScrollToPrev = function ScrollToPrev(eventOrDuration, customEventData) {
          var _this4 = this;
          if (this.totalPage <= 1 || this.isSwapping || this.isPageTurning) return;
          var duration = typeof eventOrDuration === 'number' ? eventOrDuration : 0.25;
          this.isPageTurning = true;
          this.levelPageView.stopAutoScroll();
          this.levelPageView.scrollToPage(this.centerIndex - 1, duration);
          // 保底定时器：防止极端情况下引擎未触发 SCROLL_ENDED 事件导致状态卡死
          this.scheduleOnce(function () {
            if (_this4.isPageTurning) {
              _this4.OnScrollEnded();
            }
          }, duration + 0.1);
        }

        /** 翻到下一页（可绑定右翻页箭头按钮或代码调用） */;
        _proto.ScrollToNext = function ScrollToNext(eventOrDuration, customEventData) {
          var _this5 = this;
          if (this.totalPage <= 1 || this.isSwapping || this.isPageTurning) return;
          var duration = typeof eventOrDuration === 'number' ? eventOrDuration : 0.25;
          this.isPageTurning = true;
          this.levelPageView.stopAutoScroll();
          this.levelPageView.scrollToPage(this.centerIndex + 1, duration);
          // 保底定时器：防止极端情况下引擎未触发 SCROLL_ENDED 事件导致状态卡死
          this.scheduleOnce(function () {
            if (_this5.isPageTurning) {
              _this5.OnScrollEnded();
            }
          }, duration + 0.1);
        }

        /** 直接跳转到指定逻辑页（瞬时切换，例如“前往最新关卡”） */;
        _proto.JumpToPage = function JumpToPage(targetPage) {
          if (this.totalPage <= 0) return;
          this.currentPage = this.wrapPage(targetPage);
          this.RefreshAllPages();
          var initialIndex = this.totalPage > 1 ? this.centerIndex : 0;
          this.levelPageView.stopAutoScroll();
          this.levelPageView.scrollToPage(initialIndex, 0);
          this.NotifyPageChanged();
        }

        //#region UI事件
        ;

        _proto.返回主菜单 = function 返回主菜单() {
          UIMgr.Instance.HidePanel(UIName.SelectLevelPage);
          UIMgr.Instance.ShowPanel(UIName.MainPage);
        }

        //#endregion
        ;

        _createClass(SelectLevelPage, [{
          key: "centerIndex",
          get: /** 中心物理节点的索引（对于 3 个节点固定为 1） */
          function get() {
            return Math.floor(this.preLevelPage / 2);
          }
        }]);
        return SelectLevelPage;
      }(UIPanelBase), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "levelPageView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "levelPagePrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "levelPerPage", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 6;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "preLevelPage", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/SelectLevelPage', 'chunks:///_virtual/SelectLevelPage'); 
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