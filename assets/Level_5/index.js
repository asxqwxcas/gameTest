System.register("chunks:///_virtual/Level_5", ['./LevelRes_5.ts', './Level_5.ts', './Lv_Data_5.ts'], function () {
  return {
    setters: [null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/Level_5.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LevelBase.ts', './Lv_Data_5.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, SpriteFrame, Node, Label, Graphics, Color, Vec2, ImageAsset, Texture2D, Layers, Sprite, UITransform, tween, Vec3, clamp, Mask, LevelBase, Lv_Data_5;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SpriteFrame = module.SpriteFrame;
      Node = module.Node;
      Label = module.Label;
      Graphics = module.Graphics;
      Color = module.Color;
      Vec2 = module.Vec2;
      ImageAsset = module.ImageAsset;
      Texture2D = module.Texture2D;
      Layers = module.Layers;
      Sprite = module.Sprite;
      UITransform = module.UITransform;
      tween = module.tween;
      Vec3 = module.Vec3;
      clamp = module.clamp;
      Mask = module.Mask;
    }, function (module) {
      LevelBase = module.LevelBase;
    }, function (module) {
      Lv_Data_5 = module.Lv_Data_5;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20;
      cclegacy._RF.push({}, "116ef2OmmVDXYx8YXv0TFtO", "Level_5", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        executeInEditMode = _decorator.executeInEditMode;

      /** 拼图单块运行时数据结构 */

      var Level_5 = exports('Level_5', (_dec = ccclass('Level_5'), _dec2 = executeInEditMode(true), _dec3 = property(Lv_Data_5), _dec4 = property({
        type: SpriteFrame,
        tooltip: "自定义主图（可在属性检查器直接拖入 SpriteFrame，优先级高）"
      }), _dec5 = property({
        type: [SpriteFrame],
        tooltip: "多图轮播图库（配置多张图片时，完成一关自动切换下一张）"
      }), _dec6 = property({
        tooltip: "默认网格行数（可在数据中定制）"
      }), _dec7 = property({
        tooltip: "默认网格列数（可在数据中定制）"
      }), _dec8 = property(Node), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property(Label), _dec13 = property(Node), _dec14 = property(Graphics), _dec15 = property(Graphics), _dec16 = property(Node), _dec17 = property(Node), _dec18 = property(Node), _dec19 = property(Node), _dec20 = property(Node), _dec21 = property(Node), _dec22 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_LevelBase) {
        _inheritsLoose(Level_5, _LevelBase);
        function Level_5() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _LevelBase.call.apply(_LevelBase, [this].concat(args)) || this;
          // ==================== 数据源与 Inspector 配置 ====================
          _initializerDefineProperty(_this, "lvData", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "customSpriteFrame", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "customImages", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "defaultRows", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "defaultCols", _descriptor5, _assertThisInitialized(_this));
          // ==================== 编辑器与运行时 UI 节点引用 ====================
          _initializerDefineProperty(_this, "hudRoot", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "titleLabel", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "subTitleLabel", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "progressLabel", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "timerLabel", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "boardRoot", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "boardBgGraphics", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "boardSlotsGraphics", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "piecesContainer", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fxRoot", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bottomControlsNode", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnShuffleNode", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnNextNode", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winBannerNode", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winBannerLabel", _descriptor20, _assertThisInitialized(_this));
          // ==================== 视觉配色配置 ====================
          _this.COLOR_BOARD_BG = new Color(255, 255, 255, 255);
          _this.COLOR_BOARD_BORDER = new Color(226, 232, 240, 255);
          _this.COLOR_SLOT_EMPTY = new Color(241, 245, 249, 200);
          _this.COLOR_SLOT_BORDER = new Color(203, 213, 225, 220);
          // ==================== 运行时状态 ====================
          _this.currentPuzzleIndex = 0;
          _this.currentPuzzleConfig = null;
          _this.currentRows = 3;
          _this.currentCols = 3;
          _this.totalPieces = 9;
          _this.currentSpriteFrame = null;
          _this.isGameWon = false;
          _this.isShuffling = false;
          _this.elapsedTime = 0;
          _this.isTimerRunning = false;
          // 画布与几何尺寸
          _this.BOARD_SIZE = 540;
          _this.BOARD_CENTER_Y = 35;
          _this.TILE_GAP = 4;
          // 未拼好块之间的间隔（拼好的块之间为 0）
          _this.pieceWidth = 180;
          _this.pieceHeight = 180;
          // 槽位位置表
          _this.slotPositions = [];
          // 碎片集合与多块成组交互状态
          _this.pieces = [];
          _this.activeDraggingGroup = [];
          _this.anchorPiece = null;
          _this.selectedGroup = [];
          _this.touchOffset = new Vec2();
          _this.touchStartLoc = new Vec2();
          // Web Audio 音效合成器
          _this.audioCtx = null;
          // 动态程序艺术图集缓存
          _this.proceduralSpriteFrames = new Map();
          return _this;
        }
        var _proto = Level_5.prototype;
        _proto.onLoad = function onLoad() {
          _LevelBase.prototype.onLoad.call(this);
          {
            this.InitAudioSynthesizer();
            this.InitProceduralArtworks();
          }
          this.BuildSceneLayout();
        };
        _proto.start = function start() {
          if (!this.lvData) {
            this.lvData = this.getComponentInChildren(Lv_Data_5) || this.node.addComponent(Lv_Data_5);
          }
          this.LoadPuzzleByIndex(0);
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
            console.warn("[Level_5] Web Audio 不可用，静音模式运行");
          }
        };
        _proto.PlayTone = function PlayTone(freq, type, duration, gainVal) {
          if (gainVal === void 0) {
            gainVal = 0.2;
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
        _proto.PlayPickSfx = function PlayPickSfx() {
          this.PlayTone(440, 'triangle', 0.1, 0.2);
        };
        _proto.PlaySwapSfx = function PlaySwapSfx() {
          var _this2 = this;
          this.PlayTone(523.25, 'sine', 0.12, 0.22);
          setTimeout(function () {
            return _this2.PlayTone(659.25, 'triangle', 0.14, 0.2);
          }, 40);
        };
        _proto.PlayCorrectSfx = function PlayCorrectSfx() {
          var _this3 = this;
          this.PlayTone(784, 'sine', 0.14, 0.25);
          setTimeout(function () {
            return _this3.PlayTone(1046.5, 'sine', 0.24, 0.3);
          }, 50);
        };
        _proto.PlayShuffleSfx = function PlayShuffleSfx() {
          var _this4 = this;
          [330, 392, 440, 523.25].forEach(function (f, idx) {
            setTimeout(function () {
              return _this4.PlayTone(f, 'sine', 0.1, 0.15);
            }, idx * 45);
          });
        };
        _proto.PlayVictorySfx = function PlayVictorySfx() {
          var _this5 = this;
          var notes = [523.25, 659.25, 783.99, 1046.5, 1318.5, 1567.98];
          notes.forEach(function (freq, idx) {
            setTimeout(function () {
              _this5.PlayTone(freq, 'sine', 0.55, 0.28);
            }, idx * 110);
          });
        }

        // ==================== 程序艺术生成器 ====================
        ;

        _proto.CreateProceduralArtwork = function CreateProceduralArtwork(themeKey) {
          var cached = this.proceduralSpriteFrames.get(themeKey);
          if (cached) return cached;
          try {
            var canvas = document.createElement('canvas');
            canvas.width = 600;
            canvas.height = 600;
            var ctx = canvas.getContext('2d');
            if (!ctx) return null;
            if (themeKey === 'theme_sunset') {
              var grad = ctx.createLinearGradient(0, 0, 0, 600);
              grad.addColorStop(0, '#FF6B6B');
              grad.addColorStop(0.5, '#FFA07A');
              grad.addColorStop(1, '#FFEAA7');
              ctx.fillStyle = grad;
              ctx.fillRect(0, 0, 600, 600);
              ctx.fillStyle = '#FFFFFF';
              ctx.beginPath();
              ctx.arc(300, 240, 90, 0, Math.PI * 2);
              ctx.fill();
              ctx.fillStyle = '#C44D58';
              ctx.beginPath();
              ctx.moveTo(0, 460);
              ctx.lineTo(160, 340);
              ctx.lineTo(320, 440);
              ctx.lineTo(480, 320);
              ctx.lineTo(600, 450);
              ctx.lineTo(600, 600);
              ctx.lineTo(0, 600);
              ctx.closePath();
              ctx.fill();
              ctx.fillStyle = '#556270';
              ctx.beginPath();
              ctx.moveTo(0, 500);
              ctx.lineTo(200, 420);
              ctx.lineTo(420, 500);
              ctx.lineTo(600, 430);
              ctx.lineTo(600, 600);
              ctx.lineTo(0, 600);
              ctx.closePath();
              ctx.fill();
              ctx.strokeStyle = '#FFFFFF';
              ctx.lineWidth = 3;
              [[180, 160], [220, 130], [270, 150], [420, 190]].forEach(function (_ref) {
                var bx = _ref[0],
                  by = _ref[1];
                ctx.beginPath();
                ctx.arc(bx - 12, by, 14, Math.PI * 1.2, Math.PI * 1.9);
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(bx + 12, by, 14, Math.PI * 1.1, Math.PI * 1.8);
                ctx.stroke();
              });
            } else if (themeKey === 'theme_aurora') {
              var _grad = ctx.createLinearGradient(0, 0, 0, 600);
              _grad.addColorStop(0, '#0F2027');
              _grad.addColorStop(0.5, '#203A43');
              _grad.addColorStop(1, '#2C5364');
              ctx.fillStyle = _grad;
              ctx.fillRect(0, 0, 600, 600);
              var aGrad = ctx.createLinearGradient(0, 150, 600, 350);
              aGrad.addColorStop(0, 'rgba(0, 255, 180, 0.7)');
              aGrad.addColorStop(0.5, 'rgba(0, 198, 255, 0.8)');
              aGrad.addColorStop(1, 'rgba(155, 89, 182, 0.6)');
              ctx.fillStyle = aGrad;
              ctx.beginPath();
              ctx.moveTo(0, 270);
              ctx.bezierCurveTo(160, 130, 360, 360, 600, 170);
              ctx.lineTo(600, 350);
              ctx.bezierCurveTo(400, 450, 200, 250, 0, 400);
              ctx.closePath();
              ctx.fill();
              ctx.fillStyle = '#FFFFFF';
              for (var i = 0; i < 60; i++) {
                var sx = i * 97 % 600;
                var sy = i * 157 % 380;
                var r = i % 3 === 0 ? 2.5 : 1.2;
                ctx.beginPath();
                ctx.arc(sx, sy, r, 0, Math.PI * 2);
                ctx.fill();
              }
              ctx.fillStyle = '#E0F2FE';
              ctx.beginPath();
              ctx.moveTo(0, 600);
              ctx.lineTo(130, 470);
              ctx.lineTo(260, 600);
              ctx.lineTo(390, 450);
              ctx.lineTo(540, 600);
              ctx.lineTo(600, 510);
              ctx.lineTo(600, 600);
              ctx.closePath();
              ctx.fill();
            } else if (themeKey === 'theme_ocean') {
              var _grad2 = ctx.createLinearGradient(0, 0, 0, 600);
              _grad2.addColorStop(0, '#00C6FF');
              _grad2.addColorStop(0.6, '#0072FF');
              _grad2.addColorStop(1, '#002244');
              ctx.fillStyle = _grad2;
              ctx.fillRect(0, 0, 600, 600);
              ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
              ctx.beginPath();
              ctx.arc(460, 140, 70, 0, Math.PI * 2);
              ctx.fill();
              ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
              ctx.beginPath();
              ctx.moveTo(0, 360);
              ctx.bezierCurveTo(180, 320, 340, 420, 600, 350);
              ctx.lineTo(600, 600);
              ctx.lineTo(0, 600);
              ctx.closePath();
              ctx.fill();
            } else if (themeKey === 'theme_forest') {
              var _grad3 = ctx.createLinearGradient(0, 0, 0, 600);
              _grad3.addColorStop(0, '#74ebd5');
              _grad3.addColorStop(0.5, '#9face6');
              _grad3.addColorStop(1, '#2b580c');
              ctx.fillStyle = _grad3;
              ctx.fillRect(0, 0, 600, 600);
              ctx.fillStyle = '#638c38';
              ctx.beginPath();
              ctx.arc(180, 620, 280, 0, Math.PI * 2);
              ctx.fill();
              ctx.fillStyle = '#496e2d';
              ctx.beginPath();
              ctx.arc(460, 640, 300, 0, Math.PI * 2);
              ctx.fill();
            } else {
              var _grad4 = ctx.createLinearGradient(0, 0, 600, 600);
              _grad4.addColorStop(0, '#B721FF');
              _grad4.addColorStop(1, '#21D4FD');
              ctx.fillStyle = _grad4;
              ctx.fillRect(0, 0, 600, 600);
              ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
              ctx.beginPath();
              ctx.arc(300, 300, 180, 0, Math.PI * 2);
              ctx.fill();
            }
            var imgAsset = new ImageAsset(canvas);
            var tex = new Texture2D();
            tex.image = imgAsset;
            var sf = new SpriteFrame();
            sf.texture = tex;
            this.proceduralSpriteFrames.set(themeKey, sf);
            return sf;
          } catch (e) {
            console.warn("[Level_5] 创建程序插画异常:", e);
            return null;
          }
        };
        _proto.InitProceduralArtworks = function InitProceduralArtworks() {
          this.CreateProceduralArtwork('theme_sunset');
          this.CreateProceduralArtwork('theme_aurora');
          this.CreateProceduralArtwork('theme_ocean');
          this.CreateProceduralArtwork('theme_forest');
          this.CreateProceduralArtwork('theme_twilight');
        }

        // ==================== 场景与纯净 UI 节点构建 ====================
        ;

        _proto.BuildSceneLayout = function BuildSceneLayout() {
          var root = this.node;
          var currentLayer = root.layer || Layers.Enum.UI_2D;

          // 1. 背景底色
          var bgNode = root.getChildByName("bg");
          if (bgNode) {
            var sp = bgNode.getComponent(Sprite);
            if (sp) {
              sp.color = new Color(248, 250, 252, 255);
            }
          } else {
            bgNode = new Node("bg");
            bgNode.layer = currentLayer;
            bgNode.parent = root;
            bgNode.setSiblingIndex(0);
            var ut = bgNode.addComponent(UITransform);
            ut.setContentSize(750, 1600);
            var g = bgNode.addComponent(Graphics);
            g.fillColor = new Color(248, 250, 252, 255);
            g.rect(-375, -800, 750, 1600);
            g.fill();
          }

          // 检测预制体中是否已预先搭建 HUD_Root
          var existingHud = this.hudRoot || root.getChildByName("HUD_Root");
          if (existingHud) {
            this.BindExistingLayout();
            return;
          }

          // 2. 顶部 HUD 区域 (Y = 470)
          this.hudRoot = new Node("HUD_Root");
          this.hudRoot.layer = currentLayer;
          this.hudRoot.parent = root;
          this.hudRoot.setPosition(0, 470, 0);
          var titleNode = new Node("Title");
          titleNode.layer = currentLayer;
          titleNode.parent = this.hudRoot;
          titleNode.setPosition(0, 52, 0);
          this.titleLabel = titleNode.addComponent(Label);
          this.titleLabel.string = "妙 趣 拼 图";
          this.titleLabel.fontSize = 38;
          this.titleLabel.lineHeight = 42;
          this.titleLabel.isBold = true;
          this.titleLabel.color = new Color(30, 41, 59, 255);
          var subTitleNode = new Node("SubTitle");
          subTitleNode.layer = currentLayer;
          subTitleNode.parent = this.hudRoot;
          subTitleNode.setPosition(0, 12, 0);
          this.subTitleLabel = subTitleNode.addComponent(Label);
          this.subTitleLabel.string = "拖拽或点击互换方块 · 复原画卷";
          this.subTitleLabel.fontSize = 20;
          this.subTitleLabel.lineHeight = 24;
          this.subTitleLabel.color = new Color(100, 116, 139, 255);

          // 状态栏：进度 + 计时器
          var statusRow = new Node("StatusRow");
          statusRow.layer = currentLayer;
          statusRow.parent = this.hudRoot;
          statusRow.setPosition(0, -32, 0);
          var progressNode = new Node("Progress");
          progressNode.layer = currentLayer;
          progressNode.parent = statusRow;
          progressNode.setPosition(-130, 0, 0);
          this.progressLabel = progressNode.addComponent(Label);
          this.progressLabel.fontSize = 23;
          this.progressLabel.lineHeight = 27;
          this.progressLabel.isBold = true;
          this.progressLabel.color = new Color(16, 185, 129, 255);
          this.progressLabel.string = "🧩 复原进度: 0 / 9";
          var timerNode = new Node("Timer");
          timerNode.layer = currentLayer;
          timerNode.parent = statusRow;
          timerNode.setPosition(130, 0, 0);
          this.timerLabel = timerNode.addComponent(Label);
          this.timerLabel.fontSize = 22;
          this.timerLabel.lineHeight = 26;
          this.timerLabel.color = new Color(71, 85, 105, 255);
          this.timerLabel.string = "⏱ 00:00";

          // 3. 中央拼图大画框 (Y = 35)
          this.boardRoot = new Node("BoardRoot");
          this.boardRoot.layer = currentLayer;
          this.boardRoot.parent = root;
          this.boardRoot.setPosition(0, this.BOARD_CENTER_Y, 0);
          var boardUT = this.boardRoot.addComponent(UITransform);
          boardUT.setContentSize(this.BOARD_SIZE + 24, this.BOARD_SIZE + 24);

          // 底板背景绘制
          var bgGraphicsNode = new Node("BoardBg");
          bgGraphicsNode.layer = currentLayer;
          bgGraphicsNode.parent = this.boardRoot;
          this.boardBgGraphics = bgGraphicsNode.addComponent(Graphics);

          // 槽位底线绘制
          var slotsGraphicsNode = new Node("BoardSlots");
          slotsGraphicsNode.layer = currentLayer;
          slotsGraphicsNode.parent = this.boardRoot;
          this.boardSlotsGraphics = slotsGraphicsNode.addComponent(Graphics);

          // 4. 核心碎片统一容器
          this.piecesContainer = new Node("PiecesContainer");
          this.piecesContainer.layer = currentLayer;
          this.piecesContainer.parent = this.boardRoot;
          var containerUT = this.piecesContainer.addComponent(UITransform);
          containerUT.setContentSize(this.BOARD_SIZE, this.BOARD_SIZE);

          // 5. 特效层
          this.fxRoot = new Node("FX_Root");
          this.fxRoot.layer = currentLayer;
          this.fxRoot.parent = this.boardRoot;

          // 6. 底部轻量辅助控制栏 (Y = -380，仅保留重新打乱与下一张)
          this.BuildBottomGameplayControls(root, currentLayer);

          // 7. 通关横幅
          this.BuildWinBanner(root, currentLayer);

          // 绘制画框外卡片
          this.RedrawBoardBackground();
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
              if (!this.progressLabel) this.progressLabel = (_statusRow$getChildBy = statusRow.getChildByName("Progress")) == null ? void 0 : _statusRow$getChildBy.getComponent(Label);
              if (!this.timerLabel) this.timerLabel = (_statusRow$getChildBy2 = statusRow.getChildByName("Timer")) == null ? void 0 : _statusRow$getChildBy2.getComponent(Label);
            }
          }
          if (!this.boardRoot) this.boardRoot = root.getChildByName("BoardRoot");
          if (this.boardRoot) {
            var _this$boardRoot$getCh, _this$boardRoot$getCh2;
            if (!this.boardBgGraphics) this.boardBgGraphics = (_this$boardRoot$getCh = this.boardRoot.getChildByName("BoardBg")) == null ? void 0 : _this$boardRoot$getCh.getComponent(Graphics);
            if (!this.boardSlotsGraphics) this.boardSlotsGraphics = (_this$boardRoot$getCh2 = this.boardRoot.getChildByName("BoardSlots")) == null ? void 0 : _this$boardRoot$getCh2.getComponent(Graphics);
            if (!this.piecesContainer) this.piecesContainer = this.boardRoot.getChildByName("PiecesContainer");
            if (!this.fxRoot) this.fxRoot = this.boardRoot.getChildByName("FX_Root");
          }
          if (!this.bottomControlsNode) this.bottomControlsNode = root.getChildByName("BottomControls");
          if (this.bottomControlsNode) {
            if (!this.btnShuffleNode) this.btnShuffleNode = this.bottomControlsNode.getChildByName("Btn_🔄 重新打乱");
            if (!this.btnNextNode) this.btnNextNode = this.bottomControlsNode.getChildByName("Btn_⏭ 下一张");
          }
          if (!this.winBannerNode) this.winBannerNode = root.getChildByName("WinBanner");
          if (this.winBannerNode) {
            var _this$winBannerNode$g;
            if (!this.winBannerLabel) this.winBannerLabel = (_this$winBannerNode$g = this.winBannerNode.getChildByName("WinText")) == null ? void 0 : _this$winBannerNode$g.getComponent(Label);
          }
          {
            this.BindButtonEvents();
          }
        };
        _proto.BindButtonEvents = function BindButtonEvents() {
          var _this6 = this;
          this.AttachButtonTouch(this.btnShuffleNode, function () {
            if (_this6.isShuffling) return;
            _this6.ShufflePieces(true);
          });
          this.AttachButtonTouch(this.btnNextNode, function () {
            if (_this6.isShuffling) return;
            _this6.AdvanceToNextPuzzle();
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
            _this7.PlayTone(659.25, 'triangle', 0.08, 0.18);
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
          if (!this.boardBgGraphics && this.boardRoot) {
            var _this$boardRoot$getCh3;
            this.boardBgGraphics = (_this$boardRoot$getCh3 = this.boardRoot.getChildByName("BoardBg")) == null ? void 0 : _this$boardRoot$getCh3.getComponent(Graphics);
          }
          if (!this.boardSlotsGraphics && this.boardRoot) {
            var _this$boardRoot$getCh4;
            this.boardSlotsGraphics = (_this$boardRoot$getCh4 = this.boardRoot.getChildByName("BoardSlots")) == null ? void 0 : _this$boardRoot$getCh4.getComponent(Graphics);
          }
          if (this.boardBgGraphics) {
            this.RedrawBoardBackground();
          }
          if (this.boardSlotsGraphics) {
            this.RedrawBoardSlots();
          }
        };
        _proto.RedrawBoardBackground = function RedrawBoardBackground() {
          var half = this.BOARD_SIZE / 2;
          var pad = 14;
          this.boardBgGraphics.clear();

          // 3D 柔和阴影
          this.boardBgGraphics.fillColor = new Color(15, 23, 42, 28);
          this.boardBgGraphics.roundRect(-half - pad, -half - pad - 6, (half + pad) * 2, (half + pad) * 2 + 12, 26);
          this.boardBgGraphics.fill();

          // 卡片主白底
          this.boardBgGraphics.fillColor = this.COLOR_BOARD_BG;
          this.boardBgGraphics.roundRect(-half - pad, -half - pad, (half + pad) * 2, (half + pad) * 2, 22);
          this.boardBgGraphics.fill();

          // 边框线
          this.boardBgGraphics.strokeColor = this.COLOR_BOARD_BORDER;
          this.boardBgGraphics.lineWidth = 2.5;
          this.boardBgGraphics.roundRect(-half - pad, -half - pad, (half + pad) * 2, (half + pad) * 2, 22);
          this.boardBgGraphics.stroke();
        }

        /** 绘制槽位底框（支持高亮多个选中/悬停槽位） */;
        _proto.RedrawBoardSlots = function RedrawBoardSlots(highlightSlotIndices) {
          if (highlightSlotIndices === void 0) {
            highlightSlotIndices = [];
          }
          this.boardSlotsGraphics.clear();
          var half = this.BOARD_SIZE / 2;
          var rows = this.currentRows;
          var cols = this.currentCols;
          var pw = this.pieceWidth;
          var ph = this.pieceHeight;
          var highlightSet = new Set(highlightSlotIndices);
          for (var r = 0; r < rows; r++) {
            for (var c = 0; c < cols; c++) {
              var idx = r * cols + c;
              var x = -half + c * pw;
              var y = half - (r + 1) * ph;
              var isHighlight = highlightSet.has(idx);
              this.boardSlotsGraphics.fillColor = isHighlight ? new Color(254, 240, 138, 160) : this.COLOR_SLOT_EMPTY;
              this.boardSlotsGraphics.roundRect(x + 1.5, y + 1.5, pw - 3, ph - 3, 6);
              this.boardSlotsGraphics.fill();
              this.boardSlotsGraphics.strokeColor = isHighlight ? new Color(251, 191, 36, 255) : this.COLOR_SLOT_BORDER;
              this.boardSlotsGraphics.lineWidth = isHighlight ? 3 : 1.2;
              this.boardSlotsGraphics.roundRect(x + 1.5, y + 1.5, pw - 3, ph - 3, 6);
              this.boardSlotsGraphics.stroke();
            }
          }
        };
        _proto.BuildBottomGameplayControls = function BuildBottomGameplayControls(root, layer) {
          var _this8 = this;
          var bottomNode = new Node("BottomControls");
          bottomNode.layer = layer;
          bottomNode.parent = root;
          bottomNode.setPosition(0, -380, 0);
          this.CreateSimpleButton(bottomNode, -120, 0, 170, 52, "🔄 重新打乱", new Color(241, 245, 249, 255), layer, function () {
            if (_this8.isShuffling) return;
            _this8.ShufflePieces(true);
          });
          this.CreateSimpleButton(bottomNode, 120, 0, 170, 52, "⏭ 下一张", new Color(224, 231, 255, 255), layer, function () {
            if (_this8.isShuffling) return;
            _this8.AdvanceToNextPuzzle();
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
          g.roundRect(-w / 2, -h / 2, w, h, 14);
          g.stroke();
          var lblNode = new Node("Label");
          lblNode.layer = layer;
          lblNode.parent = btnNode;
          lblNode.setPosition(0, 0, 0);
          var lbl = lblNode.addComponent(Label);
          lbl.string = text;
          lbl.fontSize = 20;
          lbl.lineHeight = 24;
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
            _this9.PlayTone(659.25, 'triangle', 0.08, 0.18);
            onClick();
          }, this);
          btnNode.on(Node.EventType.TOUCH_CANCEL, function () {
            tween(btnNode).to(0.08, {
              scale: new Vec3(1, 1, 1)
            }).start();
          }, this);
          return btnNode;
        };
        _proto.BuildWinBanner = function BuildWinBanner(root, layer) {
          this.winBannerNode = new Node("WinBanner");
          this.winBannerNode.layer = layer;
          this.winBannerNode.parent = root;
          this.winBannerNode.setPosition(0, this.BOARD_CENTER_Y, 0);
          this.winBannerNode.active = false;
          var bannerBg = this.winBannerNode.addComponent(Graphics);
          bannerBg.fillColor = new Color(15, 23, 42, 230);
          bannerBg.roundRect(-240, -65, 480, 130, 20);
          bannerBg.fill();
          bannerBg.strokeColor = new Color(52, 211, 153, 255);
          bannerBg.lineWidth = 3;
          bannerBg.roundRect(-240, -65, 480, 130, 20);
          bannerBg.stroke();
          var bannerText = new Node("WinText");
          bannerText.layer = layer;
          bannerText.parent = this.winBannerNode;
          bannerText.setPosition(0, 10, 0);
          this.winBannerLabel = bannerText.addComponent(Label);
          this.winBannerLabel.string = "🎉 巧夺天工 · 拼图大成！";
          this.winBannerLabel.fontSize = 32;
          this.winBannerLabel.isBold = true;
          this.winBannerLabel.color = new Color(240, 253, 250, 255);
          var subText = new Node("WinSubText");
          subText.layer = layer;
          subText.parent = this.winBannerNode;
          subText.setPosition(0, -30, 0);
          var subLbl = subText.addComponent(Label);
          subLbl.string = "心手相应，即将开启下一幅妙卷...";
          subLbl.fontSize = 20;
          subLbl.color = new Color(148, 163, 184, 255);
        }

        // ==================== 关卡加载与数据解析 ====================
        ;

        _proto.LoadPuzzleByIndex = function LoadPuzzleByIndex(puzzleIdx) {
          this.currentPuzzleIndex = puzzleIdx;
          this.isGameWon = false;
          this.selectedGroup = [];
          this.activeDraggingGroup = [];
          this.anchorPiece = null;
          this.elapsedTime = 0;
          this.isTimerRunning = false;
          this.winBannerNode.active = false;
          var config = null;
          if (this.lvData) {
            config = this.lvData.GetPuzzle(this.currentPuzzleIndex);
          }
          var rows = config && config.rows && config.rows > 0 ? config.rows : this.lvData ? this.lvData.defaultRows : this.defaultRows;
          var cols = config && config.cols && config.cols > 0 ? config.cols : this.lvData ? this.lvData.defaultCols : this.defaultCols;
          this.currentRows = clamp(rows || 3, 2, 6);
          this.currentCols = clamp(cols || 3, 2, 6);
          this.totalPieces = this.currentRows * this.currentCols;
          this.currentPuzzleConfig = config;

          // 图片优先级解析
          var targetSf = null;
          if (config && config.spriteFrame) {
            targetSf = config.spriteFrame;
          } else if (this.customImages && this.customImages.length > 0) {
            targetSf = this.customImages[this.currentPuzzleIndex % this.customImages.length];
          } else if (this.lvData && this.lvData.imageGallery && this.lvData.imageGallery.length > 0) {
            targetSf = this.lvData.imageGallery[this.currentPuzzleIndex % this.lvData.imageGallery.length];
          } else if (this.customSpriteFrame) {
            if (this.currentPuzzleIndex === 0 || !config || !config.themeKey) {
              targetSf = this.customSpriteFrame;
            } else {
              targetSf = this.CreateProceduralArtwork(config.themeKey) || this.customSpriteFrame;
            }
          } else if (this.lvData && this.lvData.defaultSpriteFrame) {
            targetSf = this.lvData.defaultSpriteFrame;
          } else {
            var themeKey = config && config.themeKey ? config.themeKey : 'theme_sunset';
            targetSf = this.CreateProceduralArtwork(themeKey) || this.CreateProceduralArtwork('theme_sunset');
          }
          this.currentSpriteFrame = targetSf;
          var titleStr = config ? config.title : "\u7B2C " + (this.currentPuzzleIndex + 1) + " \u5173";
          this.subTitleLabel.string = titleStr + " \xB7 \u62D6\u62FD\u6216\u70B9\u51FB\u4E92\u6362\u590D\u539F";
          this.BuildPuzzlePiecesAndStart();
        }

        // ==================== 核心拼图生成、切片与排版 ====================
        ;

        _proto.BuildPuzzlePiecesAndStart = function BuildPuzzlePiecesAndStart() {
          var _this10 = this;
          this.pieces.forEach(function (p) {
            return p.rootNode.destroy();
          });
          this.pieces = [];
          this.piecesContainer.removeAllChildren();
          this.fxRoot.removeAllChildren();
          var rows = this.currentRows;
          var cols = this.currentCols;
          var halfBoard = this.BOARD_SIZE / 2;
          this.pieceWidth = this.BOARD_SIZE / cols;
          this.pieceHeight = this.BOARD_SIZE / rows;
          this.slotPositions = [];
          for (var r = 0; r < rows; r++) {
            for (var c = 0; c < cols; c++) {
              var posX = -halfBoard + (c + 0.5) * this.pieceWidth;
              var posY = halfBoard - (r + 0.5) * this.pieceHeight;
              this.slotPositions.push(new Vec3(posX, posY, 0));
            }
          }
          this.RedrawBoardSlots();
          this.UpdateTimerDisplay();
          var currentLayer = this.node.layer || Layers.Enum.UI_2D;
          for (var _r = 0; _r < rows; _r++) {
            for (var _c = 0; _c < cols; _c++) {
              var id = _r * cols + _c;
              var targetPos = this.slotPositions[id].clone();
              var pieceRoot = new Node("Piece_" + id);
              pieceRoot.layer = currentLayer;
              pieceRoot.parent = this.piecesContainer;
              pieceRoot.setPosition(targetPos);
              var pieceUT = pieceRoot.addComponent(UITransform);
              pieceUT.setContentSize(this.pieceWidth, this.pieceHeight);
              var maskNode = new Node("Mask");
              maskNode.layer = currentLayer;
              maskNode.parent = pieceRoot;
              var maskUT = maskNode.addComponent(UITransform);
              maskUT.setContentSize(this.pieceWidth, this.pieceHeight);
              maskNode.addComponent(Mask);
              var imgNode = new Node("Image");
              imgNode.layer = currentLayer;
              imgNode.parent = maskNode;
              var imgUT = imgNode.addComponent(UITransform);
              imgUT.setContentSize(this.BOARD_SIZE, this.BOARD_SIZE);
              var origImgX = halfBoard - (_c + 0.5) * this.pieceWidth;
              var origImgY = -halfBoard + (_r + 0.5) * this.pieceHeight;
              imgNode.setPosition(origImgX, origImgY, 0);
              var sprite = imgNode.addComponent(Sprite);
              sprite.sizeMode = Sprite.SizeMode.CUSTOM;
              sprite.spriteFrame = this.currentSpriteFrame;
              var borderNode = new Node("Border");
              borderNode.layer = currentLayer;
              borderNode.parent = pieceRoot;
              var borderGraphics = borderNode.addComponent(Graphics);
              var item = {
                id: id,
                originRow: _r,
                originCol: _c,
                currentSlot: id,
                rootNode: pieceRoot,
                maskNode: maskNode,
                imgNode: imgNode,
                sprite: sprite,
                borderGraphics: borderGraphics,
                slotPos: targetPos,
                pieceWidth: this.pieceWidth,
                pieceHeight: this.pieceHeight,
                connectedTop: false,
                connectedBottom: false,
                connectedLeft: false,
                connectedRight: false,
                initialDragPos: new Vec3()
              };
              this.RegisterPieceTouchEvents(item);
              this.pieces.push(item);
            }
          }

          // 初始状态：展示完整画卷 0.65 秒后打乱
          this.isShuffling = true;
          this.progressLabel.string = "👀 观察原图，准备打乱...";
          this.UpdateConnectedGroups();
          this.pieces.forEach(function (p) {
            return _this10.UpdatePieceGeometryAndBorder(p, 'normal');
          });
          this.scheduleOnce(function () {
            _this10.ShufflePieces(true);
          }, 0.65);
        }

        // ==================== 连通组识别与无缝隙几何渲染 ====================
        /** 核心算法：识别棋盘上所有已相互拼好接壤的连通块组 */;
        _proto.UpdateConnectedGroups = function UpdateConnectedGroups() {
          this.pieces.forEach(function (p) {
            p.connectedTop = false;
            p.connectedBottom = false;
            p.connectedLeft = false;
            p.connectedRight = false;
          });
          var rows = this.currentRows;
          var cols = this.currentCols;
          var slotMap = new Map();
          this.pieces.forEach(function (p) {
            return slotMap.set(p.currentSlot, p);
          });
          for (var r = 0; r < rows; r++) {
            for (var c = 0; c < cols; c++) {
              var slotA = r * cols + c;
              var pieceA = slotMap.get(slotA);
              if (!pieceA) continue;

              // 水平右邻居判定
              if (c < cols - 1) {
                var slotB = r * cols + (c + 1);
                var pieceB = slotMap.get(slotB);
                if (pieceB) {
                  // 在原图中两块是水平相邻的右邻居
                  if (pieceB.originRow === pieceA.originRow && pieceB.originCol === pieceA.originCol + 1) {
                    pieceA.connectedRight = true;
                    pieceB.connectedLeft = true;
                  }
                }
              }

              // 垂直下邻居判定
              if (r < rows - 1) {
                var _slotB = (r + 1) * cols + c;
                var _pieceB = slotMap.get(_slotB);
                if (_pieceB) {
                  // 在原图中两块是垂直相邻的下邻居
                  if (_pieceB.originCol === pieceA.originCol && _pieceB.originRow === pieceA.originRow + 1) {
                    pieceA.connectedBottom = true;
                    _pieceB.connectedTop = true;
                  }
                }
              }
            }
          }
        }

        /** 获取某个方块所在的完整连通拼合组（BFS 广度优先搜索） */;
        _proto.GetConnectedGroup = function GetConnectedGroup(startPiece) {
          var group = [];
          var visited = new Set();
          var queue = [startPiece];
          visited.add(startPiece.id);
          var cols = this.currentCols;
          var slotMap = new Map();
          this.pieces.forEach(function (p) {
            return slotMap.set(p.currentSlot, p);
          });
          while (queue.length > 0) {
            var curr = queue.shift();
            group.push(curr);
            var r = Math.floor(curr.currentSlot / cols);
            var c = curr.currentSlot % cols;
            if (curr.connectedTop) {
              var neighbor = slotMap.get((r - 1) * cols + c);
              if (neighbor && !visited.has(neighbor.id)) {
                visited.add(neighbor.id);
                queue.push(neighbor);
              }
            }
            if (curr.connectedBottom) {
              var _neighbor = slotMap.get((r + 1) * cols + c);
              if (_neighbor && !visited.has(_neighbor.id)) {
                visited.add(_neighbor.id);
                queue.push(_neighbor);
              }
            }
            if (curr.connectedLeft) {
              var _neighbor2 = slotMap.get(r * cols + (c - 1));
              if (_neighbor2 && !visited.has(_neighbor2.id)) {
                visited.add(_neighbor2.id);
                queue.push(_neighbor2);
              }
            }
            if (curr.connectedRight) {
              var _neighbor3 = slotMap.get(r * cols + (c + 1));
              if (_neighbor3 && !visited.has(_neighbor3.id)) {
                visited.add(_neighbor3.id);
                queue.push(_neighbor3);
              }
            }
          }
          return group;
        }

        /** 计算当前棋盘上的总连通组数 */;
        _proto.CountTotalGroups = function CountTotalGroups() {
          var _this11 = this;
          var visited = new Set();
          var count = 0;
          this.pieces.forEach(function (p) {
            if (!visited.has(p.id)) {
              count++;
              var g = _this11.GetConnectedGroup(p);
              g.forEach(function (item) {
                return visited.add(item.id);
              });
            }
          });
          return count;
        }

        /**
         * 【核心要求】：拼好的块是没有缝隙的！
         * 动态根据相邻接壤状态扩展裁切遮罩尺寸，并在接缝处彻底消除边框线，实现天衣无缝的拼合质感
         */;
        _proto.UpdatePieceGeometryAndBorder = function UpdatePieceGeometryAndBorder(item, style) {
          var halfW = item.pieceWidth / 2;
          var halfH = item.pieceHeight / 2;
          var halfGap = this.TILE_GAP / 2; // 2px

          // 已连通的边直达槽位物理边界（间隙为0），未连通的外缘保留微缩进
          var left = item.connectedLeft ? -halfW : -halfW + halfGap;
          var right = item.connectedRight ? halfW : halfW - halfGap;
          var top = item.connectedTop ? halfH : halfH - halfGap;
          var bottom = item.connectedBottom ? -halfH : -halfH + halfGap;
          var maskW = right - left;
          var maskH = top - bottom;
          var maskCenterX = (left + right) / 2;
          var maskCenterY = (top + bottom) / 2;
          var maskUT = item.maskNode.getComponent(UITransform);
          if (maskUT) {
            maskUT.setContentSize(maskW, maskH);
          }
          item.maskNode.setPosition(maskCenterX, maskCenterY, 0);

          // 内部完整大图的精准反向位移
          var halfBoard = this.BOARD_SIZE / 2;
          var origImgX = halfBoard - (item.originCol + 0.5) * item.pieceWidth;
          var origImgY = -halfBoard + (item.originRow + 0.5) * item.pieceHeight;
          item.imgNode.setPosition(origImgX - maskCenterX, origImgY - maskCenterY, 0);

          // 绘制轮廓边框：接壤接缝处严禁绘制边框（无痕融合），仅在外轮廓绘制
          var g = item.borderGraphics;
          g.clear();
          var strokeColor = new Color(203, 213, 225, 180);
          var lineWidth = 1.5;
          if (style === 'dragging') {
            strokeColor = new Color(251, 191, 36, 255); // 抓取态金黄高亮
            lineWidth = 3.5;
          } else if (style === 'selected') {
            strokeColor = new Color(52, 211, 153, 255); // 选中态青绿高亮
            lineWidth = 3.5;
          } else {
            var isJoined = item.connectedLeft || item.connectedRight || item.connectedTop || item.connectedBottom;
            strokeColor = isJoined ? new Color(255, 255, 255, 180) : new Color(203, 213, 225, 200);
            lineWidth = isJoined ? 2 : 1.5;
          }
          g.strokeColor = strokeColor;
          g.lineWidth = lineWidth;
          if (!item.connectedTop) {
            g.moveTo(left, top);
            g.lineTo(right, top);
          }
          if (!item.connectedRight) {
            g.moveTo(right, top);
            g.lineTo(right, bottom);
          }
          if (!item.connectedBottom) {
            g.moveTo(right, bottom);
            g.lineTo(left, bottom);
          }
          if (!item.connectedLeft) {
            g.moveTo(left, bottom);
            g.lineTo(left, top);
          }
          g.stroke();
        }

        // ==================== 初始打乱算法与动效 ====================
        ;

        _proto.ShufflePieces = function ShufflePieces(animate) {
          var _this12 = this;
          if (animate === void 0) {
            animate = true;
          }
          this.isShuffling = true;
          this.selectedGroup = [];
          this.activeDraggingGroup = [];
          this.anchorPiece = null;
          this.isGameWon = false;
          var count = this.pieces.length;
          if (count <= 1) {
            this.isShuffling = false;
            return;
          }
          var shuffledSlots = [];
          for (var i = 0; i < count; i++) {
            shuffledSlots.push(i);
          }
          var attempts = 0;
          var misplacedCount = 0;
          do {
            for (var _i = count - 1; _i > 0; _i--) {
              var j = Math.floor(Math.random() * (_i + 1));
              var _ref2 = [shuffledSlots[j], shuffledSlots[_i]];
              shuffledSlots[_i] = _ref2[0];
              shuffledSlots[j] = _ref2[1];
            }
            misplacedCount = 0;
            for (var _i2 = 0; _i2 < count; _i2++) {
              if (shuffledSlots[_i2] !== this.pieces[_i2].id) {
                misplacedCount++;
              }
            }
            attempts++;
          } while (misplacedCount < Math.floor(count * 0.75) && attempts < 20);
          this.PlayShuffleSfx();
          this.pieces.forEach(function (piece, index) {
            var targetSlotIdx = shuffledSlots[index];
            piece.currentSlot = targetSlotIdx;
            var targetPos = _this12.slotPositions[targetSlotIdx];
            piece.slotPos = targetPos.clone();
            if (animate) {
              tween(piece.rootNode).to(0.35, {
                position: targetPos
              }, {
                easing: 'backOut'
              }).start();
            } else {
              piece.rootNode.setPosition(targetPos);
            }
          });
          this.scheduleOnce(function () {
            _this12.isShuffling = false;
            _this12.isTimerRunning = true;
            _this12.UpdateConnectedGroups();
            _this12.pieces.forEach(function (p) {
              return _this12.UpdatePieceGeometryAndBorder(p, 'normal');
            });
            _this12.CheckWinCondition(false);
          }, animate ? 0.38 : 0.05);
        }

        // ==================== 触控交互：已经拼好的块移动时一起移动 ====================
        ;

        _proto.RegisterPieceTouchEvents = function RegisterPieceTouchEvents(item) {
          var _this13 = this;
          var node = item.rootNode;
          node.on(Node.EventType.TOUCH_START, function (event) {
            return _this13.OnPieceTouchStart(item, event);
          }, this);
          node.on(Node.EventType.TOUCH_MOVE, function (event) {
            return _this13.OnPieceTouchMove(item, event);
          }, this);
          node.on(Node.EventType.TOUCH_END, function (event) {
            return _this13.OnPieceTouchEnd(item, event);
          }, this);
          node.on(Node.EventType.TOUCH_CANCEL, function (event) {
            return _this13.OnPieceTouchEnd(item, event);
          }, this);
        };
        _proto.OnPieceTouchStart = function OnPieceTouchStart(item, event) {
          var _this14 = this;
          if (this.isGameWon || this.isShuffling) return;
          if (this.activeDraggingGroup.length > 0) return;

          // 【核心要求】：获取此块所在的整个拼好组，移动时整组一起移动！
          this.activeDraggingGroup = this.GetConnectedGroup(item);
          this.anchorPiece = item;
          var loc = event.getUILocation ? event.getUILocation() : event.getLocation();
          this.touchStartLoc.set(loc.x, loc.y);
          var containerUT = this.piecesContainer.getComponent(UITransform);
          if (!containerUT) return;
          var touchPos = containerUT.convertToNodeSpaceAR(new Vec3(loc.x, loc.y, 0));
          this.touchOffset.set(item.rootNode.position.x - touchPos.x, item.rootNode.position.y - touchPos.y);

          // 整组抬起至顶层，产生微浮起放大与高亮光晕
          this.activeDraggingGroup.forEach(function (p, idx) {
            p.initialDragPos = p.rootNode.position.clone();
            p.rootNode.setSiblingIndex(9000 + idx);
            _this14.UpdatePieceGeometryAndBorder(p, 'dragging');
            tween(p.rootNode).to(0.1, {
              scale: new Vec3(1.06, 1.06, 1)
            }, {
              easing: 'sineOut'
            }).start();
          });
          this.PlayPickSfx();
        };
        _proto.OnPieceTouchMove = function OnPieceTouchMove(item, event) {
          if (this.activeDraggingGroup.length === 0 || !this.anchorPiece) return;
          var loc = event.getUILocation ? event.getUILocation() : event.getLocation();
          var containerUT = this.piecesContainer.getComponent(UITransform);
          if (!containerUT) return;
          var touchPos = containerUT.convertToNodeSpaceAR(new Vec3(loc.x, loc.y, 0));

          // 计算当前锚点方块的位移差值
          var anchorTargetX = touchPos.x + this.touchOffset.x;
          var anchorTargetY = touchPos.y + this.touchOffset.y;
          var deltaX = anchorTargetX - this.anchorPiece.initialDragPos.x;
          var deltaY = anchorTargetY - this.anchorPiece.initialDragPos.y;

          // 整组所有方块同向刚体平移
          this.activeDraggingGroup.forEach(function (p) {
            p.rootNode.setPosition(p.initialDragPos.x + deltaX, p.initialDragPos.y + deltaY, 0);
          });

          // 探测锚点所指向的目标槽位偏移
          var cols = this.currentCols;
          var rows = this.currentRows;
          var anchorOrigSlot = this.anchorPiece.currentSlot;
          var anchorOrigRow = Math.floor(anchorOrigSlot / cols);
          var anchorOrigCol = anchorOrigSlot % cols;
          var candSlot = this.FindClosestSlotIndex(this.anchorPiece.rootNode.position);
          var highlightSlots = [];
          if (candSlot >= 0) {
            var candRow = Math.floor(candSlot / cols);
            var candCol = candSlot % cols;
            var dRow = candRow - anchorOrigRow;
            var dCol = candCol - anchorOrigCol;

            // 验证整组偏移后是否都在棋盘有效范围内
            var canFit = this.activeDraggingGroup.every(function (p) {
              var r = Math.floor(p.currentSlot / cols) + dRow;
              var c = p.currentSlot % cols + dCol;
              return r >= 0 && r < rows && c >= 0 && c < cols;
            });
            if (canFit) {
              highlightSlots = this.activeDraggingGroup.map(function (p) {
                var r = Math.floor(p.currentSlot / cols) + dRow;
                var c = p.currentSlot % cols + dCol;
                return r * cols + c;
              });
            }
          }
          this.RedrawBoardSlots(highlightSlots);
        };
        _proto.OnPieceTouchEnd = function OnPieceTouchEnd(item, event) {
          var _this15 = this;
          if (this.activeDraggingGroup.length === 0 || !this.anchorPiece) return;
          var group = [].concat(this.activeDraggingGroup);
          var anchor = this.anchorPiece;
          this.activeDraggingGroup = [];
          this.anchorPiece = null;
          this.RedrawBoardSlots([]);
          var loc = event.getUILocation ? event.getUILocation() : event.getLocation();
          var moveDist = Vec2.distance(this.touchStartLoc, loc);
          if (moveDist > 12) {
            // ================= 拖拽手势：整组落位与互换 =================
            var cols = this.currentCols;
            var rows = this.currentRows;
            var anchorOrigSlot = anchor.currentSlot;
            var anchorOrigRow = Math.floor(anchorOrigSlot / cols);
            var anchorOrigCol = anchorOrigSlot % cols;
            var candSlot = this.FindClosestSlotIndex(anchor.rootNode.position);
            var applied = false;
            if (candSlot >= 0) {
              var candRow = Math.floor(candSlot / cols);
              var candCol = candSlot % cols;
              var dRow = candRow - anchorOrigRow;
              var dCol = candCol - anchorOrigCol;
              if (dRow !== 0 || dCol !== 0) {
                var canFit = group.every(function (p) {
                  var r = Math.floor(p.currentSlot / cols) + dRow;
                  var c = p.currentSlot % cols + dCol;
                  return r >= 0 && r < rows && c >= 0 && c < cols;
                });
                if (canFit) {
                  this.ExecuteGroupMove(group, dRow, dCol);
                  applied = true;
                }
              }
            }
            if (!applied) {
              // 超出范围或无有效移动：整组平滑回弹原槽位
              group.forEach(function (p) {
                tween(p.rootNode).to(0.2, {
                  position: p.slotPos,
                  scale: new Vec3(1, 1, 1)
                }, {
                  easing: 'quadOut'
                }).call(function () {
                  return _this15.UpdatePieceGeometryAndBorder(p, 'normal');
                }).start();
              });
            }
          } else {
            // ================= 点击手势：点击选中与点击互换 =================
            this.HandleGroupClick(group, anchor);
          }
        }

        /** 执行整组方块移动及被置换方块平滑对调 */;
        _proto.ExecuteGroupMove = function ExecuteGroupMove(group, dRow, dCol) {
          var _this16 = this;
          var cols = this.currentCols;
          var groupOrigSlots = group.map(function (p) {
            return p.currentSlot;
          });
          var groupTargetSlots = group.map(function (p) {
            var r = Math.floor(p.currentSlot / cols) + dRow;
            var c = p.currentSlot % cols + dCol;
            return r * cols + c;
          });
          var origSlotSet = new Set(groupOrigSlots);
          var targetSlotSet = new Set(groupTargetSlots);

          // 空出的原槽位集合与侵入的新槽位集合（数学恒等：二者大小必然相等）
          var vacatedSlots = groupOrigSlots.filter(function (s) {
            return !targetSlotSet.has(s);
          });
          var incomingSlots = groupTargetSlots.filter(function (s) {
            return !origSlotSet.has(s);
          });

          // 收集受影响的原住方块
          var displacedPieces = [];
          incomingSlots.forEach(function (slot) {
            var p = _this16.pieces.find(function (item) {
              return item.currentSlot === slot;
            });
            if (p) displacedPieces.push(p);
          });

          // 将原住方块映射入 vacatedSlots
          for (var i = 0; i < displacedPieces.length; i++) {
            var p = displacedPieces[i];
            var newSlot = vacatedSlots[i];
            p.currentSlot = newSlot;
            p.slotPos = this.slotPositions[newSlot].clone();
          }

          // 更新整组方块的新槽位
          for (var _i3 = 0; _i3 < group.length; _i3++) {
            var _p = group[_i3];
            var _newSlot = groupTargetSlots[_i3];
            _p.currentSlot = _newSlot;
            _p.slotPos = this.slotPositions[_newSlot].clone();
          }
          this.PlaySwapSfx();
          var finishedCount = 0;
          var totalCount = group.length + displacedPieces.length;
          var onOneFinish = function onOneFinish() {
            finishedCount++;
            if (finishedCount === totalCount) {
              _this16.OnMoveComplete();
            }
          };

          // 统一滑行动画
          group.forEach(function (p) {
            tween(p.rootNode).to(0.22, {
              position: p.slotPos,
              scale: new Vec3(1, 1, 1)
            }, {
              easing: 'quadOut'
            }).call(onOneFinish).start();
          });
          displacedPieces.forEach(function (p) {
            p.rootNode.setSiblingIndex(8500);
            tween(p.rootNode).to(0.22, {
              position: p.slotPos,
              scale: new Vec3(1, 1, 1)
            }, {
              easing: 'quadOut'
            }).call(onOneFinish).start();
          });
        };
        _proto.OnMoveComplete = function OnMoveComplete() {
          var _this17 = this;
          var oldGroupCount = this.CountTotalGroups();
          this.UpdateConnectedGroups();
          var newGroupCount = this.CountTotalGroups();

          // 刷新所有方块的接缝几何与无缝边框
          this.pieces.forEach(function (p) {
            _this17.UpdatePieceGeometryAndBorder(p, 'normal');
          });

          // 若总组数减少，表明成功拼合了新的接壤块！
          if (newGroupCount < oldGroupCount) {
            this.PlayCorrectSfx();
            this.pieces.forEach(function (p) {
              if (p.connectedTop || p.connectedBottom || p.connectedLeft || p.connectedRight) {
                _this17.SpawnSnapSparkles(p.slotPos);
              }
            });
          }
          this.CheckWinCondition(true);
        }

        /** 处理点击互换 */;
        _proto.HandleGroupClick = function HandleGroupClick(group, anchor) {
          var _this18 = this;
          if (this.selectedGroup.length === 0) {
            this.selectedGroup = group;
            group.forEach(function (p) {
              return _this18.UpdatePieceGeometryAndBorder(p, 'selected');
            });
            tween(anchor.rootNode).to(0.08, {
              scale: new Vec3(1.06, 1.06, 1)
            }).start();
          } else if (this.selectedGroup.some(function (p) {
            return p.id === anchor.id;
          })) {
            // 取消选中
            this.selectedGroup.forEach(function (p) {
              tween(p.rootNode).to(0.08, {
                scale: new Vec3(1, 1, 1)
              }).start();
              _this18.UpdatePieceGeometryAndBorder(p, 'normal');
            });
            this.selectedGroup = [];
          } else {
            // 两组或两个单块点击互换
            var firstGroup = [].concat(this.selectedGroup);
            this.selectedGroup = [];
            firstGroup.forEach(function (p) {
              tween(p.rootNode).to(0.08, {
                scale: new Vec3(1, 1, 1)
              }).start();
              _this18.UpdatePieceGeometryAndBorder(p, 'normal');
            });

            // 如果两者均为单块，直接无缝对调
            if (firstGroup.length === 1 && group.length === 1) {
              var pieceA = firstGroup[0];
              var pieceB = group[0];
              var slotA = pieceA.currentSlot;
              var slotB = pieceB.currentSlot;
              pieceA.currentSlot = slotB;
              pieceB.currentSlot = slotA;
              pieceA.slotPos = this.slotPositions[slotB].clone();
              pieceB.slotPos = this.slotPositions[slotA].clone();
              pieceA.rootNode.setSiblingIndex(9998);
              pieceB.rootNode.setSiblingIndex(9999);
              this.PlaySwapSfx();
              var done = 0;
              var checkDone = function checkDone() {
                done++;
                if (done === 2) _this18.OnMoveComplete();
              };
              tween(pieceA.rootNode).to(0.22, {
                position: pieceA.slotPos,
                scale: new Vec3(1, 1, 1)
              }, {
                easing: 'quadOut'
              }).call(checkDone).start();
              tween(pieceB.rootNode).to(0.22, {
                position: pieceB.slotPos,
                scale: new Vec3(1, 1, 1)
              }, {
                easing: 'quadOut'
              }).call(checkDone).start();
            } else {
              // 若包含多块组，计算几何中心并触发整体偏移
              var cols = this.currentCols;
              var firstAnchor = firstGroup[0];
              var dRow = Math.floor(anchor.currentSlot / cols) - Math.floor(firstAnchor.currentSlot / cols);
              var dCol = anchor.currentSlot % cols - firstAnchor.currentSlot % cols;
              var rows = this.currentRows;
              var canFit = firstGroup.every(function (p) {
                var r = Math.floor(p.currentSlot / cols) + dRow;
                var c = p.currentSlot % cols + dCol;
                return r >= 0 && r < rows && c >= 0 && c < cols;
              });
              if (canFit && (dRow !== 0 || dCol !== 0)) {
                this.ExecuteGroupMove(firstGroup, dRow, dCol);
              }
            }
          }
        };
        _proto.FindClosestSlotIndex = function FindClosestSlotIndex(pos) {
          var closestIdx = -1;
          var minDist = Number.MAX_VALUE;
          for (var i = 0; i < this.slotPositions.length; i++) {
            var slotPos = this.slotPositions[i];
            var dist = Vec2.distance(new Vec2(pos.x, pos.y), new Vec2(slotPos.x, slotPos.y));
            if (dist < minDist) {
              minDist = dist;
              closestIdx = i;
            }
          }
          var threshold = Math.max(this.pieceWidth, this.pieceHeight) * 0.85;
          if (minDist <= threshold) {
            return closestIdx;
          }
          return -1;
        };
        _proto.SpawnSnapSparkles = function SpawnSnapSparkles(boardPos) {
          var _this19 = this;
          var colors = [new Color(251, 191, 36, 255), new Color(52, 211, 153, 255), new Color(96, 165, 250, 255), new Color(244, 114, 182, 255)];
          var _loop = function _loop() {
            var star = new Node("Sparkle");
            star.layer = _this19.node.layer || Layers.Enum.UI_2D;
            star.parent = _this19.fxRoot;
            star.setPosition(boardPos.x, boardPos.y, 0);
            var g = star.addComponent(Graphics);
            g.fillColor = colors[i % colors.length];
            g.circle(0, 0, 3.5 + Math.random() * 4);
            g.fill();
            var angle = Math.PI * 2 * i / 14 + (Math.random() - 0.5) * 0.4;
            var dist = 30 + Math.random() * 45;
            tween(star).to(0.32 + Math.random() * 0.12, {
              position: new Vec3(boardPos.x + Math.cos(angle) * dist, boardPos.y + Math.sin(angle) * dist, 0),
              scale: new Vec3(0, 0, 1)
            }, {
              easing: 'cubicOut'
            }).call(function () {
              return star.destroy();
            }).start();
          };
          for (var i = 0; i < 14; i++) {
            _loop();
          }
        }

        // ==================== 胜负判定与持续拼图机制 ====================
        ;

        _proto.CheckWinCondition = function CheckWinCondition(triggerWinEffects) {
          if (triggerWinEffects === void 0) {
            triggerWinEffects = true;
          }
          var correctCount = 0;
          this.pieces.forEach(function (p) {
            if (p.currentSlot === p.id) {
              correctCount++;
            }
          });
          this.progressLabel.string = "\uD83E\uDDE9 \u590D\u539F\u8FDB\u5EA6: " + correctCount + " / " + this.totalPieces;
          if (correctCount === this.totalPieces && !this.isGameWon && !this.isShuffling) {
            this.isGameWon = true;
            this.isTimerRunning = false;
            if (triggerWinEffects) {
              this.HandleVictory();
            }
          }
        };
        _proto.HandleVictory = function HandleVictory() {
          var _this20 = this;
          this.PlayVictorySfx();

          // 1. 无缝全图熔接：彻底闭合全部边缘并清空边框
          this.pieces.forEach(function (piece) {
            piece.borderGraphics.clear();
            var maskUT = piece.maskNode.getComponent(UITransform);
            if (maskUT) {
              maskUT.setContentSize(piece.pieceWidth, piece.pieceHeight);
            }
            piece.maskNode.setPosition(0, 0, 0);
            var halfBoard = _this20.BOARD_SIZE / 2;
            var origImgX = halfBoard - (piece.originCol + 0.5) * piece.pieceWidth;
            var origImgY = -halfBoard + (piece.originRow + 0.5) * piece.pieceHeight;
            piece.imgNode.setPosition(origImgX, origImgY, 0);
          });

          // 2. 满屏礼花粒子
          var colors = [new Color(251, 191, 36, 255), new Color(52, 211, 153, 255), new Color(96, 165, 250, 255), new Color(244, 114, 182, 255), new Color(168, 85, 247, 255)];
          var _loop2 = function _loop2() {
            var firework = new Node("Firework");
            firework.layer = _this20.node.layer || Layers.Enum.UI_2D;
            firework.parent = _this20.fxRoot;
            firework.setPosition(0, 0, 0);
            var g = firework.addComponent(Graphics);
            g.fillColor = colors[i % colors.length];
            g.circle(0, 0, 4 + Math.random() * 5);
            g.fill();
            var angle = Math.PI * 2 * i / 36;
            var dist = 100 + Math.random() * 180;
            tween(firework).delay(0.1).to(0.6 + Math.random() * 0.2, {
              position: new Vec3(Math.cos(angle) * dist, Math.sin(angle) * dist, 0),
              scale: new Vec3(0, 0, 1)
            }, {
              easing: 'cubicOut'
            }).call(function () {
              return firework.destroy();
            }).start();
          };
          for (var i = 0; i < 36; i++) {
            _loop2();
          }

          // 3. 弹出轻量通关横幅
          this.winBannerNode.active = true;
          this.winBannerNode.setScale(new Vec3(0.3, 0.3, 1));
          tween(this.winBannerNode).to(0.28, {
            scale: new Vec3(1, 1, 1)
          }, {
            easing: 'backOut'
          }).start();

          // 4. 自动开启下一张拼图，场景一直持续拼图
          var delay = this.lvData && this.lvData.autoAdvanceDelay ? this.lvData.autoAdvanceDelay : 1.8;
          this.scheduleOnce(function () {
            _this20.AdvanceToNextPuzzle();
          }, delay);
        };
        _proto.AdvanceToNextPuzzle = function AdvanceToNextPuzzle() {
          var _this21 = this;
          var total = (this.lvData ? this.lvData.GetTotalPuzzles() : 5) || 5;
          var nextIdx = (this.currentPuzzleIndex + 1) % total;
          tween(this.piecesContainer).to(0.18, {
            scale: new Vec3(0.9, 0.9, 1)
          }, {
            easing: 'sineIn'
          }).call(function () {
            _this21.piecesContainer.setScale(new Vec3(1, 1, 1));
            _this21.LoadPuzzleByIndex(nextIdx);
          }).start();
        };
        _proto.UpdateTimerDisplay = function UpdateTimerDisplay() {
          if (!this.timerLabel) return;
          var m = Math.floor(this.elapsedTime / 60);
          var s = Math.floor(this.elapsedTime % 60);
          var mm = m < 10 ? "0" + m : "" + m;
          var ss = s < 10 ? "0" + s : "" + s;
          this.timerLabel.string = "\u23F1 " + mm + ":" + ss;
        };
        return Level_5;
      }(LevelBase), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lvData", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "customSpriteFrame", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "customImages", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "defaultRows", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "defaultCols", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "hudRoot", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "titleLabel", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "subTitleLabel", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "progressLabel", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "timerLabel", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "boardRoot", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "boardBgGraphics", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "boardSlotsGraphics", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "piecesContainer", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "fxRoot", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "bottomControlsNode", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "btnShuffleNode", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "btnNextNode", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "winBannerNode", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "winBannerLabel", [_dec22], {
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

System.register("chunks:///_virtual/LevelRes_5.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LevelResBase.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, LevelResBase;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      LevelResBase = module.LevelResBase;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "6869ckuBJpIyZHKhR59Am/o", "LevelRes_5", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LevelRes_5 = exports('LevelRes_5', (_dec = ccclass('LevelRes_5'), _dec(_class = /*#__PURE__*/function (_LevelResBase) {
        _inheritsLoose(LevelRes_5, _LevelResBase);
        function LevelRes_5() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _LevelResBase.call.apply(_LevelResBase, [this].concat(args)) || this;
          _this.levelResConfig = [];
          return _this;
        }
        return LevelRes_5;
      }(LevelResBase)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Lv_Data_5.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Enum, CCInteger, SpriteFrame, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      CCInteger = module.CCInteger;
      SpriteFrame = module.SpriteFrame;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "c742fqINB5Fgb32PaW7jj+a", "Lv_Data_5", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /** 拼图玩法交互模式 */
      var PuzzlePlayMode = exports('PuzzlePlayMode', /*#__PURE__*/function (PuzzlePlayMode) {
        PuzzlePlayMode[PuzzlePlayMode["SWAP"] = 0] = "SWAP";
        PuzzlePlayMode[PuzzlePlayMode["DOCK"] = 1] = "DOCK";
        return PuzzlePlayMode;
      }({}));

      /** 单个拼图关卡/题目数据项配置 */

      var Lv_Data_5 = exports('Lv_Data_5', (_dec = ccclass('Lv_Data_5'), _dec2 = property({
        type: Enum(PuzzlePlayMode),
        tooltip: "拼图交互模式：\nSWAP = 画框内打乱互换复原（默认推荐）\nDOCK = 底部托盘拖拽磁吸复原"
      }), _dec3 = property({
        type: CCInteger,
        tooltip: "全局默认网格行数（可自由在数据中修改，如 3 表示 3 行）"
      }), _dec4 = property({
        type: CCInteger,
        tooltip: "全局默认网格列数（可自由在数据中修改，如 3 表示 3 列，3x3即9块）"
      }), _dec5 = property({
        type: SpriteFrame,
        tooltip: "全局自定义主图（可在属性检查器中直接拖入 SpriteFrame，优先级高）"
      }), _dec6 = property({
        type: [SpriteFrame],
        tooltip: "全局自定义拼图图库列表（配置多张图片时，每完成一关自动换下一张图循环拼图）"
      }), _dec7 = property({
        tooltip: "是否循环持续拼图（通关后自动进入下一关/重排新图，场景就一直拼图）"
      }), _dec8 = property({
        tooltip: "通关后展示庆祝特效到进入下一张拼图的等待时间（秒）"
      }), _dec9 = property({
        type: [Object],
        tooltip: "拼图关卡题库列表（可在此处自由增减关卡、调整各自的行列数与图片）"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Lv_Data_5, _Component);
        function Lv_Data_5() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          // ==================== 全局玩法模式与默认网格配置 ====================
          _initializerDefineProperty(_this, "playMode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "defaultRows", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "defaultCols", _descriptor3, _assertThisInitialized(_this));
          // ==================== 全局自定义图片配置 ====================
          _initializerDefineProperty(_this, "defaultSpriteFrame", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "imageGallery", _descriptor5, _assertThisInitialized(_this));
          // ==================== 持续拼图机制配置 ====================
          _initializerDefineProperty(_this, "loopPuzzles", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "autoAdvanceDelay", _descriptor7, _assertThisInitialized(_this));
          // ==================== 多关卡拼图题目列表 ====================
          _initializerDefineProperty(_this, "puzzles", _descriptor8, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Lv_Data_5.prototype;
        /** 获取指定索引的拼图配置 */
        _proto.GetPuzzle = function GetPuzzle(index) {
          if (!this.puzzles || this.puzzles.length === 0) return null;
          var safeIndex = (index % this.puzzles.length + this.puzzles.length) % this.puzzles.length;
          return this.puzzles[safeIndex];
        }

        /** 获取关卡总数 */;
        _proto.GetTotalPuzzles = function GetTotalPuzzles() {
          return this.puzzles ? this.puzzles.length : 0;
        };
        return Lv_Data_5;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "playMode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return PuzzlePlayMode.SWAP;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "defaultRows", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "defaultCols", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "defaultSpriteFrame", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "imageGallery", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "loopPuzzles", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "autoAdvanceDelay", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.8;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "puzzles", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [{
            id: 1,
            title: "第 1 关 · 暖阳山岚",
            rows: 3,
            cols: 3,
            themeKey: 'theme_sunset'
          }, {
            id: 2,
            title: "第 2 关 · 极光幻夜",
            rows: 3,
            cols: 3,
            themeKey: 'theme_aurora'
          }, {
            id: 3,
            title: "第 3 关 · 蔚蓝潮汐",
            rows: 3,
            cols: 3,
            themeKey: 'theme_ocean'
          }, {
            id: 4,
            title: "第 4 关 · 苍翠原野",
            rows: 4,
            cols: 4,
            themeKey: 'theme_forest'
          }, {
            id: 5,
            title: "第 5 关 · 紫霞暮霭",
            rows: 4,
            cols: 4,
            themeKey: 'theme_twilight'
          }];
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/Level_5', 'chunks:///_virtual/Level_5'); 
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