System.register("chunks:///_virtual/Level_1", ['./LevelRes_1.ts', './Level_1.ts', './Lv_Data_1.ts'], function () {
  return {
    setters: [null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/Level_1.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LevelBase.ts', './Lv_Data_1.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Graphics, Label, Color, Vec2, Tween, UITransform, Vec3, tween, input, Input, KeyCode, Button, UIOpacity, LevelBase, Lv_Data_1;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Graphics = module.Graphics;
      Label = module.Label;
      Color = module.Color;
      Vec2 = module.Vec2;
      Tween = module.Tween;
      UITransform = module.UITransform;
      Vec3 = module.Vec3;
      tween = module.tween;
      input = module.input;
      Input = module.Input;
      KeyCode = module.KeyCode;
      Button = module.Button;
      UIOpacity = module.UIOpacity;
    }, function (module) {
      LevelBase = module.LevelBase;
    }, function (module) {
      Lv_Data_1 = module.Lv_Data_1;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23;
      cclegacy._RF.push({}, "24288dJLeZOp43w8MXyly+D", "Level_1", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        executeInEditMode = _decorator.executeInEditMode;

      /** 格子逻辑类型 */
      var CellType = /*#__PURE__*/function (CellType) {
        CellType[CellType["Empty"] = 0] = "Empty";
        CellType[CellType["Target"] = 1] = "Target";
        CellType[CellType["Start"] = 2] = "Start";
        return CellType;
      }(CellType || {}); // 指定起点区域（必须从此处开始）
      /** 路径节点数据 */
      var Level_1 = exports('Level_1', (_dec = ccclass('Level_1'), _dec2 = executeInEditMode(true), _dec3 = property(Node), _dec4 = property(Lv_Data_1), _dec5 = property(Node), _dec6 = property(Graphics), _dec7 = property(Graphics), _dec8 = property(Graphics), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Label), _dec13 = property(Label), _dec14 = property(Label), _dec15 = property(Label), _dec16 = property(Graphics), _dec17 = property(Node), _dec18 = property(Label), _dec19 = property(Node), _dec20 = property(Node), _dec21 = property(Node), _dec22 = property(Node), _dec23 = property(Label), _dec24 = property(Node), _dec25 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_LevelBase) {
        _inheritsLoose(Level_1, _LevelBase);
        function Level_1() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _LevelBase.call.apply(_LevelBase, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "dragArea", _descriptor, _assertThisInitialized(_this));
          // 拖拽触控区域
          _initializerDefineProperty(_this, "lvData", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "board_root", _descriptor3, _assertThisInitialized(_this));
          // 棋盘格子根节点
          // ==================== 视觉配色配置 (Modern Neon Theme) ====================
          // 棋盘背景底板
          _this.COLOR_BOARD_BG = new Color(15, 23, 42, 175);
          // 深邃蓝黑玻感底色
          _this.COLOR_BOARD_BORDER = new Color(51, 65, 85, 140);
          // 边框描边
          // 未触发状态
          _this.COLOR_CELL_IDLE = new Color(30, 41, 59, 230);
          // 深板岩灰 (#1E293B)
          _this.COLOR_CELL_IDLE_BORDER = new Color(71, 85, 105, 180);
          // 浅灰边框 (#475569)
          _this.COLOR_CELL_IDLE_DOT = new Color(148, 163, 184, 150);
          // 未激活中心点 (#94A3B8)
          // 已触发状态 (Vibrant Emerald / Cyan Neon)
          _this.COLOR_CELL_ACTIVE = new Color(16, 185, 129, 255);
          // 翡翠青绿 (#10B981)
          _this.COLOR_CELL_ACTIVE_GLOW = new Color(52, 211, 153, 120);
          // 漫射辉光 (#34D399)
          _this.COLOR_CELL_ACTIVE_BORDER = new Color(167, 243, 208, 255);
          // 亮青边缘线 (#A7F3D0)
          _this.COLOR_CELL_ACTIVE_CORE = new Color(255, 255, 255, 240);
          // 激活高光中心
          // 指定起点状态
          _this.COLOR_START_BADGE = new Color(245, 158, 11, 255);
          // 琥珀金 (#F59E0B)
          // 碰撞/阻挡警示状态
          _this.COLOR_CELL_BLOCK_FLASH = new Color(239, 68, 68, 230);
          // 警示红 (#EF4444)
          // 连线光效
          _this.COLOR_LINE_OUTER_GLOW = new Color(16, 185, 129, 75);
          // 外层发光宽光晕
          _this.COLOR_LINE_CORE = new Color(52, 211, 153, 255);
          // 内层亮色核心光带
          _this.COLOR_TRAIL_LINE = new Color(110, 231, 183, 180);
          // 手指牵引弹性线
          // ==================== 运行时状态 ====================
          _this.currentLevelIndex = 0;
          _this.currentLevelData = null;
          // 网格几何排版参数
          _this.rowCount = 0;
          _this.colCount = 0;
          _this.cellSize = 80;
          _this.cellGap = 8;
          _this.boardStartX = 0;
          _this.boardStartY = 0;
          // 连线与触发记录
          _this.path = [];
          _this.visitedKeys = new Set();
          _this.totalTriggerableCount = 0;
          _this.designatedStart = null;
          // 流程控制
          _this.isDrawing = false;
          _this.isGameOver = false;
          _this.currentTouchBoardPos = new Vec2();
          // 节点与渲染器
          _this.cellNodes = new Map();
          _this.cellGraphics = new Map();
          _this.cellOriginalPos = new Map();
          _initializerDefineProperty(_this, "boardBgGraphics", _descriptor4, _assertThisInitialized(_this));
          // 棋盘背景卡片画布
          _initializerDefineProperty(_this, "lineGraphics", _descriptor5, _assertThisInitialized(_this));
          // 路径连线画布
          _initializerDefineProperty(_this, "trailGraphics", _descriptor6, _assertThisInitialized(_this));
          // 手指实时牵引线画布
          _initializerDefineProperty(_this, "fxRootNode", _descriptor7, _assertThisInitialized(_this));
          // 特效根节点
          _initializerDefineProperty(_this, "headCursorNode", _descriptor8, _assertThisInitialized(_this));
          // 笔尖当前位置动态光环
          // HUD 组件
          _initializerDefineProperty(_this, "hudNode", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "levelTitleLabel", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "levelBadgeLabel", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "subLevelNameLabel", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "progressLabel", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "progressBarGraphics", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "toastNode", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tipLabel", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prevBtnNode", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "resetBtnNode", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nextBtnNode", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "messageNode", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "messageLabel", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupNextBtnNode", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupRetryBtnNode", _descriptor23, _assertThisInitialized(_this));
          // ==================== 音效合成系统 (Web Audio API) ====================
          _this.audioCtx = null;
          return _this;
        }
        var _proto = Level_1.prototype;
        // ==================== 生命周期 ====================
        _proto.onLoad = function onLoad() {
          _LevelBase.prototype.onLoad.call(this);
          this.InitDependencies();
          this.CreateHUD();
          this.DrawEditorVisuals();
          {
            this.InitAudioSynthesizer();
            this.RegisterEvents();
          }
        };
        _proto.start = function start() {
          var _this$levelRes;
          // 播放背景音乐
          var bgm = (_this$levelRes = this.levelRes) == null ? void 0 : _this$levelRes.GetRes("bgm");
          console.log("[Level_1] 一笔画关卡启动");

          // 加载第 1 关
          this.LoadSubLevel(0);
        };
        _proto.InitAudioSynthesizer = function InitAudioSynthesizer() {
          try {
            var AudioContextClass = window.AudioContext || window.webkitAudioContext;
            if (AudioContextClass) {
              this.audioCtx = new AudioContextClass();
            }
          } catch (e) {
            console.warn("[Level_1] Web Audio 不可用，静音模式运行");
          }
        };
        _proto.ResumeAudioContext = function ResumeAudioContext() {
          if (this.audioCtx && this.audioCtx.state === 'suspended') {
            this.audioCtx.resume();
          }
        };
        _proto.PlayTone = function PlayTone(freq, type, duration, gainVal) {
          if (gainVal === void 0) {
            gainVal = 0.2;
          }
          this.ResumeAudioContext();
          if (!this.audioCtx) return;
          try {
            var osc = this.audioCtx.createOscillator();
            var gain = this.audioCtx.createGain();
            osc.type = type;
            osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
            gain.gain.setValueAtTime(gainVal, this.audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + duration);
            osc.connect(gain);
            gain.connect(this.audioCtx.destination);
            osc.start();
            osc.stop(this.audioCtx.currentTime + duration);
          } catch (e) {}
        }

        /** 连线阶梯音阶：随着连线节点递增，沿五声音阶平滑上扬 (C4, D4, E4, G4, A4, C5...) */;
        _proto.PlayConnectNote = function PlayConnectNote(stepIndex) {
          var pentatonicScale = [261.63, 293.66, 329.63, 392.00, 440.00,
          // C4 - A4
          523.25, 587.33, 659.25, 783.99, 880.00,
          // C5 - A5
          1046.50, 1174.66, 1318.51, 1567.98 // C6 - G6
          ];

          var noteIdx = Math.min(Math.max(0, stepIndex - 1), pentatonicScale.length - 1);
          var freq = pentatonicScale[noteIdx];
          this.PlayTone(freq, 'sine', 0.14, 0.22);
        }

        /** 撤销回退音效：轻柔降调音 */;
        _proto.PlayUndoTone = function PlayUndoTone() {
          this.PlayTone(293.66, 'triangle', 0.08, 0.15);
        }

        /** 碰撞/阻挡警示音：低沉警示声 */;
        _proto.PlayBlockWarningTone = function PlayBlockWarningTone() {
          var _this2 = this;
          this.PlayTone(165, 'square', 0.12, 0.18);
          setTimeout(function () {
            return _this2.PlayTone(125, 'square', 0.15, 0.22);
          }, 50);
        }

        /** 未完成松手重置回弹音 */;
        _proto.PlayResetTone = function PlayResetTone() {
          this.PlayTone(220, 'triangle', 0.16, 0.12);
        }

        /** 关卡完成大胜利：明亮宏伟的升调大和弦琶音 */;
        _proto.PlayVictoryFanfare = function PlayVictoryFanfare() {
          var _this3 = this;
          var chord = [523.25, 659.25, 783.99, 1046.50, 1318.51]; // C5, E5, G5, C6, E6
          chord.forEach(function (freq, idx) {
            setTimeout(function () {
              _this3.PlayTone(freq, 'sine', 0.45, 0.25);
            }, idx * 80);
          });
        }

        /** 在编辑器或初始化时，为各 HUD 卡片及按钮绘制矢量视觉底板 */;
        _proto.DrawEditorVisuals = function DrawEditorVisuals() {
          if (!this.hudNode) return;

          // 1. HeaderCard
          var headerCard = this.hudNode.getChildByName("HeaderCard");
          if (headerCard) {
            var headerG = headerCard.getComponent(Graphics);
            if (headerG) {
              headerG.clear();
              var cardWidth = 580;
              var cardHeight = 115;
              var cardRadius = 22;
              headerG.fillColor = this.COLOR_BOARD_BG;
              headerG.roundRect(-cardWidth / 2, -cardHeight / 2, cardWidth, cardHeight, cardRadius);
              headerG.fill();
              headerG.strokeColor = this.COLOR_BOARD_BORDER;
              headerG.lineWidth = 2;
              headerG.roundRect(-cardWidth / 2 + 1, -cardHeight / 2 + 1, cardWidth - 2, cardHeight - 2, cardRadius);
              headerG.stroke();
              headerG.strokeColor = new Color(255, 255, 255, 30);
              headerG.lineWidth = 1;
              headerG.moveTo(-cardWidth / 2 + cardRadius, cardHeight / 2 - 1);
              headerG.lineTo(cardWidth / 2 - cardRadius, cardHeight / 2 - 1);
              headerG.stroke();
            }
            var badgeNode = headerCard.getChildByName("LevelBadge");
            if (badgeNode) {
              var badgeG = badgeNode.getComponent(Graphics);
              if (badgeG) {
                badgeG.clear();
                badgeG.fillColor = new Color(16, 185, 129, 230);
                badgeG.roundRect(-55, -15, 110, 30, 15);
                badgeG.fill();
                badgeG.strokeColor = new Color(167, 243, 208, 200);
                badgeG.lineWidth = 1.5;
                badgeG.roundRect(-54, -14, 108, 28, 14);
                badgeG.stroke();
              }
            }
          }

          // 2. ToastTip
          if (this.toastNode) {
            var toastG = this.toastNode.getComponent(Graphics);
            if (toastG) {
              toastG.clear();
              var toastW = 440;
              var toastH = 36;
              toastG.fillColor = new Color(15, 23, 42, 225);
              toastG.roundRect(-toastW / 2, -toastH / 2, toastW, toastH, 18);
              toastG.fill();
              toastG.strokeColor = new Color(245, 158, 11, 200);
              toastG.lineWidth = 1.5;
              toastG.roundRect(-toastW / 2 + 1, -toastH / 2 + 1, toastW - 2, toastH - 2, 17);
              toastG.stroke();
            }
          }

          // 3. FooterDock
          var dockNode = this.hudNode.getChildByName("FooterDock");
          if (dockNode) {
            var dockG = dockNode.getComponent(Graphics);
            if (dockG) {
              dockG.clear();
              var dockW = 540;
              var dockH = 76;
              dockG.fillColor = this.COLOR_BOARD_BG;
              dockG.roundRect(-dockW / 2, -dockH / 2, dockW, dockH, 24);
              dockG.fill();
              dockG.strokeColor = this.COLOR_BOARD_BORDER;
              dockG.lineWidth = 2;
              dockG.roundRect(-dockW / 2 + 1, -dockH / 2 + 1, dockW - 2, dockH - 2, 23);
              dockG.stroke();
            }
          }

          // 4. Buttons
          var drawBtn = function drawBtn(node, size, bgColor, borderColor) {
            if (!node) return;
            var g = node.getComponent(Graphics);
            if (!g) return;
            g.clear();
            g.fillColor = bgColor;
            g.roundRect(-size.x / 2, -size.y / 2, size.x, size.y, 14);
            g.fill();
            g.strokeColor = borderColor;
            g.lineWidth = 1.8;
            g.roundRect(-size.x / 2 + 1, -size.y / 2 + 1, size.x - 2, size.y - 2, 13);
            g.stroke();
          };
          drawBtn(this.prevBtnNode, new Vec2(136, 50), new Color(30, 41, 59, 240), new Color(71, 85, 105, 200));
          drawBtn(this.resetBtnNode, new Vec2(146, 52), new Color(217, 119, 6, 245), new Color(252, 211, 77, 240));
          drawBtn(this.nextBtnNode, new Vec2(136, 50), new Color(16, 185, 129, 230), new Color(110, 231, 183, 220));
          this.UpdateProgressBar(0);
        };
        _proto.onDisable = function onDisable() {
          _LevelBase.prototype.onDisable.call(this);
          this.UnregisterEvents();
        };
        _proto.onDestroy = function onDestroy() {
          this.UnregisterEvents();
          this.unscheduleAllCallbacks();
          this.StopAllActiveTweens();
        };
        _proto.StopAllActiveTweens = function StopAllActiveTweens() {
          if (this.headCursorNode) {
            Tween.stopAllByTarget(this.headCursorNode);
          }
          this.cellNodes.forEach(function (node) {
            Tween.stopAllByTarget(node);
          });
          if (this.messageNode) {
            Tween.stopAllByTarget(this.messageNode);
          }
          if (this.toastNode) {
            Tween.stopAllByTarget(this.toastNode);
          }
        }

        // ==================== 初始化与节点自动补全 ====================
        ;

        _proto.InitDependencies = function InitDependencies() {
          // 1. 自动挂载或查找关卡数据组件
          if (!this.lvData) {
            this.lvData = this.getComponentInChildren(Lv_Data_1);
            if (!this.lvData) {
              this.lvData = this.node.addComponent(Lv_Data_1);
            }
          }

          // 2. 自动创建或查找触控区域
          if (!this.dragArea) {
            this.dragArea = this.node.getChildByName("dragArea");
            if (!this.dragArea) {
              this.dragArea = this.node;
            }
          }

          // 3. 自动创建或查找棋盘根节点
          if (!this.board_root) {
            this.board_root = this.node.getChildByName("board_root");
            if (!this.board_root) {
              this.board_root = new Node("board_root");
              this.board_root.parent = this.node;
              var ut = this.board_root.addComponent(UITransform);
              ut.setContentSize(700, 800);
            }
          }

          // 4. 底层棋盘背景卡片画布
          var bgNode = this.board_root.getChildByName("board_bg_canvas");
          if (!bgNode) {
            bgNode = new Node("board_bg_canvas");
            bgNode.parent = this.board_root;
            this.boardBgGraphics = bgNode.addComponent(Graphics);
          } else {
            this.boardBgGraphics = bgNode.getComponent(Graphics) || bgNode.addComponent(Graphics);
          }

          // 5. 创建底层连线画布节点
          var lineNode = this.board_root.getChildByName("line_canvas");
          if (!lineNode) {
            lineNode = new Node("line_canvas");
            lineNode.parent = this.board_root;
            this.lineGraphics = lineNode.addComponent(Graphics);
          } else {
            this.lineGraphics = lineNode.getComponent(Graphics) || lineNode.addComponent(Graphics);
          }

          // 6. 创建实时手指牵引线画布节点
          var trailNode = this.board_root.getChildByName("trail_canvas");
          if (!trailNode) {
            trailNode = new Node("trail_canvas");
            trailNode.parent = this.board_root;
            this.trailGraphics = trailNode.addComponent(Graphics);
          } else {
            this.trailGraphics = trailNode.getComponent(Graphics) || trailNode.addComponent(Graphics);
          }

          // 7. 创建特效根节点
          this.fxRootNode = this.board_root.getChildByName("fx_root");
          if (!this.fxRootNode) {
            this.fxRootNode = new Node("fx_root");
            this.fxRootNode.parent = this.board_root;
          }

          // 8. 创建笔尖呼吸游标光环
          this.CreateHeadCursorNode();
        }

        /** 创建笔尖呼吸动态指示器 */;
        _proto.CreateHeadCursorNode = function CreateHeadCursorNode() {
          if (!this.headCursorNode) {
            this.headCursorNode = new Node("HeadCursor");
            this.headCursorNode.parent = this.board_root;
            var g = this.headCursorNode.addComponent(Graphics);
            g.strokeColor = this.COLOR_CELL_ACTIVE_BORDER;
            g.lineWidth = 3;
            g.circle(0, 0, 36);
            g.stroke();
            g.fillColor = new Color(255, 255, 255, 55);
            g.circle(0, 0, 32);
            g.fill();
            this.headCursorNode.active = false;
          }
        }

        // ==================== 关卡加载与动态排版 ====================
        ;

        _proto.LoadSubLevel = function LoadSubLevel(index) {
          if (!this.lvData || !this.lvData.levelData || this.lvData.levelData.length === 0) {
            console.error("[Level_1] 未找到一笔画关卡数据！");
            return;
          }
          this.unscheduleAllCallbacks();
          this.StopAllActiveTweens();

          // 约束关卡索引
          if (index < 0) index = 0;
          if (index >= this.lvData.levelData.length) index = this.lvData.levelData.length - 1;
          this.currentLevelIndex = index;
          this.currentLevelData = this.lvData.levelData[this.currentLevelIndex];

          // 重置游戏与连线状态
          this.path = [];
          this.visitedKeys.clear();
          this.isDrawing = false;
          this.isGameOver = false;
          this.designatedStart = null;
          this.totalTriggerableCount = 0;
          if (this.lineGraphics) this.lineGraphics.clear();
          if (this.trailGraphics) this.trailGraphics.clear();
          if (this.headCursorNode) this.headCursorNode.active = false;
          if (this.fxRootNode) this.fxRootNode.removeAllChildren();
          this.HideMessagePopup();

          // 清理旧格子节点（保留背景底板、连线和特效层）
          this.cellNodes.forEach(function (node) {
            return node.destroy();
          });
          this.cellNodes.clear();
          this.cellGraphics.clear();
          this.cellOriginalPos.clear();

          // 1. 自适应计算单格尺寸与居中坐标
          this.CalculateDynamicGridMetrics();

          // 2. 构建棋盘格子与底板卡片
          this.BuildBoard();

          // 调整图层兄弟顺序，保证连线和光标在格子上方
          if (this.boardBgGraphics) this.boardBgGraphics.node.setSiblingIndex(0);
          this.lineGraphics.node.setSiblingIndex(100);
          this.trailGraphics.node.setSiblingIndex(101);
          this.headCursorNode.setSiblingIndex(102);
          this.fxRootNode.setSiblingIndex(103);

          // 3. 刷新 HUD
          this.UpdateHUD();

          // 如果有关卡指定起点，笔尖光环初始提示该起点
          if (this.designatedStart) {
            var startPos = this.GetCellPosition(this.designatedStart.r, this.designatedStart.c);
            this.headCursorNode.setPosition(startPos);
            this.headCursorNode.active = true;
            this.StartHeadCursorBreathing();
          }
        }

        /**
         * 自适应布局计算：根据当前关卡任意宽高，智能缩放单格尺寸并居中
         */;
        _proto.CalculateDynamicGridMetrics = function CalculateDynamicGridMetrics() {
          var grid = this.currentLevelData.gridData;
          this.rowCount = grid.length;
          this.colCount = 0;
          for (var r = 0; r < this.rowCount; r++) {
            if (grid[r] && grid[r].length > this.colCount) {
              this.colCount = grid[r].length;
            }
          }

          // 安全显示区域（基于 750x1334 竖屏，留出上下 HUD 空间）
          var maxAvailableW = 660;
          var maxAvailableH = 700;

          // 根据格数自适应计算间隙与格尺寸
          var maxDim = Math.max(this.rowCount, this.colCount);
          this.cellGap = Math.max(4, Math.min(10, Math.floor(40 / Math.max(1, maxDim))));
          var availW = maxAvailableW - (this.colCount - 1) * this.cellGap;
          var availH = maxAvailableH - (this.rowCount - 1) * this.cellGap;
          var maxCell = 110;
          var minCell = 44;
          var calcCellW = availW / Math.max(1, this.colCount);
          var calcCellH = availH / Math.max(1, this.rowCount);
          this.cellSize = Math.max(minCell, Math.min(maxCell, Math.floor(Math.min(calcCellW, calcCellH))));

          // 总宽高
          var totalW = this.colCount * this.cellSize + (this.colCount - 1) * this.cellGap;
          var totalH = this.rowCount * this.cellSize + (this.rowCount - 1) * this.cellGap;

          // 起始偏移坐标，让网格中心精确落在 board_root 的 (0, 0)
          this.boardStartX = -totalW / 2 + this.cellSize / 2;
          this.boardStartY = totalH / 2 - this.cellSize / 2;
          console.log("[Level_1] \u5173\u5361 " + this.currentLevelData.id + " (" + this.currentLevelData.name + "): " + this.rowCount + "\u884C \xD7 " + this.colCount + "\u5217, \u5355\u683C: " + this.cellSize + "px");
        }

        /** 获取网格坐标在 board_root 下的局部坐标 */;
        _proto.GetCellPosition = function GetCellPosition(r, c) {
          var x = this.boardStartX + c * (this.cellSize + this.cellGap);
          var y = this.boardStartY - r * (this.cellSize + this.cellGap);
          return new Vec3(x, y, 0);
        }

        /** 触控点转网格单元：检测触点落在哪个格子（带容差缓冲，返回最接近中心点的格子） */;
        _proto.GetCellFromBoardPos = function GetCellFromBoardPos(localPos) {
          var hitRadius = this.cellSize * 0.58;
          var bestCell = null;
          var minDist = hitRadius;
          for (var r = 0; r < this.rowCount; r++) {
            for (var c = 0; c < this.colCount; c++) {
              var val = this.GetGridCellValue(r, c);
              if (val === CellType.Empty) continue;
              var pos = this.GetCellPosition(r, c);
              var dist = Vec2.distance(localPos, new Vec2(pos.x, pos.y));
              if (dist < minDist) {
                minDist = dist;
                bestCell = {
                  r: r,
                  c: c
                };
              }
            }
          }
          return bestCell;
        };
        _proto.GetGridCellValue = function GetGridCellValue(r, c) {
          var _this$currentLevelDat;
          var grid = (_this$currentLevelDat = this.currentLevelData) == null ? void 0 : _this$currentLevelDat.gridData;
          if (grid && grid[r] && grid[r][c] !== undefined) {
            return grid[r][c];
          }
          return CellType.Empty;
        }

        // ==================== 棋盘与格子渲染 ====================
        ;

        _proto.BuildBoard = function BuildBoard() {
          var grid = this.currentLevelData.gridData;

          // 绘制棋盘精致半透明卡片背景
          if (this.boardBgGraphics) {
            this.boardBgGraphics.clear();
            var totalW = this.colCount * this.cellSize + (this.colCount - 1) * this.cellGap;
            var totalH = this.rowCount * this.cellSize + (this.rowCount - 1) * this.cellGap;
            var pad = Math.max(16, Math.floor(this.cellSize * 0.22));
            this.boardBgGraphics.fillColor = this.COLOR_BOARD_BG;
            this.boardBgGraphics.roundRect(-totalW / 2 - pad, -totalH / 2 - pad, totalW + pad * 2, totalH + pad * 2, 20);
            this.boardBgGraphics.fill();
            this.boardBgGraphics.strokeColor = this.COLOR_BOARD_BORDER;
            this.boardBgGraphics.lineWidth = 2;
            this.boardBgGraphics.roundRect(-totalW / 2 - pad + 1, -totalH / 2 - pad + 1, totalW + pad * 2 - 2, totalH + pad * 2 - 2, 20);
            this.boardBgGraphics.stroke();
          }
          for (var r = 0; r < this.rowCount; r++) {
            for (var c = 0; c < this.colCount; c++) {
              var val = grid[r] && grid[r][c] !== undefined ? grid[r][c] : CellType.Empty;
              if (val === CellType.Empty) {
                continue; // 空白障碍区不生成交互格子
              }

              this.totalTriggerableCount++;
              if (val === CellType.Start) {
                this.designatedStart = {
                  r: r,
                  c: c
                };
              }
              var key = r + "_" + c;
              var pos = this.GetCellPosition(r, c);
              var cellNode = new Node("cell_" + key);
              cellNode.setPosition(pos);
              cellNode.parent = this.board_root;
              var ut = cellNode.addComponent(UITransform);
              ut.setContentSize(this.cellSize, this.cellSize);
              var g = cellNode.addComponent(Graphics);
              this.cellNodes.set(key, cellNode);
              this.cellGraphics.set(key, g);
              this.cellOriginalPos.set(key, pos.clone());

              // 绘制未触发初始态
              this.DrawCellVisual(r, c, false, val === CellType.Start);

              // 出场微动效：依序轻盈弹入
              cellNode.setScale(new Vec3(0, 0, 1));
              var delay = (r * this.colCount + c) * 0.018;
              tween(cellNode).delay(delay).to(0.18, {
                scale: new Vec3(1, 1, 1)
              }, {
                easing: 'backOut'
              }).start();
            }
          }
        }

        /**
         * 绘制单个格子的精致矢量视觉
         */;
        _proto.DrawCellVisual = function DrawCellVisual(r, c, isActive, isStart, isBlocked) {
          if (isStart === void 0) {
            isStart = false;
          }
          if (isBlocked === void 0) {
            isBlocked = false;
          }
          var key = r + "_" + c;
          var g = this.cellGraphics.get(key);
          if (!g) return;
          g.clear();
          var half = this.cellSize / 2;
          var radius = Math.max(6, Math.floor(this.cellSize * 0.22));
          if (isBlocked) {
            // 阻挡警示闪烁态（鲜明红色微光）
            g.fillColor = this.COLOR_CELL_BLOCK_FLASH;
            g.roundRect(-half, -half, this.cellSize, this.cellSize, radius);
            g.fill();
            g.strokeColor = new Color(255, 255, 255, 220);
            g.lineWidth = 2;
            g.roundRect(-half + 1, -half + 1, this.cellSize - 2, this.cellSize - 2, radius);
            g.stroke();
            return;
          }
          if (isActive) {
            // ==================== 已触发态（翡翠极光霓虹） ====================
            // 外层漫射辉光
            g.fillColor = this.COLOR_CELL_ACTIVE_GLOW;
            g.roundRect(-half - 2, -half - 2, this.cellSize + 4, this.cellSize + 4, radius + 2);
            g.fill();

            // 主体饱满填充
            g.fillColor = this.COLOR_CELL_ACTIVE;
            g.roundRect(-half, -half, this.cellSize, this.cellSize, radius);
            g.fill();

            // 晶莹亮边描边
            g.strokeColor = this.COLOR_CELL_ACTIVE_BORDER;
            g.lineWidth = 2.5;
            g.roundRect(-half + 1.2, -half + 1.2, this.cellSize - 2.4, this.cellSize - 2.4, radius - 1);
            g.stroke();

            // 中心发光能量核
            g.fillColor = this.COLOR_CELL_ACTIVE_CORE;
            g.circle(0, 0, Math.max(4, this.cellSize * 0.14));
            g.fill();

            // 内部微光点缀
            g.fillColor = new Color(255, 255, 255, 90);
            g.circle(-half * 0.35, half * 0.35, Math.max(3, this.cellSize * 0.12));
            g.fill();
          } else {
            // ==================== 未触发态（质感暗岩灰） ====================
            g.fillColor = this.COLOR_CELL_IDLE;
            g.roundRect(-half, -half, this.cellSize, this.cellSize, radius);
            g.fill();

            // 柔和边框
            g.strokeColor = isStart ? this.COLOR_START_BADGE : this.COLOR_CELL_IDLE_BORDER;
            g.lineWidth = isStart ? 2.5 : 1.5;
            g.roundRect(-half + 1, -half + 1, this.cellSize - 2, this.cellSize - 2, radius);
            g.stroke();

            // 中心提示标记（起点为金黄色，普通为淡白点）
            if (isStart) {
              g.fillColor = this.COLOR_START_BADGE;
              g.circle(0, 0, Math.max(5, this.cellSize * 0.18));
              g.fill();
            } else {
              g.fillColor = this.COLOR_CELL_IDLE_DOT;
              g.circle(0, 0, Math.max(3, this.cellSize * 0.09));
              g.fill();
            }
          }
        }

        // ==================== 触控与一笔画核心逻辑 ====================
        ;

        _proto.RegisterEvents = function RegisterEvents() {
          var target = this.dragArea || this.node;
          target.on(Node.EventType.TOUCH_START, this.OnTouchStart, this);
          target.on(Node.EventType.TOUCH_MOVE, this.OnTouchMove, this);
          target.on(Node.EventType.TOUCH_END, this.OnTouchEnd, this);
          target.on(Node.EventType.TOUCH_CANCEL, this.OnTouchEnd, this);

          // 键盘调试支持
          input.on(Input.EventType.KEY_DOWN, this.OnKeyDown, this);
        };
        _proto.UnregisterEvents = function UnregisterEvents() {
          var target = this.dragArea || this.node;
          if (target) {
            target.off(Node.EventType.TOUCH_START, this.OnTouchStart, this);
            target.off(Node.EventType.TOUCH_MOVE, this.OnTouchMove, this);
            target.off(Node.EventType.TOUCH_END, this.OnTouchEnd, this);
            target.off(Node.EventType.TOUCH_CANCEL, this.OnTouchEnd, this);
          }
          input.off(Input.EventType.KEY_DOWN, this.OnKeyDown, this);
        }

        /** 触屏/UI 坐标安全转换为 board_root 局部坐标 */;
        _proto.ScreenToBoardPos = function ScreenToBoardPos(event) {
          var ut = this.board_root.getComponent(UITransform);
          if (!ut) return new Vec2();
          var loc = event.getUILocation ? event.getUILocation() : event.getLocation();
          var p = ut.convertToNodeSpaceAR(new Vec3(loc.x, loc.y, 0));
          return new Vec2(p.x, p.y);
        };
        _proto.OnTouchStart = function OnTouchStart(event) {
          if (this.isGameOver) return;
          this.ResumeAudioContext();
          var boardPos = this.ScreenToBoardPos(event);
          this.currentTouchBoardPos.set(boardPos.x, boardPos.y);
          var cell = this.GetCellFromBoardPos(boardPos);
          if (!cell) return;

          // 若有关卡指定起点，且玩家触摸的不是起点
          if (this.designatedStart && (cell.r !== this.designatedStart.r || cell.c !== this.designatedStart.c)) {
            this.PlayBlockWarning(cell.r, cell.c);
            this.ShowTip("请从金色起点开始一笔画！");
            return;
          }

          // 如果之前有残留连线，直接从新点重新起笔
          this.ResetStroke(false);

          // 正式起笔
          this.isDrawing = true;
          this.AddCellToPath(cell.r, cell.c);
          this.DrawConnectionLines();
        };
        _proto.OnTouchMove = function OnTouchMove(event) {
          if (!this.isDrawing || this.isGameOver) return;
          var boardPos = this.ScreenToBoardPos(event);
          this.currentTouchBoardPos.set(boardPos.x, boardPos.y);
          var targetCell = this.GetCellFromBoardPos(boardPos);
          if (targetCell && this.path.length > 0) {
            var head = this.path[this.path.length - 1];

            // 关键体验优化：若高速滑动跨越了同一直线上的多个相邻格，进行快速直线插值避免跳帧漏格
            if (head.r === targetCell.r && Math.abs(head.c - targetCell.c) > 1) {
              var step = targetCell.c > head.c ? 1 : -1;
              for (var c = head.c + step; c !== targetCell.c + step; c += step) {
                this.ProcessCellArrival(head.r, c);
              }
            } else if (head.c === targetCell.c && Math.abs(head.r - targetCell.r) > 1) {
              var _step = targetCell.r > head.r ? 1 : -1;
              for (var r = head.r + _step; r !== targetCell.r + _step; r += _step) {
                this.ProcessCellArrival(r, head.c);
              }
            } else {
              this.ProcessCellArrival(targetCell.r, targetCell.c);
            }
          }

          // 实时更新绘制路径与手指弹性牵引线
          this.DrawConnectionLines();
        };
        _proto.OnTouchEnd = function OnTouchEnd(event) {
          if (!this.isDrawing || this.isGameOver) return;
          this.isDrawing = false;

          // 清除实时手指牵引线
          if (this.trailGraphics) {
            this.trailGraphics.clear();
          }

          // 胜利检测：若手指抬起时已画完全部可触发区域
          if (this.path.length >= this.totalTriggerableCount) {
            this.OnGameWin();
          } else {
            // 未画完：一笔画规则触发不完全，播放弹性回弹重置动效
            this.PlayIncompleteResetAnim();
          }
        }

        /** 处理移动触碰至格子 (r, c) */;
        _proto.ProcessCellArrival = function ProcessCellArrival(r, c) {
          if (this.path.length === 0) return;
          var head = this.path[this.path.length - 1];
          if (head.r === r && head.c === c) {
            return; // 仍在当前笔尖格，无需处理
          }

          var key = r + "_" + c;

          // 1. 规则：必须是上下左右相邻的格子（曼哈顿距离为 1）
          var isAdjacent = Math.abs(r - head.r) + Math.abs(c - head.c) === 1;
          if (!isAdjacent) {
            return; // 跨格跳跃无效
          }

          // 2. 规则：回退撤销检测（滑向倒数第二个格子）
          if (this.path.length >= 2) {
            var prev = this.path[this.path.length - 2];
            if (prev.r === r && prev.c === c) {
              // 执行撤销回退
              this.PopLastCellFromPath();
              return;
            }
          }

          // 3. 核心规则：不能重复触发同一个触发区域！
          if (this.visitedKeys.has(key)) {
            // 阻挡警示：抖动并闪烁该格子
            this.PlayBlockWarning(r, c);
            this.ShowTip("不能重复触发同一区域！");
            return;
          }

          // 4. 新格子：必须为有效触发区域（格值 > 0）
          var val = this.GetGridCellValue(r, c);
          if (val === CellType.Empty) {
            return; // 障碍不可通行
          }

          // 5. 触发成功：将新格加入一笔画路径
          this.AddCellToPath(r, c);

          // 检查是否全盘达成
          if (this.path.length >= this.totalTriggerableCount) {
            this.isDrawing = false;
            if (this.trailGraphics) this.trailGraphics.clear();
            this.DrawConnectionLines();
            this.OnGameWin();
          }
        }

        /** 将格子加入路径并播放触发动效与状态切换 */;
        _proto.AddCellToPath = function AddCellToPath(r, c) {
          var key = r + "_" + c;
          this.path.push({
            r: r,
            c: c,
            key: key
          });
          this.visitedKeys.add(key);
          this.PlayConnectNote(this.path.length);
          var node = this.cellNodes.get(key);
          if (node) {
            var _this$designatedStart, _this$designatedStart2;
            // 状态切换为已触发态
            var isStart = ((_this$designatedStart = this.designatedStart) == null ? void 0 : _this$designatedStart.r) === r && ((_this$designatedStart2 = this.designatedStart) == null ? void 0 : _this$designatedStart2.c) === c;
            this.DrawCellVisual(r, c, true, isStart);

            // 动态表现 1：Q 弹缩放 (Juice Pop Bounce)
            node.setScale(new Vec3(1, 1, 1));
            tween(node).to(0.06, {
              scale: new Vec3(1.24, 1.24, 1)
            }, {
              easing: 'quadOut'
            }).to(0.12, {
              scale: new Vec3(1.0, 1.0, 1)
            }, {
              easing: 'backOut'
            }).start();

            // 动态表现 2：能量光环向外扩散淡出 (Ripple Expanding Halo)
            this.SpawnTriggerRipple(r, c);
          }

          // 笔尖呼吸游标实时跟随至该格
          var cellPos = this.GetCellPosition(r, c);
          if (this.headCursorNode) {
            this.headCursorNode.active = true;
            tween(this.headCursorNode).to(0.08, {
              position: cellPos
            }, {
              easing: 'quadOut'
            }).start();
            this.StartHeadCursorBreathing();
          }

          // 刷新 HUD 进度
          this.UpdateHUD();
        }

        /** 撤销回退最后一步 */;
        _proto.PopLastCellFromPath = function PopLastCellFromPath() {
          if (this.path.length <= 1) return;
          var removed = this.path.pop();
          if (!removed) return;
          this.visitedKeys["delete"](removed.key);
          this.PlayUndoTone();
          var node = this.cellNodes.get(removed.key);
          if (node) {
            var _this$designatedStart3, _this$designatedStart4;
            // 恢复未触发态
            var isStart = ((_this$designatedStart3 = this.designatedStart) == null ? void 0 : _this$designatedStart3.r) === removed.r && ((_this$designatedStart4 = this.designatedStart) == null ? void 0 : _this$designatedStart4.c) === removed.c;
            this.DrawCellVisual(removed.r, removed.c, false, isStart);

            // 回退轻微缩放反馈
            tween(node).to(0.05, {
              scale: new Vec3(0.85, 0.85, 1)
            }).to(0.08, {
              scale: new Vec3(1, 1, 1)
            }).start();
          }

          // 游标跟随至最新笔尖
          var newHead = this.path[this.path.length - 1];
          if (newHead && this.headCursorNode) {
            var pos = this.GetCellPosition(newHead.r, newHead.c);
            this.headCursorNode.setPosition(pos);
          }
          this.UpdateHUD();
        }

        // ==================== 动效特效细节实现 ====================
        /** 触发时的光环扩散特效 */;
        _proto.SpawnTriggerRipple = function SpawnTriggerRipple(r, c) {
          if (!this.fxRootNode) return;
          var pos = this.GetCellPosition(r, c);
          var rippleNode = new Node("Ripple");
          rippleNode.setPosition(pos);
          rippleNode.parent = this.fxRootNode;
          var g = rippleNode.addComponent(Graphics);
          g.strokeColor = this.COLOR_CELL_ACTIVE_BORDER;
          g.lineWidth = 2.5;
          g.circle(0, 0, this.cellSize * 0.45);
          g.stroke();
          rippleNode.setScale(new Vec3(0.7, 0.7, 1));
          var initialAlpha = 255;

          // 扩散并淡出
          tween(rippleNode).to(0.28, {
            scale: new Vec3(1.65, 1.65, 1)
          }, {
            easing: 'quadOut',
            onUpdate: function onUpdate(target, ratio) {
              if (g && g.isValid) {
                var alpha = Math.floor(initialAlpha * (1 - ratio));
                g.strokeColor = new Color(167, 243, 208, alpha);
              }
            }
          }).call(function () {
            rippleNode.destroy();
          }).start();
        }

        /** 笔尖游标呼吸循环动效 */;
        _proto.StartHeadCursorBreathing = function StartHeadCursorBreathing() {
          if (!this.headCursorNode) return;
          Tween.stopAllByTarget(this.headCursorNode);
          this.headCursorNode.setScale(new Vec3(1, 1, 1));
          tween(this.headCursorNode).repeatForever(tween(this.headCursorNode).to(0.45, {
            scale: new Vec3(1.15, 1.15, 1)
          }, {
            easing: 'sineInOut'
          }).to(0.45, {
            scale: new Vec3(1.0, 1.0, 1)
          }, {
            easing: 'sineInOut'
          })).start();
        }

        /** 阻挡警示动效：左右横向剧烈抖动与红光闪烁 */;
        _proto.PlayBlockWarning = function PlayBlockWarning(r, c) {
          var _this$designatedStart5,
            _this$designatedStart6,
            _this4 = this;
          this.PlayBlockWarningTone();
          var key = r + "_" + c;
          var node = this.cellNodes.get(key);
          var origPos = this.cellOriginalPos.get(key);
          if (!node || !origPos) return;
          Tween.stopAllByTarget(node);
          var isActive = this.visitedKeys.has(key);
          var isStart = ((_this$designatedStart5 = this.designatedStart) == null ? void 0 : _this$designatedStart5.r) === r && ((_this$designatedStart6 = this.designatedStart) == null ? void 0 : _this$designatedStart6.c) === c;

          // 闪烁为警告红色
          this.DrawCellVisual(r, c, isActive, isStart, true);

          // 左右快速抖动 (Shake)
          var shakeDist = 6;
          tween(node).to(0.03, {
            position: new Vec3(origPos.x - shakeDist, origPos.y, 0)
          }).to(0.05, {
            position: new Vec3(origPos.x + shakeDist, origPos.y, 0)
          }).to(0.04, {
            position: new Vec3(origPos.x - shakeDist * 0.5, origPos.y, 0)
          }).to(0.03, {
            position: new Vec3(origPos.x, origPos.y, 0)
          }).call(function () {
            node.setPosition(origPos);
            // 恢复原状
            _this4.DrawCellVisual(r, c, isActive, isStart, false);
          }).start();
        }

        /** 未完成一笔画抬手：优雅回弹重置动效 */;
        _proto.PlayIncompleteResetAnim = function PlayIncompleteResetAnim() {
          var _this5 = this;
          if (this.path.length === 0) return;
          this.PlayResetTone();
          this.ShowTip("\u8FD8\u5DEE " + (this.totalTriggerableCount - this.path.length) + " \u4E2A\u533A\u57DF\uFF0C\u518D\u8BD5\u4E00\u6B21\uFF01");

          // 从后往前倒序依次弹回未激活态
          var copyPath = [].concat(this.path);
          var _loop = function _loop() {
            var _this5$designatedStar, _this5$designatedStar2;
            var pt = copyPath[i];
            var node = _this5.cellNodes.get(pt.key);
            var isStart = ((_this5$designatedStar = _this5.designatedStart) == null ? void 0 : _this5$designatedStar.r) === pt.r && ((_this5$designatedStar2 = _this5.designatedStart) == null ? void 0 : _this5$designatedStar2.c) === pt.c;
            var delay = (copyPath.length - 1 - i) * 0.02;
            if (node) {
              _this5.scheduleOnce(function () {
                _this5.DrawCellVisual(pt.r, pt.c, false, isStart);
                tween(node).to(0.05, {
                  scale: new Vec3(0.85, 0.85, 1)
                }).to(0.08, {
                  scale: new Vec3(1, 1, 1)
                }).start();
              }, delay);
            }
          };
          for (var i = copyPath.length - 1; i >= 0; i--) {
            _loop();
          }

          // 清理路径与线段
          this.scheduleOnce(function () {
            _this5.ResetStroke(true);
          }, copyPath.length * 0.02 + 0.05);
        }

        /** 重置当前一笔画笔迹 */;
        _proto.ResetStroke = function ResetStroke(keepVisualReset) {
          var _this6 = this;
          if (keepVisualReset === void 0) {
            keepVisualReset = true;
          }
          this.path = [];
          this.visitedKeys.clear();
          this.isDrawing = false;
          if (this.lineGraphics) this.lineGraphics.clear();
          if (this.trailGraphics) this.trailGraphics.clear();
          if (keepVisualReset) {
            this.cellNodes.forEach(function (node, key) {
              var _this6$designatedStar, _this6$designatedStar2;
              var _key$split$map = key.split('_').map(Number),
                r = _key$split$map[0],
                c = _key$split$map[1];
              var isStart = ((_this6$designatedStar = _this6.designatedStart) == null ? void 0 : _this6$designatedStar.r) === r && ((_this6$designatedStar2 = _this6.designatedStart) == null ? void 0 : _this6$designatedStar2.c) === c;
              _this6.DrawCellVisual(r, c, false, isStart);
            });
          }
          if (this.designatedStart && this.headCursorNode) {
            var startPos = this.GetCellPosition(this.designatedStart.r, this.designatedStart.c);
            this.headCursorNode.setPosition(startPos);
            this.headCursorNode.active = true;
            this.StartHeadCursorBreathing();
          } else if (this.headCursorNode) {
            this.headCursorNode.active = false;
          }
          this.UpdateHUD();
        }

        // ==================== 连线绘制渲染 ====================
        /** 绘制路径双层霓虹辉光与当前手指牵引线 */;
        _proto.DrawConnectionLines = function DrawConnectionLines() {
          if (!this.lineGraphics) return;
          this.lineGraphics.clear();
          if (this.path.length < 1) {
            if (this.trailGraphics) this.trailGraphics.clear();
            return;
          }

          // 1. 绘制已固化的路径线（多段连接）
          if (this.path.length >= 2) {
            // A. 底层宽厚漫射光晕
            this.lineGraphics.lineCap = Graphics.LineCap.ROUND;
            this.lineGraphics.lineJoin = Graphics.LineJoin.ROUND;
            this.lineGraphics.strokeColor = this.COLOR_LINE_OUTER_GLOW;
            this.lineGraphics.lineWidth = Math.max(16, this.cellSize * 0.36);
            var firstPos = this.GetCellPosition(this.path[0].r, this.path[0].c);
            this.lineGraphics.moveTo(firstPos.x, firstPos.y);
            for (var i = 1; i < this.path.length; i++) {
              var p = this.GetCellPosition(this.path[i].r, this.path[i].c);
              this.lineGraphics.lineTo(p.x, p.y);
            }
            this.lineGraphics.stroke();

            // B. 顶层清脆高亮核心光带
            this.lineGraphics.strokeColor = this.COLOR_LINE_CORE;
            this.lineGraphics.lineWidth = Math.max(8, this.cellSize * 0.16);
            this.lineGraphics.moveTo(firstPos.x, firstPos.y);
            for (var _i = 1; _i < this.path.length; _i++) {
              var _p = this.GetCellPosition(this.path[_i].r, this.path[_i].c);
              this.lineGraphics.lineTo(_p.x, _p.y);
            }
            this.lineGraphics.stroke();
          }

          // 2. 绘制手指弹性牵引线 (从当前笔尖连接到手指触控点)
          if (this.trailGraphics) {
            this.trailGraphics.clear();
            if (this.isDrawing && this.path.length >= 1) {
              var head = this.path[this.path.length - 1];
              var headPos = this.GetCellPosition(head.r, head.c);
              this.trailGraphics.lineCap = Graphics.LineCap.ROUND;
              this.trailGraphics.lineJoin = Graphics.LineJoin.ROUND;

              // 牵引线外光晕
              this.trailGraphics.strokeColor = new Color(16, 185, 129, 60);
              this.trailGraphics.lineWidth = Math.max(12, this.cellSize * 0.22);
              this.trailGraphics.moveTo(headPos.x, headPos.y);
              this.trailGraphics.lineTo(this.currentTouchBoardPos.x, this.currentTouchBoardPos.y);
              this.trailGraphics.stroke();

              // 牵引线主体
              this.trailGraphics.strokeColor = this.COLOR_TRAIL_LINE;
              this.trailGraphics.lineWidth = Math.max(5, this.cellSize * 0.1);
              this.trailGraphics.moveTo(headPos.x, headPos.y);
              this.trailGraphics.lineTo(this.currentTouchBoardPos.x, this.currentTouchBoardPos.y);
              this.trailGraphics.stroke();
            }
          }
        }

        // ==================== 通关动效与胜负流转 ====================
        ;

        _proto.OnGameWin = function OnGameWin() {
          var _this7 = this;
          if (this.isGameOver) return;
          this.isGameOver = true;
          this.PlayVictoryFanfare();
          console.log("[Level_1] \u4E00\u7B14\u753B\u901A\u5173\uFF01\u7B2C " + (this.currentLevelIndex + 1) + " \u5173\u5B8C\u6210\uFF01");

          // 1. 全盘多米诺波纹波浪动效 (Domino Wave Pop Celebration)
          var _loop2 = function _loop2() {
            var pt = _this7.path[i];
            var node = _this7.cellNodes.get(pt.key);
            if (node) {
              var delay = i * 0.035;
              tween(node).delay(delay).to(0.09, {
                scale: new Vec3(1.3, 1.3, 1)
              }, {
                easing: 'quadOut'
              }).call(function () {
                _this7.SpawnTriggerRipple(pt.r, pt.c);
              }).to(0.14, {
                scale: new Vec3(1.0, 1.0, 1)
              }, {
                easing: 'backOut'
              }).start();
            }
          };
          for (var i = 0; i < this.path.length; i++) {
            _loop2();
          }

          // 2. 延迟弹出胜利弹窗
          var totalDelay = Math.max(0.6, this.path.length * 0.035 + 0.3);
          this.scheduleOnce(function () {
            var hasNext = _this7.currentLevelIndex < _this7.lvData.levelData.length - 1;
            if (hasNext) {
              _this7.ShowMessagePopup("🎉 恭喜通关！", true, false);
            } else {
              _this7.ShowMessagePopup("🏆 恭喜通关全部一笔画！", false, true);
              _this7.SetResultType(1, 1);
            }
          }, totalDelay);
        }

        // ==================== 键盘辅助操作（用于浏览器/编辑器快速调试） ====================
        ;

        _proto.OnKeyDown = function OnKeyDown(event) {
          if (this.isGameOver) return;
          if (event.keyCode === KeyCode.KEY_R) {
            this.ResetStroke(true);
            return;
          }
          if (event.keyCode === KeyCode.BACKSPACE || event.keyCode === KeyCode.KEY_U) {
            this.PopLastCellFromPath();
            this.DrawConnectionLines();
            return;
          }

          // 键盘方向键探索相邻格
          var dr = 0;
          var dc = 0;
          switch (event.keyCode) {
            case KeyCode.ARROW_UP:
            case KeyCode.KEY_W:
              dr = -1;
              dc = 0;
              break;
            case KeyCode.ARROW_DOWN:
            case KeyCode.KEY_S:
              dr = 1;
              dc = 0;
              break;
            case KeyCode.ARROW_LEFT:
            case KeyCode.KEY_A:
              dr = 0;
              dc = -1;
              break;
            case KeyCode.ARROW_RIGHT:
            case KeyCode.KEY_D:
              dr = 0;
              dc = 1;
              break;
            default:
              return;
          }
          if (this.path.length === 0) {
            // 起步：若有指定起点则从起点开始，否则从第一个有效格起步
            var startR = 0;
            var startC = 0;
            if (this.designatedStart) {
              startR = this.designatedStart.r;
              startC = this.designatedStart.c;
            } else {
              for (var r = 0; r < this.rowCount; r++) {
                for (var c = 0; c < this.colCount; c++) {
                  if (this.GetGridCellValue(r, c) > 0) {
                    startR = r;
                    startC = c;
                    break;
                  }
                }
              }
            }
            this.isDrawing = true;
            this.AddCellToPath(startR, startC);
            this.DrawConnectionLines();
            return;
          }
          var head = this.path[this.path.length - 1];
          var nextR = head.r + dr;
          var nextC = head.c + dc;
          if (nextR >= 0 && nextR < this.rowCount && nextC >= 0 && nextC < this.colCount) {
            this.ProcessCellArrival(nextR, nextC);
            this.DrawConnectionLines();
          }
        }

        // ==================== HUD 界面与弹窗交互 ====================
        ;

        _proto.CreateHUD = function CreateHUD() {
          var _this8 = this;
          if (!this.hudNode) {
            this.hudNode = this.node.getChildByName("HUD");
          }
          if (this.hudNode) {
            this.BindExistingHUD();
            return;
          }
          this.hudNode = new Node("HUD");
          this.hudNode.parent = this.node;

          // ==================== 1. 顶部半透明卡片容器 (Header Card) ====================
          var headerCard = new Node("HeaderCard");
          headerCard.parent = this.hudNode;
          headerCard.setPosition(0, 485, 0);
          var cardWidth = 580;
          var cardHeight = 115;
          var cardRadius = 22;
          var headerG = headerCard.addComponent(Graphics);
          headerG.fillColor = this.COLOR_BOARD_BG; // 深邃蓝黑玻感底色
          headerG.roundRect(-cardWidth / 2, -cardHeight / 2, cardWidth, cardHeight, cardRadius);
          headerG.fill();
          headerG.strokeColor = this.COLOR_BOARD_BORDER;
          headerG.lineWidth = 2;
          headerG.roundRect(-cardWidth / 2 + 1, -cardHeight / 2 + 1, cardWidth - 2, cardHeight - 2, cardRadius);
          headerG.stroke();

          // 顶部高光细饰线
          headerG.strokeColor = new Color(255, 255, 255, 30);
          headerG.lineWidth = 1;
          headerG.moveTo(-cardWidth / 2 + cardRadius, cardHeight / 2 - 1);
          headerG.lineTo(cardWidth / 2 - cardRadius, cardHeight / 2 - 1);
          headerG.stroke();

          // 1.1 主标题
          var titleNode = new Node("Title");
          titleNode.parent = headerCard;
          titleNode.setPosition(-80, 24, 0);
          this.levelTitleLabel = titleNode.addComponent(Label);
          this.levelTitleLabel.fontSize = 26;
          this.levelTitleLabel.lineHeight = 30;
          this.levelTitleLabel.color = new Color(255, 255, 255, 255);
          this.levelTitleLabel.isBold = true;

          // 1.2 关卡进度胶囊徽标 (Badge)
          var badgeNode = new Node("LevelBadge");
          badgeNode.parent = headerCard;
          badgeNode.setPosition(180, 24, 0);
          var badgeG = badgeNode.addComponent(Graphics);
          badgeG.fillColor = new Color(16, 185, 129, 230); // 翡翠青绿胶囊底色
          badgeG.roundRect(-55, -15, 110, 30, 15);
          badgeG.fill();
          badgeG.strokeColor = new Color(167, 243, 208, 200);
          badgeG.lineWidth = 1.5;
          badgeG.roundRect(-54, -14, 108, 28, 14);
          badgeG.stroke();
          var badgeLabelNode = new Node("BadgeText");
          badgeLabelNode.parent = badgeNode;
          var badgeLbl = badgeLabelNode.addComponent(Label);
          badgeLbl.string = "第 1/5 关";
          badgeLbl.fontSize = 17;
          badgeLbl.lineHeight = 20;
          badgeLbl.color = new Color(255, 255, 255, 255);
          badgeLbl.isBold = true;
          this.levelBadgeLabel = badgeLbl;

          // 1.3 关卡副标题名字
          var nameNode = new Node("SubLevelName");
          nameNode.parent = headerCard;
          nameNode.setPosition(-165, -14, 0);
          this.subLevelNameLabel = nameNode.addComponent(Label);
          this.subLevelNameLabel.fontSize = 19;
          this.subLevelNameLabel.lineHeight = 22;
          this.subLevelNameLabel.color = new Color(148, 163, 184, 255);

          // 1.4 已连线进度文字
          var progressNode = new Node("Progress");
          progressNode.parent = headerCard;
          progressNode.setPosition(150, -14, 0);
          this.progressLabel = progressNode.addComponent(Label);
          this.progressLabel.fontSize = 19;
          this.progressLabel.lineHeight = 22;
          this.progressLabel.color = new Color(110, 231, 183, 255);
          this.progressLabel.isBold = true;

          // 1.5 动态进度条底槽与填充条 (Mini Progress Bar)
          var barNode = new Node("ProgressBar");
          barNode.parent = headerCard;
          barNode.setPosition(0, -38, 0);
          this.progressBarGraphics = barNode.addComponent(Graphics);
          this.UpdateProgressBar(0);

          // ==================== 2. 悬浮提示胶囊条 (Toast Tip) ====================
          var toastNode = new Node("ToastTip");
          toastNode.parent = this.hudNode;
          toastNode.setPosition(0, 395, 0);
          this.toastNode = toastNode;
          var toastG = toastNode.addComponent(Graphics);
          var toastW = 440;
          var toastH = 36;
          toastG.fillColor = new Color(15, 23, 42, 225);
          toastG.roundRect(-toastW / 2, -toastH / 2, toastW, toastH, 18);
          toastG.fill();
          toastG.strokeColor = new Color(245, 158, 11, 200); // 暖金警示微边
          toastG.lineWidth = 1.5;
          toastG.roundRect(-toastW / 2 + 1, -toastH / 2 + 1, toastW - 2, toastH - 2, 17);
          toastG.stroke();
          var toastTextNode = new Node("ToastText");
          toastTextNode.parent = toastNode;
          this.tipLabel = toastTextNode.addComponent(Label);
          this.tipLabel.fontSize = 17;
          this.tipLabel.lineHeight = 20;
          this.tipLabel.color = new Color(254, 240, 138, 255); // 柔和金黄高对比度文字
          this.tipLabel.string = "手指滑动一笔连接全部区域 · 不可重复触发";

          // ==================== 3. 底部操作栏胶囊底座 (Footer Dock) ====================
          var dockNode = new Node("FooterDock");
          dockNode.parent = this.hudNode;
          dockNode.setPosition(0, -540, 0);
          var dockW = 540;
          var dockH = 76;
          var dockG = dockNode.addComponent(Graphics);
          dockG.fillColor = this.COLOR_BOARD_BG;
          dockG.roundRect(-dockW / 2, -dockH / 2, dockW, dockH, 24);
          dockG.fill();
          dockG.strokeColor = this.COLOR_BOARD_BORDER;
          dockG.lineWidth = 2;
          dockG.roundRect(-dockW / 2 + 1, -dockH / 2 + 1, dockW - 2, dockH - 2, 23);
          dockG.stroke();

          // 3.1 上一关按钮（左侧）
          this.prevBtnNode = this.CreateDockButton(dockNode, "◀ 上一关", new Vec3(-170, 0, 0), new Vec2(136, 50), new Color(30, 41, 59, 240), new Color(71, 85, 105, 200), new Color(226, 232, 240, 255), function () {
            if (_this8.currentLevelIndex > 0) {
              _this8.LoadSubLevel(_this8.currentLevelIndex - 1);
            }
          });

          // 3.2 重置按钮（中央，暖橙醒目主操作）
          this.resetBtnNode = this.CreateDockButton(dockNode, "↺ 重置", new Vec3(0, 0, 0), new Vec2(146, 52), new Color(217, 119, 6, 245),
          // 暖橙金 (#D97706)
          new Color(252, 211, 77, 240),
          // 金黄亮边
          new Color(255, 255, 255, 255), function () {
            _this8.ResetStroke(true);
          });

          // 3.3 下一关按钮（右侧，清爽极光青）
          this.nextBtnNode = this.CreateDockButton(dockNode, "下一关 ▶", new Vec3(170, 0, 0), new Vec2(136, 50), new Color(16, 185, 129, 230),
          // 翡翠青
          new Color(110, 231, 183, 220), new Color(255, 255, 255, 255), function () {
            if (_this8.currentLevelIndex < _this8.lvData.levelData.length - 1) {
              _this8.LoadSubLevel(_this8.currentLevelIndex + 1);
            }
          });

          // ==================== 4. 结算弹窗 ====================
          this.CreateMessagePopup();
        }

        /** 创建底部 Dock 栏精美圆角按钮，带点击 Q 弹回弹触感 */;
        _proto.CreateDockButton = function CreateDockButton(parent, text, pos, size, bgColor, borderColor, textColor, onClick) {
          var btnNode = new Node("btn_" + text);
          btnNode.parent = parent;
          btnNode.setPosition(pos);
          var ut = btnNode.addComponent(UITransform);
          ut.setContentSize(size.x, size.y);
          var g = btnNode.addComponent(Graphics);
          g.fillColor = bgColor;
          g.roundRect(-size.x / 2, -size.y / 2, size.x, size.y, 14);
          g.fill();
          g.strokeColor = borderColor;
          g.lineWidth = 1.8;
          g.roundRect(-size.x / 2 + 1, -size.y / 2 + 1, size.x - 2, size.y - 2, 13);
          g.stroke();
          var lblNode = new Node("Label");
          lblNode.parent = btnNode;
          var lbl = lblNode.addComponent(Label);
          lbl.string = text;
          lbl.fontSize = 20;
          lbl.lineHeight = 24;
          lbl.color = textColor;
          lbl.isBold = true;
          btnNode.addComponent(Button);
          btnNode.on(Button.EventType.CLICK, function () {
            // 点击 Q 弹反馈动效
            Tween.stopAllByTarget(btnNode);
            tween(btnNode).to(0.05, {
              scale: new Vec3(0.91, 0.91, 1)
            }).to(0.08, {
              scale: new Vec3(1.0, 1.0, 1)
            }, {
              easing: 'backOut'
            }).call(onClick).start();
          }, this);
          return btnNode;
        };
        _proto.CreateModernButton = function CreateModernButton(parent, text, pos, onClick) {
          return this.CreateDockButton(parent, text, pos, new Vec2(140, 50), new Color(30, 41, 59, 240), new Color(71, 85, 105, 180), new Color(241, 245, 249, 255), onClick);
        }

        /** 绘制/刷新顶部卡片内的 mini 进度条 */;
        _proto.UpdateProgressBar = function UpdateProgressBar(ratio) {
          if (!this.progressBarGraphics) return;
          this.progressBarGraphics.clear();
          var barW = 500;
          var barH = 6;
          var barR = 3;

          // 进度底槽
          this.progressBarGraphics.fillColor = new Color(30, 41, 59, 240);
          this.progressBarGraphics.roundRect(-barW / 2, -barH / 2, barW, barH, barR);
          this.progressBarGraphics.fill();

          // 填充进度
          var fillW = Math.max(0, Math.min(barW, barW * ratio));
          if (fillW > 0) {
            this.progressBarGraphics.fillColor = this.COLOR_CELL_ACTIVE;
            this.progressBarGraphics.roundRect(-barW / 2, -barH / 2, fillW, barH, barR);
            this.progressBarGraphics.fill();
          }
        };
        _proto.BindExistingHUD = function BindExistingHUD() {
          var _this9 = this;
          var headerCard = this.hudNode.getChildByName("HeaderCard");
          if (headerCard) {
            if (!this.levelTitleLabel) {
              var _headerCard$getChildB;
              this.levelTitleLabel = (_headerCard$getChildB = headerCard.getChildByName("Title")) == null ? void 0 : _headerCard$getChildB.getComponent(Label);
            }
            var badge = headerCard.getChildByName("LevelBadge");
            if (!this.levelBadgeLabel && badge) {
              var _ref;
              this.levelBadgeLabel = (_ref = badge.getChildByName("BadgeText") || badge) == null ? void 0 : _ref.getComponent(Label);
            }
            if (!this.subLevelNameLabel) {
              var _headerCard$getChildB2;
              this.subLevelNameLabel = (_headerCard$getChildB2 = headerCard.getChildByName("SubLevelName")) == null ? void 0 : _headerCard$getChildB2.getComponent(Label);
            }
            if (!this.progressLabel) {
              var _headerCard$getChildB3;
              this.progressLabel = (_headerCard$getChildB3 = headerCard.getChildByName("Progress")) == null ? void 0 : _headerCard$getChildB3.getComponent(Label);
            }
            if (!this.progressBarGraphics) {
              var _headerCard$getChildB4;
              this.progressBarGraphics = (_headerCard$getChildB4 = headerCard.getChildByName("ProgressBar")) == null ? void 0 : _headerCard$getChildB4.getComponent(Graphics);
            }
          }
          if (!this.toastNode) {
            this.toastNode = this.hudNode.getChildByName("ToastTip");
          }
          if (this.toastNode && !this.tipLabel) {
            var _ref2;
            this.tipLabel = (_ref2 = this.toastNode.getChildByName("ToastText") || this.toastNode) == null ? void 0 : _ref2.getComponent(Label);
          }
          var dockNode = this.hudNode.getChildByName("FooterDock");
          if (dockNode) {
            if (!this.prevBtnNode) {
              this.prevBtnNode = dockNode.getChildByName("btn_◀ 上一关") || dockNode.getChildByName("btn_prev");
            }
            if (!this.resetBtnNode) {
              this.resetBtnNode = dockNode.getChildByName("btn_↺ 重置") || dockNode.getChildByName("btn_reset");
            }
            if (!this.nextBtnNode) {
              this.nextBtnNode = dockNode.getChildByName("btn_下一关 ▶") || dockNode.getChildByName("btn_next");
            }
          }
          if (this.prevBtnNode) {
            this.BindPopupButton(this.prevBtnNode, function () {
              if (_this9.currentLevelIndex > 0) {
                _this9.LoadSubLevel(_this9.currentLevelIndex - 1);
              }
            });
          }
          if (this.resetBtnNode) {
            this.BindPopupButton(this.resetBtnNode, function () {
              _this9.ResetStroke(true);
            });
          }
          if (this.nextBtnNode) {
            this.BindPopupButton(this.nextBtnNode, function () {
              if (_this9.currentLevelIndex < _this9.lvData.levelData.length - 1) {
                _this9.LoadSubLevel(_this9.currentLevelIndex + 1);
              }
            });
          }
          this.CreateMessagePopup();
        };
        _proto.BindPopupButton = function BindPopupButton(btnNode, onClick) {
          if (!btnNode) return;
          var btn = btnNode.getComponent(Button) || btnNode.addComponent(Button);
          btnNode.off(Button.EventType.CLICK);
          btnNode.on(Button.EventType.CLICK, function () {
            Tween.stopAllByTarget(btnNode);
            tween(btnNode).to(0.05, {
              scale: new Vec3(0.91, 0.91, 1)
            }).to(0.08, {
              scale: new Vec3(1.0, 1.0, 1)
            }, {
              easing: 'backOut'
            }).call(onClick).start();
          }, this);
        };
        _proto.CreateMessagePopup = function CreateMessagePopup() {
          var _this10 = this;
          if (!this.messageNode) {
            this.messageNode = this.node.getChildByName("MessagePopup");
          }
          if (this.messageNode) {
            this.messageNode.active = false;
            var _cardNode = this.messageNode.getChildByName("Card");
            if (_cardNode) {
              if (!this.messageLabel) {
                var _cardNode$getChildByN;
                this.messageLabel = (_cardNode$getChildByN = _cardNode.getChildByName("Msg")) == null ? void 0 : _cardNode$getChildByN.getComponent(Label);
              }
              if (!this.popupNextBtnNode) {
                this.popupNextBtnNode = _cardNode.getChildByName("btn_下一关 ▶") || _cardNode.getChildByName("btn_popup_next");
              }
              if (!this.popupRetryBtnNode) {
                this.popupRetryBtnNode = _cardNode.getChildByName("btn_↺ 再试一次") || _cardNode.getChildByName("btn_popup_retry");
              }
              if (this.popupNextBtnNode) {
                this.BindPopupButton(this.popupNextBtnNode, function () {
                  _this10.LoadSubLevel(_this10.currentLevelIndex + 1);
                });
              }
              if (this.popupRetryBtnNode) {
                this.BindPopupButton(this.popupRetryBtnNode, function () {
                  _this10.LoadSubLevel(_this10.currentLevelIndex);
                });
              }
            }
            return;
          }
          this.messageNode = new Node("MessagePopup");
          this.messageNode.parent = this.node;
          this.messageNode.active = false;

          // 全屏半透明黑色遮罩
          var maskG = this.messageNode.addComponent(Graphics);
          maskG.fillColor = new Color(0, 0, 0, 160);
          maskG.rect(-375, -667, 750, 1334);
          maskG.fill();

          // 弹窗卡片
          var cardNode = new Node("Card");
          cardNode.parent = this.messageNode;
          var cardG = cardNode.addComponent(Graphics);
          cardG.fillColor = new Color(15, 23, 42, 250);
          cardG.roundRect(-220, -140, 440, 280, 20);
          cardG.fill();
          cardG.strokeColor = this.COLOR_CELL_ACTIVE_BORDER;
          cardG.lineWidth = 2;
          cardG.roundRect(-219, -139, 438, 278, 20);
          cardG.stroke();

          // 标题文字
          var msgNode = new Node("Msg");
          msgNode.parent = cardNode;
          msgNode.setPosition(0, 45, 0);
          this.messageLabel = msgNode.addComponent(Label);
          this.messageLabel.fontSize = 32;
          this.messageLabel.lineHeight = 36;
          this.messageLabel.color = new Color(255, 255, 255, 255);
          this.messageLabel.isBold = true;

          // 下一关按钮
          this.popupNextBtnNode = this.CreateDockButton(cardNode, "下一关 ▶", new Vec3(0, -45, 0), new Vec2(150, 52), new Color(16, 185, 129, 240), new Color(110, 231, 183, 220), new Color(255, 255, 255, 255), function () {
            _this10.LoadSubLevel(_this10.currentLevelIndex + 1);
          });

          // 重试按钮
          this.popupRetryBtnNode = this.CreateDockButton(cardNode, "↺ 再试一次", new Vec3(0, -45, 0), new Vec2(150, 52), new Color(217, 119, 6, 245), new Color(252, 211, 77, 240), new Color(255, 255, 255, 255), function () {
            _this10.LoadSubLevel(_this10.currentLevelIndex);
          });
        };
        _proto.ShowMessagePopup = function ShowMessagePopup(msg, showNext, showRetry) {
          if (!this.messageNode) return;
          this.messageLabel.string = msg;
          if (this.popupNextBtnNode) this.popupNextBtnNode.active = showNext;
          if (this.popupRetryBtnNode) this.popupRetryBtnNode.active = showRetry;
          this.messageNode.active = true;
          var card = this.messageNode.getChildByName("Card");
          if (card) {
            card.setScale(new Vec3(0.5, 0.5, 1));
            tween(card).to(0.2, {
              scale: new Vec3(1.06, 1.06, 1)
            }, {
              easing: 'backOut'
            }).to(0.08, {
              scale: new Vec3(1.0, 1.0, 1)
            }).start();
          }
        };
        _proto.HideMessagePopup = function HideMessagePopup() {
          if (this.messageNode) {
            this.messageNode.active = false;
          }
        };
        _proto.ShowTip = function ShowTip(tip) {
          var _this11 = this;
          if (!this.toastNode || !this.tipLabel) return;
          this.tipLabel.string = tip;
          this.toastNode.active = true;
          Tween.stopAllByTarget(this.toastNode);
          this.toastNode.setScale(new Vec3(0.85, 0.85, 1));
          tween(this.toastNode).to(0.12, {
            scale: new Vec3(1.06, 1.06, 1)
          }, {
            easing: 'backOut'
          }).to(0.08, {
            scale: new Vec3(1.0, 1.0, 1)
          }).delay(2.5).to(0.25, {
            scale: new Vec3(0.9, 0.9, 1)
          }).call(function () {
            if (_this11.tipLabel) {
              _this11.tipLabel.string = "手指滑动一笔连接全部区域 · 不可重复触发";
            }
            _this11.toastNode.setScale(new Vec3(1, 1, 1));
          }).start();
        };
        _proto.UpdateHUD = function UpdateHUD() {
          var _this$lvData;
          var cur = this.currentLevelIndex + 1;
          var total = ((_this$lvData = this.lvData) == null || (_this$lvData = _this$lvData.levelData) == null ? void 0 : _this$lvData.length) || 1;
          if (this.levelTitleLabel) {
            this.levelTitleLabel.string = "关卡 1: 一笔画";
          }
          if (this.levelBadgeLabel) {
            this.levelBadgeLabel.string = "\u7B2C " + cur + "/" + total + " \u5173";
          }
          if (this.subLevelNameLabel && this.currentLevelData) {
            this.subLevelNameLabel.string = "\u5730\u56FE: " + this.currentLevelData.name;
          }
          var count = this.path.length;
          var ratio = this.totalTriggerableCount > 0 ? count / this.totalTriggerableCount : 0;
          var percent = Math.floor(ratio * 100);
          if (this.progressLabel) {
            this.progressLabel.string = "\u5DF2\u8FDE\u7EBF: " + count + "/" + this.totalTriggerableCount + " (" + percent + "%)";
          }
          this.UpdateProgressBar(ratio);

          // 底部 Dock 按钮可用性与样式联动
          if (this.prevBtnNode) {
            var btn = this.prevBtnNode.getComponent(Button);
            var isEnable = this.currentLevelIndex > 0;
            if (btn) btn.interactable = isEnable;
            var op = this.prevBtnNode.getComponent(UIOpacity) || this.prevBtnNode.addComponent(UIOpacity);
            op.opacity = isEnable ? 255 : 110;
          }
          if (this.nextBtnNode) {
            var hasNext = this.currentLevelIndex < total - 1;
            var _btn = this.nextBtnNode.getComponent(Button);
            if (_btn) _btn.interactable = hasNext;
            var _op = this.nextBtnNode.getComponent(UIOpacity) || this.nextBtnNode.addComponent(UIOpacity);
            _op.opacity = hasNext ? 255 : 110;
          }
        };
        return Level_1;
      }(LevelBase), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "dragArea", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lvData", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "board_root", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "boardBgGraphics", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lineGraphics", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "trailGraphics", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "fxRootNode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "headCursorNode", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "hudNode", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "levelTitleLabel", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "levelBadgeLabel", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "subLevelNameLabel", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "progressLabel", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "progressBarGraphics", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "toastNode", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "tipLabel", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "prevBtnNode", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "resetBtnNode", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "nextBtnNode", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "messageNode", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "messageLabel", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "popupNextBtnNode", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "popupRetryBtnNode", [_dec25], {
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

System.register("chunks:///_virtual/LevelRes_1.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LevelResBase.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, AudioClip, SpriteFrame, LevelResBase;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      AudioClip = module.AudioClip;
      SpriteFrame = module.SpriteFrame;
    }, function (module) {
      LevelResBase = module.LevelResBase;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "e0aaeCcp/5A7rEzxfk/oVW5", "LevelRes_1", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LevelRes_1 = exports('LevelRes_1', (_dec = ccclass('LevelRes_1'), _dec(_class = /*#__PURE__*/function (_LevelResBase) {
        _inheritsLoose(LevelRes_1, _LevelResBase);
        function LevelRes_1() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _LevelResBase.call.apply(_LevelResBase, [this].concat(args)) || this;
          _this.levelBundle = "Level_1";
          _this.levelResConfig = [{
            resKey: "bgm",
            bundle: _this.levelBundle,
            type: AudioClip,
            path: _this.audioPath
          }, {
            resKey: "icon_task",
            bundle: _this.levelBundle,
            type: SpriteFrame,
            path: _this.sprPath
          }];
          return _this;
        }
        return LevelRes_1;
      }(LevelResBase)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Lv_Data_1.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      var _dec, _dec2, _class2, _class3, _descriptor;
      cclegacy._RF.push({}, "167d0qmrvhPqKjN0+wnCX3k", "Lv_Data_1", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var OneDrawData_1 = exports('OneDrawData_1', function OneDrawData_1() {
        /** 关卡ID */
        this.id = 1;
        /** 关卡名字 */
        this.name = "一笔画";
        /** 
         * 关卡数据数组
         * 0 是空的位置（障碍/不可触发）
         * 1 是有触发区域的位置
         * 2 是指定起点位置（可选，若有 2 则必须以此格为起点）
         */
        this.gridData = [];
      });
      var Lv_Data_1 = exports('Lv_Data_1', (_dec = ccclass('Lv_Data_1'), _dec2 = property({
        type: [OneDrawData_1]
      }), _dec(_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Lv_Data_1, _Component);
        function Lv_Data_1() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          /** 一笔画关卡数据列表（均经过拓扑验证，100% 存在一笔画全通解） */
          _initializerDefineProperty(_this, "levelData", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        return Lv_Data_1;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class3.prototype, "levelData", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [{
            id: 1,
            name: "初试身手",
            // 3x3 经典九宫格，入门引导
            gridData: [[1, 1, 1], [1, 1, 1], [1, 1, 1]]
          }, {
            id: 2,
            name: "四方回廊",
            // 4x4 回廊结构，中央有障碍
            gridData: [[1, 1, 1, 1], [1, 0, 0, 1], [1, 1, 0, 1], [1, 1, 1, 1]]
          }, {
            id: 3,
            name: "灵动蛇形",
            // 4x4 蜿蜒路径，考验路线规划
            gridData: [[1, 1, 1, 1], [1, 0, 0, 1], [1, 1, 1, 1], [0, 0, 1, 1]]
          }, {
            id: 4,
            name: "折线迂回",
            // 5x5 C/U型迂回结构
            gridData: [[1, 1, 1, 1, 1], [1, 0, 0, 0, 1], [1, 1, 1, 0, 1], [0, 0, 1, 0, 1], [1, 1, 1, 1, 1]]
          }, {
            id: 5,
            name: "迷宫终章",
            // 5x5 三叉回绕迷宫结构
            gridData: [[1, 1, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 0, 1], [1, 0, 1, 0, 1], [1, 1, 1, 1, 1]]
          }];
        }
      }), _class3)) || _class2));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/Level_1', 'chunks:///_virtual/Level_1'); 
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