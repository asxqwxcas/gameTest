System.register("chunks:///_virtual/Level_4", ['./Level_4.ts', './Lv_Data_4.ts'], function () {
  return {
    setters: [null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/Level_4.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LevelBase.ts', './ResultType.ts', './Lv_Data_4.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, Label, Graphics, Color, Vec2, Layers, Sprite, UITransform, tween, Vec3, Tween, clamp, LevelBase, ResultType, Lv_Data_4;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      Graphics = module.Graphics;
      Color = module.Color;
      Vec2 = module.Vec2;
      Layers = module.Layers;
      Sprite = module.Sprite;
      UITransform = module.UITransform;
      tween = module.tween;
      Vec3 = module.Vec3;
      Tween = module.Tween;
      clamp = module.clamp;
    }, function (module) {
      LevelBase = module.LevelBase;
    }, function (module) {
      ResultType = module.ResultType;
    }, function (module) {
      Lv_Data_4 = module.Lv_Data_4;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19;
      cclegacy._RF.push({}, "2845cfbt0FJVKi6v/lGDuOk", "Level_4", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        executeInEditMode = _decorator.executeInEditMode;

      /** 格子标记状态 */
      var CellState = exports('CellState', /*#__PURE__*/function (CellState) {
        CellState[CellState["Empty"] = 0] = "Empty";
        CellState[CellState["Cow"] = 1] = "Cow";
        CellState[CellState["Cross"] = 2] = "Cross";
        return CellState;
      }({})); // ✕ 排除标记

      /** 历史操作快照 */

      var Level_4 = exports('Level_4', (_dec = ccclass('Level_4'), _dec2 = executeInEditMode(true), _dec3 = property(Lv_Data_4), _dec4 = property(Node), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Node), _dec10 = property(Graphics), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Label), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(Node), _dec18 = property(Node), _dec19 = property(Node), _dec20 = property(Node), _dec21 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_LevelBase) {
        _inheritsLoose(Level_4, _LevelBase);
        function Level_4() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _LevelBase.call.apply(_LevelBase, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "lvData", _descriptor, _assertThisInitialized(_this));
          // ==================== 编辑器与运行时 HUD 组件引用 ====================
          _initializerDefineProperty(_this, "hudRoot", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "titleLabel", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "subTitleLabel", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cowCountLabel", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "timerLabel", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "boardRoot", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "boardBgGraphics", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fxRoot", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winBannerNode", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winBannerLabel", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bottomControlsNode", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tipCardNode", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnHintNode", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnUndoNode", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnResetNode", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnRuleNode", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnPrevNode", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnNextNode", _descriptor19, _assertThisInitialized(_this));
          // ==================== 视觉配色配置 (高质感禅意马卡龙调色盘) ====================
          _this.COLOR_BOARD_CARD = new Color(255, 255, 255, 255);
          // 棋盘卡片底色
          _this.COLOR_BOARD_SHADOW = new Color(15, 23, 42, 25);
          // 棋盘底座轻阴影
          _this.COLOR_BOARD_BORDER = new Color(226, 232, 240, 255);
          // 棋盘外边框 (#E2E8F0)
          // 冲突与高亮态
          _this.COLOR_CONFLICT_BG = new Color(254, 226, 226, 255);
          // 冲突红底 (#FEE2E2)
          _this.COLOR_CONFLICT_BORDER = new Color(239, 68, 68, 255);
          // 冲突红框 (#EF4444)
          /** 8 种高雅舒适、界限分明的色块底色 (Top Face) */
          _this.REGION_PALETTES = [new Color(254, 240, 138, 255),
          // 0: 暖杏奶黄 (#FEF08A)
          new Color(187, 247, 208, 255),
          // 1: 晴岚竹翠 (#BBF7D0)
          new Color(186, 230, 253, 255),
          // 2: 暮云天青 (#BAE6FD)
          new Color(233, 213, 255, 255),
          // 3: 丁香淡紫 (#E9D5FF)
          new Color(254, 205, 211, 255),
          // 4: 珊瑚粉樱 (#FECDD3)
          new Color(165, 243, 252, 255),
          // 5: 苍泉浅蓝 (#A5F3FC)
          new Color(254, 215, 170, 255),
          // 6: 蜜柑暖橙 (#FED7AA)
          new Color(221, 214, 254, 255) // 7: 浅青藕荷 (#DDD6FE)
          ];
          /** 对应各区域底部的 3D 立体微阴影色 (Bevel Shadow) */
          _this.REGION_BEVEL_PALETTES = [new Color(250, 204, 21, 255),
          // 0 暗杏黄
          new Color(134, 239, 172, 255),
          // 1 暗竹绿
          new Color(125, 211, 252, 255),
          // 2 暗天青
          new Color(216, 180, 254, 255),
          // 3 暗淡紫
          new Color(253, 164, 175, 255),
          // 4 暗粉樱
          new Color(103, 232, 249, 255),
          // 5 暗浅蓝
          new Color(253, 186, 116, 255),
          // 6 暗蜜柑
          new Color(196, 181, 253, 255) // 7 暗藕荷
          ];
          // ==================== 运行时状态 ====================
          _this.currentSubLevelIndex = 0;
          _this.currentPuzzle = null;
          _this.boardSize = 4;
          _this.boardState = [];
          _this.historyStack = [];
          _this.isGameWon = false;
          _this.elapsedTime = 0;
          _this.isTimerRunning = false;
          // 核心交互：单击排除、双击放牛、拖拽划线批量排除
          _this.isTouchDragging = false;
          _this.touchStartScreenPos = new Vec2();
          _this.preGestureSnapshot = null;
          _this.draggedKeysInStroke = new Set();
          _this.startTouchCell = null;
          _this.lastClickCellKey = '';
          _this.lastClickTime = 0;
          // 几何排版参数（严格保证有明确舒适的间隔）
          _this.cellSize = 88;
          _this.cellGap = 12;
          _this.boardTotalWidth = 500;
          _this.boardTotalHeight = 500;
          _this.startX = 0;
          _this.startY = 0;
          // 节点与渲染器
          _this.cellNodes = new Map();
          _this.cellGraphics = new Map();
          _this.cellLabels = new Map();
          // Web Audio 音效上下文
          _this.audioCtx = null;
          return _this;
        }
        var _proto = Level_4.prototype;
        _proto.onLoad = function onLoad() {
          _LevelBase.prototype.onLoad.call(this);
          {
            this.InitAudioSynthesizer();
          }
          this.BuildSceneLayout();
          {
            this.RegisterTouchListeners();
          }
        };
        _proto.start = function start() {
          if (!this.lvData) {
            this.lvData = this.getComponentInChildren(Lv_Data_4) || this.node.addComponent(Lv_Data_4);
          }
          this.LoadSubLevel(0);
        };
        _proto.M_Update = function M_Update(dt) {
          _LevelBase.prototype.M_Update.call(this, dt);
          if (this.isTimerRunning && !this.isGameWon) {
            this.elapsedTime += dt;
            this.UpdateTimerDisplay();
          }
        }

        // ==================== 音效合成系统 (Web Audio API) ====================
        ;

        _proto.InitAudioSynthesizer = function InitAudioSynthesizer() {
          try {
            var AudioContextClass = window.AudioContext || window.webkitAudioContext;
            if (AudioContextClass) {
              this.audioCtx = new AudioContextClass();
            }
          } catch (e) {
            console.warn("[Level_4] Web Audio 不可用，静音模式运行");
          }
        };
        _proto.PlayTone = function PlayTone(freq, type, duration, gainVal) {
          if (gainVal === void 0) {
            gainVal = 0.22;
          }
          if (!this.audioCtx) return;
          try {
            if (this.audioCtx.state === 'suspended') {
              this.audioCtx.resume();
            }
            var osc = this.audioCtx.createOscillator();
            var gain = this.audioCtx.createGain();
            osc.type = type;
            osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
            gain.gain.setValueAtTime(gainVal, this.audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + duration);
            osc.connect(gain);
            gain.connect(this.audioCtx.destination);
            osc.start();
            osc.stop(this.audioCtx.currentTime + duration);
          } catch (e) {}
        };
        _proto.PlayCowSfx = function PlayCowSfx() {
          var _this2 = this;
          this.PlayTone(440, 'triangle', 0.22, 0.35);
          setTimeout(function () {
            return _this2.PlayTone(659.25, 'sine', 0.28, 0.3);
          }, 35);
        };
        _proto.PlayCrossSfx = function PlayCrossSfx() {
          this.PlayTone(784, 'sine', 0.09, 0.16);
        };
        _proto.PlayClearSfx = function PlayClearSfx() {
          this.PlayTone(330, 'triangle', 0.12, 0.14);
        };
        _proto.PlayConflictSfx = function PlayConflictSfx() {
          var _this3 = this;
          this.PlayTone(165, 'square', 0.14, 0.2);
          setTimeout(function () {
            return _this3.PlayTone(130, 'square', 0.18, 0.25);
          }, 65);
        };
        _proto.PlayChimeSfx = function PlayChimeSfx() {
          var _this4 = this;
          this.PlayTone(523.25, 'sine', 0.16, 0.2);
          setTimeout(function () {
            return _this4.PlayTone(659.25, 'sine', 0.18, 0.2);
          }, 60);
          setTimeout(function () {
            return _this4.PlayTone(783.99, 'sine', 0.24, 0.2);
          }, 120);
        };
        _proto.PlayVictorySfx = function PlayVictorySfx() {
          var _this5 = this;
          var notes = [523.25, 659.25, 783.99, 1046.5, 1318.5];
          notes.forEach(function (freq, idx) {
            setTimeout(function () {
              _this5.PlayTone(freq, 'sine', 0.55, 0.26);
            }, idx * 100);
          });
        }

        // ==================== 场景与 UI 构建 ====================
        ;

        _proto.BuildSceneLayout = function BuildSceneLayout() {
          var root = this.node;
          var currentLayer = root.layer || Layers.Enum.UI_2D;

          // 统一美化背景为清爽浅灰蓝
          var bgNode = root.getChildByName("bg");
          if (bgNode) {
            var sp = bgNode.getComponent(Sprite);
            if (sp) {
              sp.color = new Color(241, 245, 249, 255);
            }
          }

          // 检测预制体中是否已预先搭建 HUD_Root
          var existingHud = this.hudRoot || root.getChildByName("HUD_Root");
          if (existingHud) {
            this.BindExistingLayout();
            return;
          }

          // 1. 顶部 HUD 区域 (y = 480)
          var hudNode = new Node("HUD_Root");
          hudNode.layer = currentLayer;
          hudNode.parent = root;
          hudNode.setPosition(0, 480, 0);

          // 主标题
          var titleNode = new Node("Title");
          titleNode.layer = currentLayer;
          titleNode.parent = hudNode;
          titleNode.setPosition(0, 56, 0);
          this.titleLabel = titleNode.addComponent(Label);
          this.titleLabel.string = "佛 系 消 消 消";
          this.titleLabel.fontSize = 40;
          this.titleLabel.lineHeight = 44;
          this.titleLabel.isBold = true;
          this.titleLabel.color = new Color(30, 41, 59, 255);

          // 副标题与操作指引
          var subTitleNode = new Node("SubTitle");
          subTitleNode.layer = currentLayer;
          subTitleNode.parent = hudNode;
          subTitleNode.setPosition(0, 12, 0);
          this.subTitleLabel = subTitleNode.addComponent(Label);
          this.subTitleLabel.string = "单击排除 · 双击找出牛 · 拖拽批量划线";
          this.subTitleLabel.fontSize = 20;
          this.subTitleLabel.lineHeight = 24;
          this.subTitleLabel.color = new Color(100, 116, 139, 255);

          // 状态徽章条 (放牛进度 + 计时器)
          var statusRow = new Node("StatusRow");
          statusRow.layer = currentLayer;
          statusRow.parent = hudNode;
          statusRow.setPosition(0, -32, 0);
          var cowNode = new Node("CowCount");
          cowNode.layer = currentLayer;
          cowNode.parent = statusRow;
          cowNode.setPosition(-120, 0, 0);
          this.cowCountLabel = cowNode.addComponent(Label);
          this.cowCountLabel.fontSize = 24;
          this.cowCountLabel.lineHeight = 28;
          this.cowCountLabel.isBold = true;
          this.cowCountLabel.color = new Color(16, 185, 129, 255);
          this.cowCountLabel.string = "🐮 灵牛: 0 / 4";
          var timerNode = new Node("Timer");
          timerNode.layer = currentLayer;
          timerNode.parent = statusRow;
          timerNode.setPosition(120, 0, 0);
          this.timerLabel = timerNode.addComponent(Label);
          this.timerLabel.fontSize = 22;
          this.timerLabel.lineHeight = 26;
          this.timerLabel.color = new Color(71, 85, 105, 255);
          this.timerLabel.string = "⏱ 00:00";

          // 2. 棋盘根节点 (y = 40)
          this.boardRoot = new Node("BoardRoot");
          this.boardRoot.layer = currentLayer;
          this.boardRoot.parent = root;
          this.boardRoot.setPosition(0, 40, 0);
          this.boardRoot.addComponent(UITransform);

          // 棋盘大底座
          var bgGraphicsNode = new Node("BoardBg");
          bgGraphicsNode.layer = currentLayer;
          bgGraphicsNode.parent = this.boardRoot;
          this.boardBgGraphics = bgGraphicsNode.addComponent(Graphics);

          // 特效层
          this.fxRoot = new Node("FX_Root");
          this.fxRoot.layer = currentLayer;
          this.fxRoot.parent = this.boardRoot;

          // 3. 通关横幅
          this.winBannerNode = new Node("WinBanner");
          this.winBannerNode.layer = currentLayer;
          this.winBannerNode.parent = root;
          this.winBannerNode.setPosition(0, 40, 0);
          this.winBannerNode.active = false;
          var bannerBg = this.winBannerNode.addComponent(Graphics);
          bannerBg.fillColor = new Color(15, 23, 42, 230);
          bannerBg.roundRect(-240, -60, 480, 120, 20);
          bannerBg.fill();
          bannerBg.strokeColor = new Color(52, 211, 153, 255);
          bannerBg.lineWidth = 3;
          bannerBg.stroke();
          var bannerText = new Node("WinText");
          bannerText.layer = currentLayer;
          bannerText.parent = this.winBannerNode;
          bannerText.setPosition(0, 0, 0);
          this.winBannerLabel = bannerText.addComponent(Label);
          this.winBannerLabel.string = "🎉 禅心明澈 · 通关妙成！";
          this.winBannerLabel.fontSize = 32;
          this.winBannerLabel.isBold = true;
          this.winBannerLabel.color = new Color(240, 253, 250, 255);

          // 4. 底部功能区域 (y = -380)
          this.BuildBottomControls(root, currentLayer);
        }

        /** 绑定并复用预制体中预先搭建的节点与 UI 组件 */;
        _proto.BindExistingLayout = function BindExistingLayout() {
          var root = this.node;
          if (!this.hudRoot) this.hudRoot = root.getChildByName("HUD_Root");
          if (this.hudRoot) {
            var _this$hudRoot$getChil, _this$hudRoot$getChil2;
            if (!this.titleLabel) this.titleLabel = (_this$hudRoot$getChil = this.hudRoot.getChildByName("Title")) == null ? void 0 : _this$hudRoot$getChil.getComponent(Label);
            if (!this.subTitleLabel) this.subTitleLabel = (_this$hudRoot$getChil2 = this.hudRoot.getChildByName("SubTitle")) == null ? void 0 : _this$hudRoot$getChil2.getComponent(Label);
            var statusRow = this.hudRoot.getChildByName("StatusRow");
            if (statusRow) {
              var _statusRow$getChildBy, _statusRow$getChildBy2;
              if (!this.cowCountLabel) this.cowCountLabel = (_statusRow$getChildBy = statusRow.getChildByName("CowCount")) == null ? void 0 : _statusRow$getChildBy.getComponent(Label);
              if (!this.timerLabel) this.timerLabel = (_statusRow$getChildBy2 = statusRow.getChildByName("Timer")) == null ? void 0 : _statusRow$getChildBy2.getComponent(Label);
            }
          }
          if (!this.boardRoot) this.boardRoot = root.getChildByName("BoardRoot");
          if (this.boardRoot) {
            var _this$boardRoot$getCh;
            if (!this.boardBgGraphics) this.boardBgGraphics = (_this$boardRoot$getCh = this.boardRoot.getChildByName("BoardBg")) == null ? void 0 : _this$boardRoot$getCh.getComponent(Graphics);
            if (!this.fxRoot) this.fxRoot = this.boardRoot.getChildByName("FX_Root");
          }
          if (!this.winBannerNode) this.winBannerNode = root.getChildByName("WinBanner");
          if (this.winBannerNode) {
            var _this$winBannerNode$g;
            if (!this.winBannerLabel) this.winBannerLabel = (_this$winBannerNode$g = this.winBannerNode.getChildByName("WinText")) == null ? void 0 : _this$winBannerNode$g.getComponent(Label);
          }
          if (!this.bottomControlsNode) this.bottomControlsNode = root.getChildByName("BottomControls");
          if (this.bottomControlsNode) {
            if (!this.tipCardNode) this.tipCardNode = this.bottomControlsNode.getChildByName("TipCard");
            var row2 = this.bottomControlsNode.getChildByName("Row2");
            if (row2) {
              if (!this.btnHintNode) this.btnHintNode = row2.getChildByName("Btn_💡 提示");
              if (!this.btnUndoNode) this.btnUndoNode = row2.getChildByName("Btn_↩ 撤销");
              if (!this.btnResetNode) this.btnResetNode = row2.getChildByName("Btn_🔄 重置");
              if (!this.btnRuleNode) this.btnRuleNode = row2.getChildByName("Btn_📖 规则");
            }
            var row3 = this.bottomControlsNode.getChildByName("Row3");
            if (row3) {
              if (!this.btnPrevNode) this.btnPrevNode = row3.getChildByName("Btn_⏮ 上一关");
              if (!this.btnNextNode) this.btnNextNode = row3.getChildByName("Btn_下一关 ⏭");
            }
          }

          // 在非编辑器运行时，绑定底部按钮的点击交互
          {
            this.BindButtonEvents();
          }
        };
        _proto.BindButtonEvents = function BindButtonEvents() {
          var _this6 = this;
          this.AttachButtonTouch(this.btnHintNode, function () {
            return _this6.ApplyHint();
          });
          this.AttachButtonTouch(this.btnUndoNode, function () {
            return _this6.Undo();
          });
          this.AttachButtonTouch(this.btnResetNode, function () {
            return _this6.ResetLevel();
          });
          this.AttachButtonTouch(this.btnRuleNode, function () {
            return _this6.ShowRuleTip();
          });
          this.AttachButtonTouch(this.btnPrevNode, function () {
            return _this6.SwitchSubLevel(-1);
          });
          this.AttachButtonTouch(this.btnNextNode, function () {
            return _this6.SwitchSubLevel(1);
          });
        };
        _proto.AttachButtonTouch = function AttachButtonTouch(btnNode, onClick) {
          var _this7 = this;
          if (!btnNode) return;
          btnNode.off(Node.EventType.TOUCH_START);
          btnNode.off(Node.EventType.TOUCH_END);
          btnNode.off(Node.EventType.TOUCH_CANCEL);
          btnNode.on(Node.EventType.TOUCH_START, function () {
            tween(btnNode).to(0.06, {
              scale: new Vec3(0.92, 0.92, 1)
            }).start();
          }, this);
          btnNode.on(Node.EventType.TOUCH_END, function () {
            tween(btnNode).to(0.1, {
              scale: new Vec3(1, 1, 1)
            }, {
              easing: 'backOut'
            }).start();
            _this7.PlayChimeSfx();
            onClick();
          }, this);
          btnNode.on(Node.EventType.TOUCH_CANCEL, function () {
            tween(btnNode).to(0.08, {
              scale: new Vec3(1, 1, 1)
            }).start();
          }, this);
        }

        /** 编辑器模式下所见即所得渲染 */;
        _proto.DrawEditorVisuals = function DrawEditorVisuals() {
          if (!this.boardBgGraphics) {
            if (this.boardRoot) {
              var _this$boardRoot$getCh2;
              this.boardBgGraphics = (_this$boardRoot$getCh2 = this.boardRoot.getChildByName("BoardBg")) == null ? void 0 : _this$boardRoot$getCh2.getComponent(Graphics);
            }
          }
          if (this.boardBgGraphics) {
            var g = this.boardBgGraphics;
            g.clear();
            var w = 500;
            var h = 500;
            // 棋盘卡片轻阴影
            g.fillColor = this.COLOR_BOARD_SHADOW;
            g.roundRect(-w / 2, -h / 2 - 8, w, h + 8, 24);
            g.fill();

            // 棋盘卡片主体
            g.fillColor = this.COLOR_BOARD_CARD;
            g.roundRect(-w / 2, -h / 2, w, h, 24);
            g.fill();

            // 棋盘卡片边框
            g.strokeColor = this.COLOR_BOARD_BORDER;
            g.lineWidth = 2.5;
            g.roundRect(-w / 2, -h / 2, w, h, 24);
            g.stroke();

            // 绘制示例 4x4 网格预览
            var size = 4;
            var cSize = 88;
            var cGap = 12;
            var startX = -((size * cSize + (size - 1) * cGap) / 2) + cSize / 2;
            var startY = (size * cSize + (size - 1) * cGap) / 2 - cSize / 2;
            var sampleRegions = [[0, 0, 1, 1], [0, 2, 2, 1], [3, 2, 2, 1], [3, 3, 3, 3]];
            for (var r = 0; r < size; r++) {
              for (var c = 0; c < size; c++) {
                var cx = startX + c * (cSize + cGap);
                var cy = startY - r * (cSize + cGap);
                var regIdx = sampleRegions[r][c];
                // 底部立体微阴影
                g.fillColor = this.REGION_BEVEL_PALETTES[regIdx];
                g.roundRect(cx - cSize / 2, cy - cSize / 2 - 3, cSize, cSize, 14);
                g.fill();
                // 色块主体
                g.fillColor = this.REGION_PALETTES[regIdx];
                g.roundRect(cx - cSize / 2, cy - cSize / 2, cSize, cSize, 14);
                g.fill();
              }
            }
          }
        };
        _proto.BuildBottomControls = function BuildBottomControls(root, layer) {
          var _this8 = this;
          var bottomNode = new Node("BottomControls");
          bottomNode.layer = layer;
          bottomNode.parent = root;
          bottomNode.setPosition(0, -380, 0);

          // 第 1 排：温馨操作指引卡 (y = 52)
          var row1 = new Node("TipCard");
          row1.layer = layer;
          row1.parent = bottomNode;
          row1.setPosition(0, 52, 0);
          var tipBg = row1.addComponent(Graphics);
          tipBg.fillColor = new Color(241, 245, 249, 255);
          tipBg.roundRect(-245, -28, 490, 56, 14);
          tipBg.fill();
          tipBg.strokeColor = new Color(203, 213, 225, 255);
          tipBg.lineWidth = 1.5;
          tipBg.roundRect(-245, -28, 490, 56, 14);
          tipBg.stroke();
          var tipLblNode = new Node("TipLabel");
          tipLblNode.layer = layer;
          tipLblNode.parent = row1;
          tipLblNode.setPosition(0, 0, 0);
          var tipLbl = tipLblNode.addComponent(Label);
          tipLbl.string = "👆 单击排除 ✕  |  ✌️ 双击放牛 🐮  |  👉 拖拽划线";
          tipLbl.fontSize = 19;
          tipLbl.lineHeight = 23;
          tipLbl.isBold = true;
          tipLbl.color = new Color(71, 85, 105, 255);

          // 第 2 排：辅助工具 (y = -18)
          var row2 = new Node("Row2");
          row2.layer = layer;
          row2.parent = bottomNode;
          row2.setPosition(0, -18, 0);
          this.CreateSimpleButton(row2, -225, 0, 120, 54, "💡 提示", new Color(254, 249, 195, 255), layer, function () {
            _this8.ApplyHint();
          });
          this.CreateSimpleButton(row2, -75, 0, 120, 54, "↩ 撤销", new Color(243, 244, 246, 255), layer, function () {
            _this8.Undo();
          });
          this.CreateSimpleButton(row2, 75, 0, 120, 54, "🔄 重置", new Color(254, 226, 226, 255), layer, function () {
            _this8.ResetLevel();
          });
          this.CreateSimpleButton(row2, 225, 0, 120, 54, "📖 规则", new Color(224, 231, 255, 255), layer, function () {
            _this8.ShowRuleTip();
          });

          // 第 3 排：换关按钮 (y = -86)
          var row3 = new Node("Row3");
          row3.layer = layer;
          row3.parent = bottomNode;
          row3.setPosition(0, -86, 0);
          this.CreateSimpleButton(row3, -135, 0, 180, 50, "⏮ 上一关", new Color(241, 245, 249, 255), layer, function () {
            _this8.SwitchSubLevel(-1);
          });
          this.CreateSimpleButton(row3, 135, 0, 180, 50, "下一关 ⏭", new Color(241, 245, 249, 255), layer, function () {
            _this8.SwitchSubLevel(1);
          });
        };
        _proto.CreateSimpleButton = function CreateSimpleButton(parent, x, y, w, h, text, bgColor, layer, onClick) {
          var _this9 = this;
          var btnNode = new Node("Btn_" + text);
          btnNode.layer = layer;
          btnNode.parent = parent;
          btnNode.setPosition(x, y, 0);
          var ut = btnNode.addComponent(UITransform);
          ut.setContentSize(w, h);
          var g = btnNode.addComponent(Graphics);
          g.fillColor = new Color(203, 213, 225, 200);
          g.roundRect(-w / 2, -h / 2 - 3, w, h, 14);
          g.fill();
          g.fillColor = bgColor;
          g.roundRect(-w / 2, -h / 2, w, h, 14);
          g.fill();
          g.strokeColor = new Color(148, 163, 184, 180);
          g.lineWidth = 2;
          g.stroke();
          var lblNode = new Node("Label");
          lblNode.layer = layer;
          lblNode.parent = btnNode;
          lblNode.setPosition(0, 0, 0);
          var lbl = lblNode.addComponent(Label);
          lbl.string = text;
          lbl.fontSize = 19;
          lbl.lineHeight = 23;
          lbl.isBold = true;
          lbl.color = new Color(30, 41, 59, 255);
          btnNode.on(Node.EventType.TOUCH_START, function () {
            tween(btnNode).to(0.06, {
              scale: new Vec3(0.92, 0.92, 1)
            }).start();
          }, this);
          btnNode.on(Node.EventType.TOUCH_END, function () {
            tween(btnNode).to(0.1, {
              scale: new Vec3(1, 1, 1)
            }, {
              easing: 'backOut'
            }).start();
            _this9.PlayChimeSfx();
            onClick();
          }, this);
          btnNode.on(Node.EventType.TOUCH_CANCEL, function () {
            tween(btnNode).to(0.08, {
              scale: new Vec3(1, 1, 1)
            }).start();
          }, this);
          return btnNode;
        }

        // ==================== 统一触控交互：单击排除、双击放牛、拖拽划线 ====================
        ;

        _proto.RegisterTouchListeners = function RegisterTouchListeners() {
          if (!this.boardRoot) return;
          this.boardRoot.on(Node.EventType.TOUCH_START, this.OnTouchStart, this);
          this.boardRoot.on(Node.EventType.TOUCH_MOVE, this.OnTouchMove, this);
          this.boardRoot.on(Node.EventType.TOUCH_END, this.OnTouchEnd, this);
          this.boardRoot.on(Node.EventType.TOUCH_CANCEL, this.OnTouchEnd, this);
        };
        _proto.GetCellAtScreenPos = function GetCellAtScreenPos(loc) {
          if (!this.boardRoot) return null;
          var ut = this.boardRoot.getComponent(UITransform);
          if (!ut) return null;
          var localPos = ut.convertToNodeSpaceAR(new Vec3(loc.x, loc.y, 0));
          var dx = localPos.x - this.startX;
          var dy = this.startY - localPos.y;
          if (dx >= 0 && dx <= this.boardTotalWidth && dy >= 0 && dy <= this.boardTotalHeight) {
            var step = this.cellSize + this.cellGap;
            var c = Math.min(this.boardSize - 1, Math.max(0, Math.floor(dx / step)));
            var r = Math.min(this.boardSize - 1, Math.max(0, Math.floor(dy / step)));
            return {
              r: r,
              c: c
            };
          }
          return null;
        };
        _proto.OnTouchStart = function OnTouchStart(event) {
          if (this.isGameWon) return;
          var loc = event.getUILocation ? event.getUILocation() : event.getLocation();
          this.touchStartScreenPos.set(loc.x, loc.y);
          this.isTouchDragging = false;
          this.draggedKeysInStroke.clear();

          // 记录手势开始前的盘面快照，用于拖拽整笔撤销
          this.preGestureSnapshot = this.boardState.map(function (row) {
            return [].concat(row);
          });
          this.startTouchCell = this.GetCellAtScreenPos(loc);
        };
        _proto.OnTouchMove = function OnTouchMove(event) {
          if (this.isGameWon || !this.startTouchCell) return;
          var loc = event.getUILocation ? event.getUILocation() : event.getLocation();
          var dist = Vec2.distance(this.touchStartScreenPos, loc);

          // 移动距离大于 12px 即判定为拖拽划线手势
          if (dist > 12) {
            this.isTouchDragging = true;
          }
          if (this.isTouchDragging) {
            // 确保起始触控格子也被纳入划线处理
            var startKey = this.startTouchCell.r + "_" + this.startTouchCell.c;
            if (!this.draggedKeysInStroke.has(startKey)) {
              this.draggedKeysInStroke.add(startKey);
              this.ApplyDragOnCell(this.startTouchCell.r, this.startTouchCell.c);
            }

            // 划线经过的格子：如果已选中则执行取消，如果是空白则打叉排除
            var cell = this.GetCellAtScreenPos(loc);
            if (cell) {
              var key = cell.r + "_" + cell.c;
              if (!this.draggedKeysInStroke.has(key)) {
                this.draggedKeysInStroke.add(key);
                this.ApplyDragOnCell(cell.r, cell.c);
              }
            }
          }
        };
        _proto.OnTouchEnd = function OnTouchEnd(event) {
          if (this.isGameWon || !this.startTouchCell) return;
          if (this.isTouchDragging) {
            // 拖拽划线结束：保存该划线历史快照
            if (this.draggedKeysInStroke.size > 0 && this.preGestureSnapshot) {
              this.historyStack.push({
                board: this.preGestureSnapshot
              });
              if (this.historyStack.length > 40) this.historyStack.shift();
              this.CheckBoardStatus();
            }
            this.isTouchDragging = false;
            this.startTouchCell = null;
            return;
          }

          // 非拖拽即为点击操作：精准处理单击排除与双击放牛
          var loc = event.getUILocation ? event.getUILocation() : event.getLocation();
          var cell = this.GetCellAtScreenPos(loc);
          if (cell && cell.r === this.startTouchCell.r && cell.c === this.startTouchCell.c) {
            this.HandleCellClick(cell.r, cell.c);
          }
          this.startTouchCell = null;
          this.isTouchDragging = false;
        }

        /**
         * 拖拽划线触发到单个方块时的逻辑：
         * 如果已经选中的（无论是打叉 ✕ 还是灵牛 🐮），拖拽触发到时执行【取消】（清空为空白）；
         * 如果是空白未选中的，拖拽触发到时打上 ✕ 排除标记。
         */;
        _proto.ApplyDragOnCell = function ApplyDragOnCell(r, c) {
          var currentState = this.boardState[r][c];
          if (currentState === CellState.Cross || currentState === CellState.Cow) {
            // 已经选中的，拖拽触发到时执行取消
            this.boardState[r][c] = CellState.Empty;
            this.PlayClearSfx();
            this.AnimateCellPop(r, c);
          } else if (currentState === CellState.Empty) {
            // 未选中的，拖拽触发到时打叉排除
            this.boardState[r][c] = CellState.Cross;
            this.PlayCrossSfx();
            this.AnimateCellPop(r, c);
          }
          this.RedrawAllCells();
        }

        /** 格子点击核心逻辑：单击排除 ✕，双击找出牛 🐮 */;
        _proto.HandleCellClick = function HandleCellClick(r, c) {
          var _this$cellLabels$get;
          var key = r + "_" + c;
          var now = Date.now();
          var timeDiff = now - this.lastClickTime;

          // 判定是否为双击（同格 350ms 内二次点击）
          var isDoubleClick = this.lastClickCellKey === key && timeDiff < 350;
          var currentState = this.boardState[r][c];
          var newState = currentState;
          if (isDoubleClick) {
            // ================= 【双击】：找出牛 / 放置牛 =================
            if (currentState === CellState.Cow) {
              newState = CellState.Empty;
            } else {
              newState = CellState.Cow;
            }

            // 双击成功：重置记录，防止三连击冲突
            this.lastClickTime = 0;
            this.lastClickCellKey = '';

            // 如果上一次单击记录了临时快照，替换为双击前的原始快照，使撤销更干净
            if (this.historyStack.length > 0) {
              this.historyStack.pop();
            }
          } else {
            // ================= 【单击】：排除打叉 ✕ =================
            this.lastClickTime = now;
            this.lastClickCellKey = key;
            if (currentState === CellState.Empty) {
              // 空白 -> 打叉排除
              newState = CellState.Cross;
            } else if (currentState === CellState.Cross) {
              // 已打叉 -> 擦除为空白
              newState = CellState.Empty;
            } else if (currentState === CellState.Cow) {
              // 点击已有的牛 -> 撤销牛为空白
              newState = CellState.Empty;
            }
          }
          if (newState === currentState) return;
          this.PushHistory();
          this.boardState[r][c] = newState;
          var cellNode = this.cellNodes.get(key);
          var iconNode = (_this$cellLabels$get = this.cellLabels.get(key)) == null ? void 0 : _this$cellLabels$get.node;
          if (cellNode) {
            cellNode.setScale(new Vec3(1, 1, 1));
          }
          if (iconNode) {
            Tween.stopAllByTarget(iconNode);
            if (newState === CellState.Cow) {
              this.PlayCowSfx();
              iconNode.setScale(new Vec3(0.3, 0.3, 1));
              tween(iconNode).to(0.18, {
                scale: new Vec3(1.35, 1.35, 1)
              }, {
                easing: 'backOut'
              }).to(0.08, {
                scale: new Vec3(1, 1, 1)
              }).start();
            } else if (newState === CellState.Cross) {
              this.PlayCrossSfx();
              iconNode.setScale(new Vec3(0.5, 0.5, 1));
              tween(iconNode).to(0.12, {
                scale: new Vec3(1, 1, 1)
              }, {
                easing: 'backOut'
              }).start();
            } else {
              iconNode.setScale(new Vec3(1, 1, 1));
              this.PlayClearSfx();
            }
          }

          // 绝不自动排除！全权交由玩家自主掌控
          this.RedrawAllCells();
          this.CheckBoardStatus();
        };
        _proto.AnimateCellPop = function AnimateCellPop(r, c) {
          var _this$cellLabels$get2;
          var iconNode = (_this$cellLabels$get2 = this.cellLabels.get(r + "_" + c)) == null ? void 0 : _this$cellLabels$get2.node;
          if (iconNode) {
            Tween.stopAllByTarget(iconNode);
            iconNode.setScale(new Vec3(0.6, 0.6, 1));
            tween(iconNode).to(0.1, {
              scale: new Vec3(1, 1, 1)
            }).start();
          }
        }

        // ==================== 关卡排版与渲染 ====================
        ;

        _proto.LoadSubLevel = function LoadSubLevel(subLevelIdx) {
          if (!this.lvData) return;
          var total = this.lvData.GetTotalSubLevels();
          if (total === 0) return;
          this.currentSubLevelIndex = clamp(subLevelIdx, 0, total - 1);
          this.currentPuzzle = this.lvData.GetSubLevelData(this.currentSubLevelIndex);
          if (!this.currentPuzzle) return;
          this.boardSize = this.currentPuzzle.size;
          this.isGameWon = false;
          this.unscheduleAllCallbacks();
          this.elapsedTime = 0;
          this.isTimerRunning = true;
          this.historyStack = [];
          this.winBannerNode.active = false;
          this.boardState = [];
          for (var r = 0; r < this.boardSize; r++) {
            this.boardState[r] = [];
            for (var c = 0; c < this.boardSize; c++) {
              this.boardState[r][c] = CellState.Empty;
            }
          }
          this.titleLabel.string = "佛 系 消 消 消";
          this.subTitleLabel.string = this.currentPuzzle.name + " \xB7 \u5355\u51FB\u6392\u9664 \xB7 \u53CC\u51FB\u653E\u725B";
          this.UpdateCowCountDisplay(0, false);
          this.UpdateTimerDisplay();
          this.RenderSpacedBoard();
          this.PushHistory();
        };
        _proto.SwitchSubLevel = function SwitchSubLevel(delta) {
          var total = this.lvData ? this.lvData.GetTotalSubLevels() : 1;
          var nextIdx = (this.currentSubLevelIndex + delta + total) % total;
          this.LoadSubLevel(nextIdx);
        };
        _proto.RenderSpacedBoard = function RenderSpacedBoard() {
          this.cellNodes.forEach(function (n) {
            return n.destroy();
          });
          this.cellNodes.clear();
          this.cellGraphics.clear();
          this.cellLabels.clear();
          this.fxRoot.removeAllChildren();
          var n = this.boardSize;

          // 格子尺寸与舒适间隔（明确拉开间距，不拥挤）
          if (n <= 4) {
            this.cellSize = 112;
            this.cellGap = 16;
          } else if (n === 5) {
            this.cellSize = 94;
            this.cellGap = 13;
          } else if (n === 6) {
            this.cellSize = 80;
            this.cellGap = 11;
          } else if (n === 7) {
            this.cellSize = 70;
            this.cellGap = 9;
          } else {
            this.cellSize = 62;
            this.cellGap = 8;
          }
          this.boardTotalWidth = n * this.cellSize + (n - 1) * this.cellGap;
          this.boardTotalHeight = n * this.cellSize + (n - 1) * this.cellGap;
          this.startX = -this.boardTotalWidth / 2;
          this.startY = this.boardTotalHeight / 2;
          var currentLayer = this.node.layer || Layers.Enum.UI_2D;
          var pad = 18;
          var boardUT = this.boardRoot.getComponent(UITransform) || this.boardRoot.addComponent(UITransform);
          boardUT.setContentSize(this.boardTotalWidth + pad * 2, this.boardTotalHeight + pad * 2);

          // 1. 棋盘底座卡片绘制
          this.boardBgGraphics.clear();
          this.boardBgGraphics.fillColor = this.COLOR_BOARD_SHADOW;
          this.boardBgGraphics.roundRect(-this.boardTotalWidth / 2 - pad, -this.boardTotalHeight / 2 - pad - 6, this.boardTotalWidth + pad * 2, this.boardTotalHeight + pad * 2 + 12, 28);
          this.boardBgGraphics.fill();
          this.boardBgGraphics.fillColor = this.COLOR_BOARD_CARD;
          this.boardBgGraphics.roundRect(-this.boardTotalWidth / 2 - pad, -this.boardTotalHeight / 2 - pad, this.boardTotalWidth + pad * 2, this.boardTotalHeight + pad * 2, 24);
          this.boardBgGraphics.fill();
          this.boardBgGraphics.strokeColor = this.COLOR_BOARD_BORDER;
          this.boardBgGraphics.lineWidth = 2.5;
          this.boardBgGraphics.roundRect(-this.boardTotalWidth / 2 - pad, -this.boardTotalHeight / 2 - pad, this.boardTotalWidth + pad * 2, this.boardTotalHeight + pad * 2, 24);
          this.boardBgGraphics.stroke();

          // 2. 逐格生成独立带有间隔的圆角方块
          var step = this.cellSize + this.cellGap;
          for (var r = 0; r < n; r++) {
            for (var c = 0; c < n; c++) {
              var key = r + "_" + c;
              var cellCenterX = this.startX + c * step + this.cellSize / 2;
              var cellCenterY = this.startY - r * step - this.cellSize / 2;
              var cellNode = new Node("Cell_" + key);
              cellNode.layer = currentLayer;
              cellNode.parent = this.boardRoot;
              cellNode.setPosition(cellCenterX, cellCenterY, 0);
              var ut = cellNode.addComponent(UITransform);
              ut.setContentSize(this.cellSize, this.cellSize);
              var g = cellNode.addComponent(Graphics);
              this.cellGraphics.set(key, g);
              var labelNode = new Node("Icon");
              labelNode.layer = currentLayer;
              labelNode.parent = cellNode;
              labelNode.setPosition(0, 0, 0);
              var label = labelNode.addComponent(Label);
              label.fontSize = Math.floor(this.cellSize * 0.52);
              label.lineHeight = label.fontSize + 4;
              label.isBold = true;
              this.cellLabels.set(key, label);
              this.cellNodes.set(key, cellNode);
            }
          }
          this.RedrawAllCells();
        };
        _proto.RedrawAllCells = function RedrawAllCells() {
          var conflicts = this.FindConflictingCows();
          var grid = this.currentPuzzle.grid;
          var half = this.cellSize / 2;
          var radius = Math.max(8, Math.floor(this.cellSize * 0.18));
          var bevelH = Math.max(3, Math.floor(this.cellSize * 0.05));
          for (var r = 0; r < this.boardSize; r++) {
            for (var c = 0; c < this.boardSize; c++) {
              var key = r + "_" + c;
              var cellNode = this.cellNodes.get(key);
              if (cellNode) {
                cellNode.setScale(new Vec3(1, 1, 1));
              }
              var g = this.cellGraphics.get(key);
              var label = this.cellLabels.get(key);
              var state = this.boardState[r][c];
              var regionIdx = grid[r][c];
              var isConflict = conflicts.has(key);
              if (g) {
                g.clear();

                // 1. 底部 3D 阴影倒角
                var bevelColor = this.REGION_BEVEL_PALETTES[regionIdx % this.REGION_BEVEL_PALETTES.length];
                if (isConflict) bevelColor = new Color(248, 113, 113, 255);
                g.fillColor = bevelColor;
                g.roundRect(-half, -half - bevelH, this.cellSize, this.cellSize, radius);
                g.fill();

                // 2. 主表面色
                var faceColor = this.REGION_PALETTES[regionIdx % this.REGION_PALETTES.length];
                if (isConflict) faceColor = this.COLOR_CONFLICT_BG;
                g.fillColor = faceColor;
                g.roundRect(-half, -half, this.cellSize, this.cellSize, radius);
                g.fill();

                // 3. 边框线
                if (isConflict) {
                  g.strokeColor = this.COLOR_CONFLICT_BORDER;
                  g.lineWidth = 3.5;
                  g.roundRect(-half + 1, -half + 1, this.cellSize - 2, this.cellSize - 2, radius);
                  g.stroke();
                } else {
                  g.strokeColor = new Color(255, 255, 255, 160);
                  g.lineWidth = 1.5;
                  g.roundRect(-half + 1, -half + 1, this.cellSize - 2, this.cellSize - 2, radius);
                  g.stroke();
                }

                // 4. 灵牛金勋章底座
                if (state === CellState.Cow) {
                  var badgeR = Math.max(16, Math.floor(this.cellSize * 0.36));
                  g.fillColor = isConflict ? new Color(254, 202, 202, 255) : new Color(254, 240, 138, 255);
                  g.circle(0, 0, badgeR);
                  g.fill();
                  g.strokeColor = isConflict ? new Color(239, 68, 68, 255) : new Color(234, 179, 8, 255);
                  g.lineWidth = 2.5;
                  g.circle(0, 0, badgeR);
                  g.stroke();
                }
              }

              // 5. 符号渲染 (牛牛 🐮 / 排除 ✕)
              if (label) {
                if (state === CellState.Cow) {
                  label.string = "🐮";
                  label.color = isConflict ? new Color(220, 38, 38, 255) : new Color(30, 41, 59, 255);
                } else if (state === CellState.Cross) {
                  label.string = "✕";
                  label.color = new Color(100, 116, 139, 220);
                } else {
                  label.string = "";
                  label.node.setScale(new Vec3(1, 1, 1));
                }
              }
            }
          }
        }

        // ==================== 规则冲突判定与胜负 ====================
        ;

        _proto.FindConflictingCows = function FindConflictingCows() {
          var conflicts = new Set();
          var cows = [];
          for (var r = 0; r < this.boardSize; r++) {
            for (var c = 0; c < this.boardSize; c++) {
              if (this.boardState[r][c] === CellState.Cow) {
                cows.push({
                  r: r,
                  c: c,
                  region: this.currentPuzzle.grid[r][c],
                  key: r + "_" + c
                });
              }
            }
          }
          for (var i = 0; i < cows.length; i++) {
            for (var j = i + 1; j < cows.length; j++) {
              var a = cows[i];
              var b = cows[j];
              var sameRow = a.r === b.r;
              var sameCol = a.c === b.c;
              var sameRegion = a.region === b.region;
              var isNeighbor = Math.abs(a.r - b.r) <= 1 && Math.abs(a.c - b.c) <= 1;
              if (sameRow || sameCol || sameRegion || isNeighbor) {
                conflicts.add(a.key);
                conflicts.add(b.key);
              }
            }
          }
          return conflicts;
        };
        _proto.CheckBoardStatus = function CheckBoardStatus() {
          var _this10 = this;
          var conflicts = this.FindConflictingCows();
          var totalCows = 0;
          var rowCounts = new Array(this.boardSize).fill(0);
          var colCounts = new Array(this.boardSize).fill(0);
          var regionCounts = new Array(this.boardSize).fill(0);
          for (var r = 0; r < this.boardSize; r++) {
            for (var c = 0; c < this.boardSize; c++) {
              if (this.boardState[r][c] === CellState.Cow) {
                totalCows++;
                rowCounts[r]++;
                colCounts[c]++;
                regionCounts[this.currentPuzzle.grid[r][c]]++;
              }
            }
          }
          this.UpdateCowCountDisplay(totalCows, conflicts.size > 0);
          if (conflicts.size > 0) {
            this.PlayConflictSfx();
            var step = this.cellSize + this.cellGap;
            conflicts.forEach(function (key) {
              var node = _this10.cellNodes.get(key);
              if (node) {
                var parts = key.split('_');
                var cr = parseInt(parts[0], 10);
                var cc = parseInt(parts[1], 10);
                var origX = _this10.startX + cc * step + _this10.cellSize / 2;
                var origY = _this10.startY - cr * step - _this10.cellSize / 2;
                Tween.stopAllByTarget(node);
                node.setPosition(origX, origY, 0);
                node.setScale(new Vec3(1, 1, 1));
                tween(node).to(0.04, {
                  position: new Vec3(origX - 6, origY, 0)
                }).to(0.04, {
                  position: new Vec3(origX + 6, origY, 0)
                }).to(0.04, {
                  position: new Vec3(origX - 3, origY, 0)
                }).to(0.04, {
                  position: new Vec3(origX, origY, 0)
                }).start();
              }
            });
            return;
          }
          var isAllRowsValid = rowCounts.every(function (cnt) {
            return cnt === 1;
          });
          var isAllColsValid = colCounts.every(function (cnt) {
            return cnt === 1;
          });
          var isAllRegionsValid = regionCounts.every(function (cnt) {
            return cnt === 1;
          });
          if (totalCows === this.boardSize && isAllRowsValid && isAllColsValid && isAllRegionsValid) {
            this.OnGameVictory();
          }
        };
        _proto.OnGameVictory = function OnGameVictory() {
          var _this11 = this;
          this.isGameWon = true;
          this.isTimerRunning = false;
          this.PlayVictorySfx();
          this.SpawnVictoryParticles();
          tween(this.boardRoot).to(0.18, {
            scale: new Vec3(1.05, 1.05, 1)
          }, {
            easing: 'sineOut'
          }).to(0.24, {
            scale: new Vec3(1, 1, 1)
          }, {
            easing: 'sineIn'
          }).start();
          var totalSubLevels = this.lvData ? this.lvData.GetTotalSubLevels() : 1;
          var isAllCleared = this.currentSubLevelIndex >= totalSubLevels - 1;
          this.winBannerNode.active = true;
          this.winBannerNode.setScale(new Vec3(0.2, 0.2, 1));
          tween(this.winBannerNode).to(0.32, {
            scale: new Vec3(1, 1, 1)
          }, {
            easing: 'backOut'
          }).start();
          if (isAllCleared) {
            // 全部关卡均已通过！弹出大捷横幅，并调用框架结算
            if (this.winBannerLabel) {
              this.winBannerLabel.string = "🏆 功德圆满 · 全部通关！";
            }
            // 关键：只有全部通过才调用该函数
            this.SetResultType(ResultType.Win, 1.6);
          } else {
            // 当前小关通过：提示并自动平滑过渡进入下一关，不调用 SetResultType
            if (this.winBannerLabel) {
              this.winBannerLabel.string = "\uD83C\uDF89 \u7B2C " + (this.currentSubLevelIndex + 1) + " \u5173\u901A\u8FC7\uFF01\u5373\u5C06\u8FDB\u5165\u4E0B\u4E00\u5173...";
            }
            this.scheduleOnce(function () {
              _this11.LoadSubLevel(_this11.currentSubLevelIndex + 1);
            }, 1.4);
          }
        };
        _proto.SpawnVictoryParticles = function SpawnVictoryParticles() {
          var _this12 = this;
          var colors = [new Color(251, 191, 36, 255), new Color(52, 211, 153, 255), new Color(96, 165, 250, 255), new Color(244, 114, 182, 255), new Color(167, 139, 250, 255)];
          var _loop = function _loop() {
            var pNode = new Node("P");
            pNode.layer = _this12.node.layer || Layers.Enum.UI_2D;
            pNode.parent = _this12.fxRoot;
            pNode.setPosition(0, 0, 0);
            var g = pNode.addComponent(Graphics);
            g.fillColor = colors[i % colors.length];
            g.circle(0, 0, 5 + Math.random() * 6);
            g.fill();
            var angle = Math.random() * Math.PI * 2;
            var dist = 140 + Math.random() * 240;
            var targetX = Math.cos(angle) * dist;
            var targetY = Math.sin(angle) * dist;
            tween(pNode).to(0.65 + Math.random() * 0.35, {
              position: new Vec3(targetX, targetY, 0),
              scale: new Vec3(0, 0, 1)
            }, {
              easing: 'cubicOut'
            }).call(function () {
              return pNode.destroy();
            }).start();
          };
          for (var i = 0; i < 45; i++) {
            _loop();
          }
        }

        // ==================== 辅助功能：提示、撤销、重置 ====================
        ;

        _proto.ApplyHint = function ApplyHint() {
          var _this13 = this;
          if (this.isGameWon || !this.currentPuzzle) return;
          var solution = this.currentPuzzle.solution;
          var step = this.cellSize + this.cellGap;

          // 1. 全面排查：检测棋盘上所有已放牛的位置是否在官方唯一解中
          var wrongCows = [];
          var _loop2 = function _loop2(r) {
            var _loop3 = function _loop3(_c) {
              if (_this13.boardState[r][_c] === CellState.Cow) {
                var isCorrect = solution.some(function (_ref) {
                  var sr = _ref[0],
                    sc = _ref[1];
                  return sr === r && sc === _c;
                });
                if (!isCorrect) {
                  wrongCows.push({
                    r: r,
                    c: _c
                  });
                }
              }
            };
            for (var _c = 0; _c < _this13.boardSize; _c++) {
              _loop3(_c);
            }
          };
          for (var r = 0; r < this.boardSize; r++) {
            _loop2(r);
          }

          // 保存历史记录快照以支持撤销
          this.PushHistory();

          // 2. 如果存在错误的牛：纠正并移除所有错误的牛，施加红色警示抖动反馈并播放警示音
          if (wrongCows.length > 0) {
            for (var _iterator = _createForOfIteratorHelperLoose(wrongCows), _step; !(_step = _iterator()).done;) {
              var wc = _step.value;
              this.boardState[wc.r][wc.c] = CellState.Empty;
              var key = wc.r + "_" + wc.c;
              var cellNode = this.cellNodes.get(key);
              if (cellNode) {
                var origX = this.startX + wc.c * step + this.cellSize / 2;
                var origY = this.startY - wc.r * step - this.cellSize / 2;
                Tween.stopAllByTarget(cellNode);
                cellNode.setPosition(origX, origY, 0);
                cellNode.setScale(new Vec3(1, 1, 1));
                tween(cellNode).to(0.04, {
                  position: new Vec3(origX - 8, origY, 0)
                }).to(0.04, {
                  position: new Vec3(origX + 8, origY, 0)
                }).to(0.04, {
                  position: new Vec3(origX - 4, origY, 0)
                }).to(0.04, {
                  position: new Vec3(origX, origY, 0)
                }).start();
              }
            }
            this.PlayConflictSfx();
          }

          // 3. 寻找下一个尚未放置灵牛的正确解坐标
          var hintTarget = null;
          for (var _iterator2 = _createForOfIteratorHelperLoose(solution), _step2; !(_step2 = _iterator2()).done;) {
            var _step2$value = _step2.value,
              _r2 = _step2$value[0],
              _c2 = _step2$value[1];
            if (this.boardState[_r2][_c2] !== CellState.Cow) {
              hintTarget = [_r2, _c2];
              break;
            }
          }
          if (hintTarget) {
            var _this$cellLabels$get3;
            var _hintTarget = hintTarget,
              _r = _hintTarget[0],
              c = _hintTarget[1];
            this.boardState[_r][c] = CellState.Cow;
            var _key2 = _r + "_" + c;
            var _cellNode = this.cellNodes.get(_key2);
            var iconNode = (_this$cellLabels$get3 = this.cellLabels.get(_key2)) == null ? void 0 : _this$cellLabels$get3.node;
            if (_cellNode) {
              var _origX = this.startX + c * step + this.cellSize / 2;
              var _origY = this.startY - _r * step - this.cellSize / 2;
              Tween.stopAllByTarget(_cellNode);
              _cellNode.setPosition(_origX, _origY, 0);
              _cellNode.setScale(new Vec3(1, 1, 1));
            }
            if (iconNode) {
              Tween.stopAllByTarget(iconNode);
              iconNode.setScale(new Vec3(0.3, 0.3, 1));
              tween(iconNode).to(0.18, {
                scale: new Vec3(1.35, 1.35, 1)
              }, {
                easing: 'backOut'
              }).to(0.08, {
                scale: new Vec3(1, 1, 1)
              }).start();
            }
            if (wrongCows.length > 0) {
              setTimeout(function () {
                return _this13.PlayCowSfx();
              }, 160);
              if (this.subTitleLabel) {
                this.subTitleLabel.string = "\uD83D\uDCA1 \u63D0\u793A\uFF1A\u5DF2\u7EA0\u6B63\u5E76\u79FB\u9664 " + wrongCows.length + " \u5934\u9519\u8BEF\u7684\u7075\u725B\uFF0C\u5E76\u4E3A\u4F60\u70B9\u4EAE\u6B63\u786E\u4F4D\u7F6E\uFF01";
              }
            } else {
              this.PlayCowSfx();
              if (this.subTitleLabel) {
                this.subTitleLabel.string = "\uD83D\uDCA1 \u63D0\u793A\uFF1A\u5F53\u524D\u653E\u7F6E\u5747\u6B63\u786E\uFF01\u5DF2\u4E3A\u4F60\u70B9\u4EAE\u7B2C " + (_r + 1) + " \u884C\u7684\u7075\u725B\uFF01";
              }
            }
          } else {
            // 没有缺少的牛（所有正解牛均已在场）
            if (wrongCows.length > 0) {
              if (this.subTitleLabel) {
                this.subTitleLabel.string = "\uD83D\uDCA1 \u63D0\u793A\uFF1A\u5DF2\u6E05\u9664 " + wrongCows.length + " \u5934\u9519\u8BEF\u7684\u7075\u725B\uFF0C\u5F53\u524D\u6240\u6709\u7075\u725B\u5747\u5DF2\u6B63\u786E\uFF01";
              }
            } else {
              if (this.subTitleLabel) {
                this.subTitleLabel.string = "\uD83D\uDCA1 \u68CB\u76D8\u4E0A\u6240\u6709\u7684\u7075\u725B\u5747\u5DF2\u653E\u7F6E\u6B63\u786E\uFF01";
              }
            }
          }
          if (this.subTitleLabel) {
            Tween.stopAllByTarget(this.subTitleLabel.node);
            this.subTitleLabel.node.setScale(new Vec3(1, 1, 1));
            tween(this.subTitleLabel.node).to(0.1, {
              scale: new Vec3(1.08, 1.08, 1)
            }).to(0.12, {
              scale: new Vec3(1, 1, 1)
            }).start();
          }
          this.RedrawAllCells();
          this.CheckBoardStatus();
        };
        _proto.Undo = function Undo() {
          if (this.historyStack.length <= 1) return;
          this.historyStack.pop();
          var prev = this.historyStack[this.historyStack.length - 1];
          if (prev) {
            for (var r = 0; r < this.boardSize; r++) {
              for (var c = 0; c < this.boardSize; c++) {
                this.boardState[r][c] = prev.board[r][c];
              }
            }
            this.RedrawAllCells();
            this.CheckBoardStatus();
            this.PlayClearSfx();
          }
        };
        _proto.ResetLevel = function ResetLevel() {
          this.LoadSubLevel(this.currentSubLevelIndex);
          this.PlayChimeSfx();
        };
        _proto.ShowRuleTip = function ShowRuleTip() {
          this.subTitleLabel.string = "【规则】每行/每列/每色恰好1头牛，任意两牛八方不相邻！";
          tween(this.subTitleLabel.node).to(0.12, {
            scale: new Vec3(1.08, 1.08, 1)
          }).to(0.18, {
            scale: new Vec3(1, 1, 1)
          }).start();
        };
        _proto.PushHistory = function PushHistory() {
          var copy = [];
          for (var r = 0; r < this.boardSize; r++) {
            copy[r] = [].concat(this.boardState[r]);
          }
          this.historyStack.push({
            board: copy
          });
          if (this.historyStack.length > 40) {
            this.historyStack.shift();
          }
        };
        _proto.UpdateCowCountDisplay = function UpdateCowCountDisplay(currentCount, hasConflict) {
          if (!this.cowCountLabel) return;
          this.cowCountLabel.string = "\uD83D\uDC2E \u7075\u725B: " + currentCount + " / " + this.boardSize;
          if (hasConflict) {
            this.cowCountLabel.color = new Color(239, 68, 68, 255);
          } else if (currentCount === this.boardSize) {
            this.cowCountLabel.color = new Color(16, 185, 129, 255);
          } else {
            this.cowCountLabel.color = new Color(59, 130, 246, 255);
          }
        };
        _proto.UpdateTimerDisplay = function UpdateTimerDisplay() {
          if (!this.timerLabel) return;
          var totalSec = Math.floor(this.elapsedTime);
          var m = Math.floor(totalSec / 60).toString().padStart(2, '0');
          var s = (totalSec % 60).toString().padStart(2, '0');
          this.timerLabel.string = "\u23F1 " + m + ":" + s;
        };
        return Level_4;
      }(LevelBase), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lvData", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "hudRoot", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "titleLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "subTitleLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "cowCountLabel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "timerLabel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "boardRoot", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "boardBgGraphics", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "fxRoot", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "winBannerNode", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "winBannerLabel", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "bottomControlsNode", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "tipCardNode", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "btnHintNode", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "btnUndoNode", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "btnResetNode", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "btnRuleNode", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "btnPrevNode", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "btnNextNode", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Lv_Data_4.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "e4d9cJTi2VKmZ4zIPWYLH4E", "Lv_Data_4", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /** 色块放牛 / Queens 关卡数据接口 */

      var Lv_Data_4 = exports('Lv_Data_4', (_dec = ccclass('Lv_Data_4'), _dec2 = property({
        type: [Object],
        tooltip: '佛系消消消子关卡列表'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Lv_Data_4, _Component);
        function Lv_Data_4() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          /** 关卡配置列表（各阶数均经过算法唯一解严格验证） */
          _initializerDefineProperty(_this, "subLevels", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Lv_Data_4.prototype;
        /** 获取指定子关卡数据（索引从 0 开始） */
        _proto.GetSubLevelData = function GetSubLevelData(index) {
          if (index >= 0 && index < this.subLevels.length) {
            return this.subLevels[index];
          }
          return null;
        }

        /** 获取总子关卡数 */;
        _proto.GetTotalSubLevels = function GetTotalSubLevels() {
          return this.subLevels.length;
        };
        return Lv_Data_4;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "subLevels", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [
          // ================= 第 1 关: 4x4 禅意初试 =================
          {
            subLevelIndex: 1,
            name: "第 1 关 · 禅意初试",
            subtitle: "每行、每列、每色放一牛，八方邻接不相逢",
            size: 4,
            grid: [[1, 0, 0, 0], [1, 1, 0, 2], [3, 2, 2, 2], [3, 3, 3, 2]],
            solution: [[0, 2], [1, 0], [2, 3], [3, 1]]
          },
          // ================= 第 2 关: 5x5 渐入佳境 =================
          {
            subLevelIndex: 2,
            name: "第 2 关 · 渐入佳境",
            subtitle: "善用排查标记，心静方得牛草安和",
            size: 5,
            grid: [[2, 2, 2, 1, 0], [2, 2, 1, 1, 1], [2, 2, 1, 1, 1], [2, 2, 1, 3, 1], [2, 4, 3, 3, 3]],
            solution: [[0, 4], [1, 2], [2, 0], [3, 3], [4, 1]]
          },
          // ================= 第 3 关: 6x6 悠然牧歌 =================
          {
            subLevelIndex: 3,
            name: "第 3 关 · 悠然牧歌",
            subtitle: "牧笛悠扬，六色原野各卧灵牛",
            size: 6,
            grid: [[2, 2, 0, 0, 0, 1], [2, 2, 0, 1, 1, 1], [2, 2, 2, 1, 1, 1], [2, 2, 2, 2, 2, 3], [2, 4, 5, 5, 3, 3], [5, 5, 5, 5, 3, 3]],
            solution: [[0, 2], [1, 4], [2, 0], [3, 5], [4, 1], [5, 3]]
          },
          // ================= 第 4 关: 7x7 佛心妙算 =================
          {
            subLevelIndex: 4,
            name: "第 4 关 · 佛心妙算",
            subtitle: "深思熟虑，排除杂念自得其所",
            size: 7,
            grid: [[0, 0, 0, 0, 2, 2, 2], [0, 0, 1, 2, 2, 2, 2], [4, 4, 2, 2, 2, 2, 2], [4, 4, 2, 2, 3, 2, 6], [4, 4, 4, 2, 3, 6, 6], [4, 4, 5, 5, 5, 6, 6], [6, 6, 6, 6, 6, 6, 6]],
            solution: [[0, 0], [1, 2], [2, 6], [3, 4], [4, 1], [5, 3], [6, 5]]
          },
          // ================= 第 5 关: 8x8 禅境大成 =================
          {
            subLevelIndex: 5,
            name: "第 5 关 · 禅境大成",
            subtitle: "八方宁静，大智若愚，放牧乾坤",
            size: 8,
            grid: [[1, 1, 0, 0, 0, 0, 0, 0], [1, 1, 3, 3, 0, 2, 2, 2], [1, 3, 3, 3, 3, 2, 2, 2], [1, 3, 3, 3, 3, 3, 3, 2], [5, 4, 4, 3, 5, 5, 2, 2], [5, 5, 5, 5, 5, 5, 5, 2], [6, 5, 5, 5, 5, 5, 5, 5], [6, 6, 5, 5, 5, 5, 5, 7]],
            solution: [[0, 3], [1, 1], [2, 6], [3, 4], [4, 2], [5, 5], [6, 0], [7, 7]]
          }];
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/Level_4', 'chunks:///_virtual/Level_4'); 
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