System.register("chunks:///_virtual/Level_2", ['./LevelRes_2.ts', './Level_2.ts', './Lv_Data_2.ts'], function () {
  return {
    setters: [null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/Level_2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LevelBase.ts', './Lv_Data_2.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, Label, Color, Vec2, Tween, Vec3, instantiate, UITransform, Sprite, Graphics, input, Input, KeyCode, tween, Button, LevelBase, Lv_Data_2;
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
      Prefab = module.Prefab;
      Label = module.Label;
      Color = module.Color;
      Vec2 = module.Vec2;
      Tween = module.Tween;
      Vec3 = module.Vec3;
      instantiate = module.instantiate;
      UITransform = module.UITransform;
      Sprite = module.Sprite;
      Graphics = module.Graphics;
      input = module.input;
      Input = module.Input;
      KeyCode = module.KeyCode;
      tween = module.tween;
      Button = module.Button;
    }, function (module) {
      LevelBase = module.LevelBase;
    }, function (module) {
      Lv_Data_2 = module.Lv_Data_2;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16;
      cclegacy._RF.push({}, "5a93dzhf35Ol57+hjywU/p+", "Level_2", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        executeInEditMode = _decorator.executeInEditMode;

      /** 格子显示类型 */
      var CellType = /*#__PURE__*/function (CellType) {
        CellType[CellType["Empty"] = -1] = "Empty";
        CellType[CellType["Wall"] = 0] = "Wall";
        CellType[CellType["Target"] = 1] = "Target";
        CellType[CellType["Spawn"] = 2] = "Spawn";
        return CellType;
      }(CellType || {}); // 玩家出生点
      /** 移动方向 */
      var Direction = /*#__PURE__*/function (Direction) {
        Direction[Direction["Up"] = 0] = "Up";
        Direction[Direction["Down"] = 1] = "Down";
        Direction[Direction["Left"] = 2] = "Left";
        Direction[Direction["Right"] = 3] = "Right";
        return Direction;
      }(Direction || {});
      var Level_2 = exports('Level_2', (_dec = ccclass('Level_2'), _dec2 = executeInEditMode(true), _dec3 = property(Node), _dec4 = property(Prefab), _dec5 = property(Prefab), _dec6 = property(Node), _dec7 = property(Lv_Data_2), _dec8 = property(Node), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Label), _dec17 = property(Node), _dec18 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_LevelBase) {
        _inheritsLoose(Level_2, _LevelBase);
        function Level_2() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _LevelBase.call.apply(_LevelBase, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "\u6ED1\u52A8\u533A\u57DF", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "playerPrefab", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "blockPrefab", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "block_root", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lvData", _descriptor5, _assertThisInitialized(_this));
          // ==================== 视觉配色配置 ====================
          _this.COLOR_WALL = new Color(51, 65, 85, 255);
          // 墙体深石板蓝 (#334155)
          _this.COLOR_WALL_STROKE = new Color(30, 41, 59, 255);
          // 墙体边缘色 (#1E293B)
          _this.COLOR_UNPAINTED = new Color(241, 245, 249, 255);
          // 未涂色地块 (#F1F5F9)
          _this.COLOR_BORDER = new Color(203, 213, 225, 255);
          // 地块细边框 (#CBD5E1)
          _this.COLOR_PAINTED = new Color(59, 130, 246, 255);
          // 涂色后高亮蓝 (#3B82F6)
          _this.COLOR_PAINTED_GLOSS = new Color(96, 165, 250, 255);
          // 涂色亮光蓝 (#60A5FA)
          _this.COLOR_PLAYER = new Color(37, 99, 235, 255);
          // 玩家小球原色 (#2563EB)
          _this.COLOR_PLAYER_SHINE = new Color(255, 255, 255, 200);
          // 玩家高光
          // ==================== 运行时状态 ====================
          _this.currentLevelIndex = 0;
          _this.currentLevelData = null;
          // 动态网格尺寸（支持任意宽高）
          _this.rowCount = 0;
          _this.colCount = 0;
          _this.cellSize = 60;
          _this.cellGap = 4;
          _this.boardStartX = 0;
          _this.boardStartY = 0;
          // 玩家逻辑坐标
          _this.playerPos = {
            r: 0,
            c: 0
          };
          _this.playerNode = null;
          _this.isMoving = false;
          _this.isGameOver = false;
          // 胜负与步数统计
          _this.remainingSteps = 0;
          _this.totalTargetCells = 0;
          _this.paintedCellsCount = 0;
          // 节点与涂色状态记录 (key: "r_c")
          _this.cellNodes = new Map();
          _this.cellGraphics = new Map();
          _this.paintedState = new Map();
          // 输入记录
          _this.touchStartPos = new Vec2();
          _this.touchMovedHandled = false;
          // UI 组件引用
          _initializerDefineProperty(_this, "hudNode", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "levelTitleLabel", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "stepLabel", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "progressLabel", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "resetBtnNode", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prevBtnNode", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nextSubBtnNode", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "messageNode", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "messageLabel", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nextBtnNode", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "retryBtnNode", _descriptor16, _assertThisInitialized(_this));
          // ==================== 音效合成系统 (Web Audio API) ====================
          _this.audioCtx = null;
          return _this;
        }
        var _proto = Level_2.prototype;
        _proto.onLoad = function onLoad() {
          _LevelBase.prototype.onLoad.call(this);
          this.InitReferences();
          this.CreateHUD();
          this.DrawEditorVisuals();
          {
            this.InitAudioSynthesizer();
            this.RegisterInputEvents();
          }
        };
        _proto.start = function start() {
          this.LoadSubLevel(0);
        };
        _proto.InitAudioSynthesizer = function InitAudioSynthesizer() {
          try {
            var AudioContextClass = window.AudioContext || window.webkitAudioContext;
            if (AudioContextClass) {
              this.audioCtx = new AudioContextClass();
            }
          } catch (e) {
            console.warn("[Level_2] Web Audio 不可用，静音模式运行");
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

        /** 滑行风声：轻快柔和的滑动声效 */;
        _proto.PlaySlideWhoosh = function PlaySlideWhoosh() {
          this.ResumeAudioContext();
          if (!this.audioCtx) return;
          try {
            var t = this.audioCtx.currentTime;
            var osc = this.audioCtx.createOscillator();
            var gain = this.audioCtx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(220, t);
            osc.frequency.exponentialRampToValueAtTime(440, t + 0.12);
            gain.gain.setValueAtTime(0.12, t);
            gain.gain.exponentialRampToValueAtTime(0.001, t + 0.14);
            osc.connect(gain);
            gain.connect(this.audioCtx.destination);
            osc.start(t);
            osc.stop(t + 0.15);
          } catch (e) {}
        }

        /** 涂色爆汁声：水润清脆的 Splat / Pop 声，带随机音高浮动 */;
        _proto.PlayPaintSplat = function PlayPaintSplat() {
          this.ResumeAudioContext();
          if (!this.audioCtx) return;
          try {
            var t = this.audioCtx.currentTime;
            var osc = this.audioCtx.createOscillator();
            var gain = this.audioCtx.createGain();
            var baseFreq = 540 + (Math.random() * 80 - 40);
            osc.type = 'sine';
            osc.frequency.setValueAtTime(baseFreq, t);
            osc.frequency.exponentialRampToValueAtTime(220, t + 0.08);
            gain.gain.setValueAtTime(0.18, t);
            gain.gain.exponentialRampToValueAtTime(0.001, t + 0.08);
            osc.connect(gain);
            gain.connect(this.audioCtx.destination);
            osc.start(t);
            osc.stop(t + 0.09);
          } catch (e) {}
        }

        /** 撞墙闷响：扎实的橡胶/木质弹力冲击音 */;
        _proto.PlayWallHitThud = function PlayWallHitThud() {
          this.ResumeAudioContext();
          if (!this.audioCtx) return;
          try {
            var t = this.audioCtx.currentTime;
            var osc = this.audioCtx.createOscillator();
            var gain = this.audioCtx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(130, t);
            osc.frequency.exponentialRampToValueAtTime(55, t + 0.1);
            gain.gain.setValueAtTime(0.24, t);
            gain.gain.exponentialRampToValueAtTime(0.001, t + 0.11);
            osc.connect(gain);
            gain.connect(this.audioCtx.destination);
            osc.start(t);
            osc.stop(t + 0.12);
          } catch (e) {}
        }

        /** 原地受阻碰撞声 */;
        _proto.PlayInvalidBump = function PlayInvalidBump() {
          this.PlayTone(110, 'triangle', 0.07, 0.15);
        }

        /** 通关胜利和弦：明亮轻快的上升钟琴和弦 */;
        _proto.PlayLevelWinChime = function PlayLevelWinChime() {
          var _this2 = this;
          var notes = [392.00, 523.25, 659.25, 783.99, 1046.50]; // G4, C5, E5, G5, C6
          notes.forEach(function (freq, idx) {
            setTimeout(function () {
              _this2.PlayTone(freq, 'sine', 0.4, 0.22);
            }, idx * 75);
          });
        }

        /** 失败叹息音 */;
        _proto.PlayGameOverTone = function PlayGameOverTone() {
          var _this3 = this;
          this.PlayTone(220, 'triangle', 0.25, 0.2);
          setTimeout(function () {
            return _this3.PlayTone(165, 'sine', 0.35, 0.25);
          }, 180);
        }

        /** UI 重置点击声 */;
        _proto.PlayResetClick = function PlayResetClick() {
          this.PlayTone(600, 'sine', 0.06, 0.15);
        }

        /** 绘制编辑器与运行时基础卡片背景与按钮底板 */;
        _proto.DrawEditorVisuals = function DrawEditorVisuals() {
          if (!this.hudNode) return;
          var drawBtn = function drawBtn(node, w, h) {
            if (!node) return;
            var g = node.getComponent(Graphics);
            if (!g) return;
            g.clear();
            g.fillColor = new Color(241, 245, 249, 255);
            g.roundRect(-w / 2, -h / 2, w, h, 10);
            g.fill();
            g.strokeColor = new Color(203, 213, 225, 255);
            g.lineWidth = 1.5;
            g.roundRect(-w / 2 + 1, -h / 2 + 1, w - 2, h - 2, 10);
            g.stroke();
          };
          drawBtn(this.resetBtnNode, 120, 50);
          drawBtn(this.prevBtnNode, 120, 50);
          drawBtn(this.nextSubBtnNode, 120, 50);
        };
        _proto.onDisable = function onDisable() {
          _LevelBase.prototype.onDisable.call(this);
          this.UnregisterInputEvents();
        };
        _proto.onDestroy = function onDestroy() {
          this.UnregisterInputEvents();
          this.unscheduleAllCallbacks();
          if (this.playerNode) {
            Tween.stopAllByTarget(this.playerNode);
          }
          this.cellNodes.forEach(function (node) {
            Tween.stopAllByTarget(node);
          });
        }

        // ==================== 初始化与引用获取 ====================
        ;

        _proto.InitReferences = function InitReferences() {
          // 自动查找 block_root
          if (!this.block_root) {
            this.block_root = this.node.getChildByName("block_root");
            if (!this.block_root) {
              this.block_root = new Node("block_root");
              this.block_root.parent = this.node;
            }
          }

          // 自动查找 lvData
          if (!this.lvData) {
            this.lvData = this.getComponentInChildren(Lv_Data_2);
            if (!this.lvData) {
              this.lvData = this.node.addComponent(Lv_Data_2);
            }
          }

          // 自动查找滑动区域（默认全屏响应）
          if (!this.滑动区域) {
            this.滑动区域 = this.node;
          }
        }

        // ==================== 核心：加载关卡与动态宽高排版 ====================
        ;

        _proto.LoadSubLevel = function LoadSubLevel(index) {
          if (!this.lvData || !this.lvData.levelData || this.lvData.levelData.length === 0) {
            console.error("[Level_2] 未找到关卡数据！");
            return;
          }

          // 停止上个关卡所有未完成的动效与定时器
          this.unscheduleAllCallbacks();
          if (this.playerNode) {
            Tween.stopAllByTarget(this.playerNode);
          }
          this.cellNodes.forEach(function (node) {
            Tween.stopAllByTarget(node);
          });

          // 循环或钳制索引
          if (index < 0) index = 0;
          if (index >= this.lvData.levelData.length) index = this.lvData.levelData.length - 1;
          this.currentLevelIndex = index;
          this.currentLevelData = this.lvData.levelData[this.currentLevelIndex];

          // 重置状态
          this.isMoving = false;
          this.isGameOver = false;
          this.remainingSteps = this.currentLevelData.stepLimit;
          this.totalTargetCells = 0;
          this.paintedCellsCount = 0;
          this.cellNodes.clear();
          this.cellGraphics.clear();
          this.paintedState.clear();
          this.HideMessagePopup();

          // 清理旧棋盘节点
          this.block_root.removeAllChildren();
          this.playerNode = null;

          // 计算动态行列宽高
          this.CalculateDynamicGridMetrics();

          // 构建棋盘与地块
          this.BuildBoard();

          // 生成玩家
          this.SpawnPlayer();

          // 刷新 HUD
          this.UpdateHUD();
        }

        /**
         * 关键算法：根据任意 gridData 宽高，自适应计算 cellSize 与居中偏移
         */;
        _proto.CalculateDynamicGridMetrics = function CalculateDynamicGridMetrics() {
          var grid = this.currentLevelData.gridData;
          this.rowCount = grid.length;

          // 动态获取最大列数（处理不同行可能列数不同或可变动的情况）
          this.colCount = 0;
          for (var r = 0; r < this.rowCount; r++) {
            if (grid[r] && grid[r].length > this.colCount) {
              this.colCount = grid[r].length;
            }
          }

          // 设定可用显示区域（基于 750×1334 竖屏，为上下 HUD 留出安全空间）
          var maxAvailableW = 680;
          var maxAvailableH = 750;

          // 依据网格规模自适应计算间隙（格子越多间隙越小）
          var maxDimension = Math.max(this.rowCount, this.colCount);
          this.cellGap = Math.max(2, Math.min(6, Math.floor(36 / Math.max(1, maxDimension))));

          // 自适应推导单格尺寸
          var availW = maxAvailableW - (this.colCount - 1) * this.cellGap;
          var availH = maxAvailableH - (this.rowCount - 1) * this.cellGap;
          var maxCellSize = 110;
          var minCellSize = 32;
          var cellW = availW / Math.max(1, this.colCount);
          var cellH = availH / Math.max(1, this.rowCount);
          this.cellSize = Math.max(minCellSize, Math.min(maxCellSize, Math.floor(Math.min(cellW, cellH))));

          // 实际总尺寸
          var totalW = this.colCount * this.cellSize + (this.colCount - 1) * this.cellGap;
          var totalH = this.rowCount * this.cellSize + (this.rowCount - 1) * this.cellGap;

          // 设置起始坐标，使网格在 block_root 的 (0, 0) 处精确居中
          // Cocos 中 +X 向右，+Y 向上；第 0 行在最顶部
          this.boardStartX = -totalW / 2 + this.cellSize / 2;
          this.boardStartY = totalH / 2 - this.cellSize / 2;
          console.log("[Level_2] \u5173\u5361 " + this.currentLevelData.levelID + ": \u7F51\u683C " + this.rowCount + "\u884C \xD7 " + this.colCount + "\u5217, \u5355\u683C\u5C3A\u5BF8: " + this.cellSize + "px, \u95F4\u9699: " + this.cellGap + "px");
        }

        /** 计算指定网格坐标对应的节点局部坐标 */;
        _proto.GetCellPosition = function GetCellPosition(r, c) {
          var x = this.boardStartX + c * (this.cellSize + this.cellGap);
          var y = this.boardStartY - r * (this.cellSize + this.cellGap);
          return new Vec3(x, y, 0);
        }

        // ==================== 棋盘与节点生成 ====================
        ;

        _proto.BuildBoard = function BuildBoard() {
          var grid = this.currentLevelData.gridData;
          for (var r = 0; r < this.rowCount; r++) {
            for (var c = 0; c < this.colCount; c++) {
              var val = grid[r] && grid[r][c] !== undefined ? grid[r][c] : CellType.Empty;

              // -1: 空格子（虚空），跳过不绘制
              if (val === CellType.Empty) {
                continue;
              }
              var key = r + "_" + c;
              var pos = this.GetCellPosition(r, c);
              if (val === CellType.Wall) {
                // 0: 墙体
                var wallNode = this.CreateBlockNode(CellType.Wall, r, c);
                wallNode.setPosition(pos);
                wallNode.parent = this.block_root;
              } else if (val === CellType.Target || val === CellType.Spawn) {
                // 1 或 2: 待涂色地块 / 出生点
                this.totalTargetCells++;
                var tileNode = this.CreateBlockNode(val, r, c);
                tileNode.setPosition(pos);
                tileNode.parent = this.block_root;
                this.cellNodes.set(key, tileNode);
                if (val === CellType.Spawn) {
                  this.playerPos = {
                    r: r,
                    c: c
                  };
                  // 出生点初始自动涂色
                  this.MarkCellPainted(r, c, false);
                } else {
                  this.paintedState.set(key, false);
                }
              }
            }
          }
        }

        /** 创建单个方块节点（若有 Prefab 则使用 Prefab，否则自动降级自绘精致图形） */;
        _proto.CreateBlockNode = function CreateBlockNode(type, r, c) {
          var key = r + "_" + c;
          var node = this.blockPrefab ? instantiate(this.blockPrefab) : new Node("cell_" + r + "_" + c);
          var uiTransform = node.getComponent(UITransform) || node.addComponent(UITransform);
          uiTransform.setContentSize(this.cellSize, this.cellSize);
          var sprite = node.getComponent(Sprite);
          if (sprite) {
            // 如果绑定了带 Sprite 的 Prefab，根据类型自动着色
            if (type === CellType.Wall) {
              sprite.color = this.COLOR_WALL;
            } else {
              sprite.color = this.COLOR_UNPAINTED;
            }
          } else if (!this.blockPrefab) {
            // 未绑定 Prefab 时，使用 Graphics 动态自绘
            var g = node.addComponent(Graphics);
            this.cellGraphics.set(key, g);
            this.DrawCellGraphics(g, type, false);
          }
          return node;
        }

        /** 绘制格子矢量图形 */;
        _proto.DrawCellGraphics = function DrawCellGraphics(g, type, isPainted) {
          g.clear();
          var half = this.cellSize / 2;
          var radius = Math.max(4, Math.floor(this.cellSize * 0.18));
          if (type === CellType.Wall) {
            // 墙体：深色带边缘立体感
            g.fillColor = this.COLOR_WALL;
            g.roundRect(-half, -half, this.cellSize, this.cellSize, radius);
            g.fill();
            g.strokeColor = this.COLOR_WALL_STROKE;
            g.lineWidth = 2;
            g.roundRect(-half + 1, -half + 1, this.cellSize - 2, this.cellSize - 2, radius);
            g.stroke();
          } else {
            // 地面：已涂色显示高亮蓝，未涂色显示清新底色
            var fillColor = isPainted ? this.COLOR_PAINTED : this.COLOR_UNPAINTED;
            g.fillColor = fillColor;
            g.roundRect(-half, -half, this.cellSize, this.cellSize, radius);
            g.fill();

            // 内边框/细线
            g.strokeColor = isPainted ? this.COLOR_PAINTED_GLOSS : this.COLOR_BORDER;
            g.lineWidth = 1.5;
            g.roundRect(-half + 1, -half + 1, this.cellSize - 2, this.cellSize - 2, radius);
            g.stroke();

            // 涂色后的内部高光点缀
            if (isPainted && this.cellSize >= 40) {
              g.fillColor = new Color(255, 255, 255, 40);
              g.circle(-half * 0.3, half * 0.3, this.cellSize * 0.15);
              g.fill();
            }
          }
        }

        /** 生成玩家节点 */;
        _proto.SpawnPlayer = function SpawnPlayer() {
          // 安全拦截：防止因误将 Level_2.prefab 拖入 playerPrefab 引起死循环无限递归实例化
          if (this.playerPrefab && (this.playerPrefab.name === 'Level_2' || this.playerPrefab.data && this.playerPrefab.data.getComponent(Level_2))) {
            console.error("[Level_2] 警告：playerPrefab 被误绑定为 Level_2 自身预制体！已自动拦截避免死循环。请绑定 player.prefab！");
            this.playerPrefab = null;
          }
          this.playerNode = this.playerPrefab ? instantiate(this.playerPrefab) : new Node("player");
          var uiTransform = this.playerNode.getComponent(UITransform) || this.playerNode.addComponent(UITransform);
          uiTransform.setContentSize(this.cellSize, this.cellSize);
          var sprite = this.playerNode.getComponent(Sprite);
          if (!sprite && !this.playerPrefab) {
            var g = this.playerNode.addComponent(Graphics);
            var radius = this.cellSize * 0.42;

            // 玩家外球体
            g.fillColor = this.COLOR_PLAYER;
            g.circle(0, 0, radius);
            g.fill();

            // 边缘描边
            g.strokeColor = new Color(29, 78, 216, 255);
            g.lineWidth = 2;
            g.circle(0, 0, radius);
            g.stroke();

            // 晶莹高光
            g.fillColor = this.COLOR_PLAYER_SHINE;
            g.circle(-radius * 0.35, radius * 0.35, radius * 0.3);
            g.fill();
          }
          this.playerNode.setPosition(this.GetCellPosition(this.playerPos.r, this.playerPos.c));
          this.playerNode.parent = this.block_root;
        }

        // ==================== 输入与滑动控制 ====================
        ;

        _proto.RegisterInputEvents = function RegisterInputEvents() {
          // 触屏滑动监听
          var touchTarget = this.滑动区域 || this.node;
          touchTarget.on(Node.EventType.TOUCH_START, this.OnTouchStart, this);
          touchTarget.on(Node.EventType.TOUCH_MOVE, this.OnTouchMove, this);
          touchTarget.on(Node.EventType.TOUCH_END, this.OnTouchEnd, this);
          touchTarget.on(Node.EventType.TOUCH_CANCEL, this.OnTouchEnd, this);

          // 键盘操作监听（方便在浏览器与编辑器中快速预览测试）
          input.on(Input.EventType.KEY_DOWN, this.OnKeyDown, this);
        };
        _proto.UnregisterInputEvents = function UnregisterInputEvents() {
          var touchTarget = this.滑动区域 || this.node;
          if (touchTarget) {
            touchTarget.off(Node.EventType.TOUCH_START, this.OnTouchStart, this);
            touchTarget.off(Node.EventType.TOUCH_MOVE, this.OnTouchMove, this);
            touchTarget.off(Node.EventType.TOUCH_END, this.OnTouchEnd, this);
            touchTarget.off(Node.EventType.TOUCH_CANCEL, this.OnTouchEnd, this);
          }
          input.off(Input.EventType.KEY_DOWN, this.OnKeyDown, this);
        };
        _proto.OnTouchStart = function OnTouchStart(event) {
          if (this.isGameOver) return;
          this.ResumeAudioContext();
          this.touchStartPos = event.getLocation();
          this.touchMovedHandled = false;
        };
        _proto.OnTouchMove = function OnTouchMove(event) {
          if (this.isGameOver) return;
          if (this.isMoving) {
            this.touchStartPos = event.getLocation();
            return;
          }
          var currentPos = event.getLocation();
          var dx = currentPos.x - this.touchStartPos.x;
          var dy = currentPos.y - this.touchStartPos.y;
          var threshold = 35; // 灵敏滑动阈值

          if (Math.abs(dx) >= threshold || Math.abs(dy) >= threshold) {
            this.touchStartPos = currentPos;
            this.touchMovedHandled = true;
            this.HandleSwipeDelta(dx, dy);
          }
        };
        _proto.OnTouchEnd = function OnTouchEnd(event) {
          if (this.isMoving || this.isGameOver || this.touchMovedHandled) return;
          var currentPos = event.getLocation();
          var dx = currentPos.x - this.touchStartPos.x;
          var dy = currentPos.y - this.touchStartPos.y;
          var minThreshold = 20;
          if (Math.abs(dx) >= minThreshold || Math.abs(dy) >= minThreshold) {
            this.HandleSwipeDelta(dx, dy);
          }
        };
        _proto.HandleSwipeDelta = function HandleSwipeDelta(dx, dy) {
          if (Math.abs(dx) > Math.abs(dy)) {
            // 水平滑动
            if (dx > 0) {
              this.TryMove(Direction.Right);
            } else {
              this.TryMove(Direction.Left);
            }
          } else {
            // 垂直滑动（注意屏幕触控坐标系中向上 Y 增大）
            if (dy > 0) {
              this.TryMove(Direction.Up);
            } else {
              this.TryMove(Direction.Down);
            }
          }
        };
        _proto.OnKeyDown = function OnKeyDown(event) {
          if (this.isMoving || this.isGameOver) return;
          switch (event.keyCode) {
            case KeyCode.ARROW_UP:
            case KeyCode.KEY_W:
              this.TryMove(Direction.Up);
              break;
            case KeyCode.ARROW_DOWN:
            case KeyCode.KEY_S:
              this.TryMove(Direction.Down);
              break;
            case KeyCode.ARROW_LEFT:
            case KeyCode.KEY_A:
              this.TryMove(Direction.Left);
              break;
            case KeyCode.ARROW_RIGHT:
            case KeyCode.KEY_D:
              this.TryMove(Direction.Right);
              break;
            case KeyCode.KEY_R:
              this.LoadSubLevel(this.currentLevelIndex);
              break;
          }
        }

        // ==================== 物理滑行与涂色判定算法 ====================
        ;

        _proto.TryMove = function TryMove(dir) {
          var _this4 = this;
          if (this.isMoving || this.isGameOver || !this.currentLevelData) return;

          // 方向步进向量
          var dr = 0;
          var dc = 0;
          switch (dir) {
            case Direction.Up:
              dr = -1;
              dc = 0;
              break;
            case Direction.Down:
              dr = 1;
              dc = 0;
              break;
            case Direction.Left:
              dr = 0;
              dc = -1;
              break;
            case Direction.Right:
              dr = 0;
              dc = 1;
              break;
          }

          // 探查滑行路线
          var path = [];
          var currR = this.playerPos.r;
          var currC = this.playerPos.c;
          var grid = this.currentLevelData.gridData;
          while (true) {
            var nextR = currR + dr;
            var nextC = currC + dc;

            // 边界检测
            if (nextR < 0 || nextR >= this.rowCount || nextC < 0 || nextC >= this.colCount) {
              break;
            }
            var cellVal = grid[nextR] && grid[nextR][nextC] !== undefined ? grid[nextR][nextC] : CellType.Empty;

            // 撞到墙体 (0) 或空格子 (-1) 时停下
            if (cellVal === CellType.Wall || cellVal === CellType.Empty) {
              break;
            }

            // 可通过地块
            currR = nextR;
            currC = nextC;
            path.push({
              r: currR,
              c: currC
            });
          }

          // 无法向该方向移动（朝向墙体/边界）：原地微幅前探弹回，并在动画结束后严格重置回标准格子中心位置
          if (path.length === 0) {
            this.PlayInvalidBump();
            this.isMoving = true;
            var originPos = this.GetCellPosition(this.playerPos.r, this.playerPos.c);
            var bumpDist = this.cellSize * 0.15;
            var bumpTarget = new Vec3(originPos.x + dc * bumpDist, originPos.y - dr * bumpDist, 0);
            var squash = new Vec3(1, 1, 1);
            if (dir === Direction.Left || dir === Direction.Right) {
              squash = new Vec3(0.82, 1.18, 1);
            } else {
              squash = new Vec3(1.18, 0.82, 1);
            }
            tween(this.playerNode).to(0.06, {
              position: bumpTarget,
              scale: squash
            }).to(0.08, {
              position: originPos,
              scale: new Vec3(1, 1, 1)
            }).call(function () {
              // 动画结束严格重置复位
              _this4.playerNode.setPosition(originPos);
              _this4.playerNode.setScale(new Vec3(1, 1, 1));
              _this4.isMoving = false;
            }).start();
            return;
          }

          // 发生有效滑行：步数减 1
          this.isMoving = true;
          this.remainingSteps--;
          this.UpdateHUD();
          this.PlaySlideWhoosh();

          // 启动连续移动动画并沿途涂色
          this.AnimatePlayerSlide(path, dir);
        }

        /** 沿路径连续平滑滑行动画，并在抵达每一格时涂色 */;
        _proto.AnimatePlayerSlide = function AnimatePlayerSlide(path, dir) {
          var _this5 = this;
          var timePerCell = 0.08; // 每格耗时，流畅清脆
          var moveTween = tween(this.playerNode);
          var _loop = function _loop(i) {
            var targetPos = _this5.GetCellPosition(path[i].r, path[i].c);
            moveTween = moveTween.to(timePerCell, {
              position: targetPos
            }, {
              onComplete: function onComplete() {
                // 到达该格子：涂色并更新坐标
                _this5.playerPos = {
                  r: path[i].r,
                  c: path[i].c
                };
                _this5.MarkCellPainted(path[i].r, path[i].c, true);
              }
            });
          };
          for (var i = 0; i < path.length; i++) {
            _loop(i);
          }

          // 滑行到达终点：撞墙挤压形变（Squash & Stretch）动效
          moveTween.call(function () {
            _this5.PlayWallHitBounce(dir);
          }).start();
        }

        /** 撞墙 Q 弹挤压特效 */;
        _proto.PlayWallHitBounce = function PlayWallHitBounce(dir) {
          var _this6 = this;
          this.PlayWallHitThud();
          var correctPos = this.GetCellPosition(this.playerPos.r, this.playerPos.c);
          var squashScale = new Vec3(1, 1, 1);
          if (dir === Direction.Left || dir === Direction.Right) {
            squashScale = new Vec3(0.75, 1.25, 1);
          } else {
            squashScale = new Vec3(1.25, 0.75, 1);
          }
          tween(this.playerNode).to(0.06, {
            scale: squashScale
          }).to(0.1, {
            scale: new Vec3(1, 1, 1)
          }).call(function () {
            // 动画结束严格重置位置与缩放，消除任何潜在偏移
            _this6.playerNode.setPosition(correctPos);
            _this6.playerNode.setScale(new Vec3(1, 1, 1));
            _this6.isMoving = false;
            _this6.CheckGameResult();
          }).start();
        }

        /** 标记格子涂色并播放动效 */;
        _proto.MarkCellPainted = function MarkCellPainted(r, c, playJuiceEffect) {
          var key = r + "_" + c;
          var isAlreadyPainted = this.paintedState.get(key);
          if (!isAlreadyPainted) {
            this.paintedState.set(key, true);
            this.paintedCellsCount++;
            this.PlayPaintSplat();
            this.UpdateHUD();
            var node = this.cellNodes.get(key);
            if (node) {
              // 如果节点带 Sprite 组件（使用了 Prefab），更新为涂色颜色
              var sprite = node.getComponent(Sprite);
              if (sprite) {
                sprite.color = this.COLOR_PAINTED;
              }

              // 重新绘制为已涂色样式（如果使用 Graphics 自绘）
              var g = this.cellGraphics.get(key);
              if (g) {
                this.DrawCellGraphics(g, CellType.Target, true);
              }

              // 地块弹动动效（Juice Effect）
              if (playJuiceEffect) {
                tween(node).to(0.06, {
                  scale: new Vec3(1.18, 1.18, 1)
                }).to(0.1, {
                  scale: new Vec3(1, 1, 1)
                }).start();
              }
            }
          }
        }

        // ==================== 胜负判定与关卡流转 ====================
        ;

        _proto.CheckGameResult = function CheckGameResult() {
          if (this.isGameOver) return;

          // 胜利检测：所有待填充地块全部被涂色
          if (this.paintedCellsCount >= this.totalTargetCells) {
            this.isGameOver = true;
            this.OnGameWin();
            return;
          }

          // 失败检测：步数用尽且仍未涂满
          if (this.remainingSteps <= 0) {
            this.isGameOver = true;
            this.OnGameLose();
            return;
          }
        };
        _proto.OnGameWin = function OnGameWin() {
          var _this7 = this;
          this.PlayLevelWinChime();
          console.log("[Level_2] \u606D\u559C\u901A\u5173\u7B2C " + (this.currentLevelIndex + 1) + " \u5173\uFF01");
          var hasNext = this.currentLevelIndex < this.lvData.levelData.length - 1;
          if (hasNext) {
            this.ShowMessagePopup("🎉 关卡完成！", true, false);
            // 1.2 秒后自动进入下一子关卡
            this.scheduleOnce(function () {
              if (_this7.isGameOver) {
                _this7.LoadSubLevel(_this7.currentLevelIndex + 1);
              }
            }, 1.2);
          } else {
            this.ShowMessagePopup("🏆 恭喜全部通关！", false, true);
          }
        };
        _proto.OnGameLose = function OnGameLose() {
          this.PlayGameOverTone();
          console.log("[Level_2] \u6B65\u6570\u7528\u5C3D\uFF0C\u6311\u6218\u5931\u8D25\uFF01");
          this.ShowMessagePopup("😢 步数已用尽！", false, true);
        }

        // ==================== 游戏内置 HUD 与提示弹窗 ====================
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

          // 1. 关卡标题
          var titleNode = new Node("LevelTitle");
          titleNode.parent = this.hudNode;
          titleNode.setPosition(0, 560, 0);
          this.levelTitleLabel = titleNode.addComponent(Label);
          this.levelTitleLabel.fontSize = 32;
          this.levelTitleLabel.lineHeight = 36;
          this.levelTitleLabel.color = new Color(30, 41, 59, 255);
          this.levelTitleLabel.isBold = true;

          // 2. 剩余步数
          var stepNode = new Node("StepLabel");
          stepNode.parent = this.hudNode;
          stepNode.setPosition(-160, 510, 0);
          this.stepLabel = stepNode.addComponent(Label);
          this.stepLabel.fontSize = 24;
          this.stepLabel.lineHeight = 28;
          this.stepLabel.color = new Color(71, 85, 105, 255);

          // 3. 涂色进度
          var progressNode = new Node("ProgressLabel");
          progressNode.parent = this.hudNode;
          progressNode.setPosition(160, 510, 0);
          this.progressLabel = progressNode.addComponent(Label);
          this.progressLabel.fontSize = 24;
          this.progressLabel.lineHeight = 28;
          this.progressLabel.color = new Color(71, 85, 105, 255);

          // 4. 控制栏（重玩、上一关、下一关）
          this.resetBtnNode = this.CreateButton(this.hudNode, "重置", new Vec3(-220, -560, 0), function () {
            _this8.PlayResetClick();
            _this8.LoadSubLevel(_this8.currentLevelIndex);
          });
          this.prevBtnNode = this.CreateButton(this.hudNode, "上一关", new Vec3(-70, -560, 0), function () {
            if (_this8.currentLevelIndex > 0) {
              _this8.LoadSubLevel(_this8.currentLevelIndex - 1);
            }
          });
          this.nextSubBtnNode = this.CreateButton(this.hudNode, "下一关", new Vec3(80, -560, 0), function () {
            if (_this8.currentLevelIndex < _this8.lvData.levelData.length - 1) {
              _this8.LoadSubLevel(_this8.currentLevelIndex + 1);
            }
          });

          // 5. 结算弹层容器
          this.CreateMessagePopup();
        };
        _proto.BindExistingHUD = function BindExistingHUD() {
          var _this9 = this;
          if (!this.levelTitleLabel) {
            var _this$hudNode$getChil;
            this.levelTitleLabel = (_this$hudNode$getChil = this.hudNode.getChildByName("LevelTitle")) == null ? void 0 : _this$hudNode$getChil.getComponent(Label);
          }
          if (!this.stepLabel) {
            var _this$hudNode$getChil2;
            this.stepLabel = (_this$hudNode$getChil2 = this.hudNode.getChildByName("StepLabel")) == null ? void 0 : _this$hudNode$getChil2.getComponent(Label);
          }
          if (!this.progressLabel) {
            var _this$hudNode$getChil3;
            this.progressLabel = (_this$hudNode$getChil3 = this.hudNode.getChildByName("ProgressLabel")) == null ? void 0 : _this$hudNode$getChil3.getComponent(Label);
          }
          if (!this.resetBtnNode) {
            this.resetBtnNode = this.hudNode.getChildByName("btn_重置");
          }
          if (!this.prevBtnNode) {
            this.prevBtnNode = this.hudNode.getChildByName("btn_上一关");
          }
          if (!this.nextSubBtnNode) {
            this.nextSubBtnNode = this.hudNode.getChildByName("btn_下一关");
          }
          if (this.resetBtnNode) {
            this.BindButtonEvent(this.resetBtnNode, function () {
              _this9.PlayResetClick();
              _this9.LoadSubLevel(_this9.currentLevelIndex);
            });
          }
          if (this.prevBtnNode) {
            this.BindButtonEvent(this.prevBtnNode, function () {
              if (_this9.currentLevelIndex > 0) {
                _this9.LoadSubLevel(_this9.currentLevelIndex - 1);
              }
            });
          }
          if (this.nextSubBtnNode) {
            this.BindButtonEvent(this.nextSubBtnNode, function () {
              if (_this9.currentLevelIndex < _this9.lvData.levelData.length - 1) {
                _this9.LoadSubLevel(_this9.currentLevelIndex + 1);
              }
            });
          }
          this.CreateMessagePopup();
        };
        _proto.BindButtonEvent = function BindButtonEvent(btnNode, onClick) {
          if (!btnNode) return;
          var btn = btnNode.getComponent(Button) || btnNode.addComponent(Button);
          btnNode.off(Button.EventType.CLICK);
          btnNode.on(Button.EventType.CLICK, onClick, this);
        };
        _proto.CreateButton = function CreateButton(parent, text, pos, onClick) {
          var btnNode = new Node("btn_" + text);
          btnNode.parent = parent;
          btnNode.setPosition(pos);
          var ut = btnNode.addComponent(UITransform);
          ut.setContentSize(120, 50);
          var g = btnNode.addComponent(Graphics);
          g.fillColor = new Color(241, 245, 249, 255);
          g.roundRect(-60, -25, 120, 50, 10);
          g.fill();
          g.strokeColor = new Color(203, 213, 225, 255);
          g.lineWidth = 1.5;
          g.roundRect(-59, -24, 118, 48, 10);
          g.stroke();
          var labelNode = new Node("Label");
          labelNode.parent = btnNode;
          var lbl = labelNode.addComponent(Label);
          lbl.string = text;
          lbl.fontSize = 22;
          lbl.lineHeight = 26;
          lbl.color = new Color(51, 65, 85, 255);
          btnNode.addComponent(Button);
          btnNode.on(Button.EventType.CLICK, onClick, this);
          return btnNode;
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
                this.messageLabel = (_cardNode$getChildByN = _cardNode.getChildByName("MsgText")) == null ? void 0 : _cardNode$getChildByN.getComponent(Label);
              }
              if (!this.nextBtnNode) {
                this.nextBtnNode = _cardNode.getChildByName("btn_下一关");
              }
              if (!this.retryBtnNode) {
                this.retryBtnNode = _cardNode.getChildByName("btn_重试");
              }
              if (this.nextBtnNode) {
                this.BindButtonEvent(this.nextBtnNode, function () {
                  _this10.LoadSubLevel(_this10.currentLevelIndex + 1);
                });
              }
              if (this.retryBtnNode) {
                this.BindButtonEvent(this.retryBtnNode, function () {
                  _this10.LoadSubLevel(_this10.currentLevelIndex);
                });
              }
            }
            return;
          }
          this.messageNode = new Node("MessagePopup");
          this.messageNode.parent = this.node;
          this.messageNode.active = false;

          // 半透明遮罩
          var maskG = this.messageNode.addComponent(Graphics);
          maskG.fillColor = new Color(0, 0, 0, 150);
          maskG.rect(-375, -667, 750, 1334);
          maskG.fill();

          // 弹窗卡片背景
          var cardNode = new Node("Card");
          cardNode.parent = this.messageNode;
          var cardG = cardNode.addComponent(Graphics);
          cardG.fillColor = new Color(255, 255, 255, 255);
          cardG.roundRect(-220, -140, 440, 280, 20);
          cardG.fill();

          // 文字提示
          var msgTextNode = new Node("MsgText");
          msgTextNode.parent = cardNode;
          msgTextNode.setPosition(0, 50, 0);
          this.messageLabel = msgTextNode.addComponent(Label);
          this.messageLabel.fontSize = 32;
          this.messageLabel.lineHeight = 36;
          this.messageLabel.color = new Color(30, 41, 59, 255);
          this.messageLabel.isBold = true;

          // 下一关按钮
          this.nextBtnNode = this.CreateButton(cardNode, "下一关", new Vec3(0, -50, 0), function () {
            _this10.LoadSubLevel(_this10.currentLevelIndex + 1);
          });

          // 重试按钮
          this.retryBtnNode = this.CreateButton(cardNode, "重试", new Vec3(0, -50, 0), function () {
            _this10.LoadSubLevel(_this10.currentLevelIndex);
          });
        };
        _proto.ShowMessagePopup = function ShowMessagePopup(msg, showNext, showRetry) {
          if (!this.messageNode) return;
          this.messageLabel.string = msg;
          this.nextBtnNode.active = showNext;
          this.retryBtnNode.active = showRetry;
          this.messageNode.active = true;

          // 弹出缩放动效
          var card = this.messageNode.getChildByName("Card");
          if (card) {
            card.setScale(new Vec3(0.5, 0.5, 1));
            tween(card).to(0.2, {
              scale: new Vec3(1.05, 1.05, 1)
            }, {
              easing: 'backOut'
            }).to(0.08, {
              scale: new Vec3(1, 1, 1)
            }).start();
          }
        };
        _proto.HideMessagePopup = function HideMessagePopup() {
          if (this.messageNode) {
            this.messageNode.active = false;
          }
        };
        _proto.UpdateHUD = function UpdateHUD() {
          if (this.levelTitleLabel && this.currentLevelData) {
            var currentSub = this.currentLevelIndex + 1;
            var totalSub = this.lvData.levelData.length;
            this.levelTitleLabel.string = "\u5173\u5361 2  (\u7B2C " + currentSub + " / " + totalSub + " \u5173)";
          }
          if (this.stepLabel) {
            this.stepLabel.string = "\u5269\u4F59\u6B65\u6570: " + this.remainingSteps;
            this.stepLabel.color = this.remainingSteps <= 2 ? new Color(239, 68, 68, 255) : new Color(71, 85, 105, 255);
          }
          if (this.progressLabel) {
            var percent = this.totalTargetCells > 0 ? Math.floor(this.paintedCellsCount / this.totalTargetCells * 100) : 0;
            this.progressLabel.string = "\u5DF2\u6D82\u8272: " + this.paintedCellsCount + " / " + this.totalTargetCells + " (" + percent + "%)";
          }
        };
        return Level_2;
      }(LevelBase), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "\u6ED1\u52A8\u533A\u57DF", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "playerPrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "blockPrefab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "block_root", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lvData", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "hudNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "levelTitleLabel", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "stepLabel", [_dec10], {
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
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "resetBtnNode", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "prevBtnNode", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "nextSubBtnNode", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "messageNode", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "messageLabel", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "nextBtnNode", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "retryBtnNode", [_dec18], {
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

System.register("chunks:///_virtual/LevelRes_2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LevelResBase.ts'], function (exports) {
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
      cclegacy._RF.push({}, "0f456TjGxdLgI4NU0/Sv54o", "LevelRes_2", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LevelRes_2 = exports('LevelRes_2', (_dec = ccclass('LevelRes_2'), _dec(_class = /*#__PURE__*/function (_LevelResBase) {
        _inheritsLoose(LevelRes_2, _LevelResBase);
        function LevelRes_2() {
          return _LevelResBase.apply(this, arguments) || this;
        }
        return LevelRes_2;
      }(LevelResBase)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Lv_Data_2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class2;
      cclegacy._RF.push({}, "09c73qDivxOsrn/ZhQQM9zw", "Lv_Data_2", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BlockLevelData = exports('BlockLevelData', function BlockLevelData() {
        /** 关卡ID */
        this.levelID = -1;
        /** 每关的步数限制 */
        this.stepLimit = 0;
        /** -1 表示空格子  0是墙  1是需要填充的格子  2是玩家出生点*/
        this.gridData = [];
      });
      var Lv_Data_2 = exports('Lv_Data_2', (_dec = ccclass('Lv_Data_2'), _dec(_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Lv_Data_2, _Component);
        function Lv_Data_2() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          /** 关卡数据 */
          _this.levelData = [{
            levelID: 1,
            stepLimit: 2,
            gridData: [[0, 0, 0, 0, 0], [0, 2, 1, 1, 0], [0, 0, 0, 0, 0]]
          }, {
            levelID: 2,
            stepLimit: 6,
            gridData: [[0, 0, 0, 0, 0], [0, 2, 1, 1, 0], [0, 1, 1, 1, 0], [0, 0, 0, 0, 0]]
          }, {
            levelID: 3,
            stepLimit: 8,
            gridData: [[-1, 0, 0, 0, 0, -1], [0, 0, 2, 1, 0, 0], [0, 1, 1, 1, 1, 0], [0, 1, 0, 1, 1, 0], [0, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0]]
          }, {
            levelID: 4,
            stepLimit: 10,
            gridData: [[0, 0, 0, 0, 0], [0, 2, 1, 1, 0], [0, 0, 1, 0, 0], [0, 1, 1, 1, 0], [0, 1, 0, 1, 0], [0, 1, 1, 1, 0], [0, 0, 0, 0, 0]]
          }, {
            levelID: 5,
            stepLimit: 12,
            gridData: [[0, 0, 0, 0, 0, 0, 0], [0, 2, 1, 1, 1, 1, 0], [0, 1, 0, 0, 1, 1, 0], [0, 1, 1, 1, 1, 0, 0], [0, 0, 1, 0, 1, 1, 0], [0, 1, 1, 1, 0, 1, 0], [0, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0]]
          }];
          return _this;
        }
        return Lv_Data_2;
      }(Component)) || _class2));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/Level_2', 'chunks:///_virtual/Level_2'); 
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