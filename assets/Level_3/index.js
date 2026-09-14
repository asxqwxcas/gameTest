System.register("chunks:///_virtual/Level_3", ['./Level_3.ts', './Lv_Data_3.ts'], function () {
  return {
    setters: [null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/Level_3.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LevelBase.ts', './LevelMgr.ts', './ResultType.ts', './AudioMgr.ts', './Lv_Data_3.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Graphics, Label, Color, UITransform, UIOpacity, Tween, randomRangeInt, Vec3, tween, Vec2, clamp, randomRange, LevelBase, LevelMgr, ResultType, AudioMgr, Lv_Data_3;
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
      UITransform = module.UITransform;
      UIOpacity = module.UIOpacity;
      Tween = module.Tween;
      randomRangeInt = module.randomRangeInt;
      Vec3 = module.Vec3;
      tween = module.tween;
      Vec2 = module.Vec2;
      clamp = module.clamp;
      randomRange = module.randomRange;
    }, function (module) {
      LevelBase = module.LevelBase;
    }, function (module) {
      LevelMgr = module.LevelMgr;
    }, function (module) {
      ResultType = module.ResultType;
    }, function (module) {
      AudioMgr = module.AudioMgr;
    }, function (module) {
      Lv_Data_3 = module.Lv_Data_3;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19;
      cclegacy._RF.push({}, "d6b6eU6JqBFJYSvKRZWGMyK", "Level_3", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        executeInEditMode = _decorator.executeInEditMode;

      /** 游戏当前流程状态 */
      var GameState = /*#__PURE__*/function (GameState) {
        GameState[GameState["IDLE"] = 0] = "IDLE";
        GameState[GameState["COUNTDOWN"] = 1] = "COUNTDOWN";
        GameState[GameState["PLAYING"] = 2] = "PLAYING";
        GameState[GameState["ROUND_CLEAR"] = 3] = "ROUND_CLEAR";
        GameState[GameState["GAME_WIN"] = 4] = "GAME_WIN";
        GameState[GameState["GAME_OVER"] = 5] = "GAME_OVER";
        return GameState;
      }(GameState || {}); // 失败（超时）
      /** 色块视觉配色方案定义 */
      var Level_3 = exports('Level_3', (_dec = ccclass('Level_3'), _dec2 = executeInEditMode(true), _dec3 = property(Lv_Data_3), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Graphics), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Label), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Label), _dec14 = property(Label), _dec15 = property(Label), _dec16 = property(Graphics), _dec17 = property(Label), _dec18 = property(Node), _dec19 = property(Label), _dec20 = property(Node), _dec21 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_LevelBase) {
        _inheritsLoose(Level_3, _LevelBase);
        function Level_3() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _LevelBase.call.apply(_LevelBase, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "lvData", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "playArea", _descriptor2, _assertThisInitialized(_this));
          // 游戏主交互区域
          // ==================== 视觉配色配置 (Neon Cyber Theme) ====================
          _this.COLOR_BOARD_BG = new Color(15, 23, 42, 200);
          // 深邃蓝黑半透明底板
          _this.COLOR_BOARD_BORDER = new Color(51, 65, 85, 170);
          // 边框描边
          _this.COLOR_TEXT_PRIMARY = new Color(255, 255, 255, 255);
          _this.COLOR_TEXT_SECONDARY = new Color(148, 163, 184, 255);
          _this.COLOR_EMERALD = new Color(16, 185, 129, 255);
          // 翡翠青绿
          _this.COLOR_AMBER = new Color(245, 158, 11, 255);
          // 暖金琥珀
          _this.COLOR_ROSE = new Color(244, 63, 94, 255);
          // 警示红/玫红
          /** 8 种高饱和度、高对比度的现代霓虹配色方案 */
          _this.BLOCK_COLOR_PALETTES = [{
            name: "Crimson",
            fillColor: new Color(239, 68, 68, 255),
            borderColor: new Color(254, 202, 202, 255),
            glowColor: new Color(239, 68, 68, 120),
            particleColor: new Color(252, 165, 165, 255),
            iconSymbol: "◆"
          }, {
            name: "Amber",
            fillColor: new Color(245, 158, 11, 255),
            borderColor: new Color(254, 240, 138, 255),
            glowColor: new Color(245, 158, 11, 120),
            particleColor: new Color(253, 224, 71, 255),
            iconSymbol: "▲"
          }, {
            name: "Emerald",
            fillColor: new Color(16, 185, 129, 255),
            borderColor: new Color(167, 243, 208, 255),
            glowColor: new Color(16, 185, 129, 120),
            particleColor: new Color(110, 231, 183, 255),
            iconSymbol: "★"
          }, {
            name: "Cyan",
            fillColor: new Color(6, 182, 212, 255),
            borderColor: new Color(165, 243, 252, 255),
            glowColor: new Color(6, 182, 212, 120),
            particleColor: new Color(103, 232, 249, 255),
            iconSymbol: "●"
          }, {
            name: "Blue",
            fillColor: new Color(59, 130, 246, 255),
            borderColor: new Color(191, 219, 254, 255),
            glowColor: new Color(59, 130, 246, 120),
            particleColor: new Color(147, 197, 253, 255),
            iconSymbol: "■"
          }, {
            name: "Purple",
            fillColor: new Color(168, 85, 247, 255),
            borderColor: new Color(233, 213, 255, 255),
            glowColor: new Color(168, 85, 247, 120),
            particleColor: new Color(216, 180, 254, 255),
            iconSymbol: "✦"
          }, {
            name: "Pink",
            fillColor: new Color(236, 72, 153, 255),
            borderColor: new Color(251, 207, 232, 255),
            glowColor: new Color(236, 72, 153, 120),
            particleColor: new Color(249, 168, 212, 255),
            iconSymbol: "♥"
          }, {
            name: "Orange",
            fillColor: new Color(249, 115, 22, 255),
            borderColor: new Color(254, 215, 170, 255),
            glowColor: new Color(249, 115, 22, 120),
            particleColor: new Color(253, 186, 116, 255),
            iconSymbol: "◈"
          }];
          // ==================== 运行时状态 ====================
          _this.gameState = GameState.IDLE;
          _this.currentRoundIndex = 0;
          _this.currentRoundConfig = null;
          _this.totalScore = 0;
          _this.roundScore = 0;
          _this.timeRemaining = 0;
          _this.timeLimit = 0;
          _this.remainingBlockCount = 0;
          _this.totalTargetInRound = 0;
          // 连击连点系统
          _this.comboCount = 0;
          _this.lastClickTimestamp = 0;
          _this.COMBO_TIMEOUT = 0.85;
          // 0.85s 内点击计入连击
          // 棋盘几何排版
          _this.boardWidth = 660;
          _this.boardHeight = 680;
          _this.blockNodes = [];
          // 节点引用
          _initializerDefineProperty(_this, "boardRoot", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "boardBgGraphics", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "blocksContainer", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fxContainer", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "countdownNode", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "countdownLabel", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bannerNode", _descriptor9, _assertThisInitialized(_this));
          // HUD 组件
          _initializerDefineProperty(_this, "hudNode", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "roundBadgeLabel", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scoreLabel", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "timerLabel", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "timerBarGraphics", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "remainingLabel", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "comboBadgeNode", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "comboLabel", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "restartBtnNode", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "exitBtnNode", _descriptor19, _assertThisInitialized(_this));
          _this.warningFlashNode = null;
          // ==================== 音效合成系统 (Web Audio API) ====================
          _this.audioCtx = null;
          return _this;
        }
        var _proto = Level_3.prototype;
        // ==================== 生命周期 ====================
        _proto.onLoad = function onLoad() {
          _LevelBase.prototype.onLoad.call(this);
          this.InitDependencies();
          {
            this.InitAudioSynthesizer();
          }
          this.CreateHUD();
          this.CreateBannerPopup();
          this.CreateCountdownOverlay();
          this.DrawEditorVisuals();
        };
        _proto.start = function start() {
          var _this$levelRes;
          var bgm = (_this$levelRes = this.levelRes) == null ? void 0 : _this$levelRes.GetRes("bgm");
          if (bgm) {
            var _AudioMgr$Instance;
            (_AudioMgr$Instance = AudioMgr.Instance) == null || _AudioMgr$Instance.PlayMusic(bgm, true);
          }
          console.log("[Level_3] 点击消除关卡启动");

          // 启动第一轮
          this.StartRound(0);
        };
        _proto.InitAudioSynthesizer = function InitAudioSynthesizer() {
          try {
            var AudioContextClass = window.AudioContext || window.webkitAudioContext;
            if (AudioContextClass) {
              this.audioCtx = new AudioContextClass();
            }
          } catch (e) {
            console.warn("[Level_3] Web Audio 不可用，静音模式运行");
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

        /** 倒计时蜂鸣音：3-2-1 为清脆高频短音，GO 为高亢和弦爆发音 */;
        _proto.PlayCountdownBeep = function PlayCountdownBeep(step) {
          var _this2 = this;
          this.ResumeAudioContext();
          if (!this.audioCtx) return;
          if (step < 3) {
            // 3, 2, 1
            this.PlayTone(880, 'sine', 0.12, 0.25);
          } else {
            // GO!
            this.PlayTone(1046.5, 'triangle', 0.35, 0.3);
            setTimeout(function () {
              return _this2.PlayTone(1318.5, 'sine', 0.4, 0.28);
            }, 30);
          }
        }

        /** 方块消除晶莹爆碎音：随连击数动态提升音高 */;
        _proto.PlayBlockEliminate = function PlayBlockEliminate(combo) {
          this.ResumeAudioContext();
          if (!this.audioCtx) return;
          try {
            var t = this.audioCtx.currentTime;
            var osc = this.audioCtx.createOscillator();
            var overtone = this.audioCtx.createOscillator();
            var gain = this.audioCtx.createGain();

            // 基础音阶：D5 (587.33Hz)，每递增 1 连击音高上移半音阶
            var baseFreq = 587.33 * Math.pow(1.06, Math.min(combo - 1, 12));
            osc.type = 'sine';
            osc.frequency.setValueAtTime(baseFreq, t);
            osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.7, t + 0.12);
            overtone.type = 'triangle';
            overtone.frequency.setValueAtTime(baseFreq * 2, t);
            overtone.frequency.exponentialRampToValueAtTime(baseFreq * 1.5, t + 0.08);
            gain.gain.setValueAtTime(0.22, t);
            gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.13);
            osc.connect(gain);
            overtone.connect(gain);
            gain.connect(this.audioCtx.destination);
            osc.start(t);
            overtone.start(t);
            osc.stop(t + 0.14);
            overtone.stop(t + 0.14);
          } catch (e) {}
        }

        /** 轮次通关达成音效：三连音欢呼和弦 */;
        _proto.PlayRoundClearChime = function PlayRoundClearChime() {
          var _this3 = this;
          var notes = [659.25, 830.61, 987.77, 1318.51]; // E5, G#5, B5, E6
          notes.forEach(function (freq, idx) {
            setTimeout(function () {
              _this3.PlayTone(freq, 'sine', 0.45, 0.25);
            }, idx * 70);
          });
        }

        /** 全关大满贯通关赞乐 */;
        _proto.PlayGameWinFanfare = function PlayGameWinFanfare() {
          var _this4 = this;
          var notes = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98];
          notes.forEach(function (freq, idx) {
            setTimeout(function () {
              _this4.PlayTone(freq, 'sine', 0.5, 0.28);
            }, idx * 90);
          });
        }

        /** 倒计时超时失败降调音 */;
        _proto.PlayGameOverTone = function PlayGameOverTone() {
          var _this5 = this;
          this.PlayTone(330, 'sawtooth', 0.25, 0.2);
          setTimeout(function () {
            return _this5.PlayTone(220, 'square', 0.35, 0.22);
          }, 150);
          setTimeout(function () {
            return _this5.PlayTone(165, 'sawtooth', 0.5, 0.25);
          }, 320);
        }

        /** 编辑器与运行时绘制静态视觉底框 */;
        _proto.DrawEditorVisuals = function DrawEditorVisuals() {
          if (this.boardBgGraphics) {
            this.boardBgGraphics.clear();
            this.boardBgGraphics.fillColor = this.COLOR_BOARD_BG;
            this.boardBgGraphics.roundRect(-this.boardWidth / 2, -this.boardHeight / 2, this.boardWidth, this.boardHeight, 24);
            this.boardBgGraphics.fill();
            this.boardBgGraphics.strokeColor = this.COLOR_BOARD_BORDER;
            this.boardBgGraphics.lineWidth = 2;
            this.boardBgGraphics.roundRect(-this.boardWidth / 2 + 1, -this.boardHeight / 2 + 1, this.boardWidth - 2, this.boardHeight - 2, 23);
            this.boardBgGraphics.stroke();
          }
          if (this.hudNode) {
            var headerCard = this.hudNode.getChildByName("HeaderCard");
            if (headerCard) {
              var hg = headerCard.getComponent(Graphics);
              if (hg) {
                hg.clear();
                hg.fillColor = this.COLOR_BOARD_BG;
                hg.roundRect(-290, -58, 580, 116, 22);
                hg.fill();
                hg.strokeColor = this.COLOR_BOARD_BORDER;
                hg.lineWidth = 2;
                hg.roundRect(-289, -57, 578, 114, 21);
                hg.stroke();
              }
              var badge = headerCard.getChildByName("RoundBadge");
              if (badge) {
                var bg = badge.getComponent(Graphics);
                if (bg) {
                  bg.clear();
                  bg.fillColor = this.COLOR_EMERALD;
                  bg.roundRect(-55, -14, 110, 28, 14);
                  bg.fill();
                  bg.strokeColor = new Color(167, 243, 208, 220);
                  bg.lineWidth = 1.5;
                  bg.roundRect(-54, -13, 108, 26, 13);
                  bg.stroke();
                }
              }
            }
            var dock = this.hudNode.getChildByName("FooterDock");
            if (dock) {
              var dg = dock.getComponent(Graphics);
              if (dg) {
                dg.clear();
                dg.fillColor = this.COLOR_BOARD_BG;
                dg.roundRect(-270, -38, 540, 76, 24);
                dg.fill();
                dg.strokeColor = this.COLOR_BOARD_BORDER;
                dg.lineWidth = 2;
                dg.roundRect(-269, -37, 538, 74, 23);
                dg.stroke();
              }
            }
            var drawBtn = function drawBtn(node, w, h, bg, border) {
              if (!node) return;
              var g = node.getComponent(Graphics);
              if (!g) return;
              g.clear();
              g.fillColor = bg;
              g.roundRect(-w / 2, -h / 2, w, h, h * 0.45);
              g.fill();
              g.strokeColor = border;
              g.lineWidth = 1.5;
              g.roundRect(-w / 2 + 1, -h / 2 + 1, w - 2, h - 2, h * 0.45 - 1);
              g.stroke();
            };
            drawBtn(this.restartBtnNode, 180, 50, new Color(217, 119, 6, 245), new Color(252, 211, 77, 240));
            drawBtn(this.exitBtnNode, 180, 50, new Color(30, 41, 59, 240), new Color(71, 85, 105, 200));
            this.timeRemaining = 8;
            this.timeLimit = 8;
            this.UpdateTimerHUD();
          }
        };
        _proto.onDisable = function onDisable() {
          _LevelBase.prototype.onDisable.call(this);
          this.StopAllTweensAndTimers();
        };
        _proto.onDestroy = function onDestroy() {
          this.StopAllTweensAndTimers();
          this.unscheduleAllCallbacks();
        }

        /** 每帧更新（来自 LevelBase UpdateMgr 驱动） */;
        _proto.M_Update = function M_Update(dt) {
          if (this.gameState !== GameState.PLAYING) {
            return;
          }

          // 倒计时递减
          this.timeRemaining -= dt;
          if (this.timeRemaining <= 0) {
            this.timeRemaining = 0;
            this.UpdateTimerHUD();
            this.HandleRoundFailed();
            return;
          }
          this.UpdateTimerHUD();

          // 连击自然冷却判断
          var now = Date.now() / 1000;
          if (this.comboCount > 1 && now - this.lastClickTimestamp > this.COMBO_TIMEOUT) {
            this.comboCount = 0;
            this.HideComboBadge();
          }
        }

        // ==================== 依赖初始化与自包含排版 ====================
        ;

        _proto.InitDependencies = function InitDependencies() {
          // 1. 自动挂载关卡数据组件
          if (!this.lvData) {
            this.lvData = this.getComponentInChildren(Lv_Data_3);
            if (!this.lvData) {
              this.lvData = this.node.addComponent(Lv_Data_3);
            }
          }

          // 2. 自动创建或查找主交互区域
          if (!this.playArea) {
            this.playArea = this.node.getChildByName("playArea");
            if (!this.playArea) {
              this.playArea = this.node;
            }
          }

          // 3. 棋盘根节点
          this.boardRoot = this.node.getChildByName("board_root");
          if (!this.boardRoot) {
            this.boardRoot = new Node("board_root");
            this.boardRoot.parent = this.node;
            var ut = this.boardRoot.addComponent(UITransform);
            ut.setContentSize(this.boardWidth, this.boardHeight);
            this.boardRoot.setPosition(0, -35, 0);
          }

          // 4. 棋盘玻璃质感卡片底座
          var bgNode = this.boardRoot.getChildByName("board_bg");
          if (!bgNode) {
            bgNode = new Node("board_bg");
            bgNode.parent = this.boardRoot;
            this.boardBgGraphics = bgNode.addComponent(Graphics);
          } else {
            this.boardBgGraphics = bgNode.getComponent(Graphics) || bgNode.addComponent(Graphics);
          }
          this.DrawBoardBackground();

          // 5. 方块容器层
          this.blocksContainer = this.boardRoot.getChildByName("blocks_container");
          if (!this.blocksContainer) {
            this.blocksContainer = new Node("blocks_container");
            this.blocksContainer.parent = this.boardRoot;
          }

          // 6. 特效容器层
          this.fxContainer = this.boardRoot.getChildByName("fx_container");
          if (!this.fxContainer) {
            this.fxContainer = new Node("fx_container");
            this.fxContainer.parent = this.boardRoot;
          }

          // 7. 危机红光边缘警告节点
          this.warningFlashNode = new Node("WarningFlash");
          this.warningFlashNode.parent = this.boardRoot;
          var g = this.warningFlashNode.addComponent(Graphics);
          g.fillColor = new Color(239, 68, 68, 45);
          g.roundRect(-this.boardWidth / 2, -this.boardHeight / 2, this.boardWidth, this.boardHeight, 28);
          g.fill();
          g.strokeColor = new Color(239, 68, 68, 200);
          g.lineWidth = 3;
          g.roundRect(-this.boardWidth / 2 + 1, -this.boardHeight / 2 + 1, this.boardWidth - 2, this.boardHeight - 2, 27);
          g.stroke();
          var op = this.warningFlashNode.addComponent(UIOpacity);
          op.opacity = 0;
          this.warningFlashNode.active = false;
        }

        /** 绘制深邃高质感棋盘底座 */;
        _proto.DrawBoardBackground = function DrawBoardBackground() {
          if (!this.boardBgGraphics) return;
          this.boardBgGraphics.clear();
          var w = this.boardWidth;
          var h = this.boardHeight;
          var r = 24;

          // 底板玻璃质感
          this.boardBgGraphics.fillColor = this.COLOR_BOARD_BG;
          this.boardBgGraphics.roundRect(-w / 2, -h / 2, w, h, r);
          this.boardBgGraphics.fill();

          // 外边框线
          this.boardBgGraphics.strokeColor = this.COLOR_BOARD_BORDER;
          this.boardBgGraphics.lineWidth = 2;
          this.boardBgGraphics.roundRect(-w / 2 + 1, -h / 2 + 1, w - 2, h - 2, r);
          this.boardBgGraphics.stroke();

          // 顶部高光倒角微光条
          this.boardBgGraphics.strokeColor = new Color(255, 255, 255, 35);
          this.boardBgGraphics.lineWidth = 1;
          this.boardBgGraphics.moveTo(-w / 2 + r, h / 2 - 1);
          this.boardBgGraphics.lineTo(w / 2 - r, h / 2 - 1);
          this.boardBgGraphics.stroke();
        }

        // ==================== 轮次驱动与方块生成 ====================
        /** 启动指定轮次 */;
        _proto.StartRound = function StartRound(roundIdx) {
          var _this$lvData;
          this.currentRoundIndex = roundIdx;
          var totalRounds = ((_this$lvData = this.lvData) == null ? void 0 : _this$lvData.GetTotalRounds()) || 5;
          if (roundIdx >= totalRounds) {
            this.HandleAllRoundsCleared();
            return;
          }
          this.currentRoundConfig = this.lvData.GetRoundData(roundIdx);
          if (!this.currentRoundConfig) {
            console.error("[Level_3] \u672A\u627E\u5230\u8F6E\u6B21\u914D\u7F6E index: " + roundIdx);
            return;
          }

          // 重置本轮状态
          this.totalTargetInRound = this.currentRoundConfig.targetCount;
          this.remainingBlockCount = this.totalTargetInRound;
          this.timeLimit = this.currentRoundConfig.timeLimit;
          this.timeRemaining = this.timeLimit;
          this.comboCount = 0;
          this.gameState = GameState.IDLE;
          if (this.warningFlashNode) {
            this.warningFlashNode.active = false;
            Tween.stopAllByTarget(this.warningFlashNode);
            var op = this.warningFlashNode.getComponent(UIOpacity);
            if (op) Tween.stopAllByTarget(op);
          }
          this.UpdateHUDInfo();
          this.UpdateTimerHUD();

          // 清理旧方块
          this.ClearAllBlocks();

          // 生成新方块（此时处于隐藏/待入场状态）
          this.GenerateBlocksForCurrentRound();

          // 启动轮前 3-2-1-GO 倒计时
          this.PlayPreRoundCountdown();
        }

        /** 清理现存全部方块 */;
        _proto.ClearAllBlocks = function ClearAllBlocks() {
          var _this$blocksContainer;
          this.blockNodes.forEach(function (node) {
            Tween.stopAllByTarget(node);
            node.destroy();
          });
          this.blockNodes = [];
          (_this$blocksContainer = this.blocksContainer) == null || _this$blocksContainer.removeAllChildren();
        }

        /** 动态网格插槽算法：生成不重叠随机彩色方块 */;
        _proto.GenerateBlocksForCurrentRound = function GenerateBlocksForCurrentRound() {
          var _this6 = this;
          if (!this.currentRoundConfig) return;
          var _this$currentRoundCon = this.currentRoundConfig,
            rows = _this$currentRoundCon.rows,
            cols = _this$currentRoundCon.cols,
            targetCount = _this$currentRoundCon.targetCount;
          var totalSlots = rows * cols;
          var count = Math.min(targetCount, totalSlots);

          // 1. 生成所有网格坐标点并洗牌
          var slotIndices = [];
          for (var i = 0; i < totalSlots; i++) {
            slotIndices.push(i);
          }
          for (var _i = slotIndices.length - 1; _i > 0; _i--) {
            var j = Math.floor(Math.random() * (_i + 1));
            var _ref = [slotIndices[j], slotIndices[_i]];
            slotIndices[_i] = _ref[0];
            slotIndices[j] = _ref[1];
          }
          var chosenSlots = slotIndices.slice(0, count);

          // 2. 计算网格与方块几何规格
          var paddingH = 36;
          var paddingV = 40;
          var usableW = this.boardWidth - paddingH * 2;
          var usableH = this.boardHeight - paddingV * 2;
          var maxCellW = usableW / cols;
          var maxCellH = usableH / rows;
          var cellGap = 16;
          var blockW = Math.min(140, maxCellW - cellGap);
          var blockH = Math.min(140, maxCellH - cellGap);
          var startX = -usableW / 2 + maxCellW / 2;
          var startY = usableH / 2 - maxCellH / 2;

          // 3. 逐个实例化方块
          chosenSlots.forEach(function (slotIdx, order) {
            var r = Math.floor(slotIdx / cols);
            var c = slotIdx % cols;
            var posX = startX + c * maxCellW;
            var posY = startY - r * maxCellH;

            // 随机选取配色
            var paletteIdx = (order + randomRangeInt(0, _this6.BLOCK_COLOR_PALETTES.length)) % _this6.BLOCK_COLOR_PALETTES.length;
            var palette = _this6.BLOCK_COLOR_PALETTES[paletteIdx];
            var blockNode = _this6.CreateBlockNode(order, posX, posY, blockW, blockH, palette);
            _this6.blockNodes.push(blockNode);
          });
        }

        /** 创建单个圆角精美色块节点 */;
        _proto.CreateBlockNode = function CreateBlockNode(id, x, y, w, h, palette) {
          var _this7 = this;
          var node = new Node("Block_" + id);
          node.parent = this.blocksContainer;
          node.setPosition(x, y, 0);
          var ut = node.addComponent(UITransform);
          ut.setContentSize(w, h);
          var g = node.addComponent(Graphics);
          var radius = Math.min(22, w * 0.2);

          // A. 柔和外发光底圈
          g.fillColor = palette.glowColor;
          g.roundRect(-w / 2 - 4, -h / 2 - 4, w + 8, h + 8, radius + 4);
          g.fill();

          // B. 主色块实体卡片
          g.fillColor = palette.fillColor;
          g.roundRect(-w / 2, -h / 2, w, h, radius);
          g.fill();

          // C. 高光边缘轮廓线
          g.strokeColor = palette.borderColor;
          g.lineWidth = 2.5;
          g.roundRect(-w / 2 + 1, -h / 2 + 1, w - 2, h - 2, radius - 1);
          g.stroke();

          // D. 顶部反光弧光条 (Glass Gloss)
          g.strokeColor = new Color(255, 255, 255, 80);
          g.lineWidth = 1.5;
          g.moveTo(-w / 2 + radius, h / 2 - 3);
          g.lineTo(w / 2 - radius, h / 2 - 3);
          g.stroke();

          // E. 中心几何符号或编号装饰
          var iconNode = new Node("Symbol");
          iconNode.parent = node;
          var iconLabel = iconNode.addComponent(Label);
          iconLabel.string = palette.iconSymbol;
          iconLabel.fontSize = Math.floor(h * 0.38);
          iconLabel.lineHeight = Math.floor(h * 0.4);
          iconLabel.color = new Color(255, 255, 255, 240);
          iconLabel.isBold = true;

          // 初始缩放为0（准备轮前弹性弹入）
          node.setScale(new Vec3(0, 0, 1));

          // 存储自定义属性
          node.palette = palette;
          node.isEliminated = false;
          node.basePos = new Vec3(x, y, 0);

          // 绑定点击事件
          node.on(Node.EventType.TOUCH_START, function () {
            if (_this7.gameState !== GameState.PLAYING || node.isEliminated) return;
            // 按下微缩反馈
            tween(node).to(0.06, {
              scale: new Vec3(0.88, 0.88, 1)
            }, {
              easing: 'sineOut'
            }).start();
          }, this);
          node.on(Node.EventType.TOUCH_CANCEL, function () {
            if (node.isEliminated) return;
            tween(node).to(0.08, {
              scale: new Vec3(1, 1, 1)
            }, {
              easing: 'backOut'
            }).start();
          }, this);
          node.on(Node.EventType.TOUCH_END, function (event) {
            if (_this7.gameState !== GameState.PLAYING || node.isEliminated) return;
            _this7.OnBlockClicked(node);
          }, this);
          return node;
        }

        // ==================== 轮前 3-2-1-GO 倒计时 ====================
        ;

        _proto.CreateCountdownOverlay = function CreateCountdownOverlay() {
          if (!this.countdownNode) {
            this.countdownNode = this.node.getChildByName("CountdownOverlay");
          }
          if (this.countdownNode) {
            if (!this.countdownLabel) {
              var _this$countdownNode$g;
              this.countdownLabel = ((_this$countdownNode$g = this.countdownNode.getChildByName("CountdownText")) == null ? void 0 : _this$countdownNode$g.getComponent(Label)) || this.countdownNode.getComponentInChildren(Label);
            }
            if (!this.countdownLabel) {
              var _textNode = new Node("CountdownText");
              _textNode.parent = this.countdownNode;
              this.countdownLabel = _textNode.addComponent(Label);
              this.countdownLabel.fontSize = 86;
              this.countdownLabel.lineHeight = 90;
              this.countdownLabel.color = this.COLOR_AMBER;
              this.countdownLabel.isBold = true;
            }
            var _op = this.countdownNode.getComponent(UIOpacity);
            if (!_op) {
              _op = this.countdownNode.addComponent(UIOpacity);
            }
            _op.opacity = 0;
            this.countdownNode.active = false;
            return;
          }
          this.countdownNode = new Node("CountdownOverlay");
          this.countdownNode.parent = this.node;
          this.countdownNode.setPosition(0, -35, 0);
          var textNode = new Node("CountdownText");
          textNode.parent = this.countdownNode;
          this.countdownLabel = textNode.addComponent(Label);
          this.countdownLabel.fontSize = 86;
          this.countdownLabel.lineHeight = 90;
          this.countdownLabel.color = this.COLOR_AMBER;
          this.countdownLabel.isBold = true;
          var op = this.countdownNode.addComponent(UIOpacity);
          op.opacity = 0;
          this.countdownNode.active = false;
        }

        /** 播放轮前 3-2-1-GO 动效 */;
        _proto.PlayPreRoundCountdown = function PlayPreRoundCountdown() {
          var _this8 = this;
          if (!this.countdownNode) {
            this.CreateCountdownOverlay();
          }
          if (!this.countdownNode) {
            this.gameState = GameState.PLAYING;
            this.lastClickTimestamp = Date.now() / 1000;
            return;
          }
          this.gameState = GameState.COUNTDOWN;
          this.countdownNode.active = true;
          var op = this.countdownNode.getComponent(UIOpacity) || this.countdownNode.addComponent(UIOpacity);
          op.opacity = 255;
          Tween.stopAllByTarget(op);
          if (!this.countdownLabel) {
            var _this$countdownNode$g2;
            this.countdownLabel = ((_this$countdownNode$g2 = this.countdownNode.getChildByName("CountdownText")) == null ? void 0 : _this$countdownNode$g2.getComponent(Label)) || this.countdownNode.getComponentInChildren(Label);
            if (!this.countdownLabel) {
              var textNode = new Node("CountdownText");
              textNode.parent = this.countdownNode;
              this.countdownLabel = textNode.addComponent(Label);
              this.countdownLabel.fontSize = 86;
              this.countdownLabel.lineHeight = 90;
              this.countdownLabel.color = this.COLOR_AMBER;
              this.countdownLabel.isBold = true;
            }
          }

          // 1. 同时触发方块依次弹性登场 (Staggered Pop-In)
          this.blockNodes.forEach(function (node, idx) {
            if (!node || !node.isValid) return;
            node.setScale(new Vec3(0, 0, 1));
            _this8.scheduleOnce(function () {
              if (!node || !node.isValid) return;
              tween(node).to(0.24, {
                scale: new Vec3(1.15, 1.15, 1)
              }, {
                easing: 'backOut'
              }).to(0.12, {
                scale: new Vec3(1.0, 1.0, 1)
              }, {
                easing: 'sineInOut'
              }).start();
            }, 0.08 + idx * 0.05);
          });

          // 2. 倒计时脉冲节拍：3 -> 2 -> 1 -> GO!
          var steps = [{
            text: "3",
            color: this.COLOR_AMBER,
            scale: 2.2
          }, {
            text: "2",
            color: this.COLOR_AMBER,
            scale: 2.2
          }, {
            text: "1",
            color: this.COLOR_ROSE,
            scale: 2.2
          }, {
            text: "GO!",
            color: this.COLOR_EMERALD,
            scale: 2.8
          }];
          var currentStep = 0;
          var playStep = function playStep() {
            if (currentStep >= steps.length) {
              // 倒计时结束，正式开始游戏
              tween(op).to(0.15, {
                opacity: 0
              }).call(function () {
                if (_this8.countdownNode && _this8.countdownNode.isValid) {
                  _this8.countdownNode.active = false;
                }
                _this8.gameState = GameState.PLAYING;
                _this8.lastClickTimestamp = Date.now() / 1000;
              }).start();
              return;
            }
            var info = steps[currentStep];
            _this8.PlayCountdownBeep(currentStep);
            if (_this8.countdownLabel) {
              _this8.countdownLabel.string = info.text;
              _this8.countdownLabel.color = info.color;

              // 弹性巨大缩放脉冲
              _this8.countdownLabel.node.setScale(new Vec3(info.scale, info.scale, 1));
              Tween.stopAllByTarget(_this8.countdownLabel.node);
              tween(_this8.countdownLabel.node).to(0.22, {
                scale: new Vec3(1.0, 1.0, 1)
              }, {
                easing: 'backOut'
              }).delay(0.38).call(function () {
                currentStep++;
                playStep();
              }).start();
            } else {
              _this8.scheduleOnce(function () {
                currentStep++;
                playStep();
              }, 0.6);
            }

            // 激发中心微光环
            _this8.PlayShockwaveRing(new Vec3(0, 0, 0), info.color, 40, 180, 0.45);
          };
          playStep();
        }

        // ==================== 方块交互与消除动效 ====================
        /** 核心逻辑：玩家点击消除色块 */;
        _proto.OnBlockClicked = function OnBlockClicked(blockNode) {
          var _this$currentRoundCon2;
          this.ResumeAudioContext();
          blockNode.isEliminated = true;
          var palette = blockNode.palette;
          var pos = blockNode.position;

          // 1. 连击计算
          var now = Date.now() / 1000;
          if (now - this.lastClickTimestamp <= this.COMBO_TIMEOUT) {
            this.comboCount++;
          } else {
            this.comboCount = 1;
          }
          this.lastClickTimestamp = now;

          // 播放连击阶梯消除音效
          this.PlayBlockEliminate(this.comboCount);

          // 2. 得分计算（基础分 + 连击加成）
          var baseScore = ((_this$currentRoundCon2 = this.currentRoundConfig) == null ? void 0 : _this$currentRoundCon2.baseScore) || 100;
          var comboBonus = Math.max(1, this.comboCount);
          var gainedScore = baseScore * comboBonus;
          this.roundScore += gainedScore;
          this.totalScore += gainedScore;

          // 3. 触发爆裂消除动效
          this.PlayBlockEliminationFX(blockNode, pos, palette, gainedScore);

          // 4. 连击提示与 HUD 响应
          if (this.comboCount >= 2) {
            this.ShowComboBadge(this.comboCount);
          }
          this.PlayScorePunchAnim();

          // 5. 剩余方块递减
          this.remainingBlockCount--;
          this.UpdateHUDInfo();

          // 6. 检查本轮是否全部消除
          if (this.remainingBlockCount <= 0) {
            this.HandleRoundCompleted();
          }
        }

        /** 播放方块消除的华丽爆裂动效 */;
        _proto.PlayBlockEliminationFX = function PlayBlockEliminationFX(blockNode, pos, palette, gainedScore) {
          // A. 方块本体缩放爆开至消失
          Tween.stopAllByTarget(blockNode);
          var op = blockNode.getComponent(UIOpacity) || blockNode.addComponent(UIOpacity);
          tween(blockNode).to(0.08, {
            scale: new Vec3(1.28, 1.28, 1)
          }, {
            easing: 'sineOut'
          }).to(0.14, {
            scale: new Vec3(0, 0, 1)
          }, {
            easing: 'backIn'
          }).call(function () {
            blockNode.active = false;
          }).start();
          tween(op).delay(0.06).to(0.15, {
            opacity: 0
          }).start();

          // B. 扩散冲击波光环
          this.PlayShockwaveRing(pos, palette.borderColor, 20, 110, 0.32);

          // C. 彩色爆裂飞溅粒子 (Graphics 程序化微粒)
          this.SpawnExplosionParticles(pos, palette.particleColor, 10);

          // D. 浮动计分飘字 (+100 或 +200 COMBO!)
          var scoreText = this.comboCount >= 2 ? "+" + gainedScore + " x" + this.comboCount + "!" : "+" + gainedScore;
          this.SpawnFloatingScoreText(pos, scoreText, palette.borderColor);
        }

        /** 生成冲击波光环 */;
        _proto.PlayShockwaveRing = function PlayShockwaveRing(centerPos, color, startRadius, endRadius, duration) {
          var ringNode = new Node("Shockwave");
          ringNode.parent = this.fxContainer;
          ringNode.setPosition(centerPos);
          var g = ringNode.addComponent(Graphics);
          var op = ringNode.addComponent(UIOpacity);
          op.opacity = 255;
          var curR = startRadius;
          var updateRing = function updateRing() {
            g.clear();
            g.strokeColor = color;
            g.lineWidth = Math.max(1.5, 4.5 * (1 - (curR - startRadius) / (endRadius - startRadius)));
            g.circle(0, 0, curR);
            g.stroke();
          };
          updateRing();
          var progress = {
            val: 0
          };
          tween(progress).to(duration, {
            val: 1
          }, {
            easing: 'sineOut',
            onUpdate: function onUpdate(target) {
              curR = startRadius + (endRadius - startRadius) * target.val;
              op.opacity = Math.floor(255 * (1 - target.val));
              updateRing();
            }
          }).call(function () {
            ringNode.destroy();
          }).start();
        }

        /** 生成向四周散射的爆裂微粒 */;
        _proto.SpawnExplosionParticles = function SpawnExplosionParticles(centerPos, color, count) {
          var _this9 = this;
          var _loop = function _loop() {
            var pNode = new Node("Particle");
            pNode.parent = _this9.fxContainer;
            pNode.setPosition(centerPos);
            var g = pNode.addComponent(Graphics);
            var size = randomRange(4.5, 8.5);
            g.fillColor = color;
            g.circle(0, 0, size);
            g.fill();
            var angle = Math.PI * 2 * i / count + randomRange(-0.25, 0.25);
            var dist = randomRange(55, 125);
            var targetX = centerPos.x + Math.cos(angle) * dist;
            var targetY = centerPos.y + Math.sin(angle) * dist + randomRange(-20, 20);
            var op = pNode.addComponent(UIOpacity);
            op.opacity = 255;
            tween(pNode).to(randomRange(0.25, 0.38), {
              position: new Vec3(targetX, targetY, 0),
              scale: new Vec3(0.2, 0.2, 1)
            }, {
              easing: 'quadOut'
            }).call(function () {
              pNode.destroy();
            }).start();
            tween(op).delay(0.12).to(0.2, {
              opacity: 0
            }).start();
          };
          for (var i = 0; i < count; i++) {
            _loop();
          }
        }

        /** 生成向上浮动并淡出的计分文字 */;
        _proto.SpawnFloatingScoreText = function SpawnFloatingScoreText(pos, text, color) {
          var floatNode = new Node("FloatScore");
          floatNode.parent = this.fxContainer;
          floatNode.setPosition(pos.x, pos.y + 20, 0);
          var lbl = floatNode.addComponent(Label);
          lbl.string = text;
          lbl.fontSize = 28;
          lbl.lineHeight = 32;
          lbl.color = color;
          lbl.isBold = true;
          floatNode.setScale(new Vec3(0.6, 0.6, 1));
          var op = floatNode.addComponent(UIOpacity);
          op.opacity = 255;

          // 弹性放大向上飘移
          tween(floatNode).to(0.12, {
            scale: new Vec3(1.2, 1.2, 1)
          }, {
            easing: 'backOut'
          }).to(0.15, {
            scale: new Vec3(1.0, 1.0, 1)
          }).by(0.4, {
            position: new Vec3(0, 50, 0)
          }, {
            easing: 'sineOut'
          }).call(function () {
            floatNode.destroy();
          }).start();
          tween(op).delay(0.3).to(0.25, {
            opacity: 0
          }).start();
        }

        // ==================== 轮次完成与胜利反馈 ====================
        /** 轮次完成反馈：全部方块被成功消除 */;
        _proto.HandleRoundCompleted = function HandleRoundCompleted() {
          var _this$currentRoundCon3,
            _this$lvData2,
            _this10 = this;
          this.gameState = GameState.ROUND_CLEAR;
          this.PlayRoundClearChime();

          // 计算时间奖励分
          var timeBonusRate = ((_this$currentRoundCon3 = this.currentRoundConfig) == null ? void 0 : _this$currentRoundCon3.timeBonusPerSecond) || 50;
          var timeBonus = Math.floor(Math.max(0, this.timeRemaining) * timeBonusRate);
          this.totalScore += timeBonus;
          this.UpdateHUDInfo();
          var isLastRound = this.currentRoundIndex >= (((_this$lvData2 = this.lvData) == null ? void 0 : _this$lvData2.GetTotalRounds()) || 5) - 1;

          // 华丽庆祝微粒
          this.SpawnExplosionParticles(new Vec3(0, 0, 0), this.COLOR_EMERALD, 24);
          this.PlayShockwaveRing(new Vec3(0, 0, 0), this.COLOR_EMERALD, 40, 260, 0.55);

          // 弹出轮次达成横幅
          var title = isLastRound ? "ALL CLEARED!" : "ROUND CLEAR!";
          var subTitle = isLastRound ? "\u5173\u5361\u5927\u6EE1\u8D2F\uFF01\u6700\u7EC8\u603B\u5206\uFF1A" + this.totalScore : "\u7B2C " + (this.currentRoundIndex + 1) + " \u8F6E\u8FBE\u6210\uFF01\u65F6\u95F4\u5956\u52B1 +" + timeBonus;
          this.ShowBanner(title, subTitle, this.COLOR_EMERALD, true, function () {
            if (isLastRound) {
              _this10.HandleAllRoundsCleared();
            } else {
              // 进入下一轮
              _this10.StartRound(_this10.currentRoundIndex + 1);
            }
          });
        }

        /** 关卡大通关处理 */;
        _proto.HandleAllRoundsCleared = function HandleAllRoundsCleared() {
          var _this11 = this;
          this.gameState = GameState.GAME_WIN;
          this.PlayGameWinFanfare();
          console.log("[Level_3] \u606D\u559C\u901A\u5173\uFF01\u6700\u7EC8\u5F97\u5206: " + this.totalScore);

          // 激发全屏礼花
          var _loop2 = function _loop2(i) {
            _this11.scheduleOnce(function () {
              var randPos = new Vec3(randomRange(-200, 200), randomRange(-150, 150), 0);
              var color = _this11.BLOCK_COLOR_PALETTES[i % _this11.BLOCK_COLOR_PALETTES.length].fillColor;
              _this11.SpawnExplosionParticles(randPos, color, 18);
              _this11.PlayShockwaveRing(randPos, color, 30, 200, 0.45);
            }, i * 0.2);
          };
          for (var i = 0; i < 4; i++) {
            _loop2(i);
          }

          // 调用基础类结算弹窗 Win
          this.SetResultType(ResultType.Win, 2.0);
        }

        // ==================== 超时失败反馈 ====================
        /** 轮次超时失败处理 */;
        _proto.HandleRoundFailed = function HandleRoundFailed() {
          var _this12 = this;
          this.gameState = GameState.GAME_OVER;
          this.PlayGameOverTone();
          console.log("[Level_3] \u8F6E\u6B21\u8D85\u65F6\u5931\u8D25\uFF01\u672A\u5B8C\u6210\u65B9\u5757\u6570: " + this.remainingBlockCount);

          // 1. 棋盘剧烈抖动反馈 (Screen Shake)
          this.PlayBoardShakeFX();

          // 2. 危机红光全屏闪烁
          this.PlayDangerRedFlash();

          // 3. 未点击方块变灰、打叉碎裂动效
          this.blockNodes.forEach(function (node) {
            if (!node.isEliminated && node.active) {
              _this12.PlayBlockFailCrackAnim(node);
            }
          });

          // 4. 弹出失败横幅
          this.ShowBanner("TIME'S UP!", "\u65F6\u95F4\u8017\u5C3D\uFF01\u8FD8\u6709 " + this.remainingBlockCount + " \u4E2A\u65B9\u5757\u672A\u6D88\u9664", this.COLOR_ROSE, false, function () {
            // 调用结算弹窗 Lose
            _this12.SetResultType(ResultType.Lose, 0.8);
          });
        }

        /** 棋盘剧烈横向与纵向震颤抖动 */;
        _proto.PlayBoardShakeFX = function PlayBoardShakeFX() {
          if (!this.boardRoot) return;
          var origPos = new Vec3(0, -35, 0);
          Tween.stopAllByTarget(this.boardRoot);
          tween(this.boardRoot).to(0.04, {
            position: new Vec3(origPos.x - 12, origPos.y + 6, 0)
          }).to(0.05, {
            position: new Vec3(origPos.x + 12, origPos.y - 6, 0)
          }).to(0.04, {
            position: new Vec3(origPos.x - 8, origPos.y + 4, 0)
          }).to(0.05, {
            position: new Vec3(origPos.x + 8, origPos.y - 4, 0)
          }).to(0.04, {
            position: new Vec3(origPos.x - 4, origPos.y, 0)
          }).to(0.03, {
            position: origPos
          }).start();
        }

        /** 危机红光闪烁 */;
        _proto.PlayDangerRedFlash = function PlayDangerRedFlash() {
          var _this13 = this;
          if (!this.warningFlashNode) return;
          this.warningFlashNode.active = true;
          var op = this.warningFlashNode.getComponent(UIOpacity) || this.warningFlashNode.addComponent(UIOpacity);
          Tween.stopAllByTarget(op);
          tween(op).to(0.12, {
            opacity: 230
          }).to(0.18, {
            opacity: 60
          }).to(0.12, {
            opacity: 200
          }).to(0.3, {
            opacity: 0
          }).call(function () {
            _this13.warningFlashNode.active = false;
          }).start();
        }

        /** 剩余方块变灰并画红色打叉破裂 */;
        _proto.PlayBlockFailCrackAnim = function PlayBlockFailCrackAnim(blockNode) {
          var g = blockNode.getComponent(Graphics);
          if (g) {
            var ut = blockNode.getComponent(UITransform);
            var w = ut.width;
            var h = ut.height;
            var r = 20;

            // 变暗灰色调
            g.clear();
            g.fillColor = new Color(71, 85, 105, 230);
            g.roundRect(-w / 2, -h / 2, w, h, r);
            g.fill();

            // 绘制红色粗叉 (X)
            g.strokeColor = this.COLOR_ROSE;
            g.lineWidth = 4;
            var pad = 24;
            g.moveTo(-w / 2 + pad, -h / 2 + pad);
            g.lineTo(w / 2 - pad, h / 2 - pad);
            g.moveTo(-w / 2 + pad, h / 2 - pad);
            g.lineTo(w / 2 - pad, -h / 2 + pad);
            g.stroke();
          }

          // 下陷收缩碎裂
          tween(blockNode).to(0.06, {
            scale: new Vec3(1.1, 1.1, 1)
          }).to(0.28, {
            scale: new Vec3(0.5, 0.5, 1)
          }, {
            easing: 'backIn'
          }).start();
        }

        // ==================== HUD 界面设计 ====================
        ;

        _proto.CreateHUD = function CreateHUD() {
          var _this14 = this;
          if (!this.hudNode) {
            this.hudNode = this.node.getChildByName("HUD");
          }
          if (this.hudNode) {
            this.BindExistingHUD();
            return;
          }
          this.hudNode = new Node("HUD");
          this.hudNode.parent = this.node;

          // ==================== 1. 顶部半透明状态卡片 (Header Card) ====================
          var headerCard = new Node("HeaderCard");
          headerCard.parent = this.hudNode;
          headerCard.setPosition(0, 485, 0);
          var cardW = 600;
          var cardH = 125;
          var cardRadius = 22;
          var hg = headerCard.addComponent(Graphics);
          hg.fillColor = this.COLOR_BOARD_BG;
          hg.roundRect(-cardW / 2, -cardH / 2, cardW, cardH, cardRadius);
          hg.fill();
          hg.strokeColor = this.COLOR_BOARD_BORDER;
          hg.lineWidth = 2;
          hg.roundRect(-cardW / 2 + 1, -cardH / 2 + 1, cardW - 2, cardH - 2, cardRadius);
          hg.stroke();

          // 顶部高光亮线
          hg.strokeColor = new Color(255, 255, 255, 30);
          hg.lineWidth = 1;
          hg.moveTo(-cardW / 2 + cardRadius, cardH / 2 - 1);
          hg.lineTo(cardW / 2 - cardRadius, cardH / 2 - 1);
          hg.stroke();

          // 1.1 关卡标题
          var titleNode = new Node("Title");
          titleNode.parent = headerCard;
          titleNode.setPosition(-130, 26, 0);
          var titleLbl = titleNode.addComponent(Label);
          titleLbl.string = "极速消除 · 色块狂潮";
          titleLbl.fontSize = 24;
          titleLbl.lineHeight = 28;
          titleLbl.color = this.COLOR_TEXT_PRIMARY;
          titleLbl.isBold = true;

          // 1.2 轮次胶囊徽标 (Round Badge)
          var badgeNode = new Node("RoundBadge");
          badgeNode.parent = headerCard;
          badgeNode.setPosition(180, 26, 0);
          var badgeG = badgeNode.addComponent(Graphics);
          badgeG.fillColor = this.COLOR_EMERALD;
          badgeG.roundRect(-55, -14, 110, 28, 14);
          badgeG.fill();
          badgeG.strokeColor = new Color(167, 243, 208, 220);
          badgeG.lineWidth = 1.5;
          badgeG.roundRect(-54, -13, 108, 26, 13);
          badgeG.stroke();
          var badgeLblNode = new Node("BadgeText");
          badgeLblNode.parent = badgeNode;
          this.roundBadgeLabel = badgeLblNode.addComponent(Label);
          this.roundBadgeLabel.string = "第 1/5 轮";
          this.roundBadgeLabel.fontSize = 17;
          this.roundBadgeLabel.lineHeight = 20;
          this.roundBadgeLabel.color = this.COLOR_TEXT_PRIMARY;
          this.roundBadgeLabel.isBold = true;

          // 1.3 总积分展示
          var scoreBox = new Node("ScoreBox");
          scoreBox.parent = headerCard;
          scoreBox.setPosition(-160, -18, 0);
          this.scoreLabel = scoreBox.addComponent(Label);
          this.scoreLabel.string = "得分: 0";
          this.scoreLabel.fontSize = 20;
          this.scoreLabel.lineHeight = 24;
          this.scoreLabel.color = this.COLOR_AMBER;
          this.scoreLabel.isBold = true;

          // 1.4 剩余方块数展示
          var remBox = new Node("RemainingBox");
          remBox.parent = headerCard;
          remBox.setPosition(165, -18, 0);
          this.remainingLabel = remBox.addComponent(Label);
          this.remainingLabel.string = "剩余方块: 4";
          this.remainingLabel.fontSize = 19;
          this.remainingLabel.lineHeight = 22;
          this.remainingLabel.color = this.COLOR_TEXT_SECONDARY;

          // 1.5 动态连击徽标 (Combo Badge)
          this.comboBadgeNode = new Node("ComboBadge");
          this.comboBadgeNode.parent = headerCard;
          this.comboBadgeNode.setPosition(0, -18, 0);
          var comboG = this.comboBadgeNode.addComponent(Graphics);
          comboG.fillColor = this.COLOR_ROSE;
          comboG.roundRect(-48, -12, 96, 24, 12);
          comboG.fill();
          comboG.strokeColor = new Color(254, 205, 211, 240);
          comboG.lineWidth = 1.2;
          comboG.roundRect(-47, -11, 94, 22, 11);
          comboG.stroke();
          var comboTextNode = new Node("ComboText");
          comboTextNode.parent = this.comboBadgeNode;
          this.comboLabel = comboTextNode.addComponent(Label);
          this.comboLabel.string = "COMBO x2!";
          this.comboLabel.fontSize = 15;
          this.comboLabel.lineHeight = 18;
          this.comboLabel.color = this.COLOR_TEXT_PRIMARY;
          this.comboLabel.isBold = true;
          this.comboBadgeNode.active = false;

          // ==================== 2. 悬浮倒计时栏 (Floating Timer Bar) ====================
          var timerCard = new Node("TimerCard");
          timerCard.parent = this.hudNode;
          timerCard.setPosition(0, 375, 0);
          var barGNode = new Node("TimerBarGraphics");
          barGNode.parent = timerCard;
          this.timerBarGraphics = barGNode.addComponent(Graphics);
          var timeLblNode = new Node("TimerLabel");
          timeLblNode.parent = timerCard;
          timeLblNode.setPosition(0, 0, 0);
          this.timerLabel = timeLblNode.addComponent(Label);
          this.timerLabel.string = "08.0s";
          this.timerLabel.fontSize = 20;
          this.timerLabel.lineHeight = 24;
          this.timerLabel.color = this.COLOR_TEXT_PRIMARY;
          this.timerLabel.isBold = true;

          // ==================== 3. 底部操作栏 (Footer Dock) ====================
          var dockNode = new Node("FooterDock");
          dockNode.parent = this.hudNode;
          dockNode.setPosition(0, -540, 0);
          var dockW = 540;
          var dockH = 76;
          var dg = dockNode.addComponent(Graphics);
          dg.fillColor = this.COLOR_BOARD_BG;
          dg.roundRect(-dockW / 2, -dockH / 2, dockW, dockH, 24);
          dg.fill();
          dg.strokeColor = this.COLOR_BOARD_BORDER;
          dg.lineWidth = 2;
          dg.roundRect(-dockW / 2 + 1, -dockH / 2 + 1, dockW - 2, dockH - 2, 23);
          dg.stroke();

          // 3.1 重新开始按钮（左侧）
          this.restartBtnNode = this.CreateDockButton(dockNode, "↺ 重玩本关", new Vec3(-120, 0, 0), new Vec2(180, 50), new Color(217, 119, 6, 245), new Color(252, 211, 77, 240), function () {
            _this14.RestartGame();
          });

          // 3.2 退出关卡按钮（右侧）
          this.CreateDockButton(dockNode, "◀ 退出关卡", new Vec3(120, 0, 0), new Vec2(180, 50), new Color(30, 41, 59, 240), new Color(71, 85, 105, 200), function () {
            var _LevelMgr$Instance;
            (_LevelMgr$Instance = LevelMgr.Instance) == null || _LevelMgr$Instance.ExitLevel();
          });
        }

        /** 绑定并复用预制体中预先搭建的 HUD 组件 */;
        _proto.BindExistingHUD = function BindExistingHUD() {
          var _this15 = this;
          if (!this.hudNode) return;
          var headerCard = this.hudNode.getChildByName("HeaderCard");
          if (headerCard) {
            var badgeNode = headerCard.getChildByName("RoundBadge");
            if (badgeNode && !this.roundBadgeLabel) {
              var _badgeNode$getChildBy;
              this.roundBadgeLabel = (_badgeNode$getChildBy = badgeNode.getChildByName("BadgeText")) == null ? void 0 : _badgeNode$getChildBy.getComponent(Label);
            }
            var scoreBox = headerCard.getChildByName("ScoreBox");
            if (scoreBox && !this.scoreLabel) {
              this.scoreLabel = scoreBox.getComponent(Label);
            }
            var remBox = headerCard.getChildByName("RemainingBox");
            if (remBox && !this.remainingLabel) {
              this.remainingLabel = remBox.getComponent(Label);
            }
            if (!this.comboBadgeNode) {
              this.comboBadgeNode = headerCard.getChildByName("ComboBadge");
              if (this.comboBadgeNode && !this.comboLabel) {
                var _this$comboBadgeNode$;
                this.comboLabel = (_this$comboBadgeNode$ = this.comboBadgeNode.getChildByName("Text")) == null ? void 0 : _this$comboBadgeNode$.getComponent(Label);
              }
            }
          }
          var timerCard = this.hudNode.getChildByName("TimerCard");
          if (timerCard) {
            var row = timerCard.getChildByName("Row");
            if (row && !this.timerLabel) {
              var _row$getChildByName;
              this.timerLabel = (_row$getChildByName = row.getChildByName("TimeText")) == null ? void 0 : _row$getChildByName.getComponent(Label);
            }
            var track = timerCard.getChildByName("ProgressTrack");
            if (track && !this.timerBarGraphics) {
              var _track$getChildByName;
              this.timerBarGraphics = (_track$getChildByName = track.getChildByName("ProgressBar")) == null ? void 0 : _track$getChildByName.getComponent(Graphics);
            }
          }
          var footerDock = this.hudNode.getChildByName("FooterDock");
          if (footerDock) {
            var _footerDock$getChildB, _footerDock$getChildB2;
            var rBtn = (_footerDock$getChildB = footerDock.getChildByName("RestartBtn")) == null ? void 0 : _footerDock$getChildB.getChildByName("Button");
            if (rBtn) {
              this.restartBtnNode = rBtn;
              {
                this.BindButtonTouch(rBtn, function () {
                  return _this15.StartRound(_this15.currentRoundIndex);
                });
              }
            }
            var eBtn = (_footerDock$getChildB2 = footerDock.getChildByName("ExitBtn")) == null ? void 0 : _footerDock$getChildB2.getChildByName("Button");
            if (eBtn) {
              this.exitBtnNode = eBtn;
              {
                this.BindButtonTouch(eBtn, function () {
                  _this15.gameState = GameState.GAME_OVER;
                  _this15.SetResultType(ResultType.Lose, 0.5);
                });
              }
            }
          }
        };
        _proto.BindButtonTouch = function BindButtonTouch(btnNode, onClick) {
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
            onClick();
          }, this);
          btnNode.on(Node.EventType.TOUCH_CANCEL, function () {
            tween(btnNode).to(0.08, {
              scale: new Vec3(1, 1, 1)
            }).start();
          }, this);
        }

        /** 创建底部 Dock 栏精美触控按钮 */;
        _proto.CreateDockButton = function CreateDockButton(parent, text, pos, size, bgColor, borderColor, onClick) {
          var btnNode = new Node("Button");
          btnNode.parent = parent;
          btnNode.setPosition(pos);
          var ut = btnNode.addComponent(UITransform);
          ut.setContentSize(size.x, size.y);
          var g = btnNode.addComponent(Graphics);
          var drawBtn = function drawBtn(bg, border) {
            g.clear();
            g.fillColor = bg;
            g.roundRect(-size.x / 2, -size.y / 2, size.x, size.y, size.y * 0.45);
            g.fill();
            g.strokeColor = border;
            g.lineWidth = 1.5;
            g.roundRect(-size.x / 2 + 1, -size.y / 2 + 1, size.x - 2, size.y - 2, size.y * 0.45 - 1);
            g.stroke();
          };
          drawBtn(bgColor, borderColor);
          var lblNode = new Node("Label");
          lblNode.parent = btnNode;
          var lbl = lblNode.addComponent(Label);
          lbl.string = text;
          lbl.fontSize = 19;
          lbl.lineHeight = 22;
          lbl.color = this.COLOR_TEXT_PRIMARY;
          lbl.isBold = true;
          btnNode.on(Node.EventType.TOUCH_START, function () {
            tween(btnNode).to(0.06, {
              scale: new Vec3(0.92, 0.92, 1)
            }).start();
          }, this);
          btnNode.on(Node.EventType.TOUCH_CANCEL, function () {
            tween(btnNode).to(0.08, {
              scale: new Vec3(1, 1, 1)
            }).start();
          }, this);
          btnNode.on(Node.EventType.TOUCH_END, function () {
            tween(btnNode).to(0.08, {
              scale: new Vec3(1.08, 1.08, 1)
            }).to(0.06, {
              scale: new Vec3(1.0, 1.0, 1)
            }).call(function () {
              onClick && onClick();
            }).start();
          }, this);
          return btnNode;
        }

        /** 更新 HUD 轮次与分数 */;
        _proto.UpdateHUDInfo = function UpdateHUDInfo() {
          var _this$lvData3;
          var totalRounds = ((_this$lvData3 = this.lvData) == null ? void 0 : _this$lvData3.GetTotalRounds()) || 5;
          if (this.roundBadgeLabel) {
            this.roundBadgeLabel.string = "\u7B2C " + (this.currentRoundIndex + 1) + "/" + totalRounds + " \u8F6E";
          }
          if (this.scoreLabel) {
            this.scoreLabel.string = "\u5F97\u5206: " + this.totalScore;
          }
          if (this.remainingLabel) {
            this.remainingLabel.string = "\u5269\u4F59\u65B9\u5757: " + this.remainingBlockCount;
          }
        }

        /** 更新倒计时进度条与文本 */;
        _proto.UpdateTimerHUD = function UpdateTimerHUD() {
          if (!this.timerBarGraphics || !this.timerLabel) return;
          var ratio = clamp(this.timeRemaining / Math.max(0.1, this.timeLimit), 0, 1);
          this.timerLabel.string = this.timeRemaining.toFixed(1) + "s";

          // 进度槽几何尺寸
          var barW = 440;
          var barH = 36;
          var radius = 18;
          this.timerBarGraphics.clear();

          // 1. 底槽暗色卡片
          this.timerBarGraphics.fillColor = new Color(15, 23, 42, 230);
          this.timerBarGraphics.roundRect(-barW / 2, -barH / 2, barW, barH, radius);
          this.timerBarGraphics.fill();

          // 2. 动态颜色判断（>50% 翡翠青，20%~50% 暖金，<20% 警示红）
          var fillColor = this.COLOR_EMERALD;
          if (ratio < 0.25) {
            fillColor = this.COLOR_ROSE;
          } else if (ratio < 0.55) {
            fillColor = this.COLOR_AMBER;
          }

          // 3. 填充进度
          var currentFillW = Math.max(radius * 2, barW * ratio);
          if (ratio > 0.02) {
            this.timerBarGraphics.fillColor = fillColor;
            this.timerBarGraphics.roundRect(-barW / 2 + 2, -barH / 2 + 2, currentFillW - 4, barH - 4, radius - 2);
            this.timerBarGraphics.fill();
          }

          // 4. 外边框描边
          this.timerBarGraphics.strokeColor = ratio < 0.25 ? this.COLOR_ROSE : this.COLOR_BOARD_BORDER;
          this.timerBarGraphics.lineWidth = 1.5;
          this.timerBarGraphics.roundRect(-barW / 2, -barH / 2, barW, barH, radius);
          this.timerBarGraphics.stroke();

          // 低时紧急心跳警示
          if (ratio < 0.25 && this.gameState === GameState.PLAYING) {
            this.timerLabel.color = this.COLOR_ROSE;
            if (this.warningFlashNode && !this.warningFlashNode.active) {
              this.warningFlashNode.active = true;
              var op = this.warningFlashNode.getComponent(UIOpacity) || this.warningFlashNode.addComponent(UIOpacity);
              Tween.stopAllByTarget(op);
              tween(op).to(0.25, {
                opacity: 140
              }).to(0.25, {
                opacity: 30
              }).union().repeatForever().start();
            }
          } else {
            this.timerLabel.color = this.COLOR_TEXT_PRIMARY;
            if (this.warningFlashNode && this.warningFlashNode.active && this.gameState === GameState.PLAYING) {
              this.warningFlashNode.active = false;
              var _op2 = this.warningFlashNode.getComponent(UIOpacity);
              if (_op2) Tween.stopAllByTarget(_op2);
            }
          }
        }

        /** 得分数字弹性弹跳动画 */;
        _proto.PlayScorePunchAnim = function PlayScorePunchAnim() {
          if (!this.scoreLabel) return;
          Tween.stopAllByTarget(this.scoreLabel.node);
          tween(this.scoreLabel.node).to(0.06, {
            scale: new Vec3(1.3, 1.3, 1)
          }, {
            easing: 'sineOut'
          }).to(0.12, {
            scale: new Vec3(1.0, 1.0, 1)
          }, {
            easing: 'backOut'
          }).start();
        }

        /** 展示连击倍数徽标 */;
        _proto.ShowComboBadge = function ShowComboBadge(count) {
          if (!this.comboBadgeNode || !this.comboLabel) return;
          this.comboBadgeNode.active = true;
          this.comboLabel.string = "COMBO x" + count + "!";
          Tween.stopAllByTarget(this.comboBadgeNode);
          this.comboBadgeNode.setScale(new Vec3(0.5, 0.5, 1));
          tween(this.comboBadgeNode).to(0.1, {
            scale: new Vec3(1.3, 1.3, 1)
          }, {
            easing: 'backOut'
          }).to(0.08, {
            scale: new Vec3(1.0, 1.0, 1)
          }).start();
        };
        _proto.HideComboBadge = function HideComboBadge() {
          var _this16 = this;
          if (!this.comboBadgeNode) return;
          Tween.stopAllByTarget(this.comboBadgeNode);
          tween(this.comboBadgeNode).to(0.1, {
            scale: new Vec3(0, 0, 1)
          }).call(function () {
            _this16.comboBadgeNode.active = false;
          }).start();
        }

        // ==================== 悬浮提示与横幅反馈 ====================
        ;

        _proto.CreateBannerPopup = function CreateBannerPopup() {
          if (!this.bannerNode) {
            this.bannerNode = this.node.getChildByName("BannerPopup");
          }
          if (this.bannerNode) {
            var _op3 = this.bannerNode.getComponent(UIOpacity);
            if (!_op3) {
              _op3 = this.bannerNode.addComponent(UIOpacity);
            }
            _op3.opacity = 0;
            this.bannerNode.active = false;
            return;
          }
          this.bannerNode = new Node("BannerPopup");
          this.bannerNode.parent = this.node;
          this.bannerNode.setPosition(0, 0, 0);
          var cardW = 540;
          var cardH = 180;
          var cardRadius = 26;
          var g = this.bannerNode.addComponent(Graphics);
          g.fillColor = new Color(15, 23, 42, 245);
          g.roundRect(-cardW / 2, -cardH / 2, cardW, cardH, cardRadius);
          g.fill();
          g.strokeColor = this.COLOR_BOARD_BORDER;
          g.lineWidth = 2.5;
          g.roundRect(-cardW / 2 + 1, -cardH / 2 + 1, cardW - 2, cardH - 2, cardRadius);
          g.stroke();

          // 标题文本
          var titleNode = new Node("BannerTitle");
          titleNode.parent = this.bannerNode;
          titleNode.setPosition(0, 32, 0);
          var titleLbl = titleNode.addComponent(Label);
          titleLbl.name = "TitleLabel";
          titleLbl.fontSize = 38;
          titleLbl.lineHeight = 42;
          titleLbl.color = this.COLOR_EMERALD;
          titleLbl.isBold = true;

          // 副标题文本
          var subNode = new Node("BannerSub");
          subNode.parent = this.bannerNode;
          subNode.setPosition(0, -28, 0);
          var subLbl = subNode.addComponent(Label);
          subLbl.name = "SubLabel";
          subLbl.fontSize = 21;
          subLbl.lineHeight = 26;
          subLbl.color = this.COLOR_TEXT_PRIMARY;
          var op = this.bannerNode.addComponent(UIOpacity);
          op.opacity = 0;
          this.bannerNode.active = false;
        }

        /** 弹出华丽横幅反馈并自动执行后续回调 */;
        _proto.ShowBanner = function ShowBanner(title, sub, themeColor, isSuccess, onComplete) {
          var _this$bannerNode$getC,
            _this$bannerNode$getC2,
            _this17 = this;
          if (!this.bannerNode) return;
          this.bannerNode.active = true;
          var titleLbl = (_this$bannerNode$getC = this.bannerNode.getChildByName("BannerTitle")) == null ? void 0 : _this$bannerNode$getC.getComponent(Label);
          var subLbl = (_this$bannerNode$getC2 = this.bannerNode.getChildByName("BannerSub")) == null ? void 0 : _this$bannerNode$getC2.getComponent(Label);
          var op = this.bannerNode.getComponent(UIOpacity) || this.bannerNode.addComponent(UIOpacity);
          if (titleLbl) {
            titleLbl.string = title;
            titleLbl.color = themeColor;
          }
          if (subLbl) {
            subLbl.string = sub;
          }
          Tween.stopAllByTarget(this.bannerNode);
          if (op) Tween.stopAllByTarget(op);
          this.bannerNode.setScale(new Vec3(0.5, 0.5, 1));
          op.opacity = 0;

          // 弹跳入场
          tween(this.bannerNode).to(0.24, {
            scale: new Vec3(1.08, 1.08, 1)
          }, {
            easing: 'backOut'
          }).to(0.12, {
            scale: new Vec3(1.0, 1.0, 1)
          }).delay(1.1).to(0.2, {
            scale: new Vec3(0.8, 0.8, 1)
          }, {
            easing: 'sineIn'
          }).call(function () {
            _this17.bannerNode.active = false;
            onComplete && onComplete();
          }).start();
          tween(op).to(0.2, {
            opacity: 255
          }).delay(1.1).to(0.2, {
            opacity: 0
          }).start();
        }

        // ==================== 重启与资源清理 ====================
        /** 重新开始本关（从第 1 轮重新启动） */;
        _proto.RestartGame = function RestartGame() {
          this.StopAllTweensAndTimers();
          this.totalScore = 0;
          this.StartRound(0);
        };
        _proto.StopAllTweensAndTimers = function StopAllTweensAndTimers() {
          if (this.boardRoot) Tween.stopAllByTarget(this.boardRoot);
          if (this.bannerNode) {
            Tween.stopAllByTarget(this.bannerNode);
            var op = this.bannerNode.getComponent(UIOpacity);
            if (op) Tween.stopAllByTarget(op);
          }
          if (this.countdownNode) {
            Tween.stopAllByTarget(this.countdownNode);
            var _op4 = this.countdownNode.getComponent(UIOpacity);
            if (_op4) Tween.stopAllByTarget(_op4);
          }
          if (this.countdownLabel && this.countdownLabel.node) Tween.stopAllByTarget(this.countdownLabel.node);
          if (this.scoreLabel && this.scoreLabel.node) Tween.stopAllByTarget(this.scoreLabel.node);
          if (this.comboBadgeNode) Tween.stopAllByTarget(this.comboBadgeNode);
          if (this.warningFlashNode) {
            Tween.stopAllByTarget(this.warningFlashNode);
            var _op5 = this.warningFlashNode.getComponent(UIOpacity);
            if (_op5) Tween.stopAllByTarget(_op5);
          }
          this.blockNodes.forEach(function (node) {
            if (node && node.isValid) Tween.stopAllByTarget(node);
          });
          this.unscheduleAllCallbacks();
        };
        return Level_3;
      }(LevelBase), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lvData", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "playArea", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "boardRoot", [_dec5], {
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
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "blocksContainer", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "fxContainer", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "countdownNode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "countdownLabel", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "bannerNode", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "hudNode", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "roundBadgeLabel", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "scoreLabel", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "timerLabel", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "timerBarGraphics", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "remainingLabel", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "comboBadgeNode", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "comboLabel", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "restartBtnNode", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "exitBtnNode", [_dec21], {
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

System.register("chunks:///_virtual/Lv_Data_3.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "e3d8cFCelRPiJ0iGeSHG20D", "Lv_Data_3", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /** 色块轮次数据配置接口 */

      var Lv_Data_3 = exports('Lv_Data_3', (_dec = ccclass('Lv_Data_3'), _dec2 = property({
        type: [Object],
        tooltip: '关卡轮次配置列表'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Lv_Data_3, _Component);
        function Lv_Data_3() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          /** 关卡轮次配置列表 */
          _initializerDefineProperty(_this, "rounds", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Lv_Data_3.prototype;
        /** 获取指定轮次的数据（索引从 0 开始） */
        _proto.GetRoundData = function GetRoundData(index) {
          if (index >= 0 && index < this.rounds.length) {
            return this.rounds[index];
          }
          return null;
        }

        /** 获取总轮次数 */;
        _proto.GetTotalRounds = function GetTotalRounds() {
          return this.rounds.length;
        };
        return Lv_Data_3;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "rounds", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [{
            roundIndex: 1,
            targetCount: 4,
            timeLimit: 8.0,
            rows: 3,
            cols: 3,
            baseScore: 100,
            timeBonusPerSecond: 50
          }, {
            roundIndex: 2,
            targetCount: 6,
            timeLimit: 7.5,
            rows: 3,
            cols: 3,
            baseScore: 120,
            timeBonusPerSecond: 60
          }, {
            roundIndex: 3,
            targetCount: 8,
            timeLimit: 7.0,
            rows: 4,
            cols: 3,
            baseScore: 150,
            timeBonusPerSecond: 70
          }, {
            roundIndex: 4,
            targetCount: 10,
            timeLimit: 6.5,
            rows: 4,
            cols: 4,
            baseScore: 180,
            timeBonusPerSecond: 80
          }, {
            roundIndex: 5,
            targetCount: 12,
            timeLimit: 6.0,
            rows: 4,
            cols: 4,
            baseScore: 200,
            timeBonusPerSecond: 100
          }];
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/Level_3', 'chunks:///_virtual/Level_3'); 
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