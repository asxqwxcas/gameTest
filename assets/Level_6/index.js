System.register("chunks:///_virtual/Level_6", ['./Level_6.ts', './Lv_Data_6.ts'], function () {
  return {
    setters: [null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/Level_6.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LevelBase.ts', './ResultType.ts', './Lv_Data_6.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, SpriteFrame, Color, Tween, UITransform, Graphics, Sprite, Label, tween, Vec3, Vec2, Button, input, Input, KeyCode, assetManager, LevelBase, ResultType, Lv_Data_6, WheelRotationMode;
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
      SpriteFrame = module.SpriteFrame;
      Color = module.Color;
      Tween = module.Tween;
      UITransform = module.UITransform;
      Graphics = module.Graphics;
      Sprite = module.Sprite;
      Label = module.Label;
      tween = module.tween;
      Vec3 = module.Vec3;
      Vec2 = module.Vec2;
      Button = module.Button;
      input = module.input;
      Input = module.Input;
      KeyCode = module.KeyCode;
      assetManager = module.assetManager;
    }, function (module) {
      LevelBase = module.LevelBase;
    }, function (module) {
      ResultType = module.ResultType;
    }, function (module) {
      Lv_Data_6 = module.Lv_Data_6;
      WheelRotationMode = module.WheelRotationMode;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "93c54ANLwVPmICMml9x0UHV", "Level_6", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        executeInEditMode = _decorator.executeInEditMode;

      /** 已插入轮盘的针的运行时数据 */

      var Level_6 = exports('Level_6', (_dec = ccclass('Level_6'), _dec2 = executeInEditMode(true), _dec3 = property(Lv_Data_6), _dec4 = property(Node), _dec5 = property({
        type: SpriteFrame,
        tooltip: '旋转核心轮盘贴图'
      }), _dec6 = property({
        type: SpriteFrame,
        tooltip: '发射针头/能量光球贴图'
      }), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_LevelBase) {
        _inheritsLoose(Level_6, _LevelBase);
        function Level_6() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _LevelBase.call.apply(_LevelBase, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "lvData", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "playArea", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wheelSpriteFrame", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pinOrbSpriteFrame", _descriptor4, _assertThisInitialized(_this));
          // ==================== 视觉配色配置 (Sleek Cyber Obsidian Theme) ====================
          _this.COLOR_BG = new Color(15, 23, 42, 255);
          // 深邃墨青背景 (#0F172A)
          _this.COLOR_BOARD_CARD = new Color(30, 41, 59, 180);
          // 磨砂暗板岩卡片 (#1E293B)
          _this.COLOR_BOARD_BORDER = new Color(51, 65, 85, 200);
          // 边框描边 (#334155)
          // 核心轮盘配色
          _this.COLOR_WHEEL_CORE = new Color(30, 41, 59, 255);
          // 轮盘核心黑曜石色 (#1E293B)
          _this.COLOR_WHEEL_BORDER = new Color(148, 163, 184, 255);
          // 轮盘外环轮廓 (#94A3B8)
          _this.COLOR_WHEEL_GLOW = new Color(56, 189, 248, 70);
          // 轮盘微光冰蓝 (#38BDF8)
          _this.COLOR_WHEEL_INNER_RING = new Color(71, 85, 105, 200);
          // 内部同心刻度环 (#475569)
          // 针与针头配色
          _this.COLOR_PIN_SHAFT = new Color(203, 213, 225, 255);
          // 针杆金属银灰 (#CBD5E1)
          _this.COLOR_PIN_HEAD = new Color(56, 189, 248, 255);
          // 针头高亮冰蓝 (#38BDF8)
          _this.COLOR_PIN_HEAD_BORDER = new Color(255, 255, 255, 220);
          // 针头高光外圈
          _this.COLOR_PIN_HEAD_INIT = new Color(148, 163, 184, 255);
          // 初始已存在针灰色 (#94A3B8)
          _this.COLOR_PIN_TEXT = new Color(15, 23, 42, 255);
          // 针头数字深色 (#0F172A)
          // 撞针冲突与高亮
          _this.COLOR_CLASH = new Color(239, 68, 68, 255);
          // 碰撞警示鲜红 (#EF4444)
          _this.COLOR_SUCCESS = new Color(16, 185, 129, 255);
          // 胜利通关翡翠绿 (#10B981)
          // ==================== 几何尺寸常数 ====================
          _this.WHEEL_POS_Y = 160;
          // 核心轮盘中心 Y 坐标
          _this.WHEEL_RADIUS = 70;
          // 轮盘核心半径
          _this.PIN_SHAFT_LEN = 110;
          // 针杆伸出长度
          _this.PIN_HEAD_RADIUS = 15;
          // 针头圆形半径
          _this.READY_PIN_Y = -240;
          // 底部就绪发射针 Y 坐标
          _this.COLLISION_ANGLE_TOLERANCE = 11.0;
          // 碰撞安全角距阈值（度）
          // ==================== 运行时状态 ====================
          _this.currentStageIndex = 0;
          _this.currentConfig = null;
          // 轮盘旋转动力学
          _this.wheelAngle = 0;
          // 当前轮盘本地旋转角（度）
          _this.currentSpeed = 60;
          // 实时旋转速度（度/秒）
          _this.rotateDirection = 1;
          // 1 为顺时针/正向，-1 为反向
          _this.modeElapsedTimer = 0;
          // 动力学模式计时器
          // 针列表与发射控制
          _this.pinnedPins = [];
          _this.remainingPinsToShoot = 0;
          _this.totalPinsToShoot = 0;
          _this.currentPinIndexToShoot = 1;
          _this.isShooting = false;
          _this.isGameOver = false;
          _this.isStageWon = false;
          // 场景核心节点引用
          _this.bgGraphics = null;
          _this.wheelNode = null;
          _this.wheelSprite = null;
          _this.wheelGraphics = null;
          _this.wheelLabel = null;
          _this.pinsContainer = null;
          _this.launchAreaNode = null;
          _this.readyPinNode = null;
          _this.readyPinSprite = null;
          _this.readyPinGraphics = null;
          _this.readyPinLabel = null;
          _this.queueContainer = null;
          _this.fxRoot = null;
          _this.hudRoot = null;
          _this.titleLabel = null;
          _this.stageBadgeLabel = null;
          _this.remainingPinsLabel = null;
          _this.popupNode = null;
          _this.popupTitleLabel = null;
          _this.popupDescLabel = null;
          _this.popupBtnLabel = null;
          _this.popupActionCallback = null;
          // Web Audio 音频上下文合成器
          _this.audioCtx = null;
          return _this;
        }
        var _proto = Level_6.prototype;
        // ==================== 生命周期 ====================
        _proto.onLoad = function onLoad() {
          _LevelBase.prototype.onLoad.call(this);
          this.InitReferences();
          this.BuildSceneGraph();
          this.LoadTextures();
          {
            this.InitAudioSynthesizer();
            this.RegisterInputEvents();
          }
        };
        _proto.start = function start() {
          this.LoadStage(0);
        };
        _proto.onDisable = function onDisable() {
          _LevelBase.prototype.onDisable.call(this);
          this.UnregisterInputEvents();
        };
        _proto.onDestroy = function onDestroy() {
          this.UnregisterInputEvents();
          this.unscheduleAllCallbacks();
          if (this.wheelNode) Tween.stopAllByTarget(this.wheelNode);
          if (this.readyPinNode) Tween.stopAllByTarget(this.readyPinNode);
        }

        // ==================== 每帧轮盘动力学系统 ====================
        ;

        _proto.update = function update(dt) {
          if (this.isGameOver || this.isStageWon || !this.currentConfig) return;
          this.UpdateWheelRotation(dt);
        }

        /** 计算并更新轮盘旋转状态 */;
        _proto.UpdateWheelRotation = function UpdateWheelRotation(dt) {
          var cfg = this.currentConfig;
          this.modeElapsedTimer += dt;
          switch (cfg.rotationMode) {
            case WheelRotationMode.Constant:
              this.currentSpeed = cfg.baseRotateSpeed * this.rotateDirection;
              break;
            case WheelRotationMode.PeriodicReverse:
              {
                var interval = cfg.cycleInterval || 2.5;
                var cyclePos = this.modeElapsedTimer % (interval * 2);
                // 周期前半正向，后半平滑过渡反向
                if (cyclePos < interval) {
                  this.currentSpeed = cfg.baseRotateSpeed;
                } else {
                  this.currentSpeed = -cfg.baseRotateSpeed;
                }
                break;
              }
            case WheelRotationMode.SineVariable:
              {
                var freq = cfg.speedFrequency || 2.0;
                var variation = cfg.speedVariation || 40;
                this.currentSpeed = cfg.baseRotateSpeed + variation * Math.sin(this.modeElapsedTimer * freq);
                break;
              }
            case WheelRotationMode.Intermittent:
              {
                var totalCycle = cfg.cycleInterval || 2.4;
                var runTime = totalCycle * 0.72; // 72% 时间旋转，28% 时间顿挫暂停
                var modT = this.modeElapsedTimer % totalCycle;
                if (modT < runTime) {
                  this.currentSpeed = cfg.baseRotateSpeed * 1.25;
                } else {
                  this.currentSpeed = 0; // 停顿急停
                }

                break;
              }
          }

          // 累计旋转角度并归一化至 [0, 360)
          this.wheelAngle = (this.wheelAngle + this.currentSpeed * dt) % 360;
          if (this.wheelAngle < 0) this.wheelAngle += 360;
          if (this.wheelNode) {
            this.wheelNode.setRotationFromEuler(0, 0, this.wheelAngle);
          }
        }

        // ==================== 初始化与场景图构建 ====================
        ;

        _proto.InitReferences = function InitReferences() {
          if (!this.lvData) {
            this.lvData = this.getComponentInChildren(Lv_Data_6) || this.node.addComponent(Lv_Data_6);
          }
          if (!this.playArea) {
            this.playArea = this.node.getChildByName("PlayArea");
            if (!this.playArea) {
              this.playArea = new Node("PlayArea");
              this.playArea.parent = this.node;
            }
          }
        };
        _proto.BuildSceneGraph = function BuildSceneGraph() {
          var ut = this.playArea.getComponent(UITransform) || this.playArea.addComponent(UITransform);
          ut.setContentSize(750, 1334);

          // 1. 背景画布
          var bgNode = this.playArea.getChildByName("Background");
          if (!bgNode) {
            bgNode = new Node("Background");
            bgNode.parent = this.playArea;
          }
          this.bgGraphics = bgNode.getComponent(Graphics) || bgNode.addComponent(Graphics);
          this.DrawBackground();

          // 2. 轮盘根节点与子容器
          if (!this.wheelNode) {
            this.wheelNode = this.playArea.getChildByName("WheelNode");
            if (!this.wheelNode) {
              this.wheelNode = new Node("WheelNode");
              this.wheelNode.parent = this.playArea;
            }
          }
          this.wheelNode.setPosition(0, this.WHEEL_POS_Y, 0);
          this.wheelGraphics = this.wheelNode.getComponent(Graphics) || this.wheelNode.addComponent(Graphics);

          // 轮盘贴图 Sprite
          var wheelSpriteNode = this.wheelNode.getChildByName("WheelSprite");
          if (!wheelSpriteNode) {
            wheelSpriteNode = new Node("WheelSprite");
            wheelSpriteNode.parent = this.wheelNode;
          }
          wheelSpriteNode.setSiblingIndex(0);
          var wsUt = wheelSpriteNode.getComponent(UITransform) || wheelSpriteNode.addComponent(UITransform);
          wsUt.setContentSize(this.WHEEL_RADIUS * 2, this.WHEEL_RADIUS * 2);
          this.wheelSprite = wheelSpriteNode.getComponent(Sprite) || wheelSpriteNode.addComponent(Sprite);
          this.wheelSprite.sizeMode = Sprite.SizeMode.CUSTOM;
          this.wheelSprite.trim = false;
          if (this.wheelSpriteFrame) {
            this.wheelSprite.spriteFrame = this.wheelSpriteFrame;
          }

          // 轮盘中心阶段数字 Label
          var labelNode = this.wheelNode.getChildByName("WheelLabel");
          if (!labelNode) {
            labelNode = new Node("WheelLabel");
            labelNode.parent = this.wheelNode;
          }
          labelNode.setPosition(0, 0, 0);
          labelNode.setSiblingIndex(1);
          this.wheelLabel = labelNode.getComponent(Label) || labelNode.addComponent(Label);
          this.wheelLabel.fontSize = 38;
          this.wheelLabel.lineHeight = 42;
          this.wheelLabel.isBold = true;
          this.wheelLabel.color = new Color(255, 255, 255, 255);

          // 已插入针的容器节点（跟随轮盘整体旋转）
          this.pinsContainer = this.wheelNode.getChildByName("PinsContainer");
          if (!this.pinsContainer) {
            this.pinsContainer = new Node("PinsContainer");
            this.pinsContainer.parent = this.wheelNode;
          }
          this.pinsContainer.setSiblingIndex(2);

          // 3. 发射区域与就绪针
          this.launchAreaNode = this.playArea.getChildByName("LaunchArea");
          if (!this.launchAreaNode) {
            this.launchAreaNode = new Node("LaunchArea");
            this.launchAreaNode.parent = this.playArea;
          }
          this.readyPinNode = this.launchAreaNode.getChildByName("ReadyPin");
          if (!this.readyPinNode) {
            this.readyPinNode = new Node("ReadyPin");
            this.readyPinNode.parent = this.launchAreaNode;
          }
          this.readyPinNode.setPosition(0, this.READY_PIN_Y, 0);
          this.readyPinGraphics = this.readyPinNode.getComponent(Graphics) || this.readyPinNode.addComponent(Graphics);

          // 就绪针头贴图 Sprite
          var readyOrbNode = this.readyPinNode.getChildByName("ReadyOrbSprite");
          if (!readyOrbNode) {
            readyOrbNode = new Node("ReadyOrbSprite");
            readyOrbNode.parent = this.readyPinNode;
          }
          readyOrbNode.setSiblingIndex(0);
          var readyUt = readyOrbNode.getComponent(UITransform) || readyOrbNode.addComponent(UITransform);
          readyUt.setContentSize(this.PIN_HEAD_RADIUS * 2.2, this.PIN_HEAD_RADIUS * 2.2);
          this.readyPinSprite = readyOrbNode.getComponent(Sprite) || readyOrbNode.addComponent(Sprite);
          this.readyPinSprite.sizeMode = Sprite.SizeMode.CUSTOM;
          this.readyPinSprite.trim = false;
          if (this.pinOrbSpriteFrame) {
            this.readyPinSprite.spriteFrame = this.pinOrbSpriteFrame;
          }
          var readyLabelNode = this.readyPinNode.getChildByName("Label");
          if (!readyLabelNode) {
            readyLabelNode = new Node("Label");
            readyLabelNode.parent = this.readyPinNode;
          }
          readyLabelNode.setSiblingIndex(1);
          this.readyPinLabel = readyLabelNode.getComponent(Label) || readyLabelNode.addComponent(Label);
          this.readyPinLabel.fontSize = 20;
          this.readyPinLabel.lineHeight = 22;
          this.readyPinLabel.isBold = true;
          this.readyPinLabel.color = this.COLOR_PIN_TEXT;

          // 待发针队列容器
          this.queueContainer = this.launchAreaNode.getChildByName("QueueContainer");
          if (!this.queueContainer) {
            this.queueContainer = new Node("QueueContainer");
            this.queueContainer.parent = this.launchAreaNode;
          }
          this.queueContainer.setPosition(0, this.READY_PIN_Y - 45, 0);

          // 4. 特效与粒子根节点
          this.fxRoot = this.playArea.getChildByName("FxRoot");
          if (!this.fxRoot) {
            this.fxRoot = new Node("FxRoot");
            this.fxRoot.parent = this.playArea;
          }

          // 5. HUD 抬头与底部控制
          this.CreateHUD();

          // 6. 弹窗提示
          this.CreatePopup();
        }

        // ==================== 关卡加载与初始化 ====================
        ;

        _proto.LoadStage = function LoadStage(index) {
          this.unscheduleAllCallbacks();
          if (this.wheelNode) Tween.stopAllByTarget(this.wheelNode);
          if (this.readyPinNode) Tween.stopAllByTarget(this.readyPinNode);
          this.currentStageIndex = 0;
          this.currentConfig = this.lvData ? this.lvData.GetStage(0) : {
            stageIndex: 1,
            stageName: "见缝插针",
            initialPinAngles: [0, 90, 180, 270],
            pinsToShoot: 8,
            baseRotateSpeed: 65,
            rotationMode: WheelRotationMode.Constant
          };

          // 重置状态
          this.wheelAngle = 0;
          this.modeElapsedTimer = 0;
          this.rotateDirection = 1;
          this.currentSpeed = this.currentConfig.baseRotateSpeed;
          this.isShooting = false;
          this.isGameOver = false;
          this.isStageWon = false;
          this.totalPinsToShoot = this.currentConfig.pinsToShoot;
          this.remainingPinsToShoot = this.currentConfig.pinsToShoot;
          this.currentPinIndexToShoot = 1;
          this.HidePopup();

          // 绘制中央轮盘
          this.DrawWheelVisuals();
          this.wheelNode.setRotationFromEuler(0, 0, 0);
          if (this.wheelLabel) {
            this.wheelLabel.string = "6";
          }

          // 清理旧针
          this.pinnedPins = [];
          this.pinsContainer.removeAllChildren();
          this.fxRoot.removeAllChildren();

          // 渲染初始已插针
          this.SetupInitialPins();

          // 刷新待发队列与发射针
          this.UpdateReadyPinVisuals();
          this.UpdateQueueVisuals();

          // 刷新 HUD
          this.UpdateHUD();

          // 就绪针微动呼吸动效
          this.PlayReadyPinIdleAnimation();
        }

        /** 绘制初始已存在的针 */;
        _proto.SetupInitialPins = function SetupInitialPins() {
          var _this2 = this;
          if (!this.currentConfig.initialPinAngles) return;
          this.currentConfig.initialPinAngles.forEach(function (angleDeg, idx) {
            var pinNode = _this2.CreatePinNode(angleDeg, "", true);
            pinNode.parent = _this2.pinsContainer;
            _this2.pinnedPins.push({
              angleDeg: (angleDeg % 360 + 360) % 360,
              node: pinNode,
              numberIndex: -1
            });
          });
        }

        /** 创建单根针节点 */;
        _proto.CreatePinNode = function CreatePinNode(angleDeg, labelText, isInitial) {
          var pinNode = new Node("Pin_" + Math.round(angleDeg));
          pinNode.setPosition(0, 0, 0);
          pinNode.setRotationFromEuler(0, 0, angleDeg);
          var g = pinNode.addComponent(Graphics);
          g.clear();

          // 1. 针杆：从轮盘边缘延展至针头
          g.strokeColor = this.COLOR_PIN_SHAFT;
          g.lineWidth = 3;
          g.moveTo(this.WHEEL_RADIUS, 0);
          g.lineTo(this.WHEEL_RADIUS + this.PIN_SHAFT_LEN, 0);
          g.stroke();

          // 2. 针尖嵌入点高光小圆圈
          g.fillColor = isInitial ? this.COLOR_PIN_HEAD_INIT : this.COLOR_PIN_HEAD;
          g.circle(this.WHEEL_RADIUS + 1, 0, 3);
          g.fill();

          // 3. 针头大圆球 / 贴图
          var headCenterX = this.WHEEL_RADIUS + this.PIN_SHAFT_LEN + this.PIN_HEAD_RADIUS;
          if (this.pinOrbSpriteFrame) {
            var orbNode = new Node("OrbSprite");
            orbNode.parent = pinNode;
            orbNode.setPosition(headCenterX, 0, 0);
            orbNode.setRotationFromEuler(0, 0, -angleDeg);
            var ut = orbNode.addComponent(UITransform);
            ut.setContentSize(this.PIN_HEAD_RADIUS * 2.2, this.PIN_HEAD_RADIUS * 2.2);
            var sp = orbNode.addComponent(Sprite);
            sp.sizeMode = Sprite.SizeMode.CUSTOM;
            sp.trim = false;
            sp.spriteFrame = this.pinOrbSpriteFrame;
            if (isInitial) {
              sp.color = new Color(175, 195, 215, 255);
            }
          } else {
            g.fillColor = isInitial ? this.COLOR_PIN_HEAD_INIT : this.COLOR_PIN_HEAD;
            g.circle(headCenterX, 0, this.PIN_HEAD_RADIUS);
            g.fill();

            // 针头外边缘光圈
            g.strokeColor = this.COLOR_PIN_HEAD_BORDER;
            g.lineWidth = 1.5;
            g.circle(headCenterX, 0, this.PIN_HEAD_RADIUS);
            g.stroke();
          }

          // 4. 针头数字（如果有）
          if (labelText && labelText.length > 0) {
            var textNode = new Node("NumberLabel");
            textNode.parent = pinNode;
            textNode.setPosition(headCenterX, 0, 0);
            // 使文字保持正立显示（抵消针的倾斜角）
            textNode.setRotationFromEuler(0, 0, -angleDeg);
            var lbl = textNode.addComponent(Label);
            lbl.fontSize = 18;
            lbl.lineHeight = 20;
            lbl.isBold = true;
            lbl.color = this.COLOR_PIN_TEXT;
            lbl.string = labelText;
          }
          return pinNode;
        }

        // ==================== 射击与核心逻辑判定 ====================
        /** 触发发射当前针 */;
        _proto.ShootPin = function ShootPin() {
          var _this3 = this;
          if (this.isGameOver || this.isStageWon || this.isShooting || this.remainingPinsToShoot <= 0) {
            return;
          }
          this.isShooting = true;
          Tween.stopAllByTarget(this.readyPinNode);
          var currentNum = this.currentPinIndexToShoot;
          this.PlayLaunchSfx();

          // 飞行针目标 Y 坐标：轮盘底部切点 (WHEEL_POS_Y - WHEEL_RADIUS)
          // 飞行针以朝上姿态直线穿刺
          var targetWorldY = this.WHEEL_POS_Y - (this.WHEEL_RADIUS + this.PIN_SHAFT_LEN + this.PIN_HEAD_RADIUS);
          var flightDuration = 0.075; // 75ms 极速直线射出

          tween(this.readyPinNode).to(flightDuration, {
            position: new Vec3(0, targetWorldY, 0)
          }, {
            easing: 'quadIn'
          }).call(function () {
            _this3.OnPinReachedWheel(currentNum);
          }).start();
        }

        /** 针尖到达轮盘接触点判定 */;
        _proto.OnPinReachedWheel = function OnPinReachedWheel(pinNumber) {
          // 计算撞击时刻针在轮盘本地坐标系中的角度
          // 向上射入的切点对应轮盘下方（世界极坐标 270° / -90°）
          // 关系：hitWorldAngle (270) = hitLocalAngle + wheelAngle
          // hitLocalAngle = (270 - wheelAngle) % 360
          var hitLocalAngle = (270 - this.wheelAngle) % 360;
          if (hitLocalAngle < 0) hitLocalAngle += 360;

          // 碰撞安全角距检测
          var isClash = false;
          var clashedPin = null;
          for (var _iterator = _createForOfIteratorHelperLoose(this.pinnedPins), _step; !(_step = _iterator()).done;) {
            var pin = _step.value;
            var diff = Math.abs(hitLocalAngle - pin.angleDeg) % 360;
            if (diff > 180) diff = 360 - diff;
            if (diff < this.COLLISION_ANGLE_TOLERANCE) {
              isClash = true;
              clashedPin = pin;
              break;
            }
          }
          if (isClash) {
            // 撞针失败！
            this.HandleClashDefeat(hitLocalAngle, pinNumber, clashedPin);
          } else {
            // 成功穿刺钉入！
            this.HandleSuccessfulPin(hitLocalAngle, pinNumber);
          }
        }

        /** 成功插入针 */;
        _proto.HandleSuccessfulPin = function HandleSuccessfulPin(localAngle, pinNumber) {
          this.PlayHitSfx();

          // 1. 生成已插入针并绑定到轮盘节点
          var pinnedNode = this.CreatePinNode(localAngle, "" + pinNumber, false);
          pinnedNode.parent = this.pinsContainer;
          this.pinnedPins.push({
            angleDeg: localAngle,
            node: pinnedNode,
            numberIndex: pinNumber
          });

          // 2. 轮盘受击微弹动（Juice Feedback）
          tween(this.wheelNode).to(0.04, {
            scale: new Vec3(1.08, 1.08, 1)
          }).to(0.08, {
            scale: new Vec3(1, 1, 1)
          }).start();

          // 3. 接触切点爆开微粒子火花
          this.SpawnHitSparks(new Vec3(0, this.WHEEL_POS_Y - this.WHEEL_RADIUS, 0));

          // 4. 计数器更新
          this.remainingPinsToShoot--;
          this.currentPinIndexToShoot++;
          this.UpdateHUD();

          // 5. 胜利判定
          if (this.remainingPinsToShoot <= 0) {
            this.HandleStageVictory();
            return;
          }

          // 6. 准备下一根针，并平滑推进队列
          this.ResetReadyPinToBottom();
        }

        /** 撞针失败处理 */;
        _proto.HandleClashDefeat = function HandleClashDefeat(hitLocalAngle, pinNumber, clashedPin) {
          var _this4 = this;
          this.isGameOver = true;
          this.isShooting = false;
          this.PlayClashSfx();

          // 1. 改变撞针颜色为鲜红
          this.DrawReadyPinRed();
          if (clashedPin && clashedPin.node) {
            var g = clashedPin.node.getComponent(Graphics);
            if (g) {
              g.strokeColor = this.COLOR_CLASH;
              g.fillColor = this.COLOR_CLASH;
            }
          }

          // 2. 轮盘震颤与红闪
          this.PlayWheelClashShock();

          // 3. 撞毁断裂动效：两根相撞针从轮盘脱落弹飞并旋转下落
          this.AnimatePinBreakOff(this.readyPinNode, -150, -400);
          if (clashedPin && clashedPin.node) {
            this.AnimatePinBreakOff(clashedPin.node, 180, -400);
          }

          // 4. 延迟弹出失败界面与通知
          this.scheduleOnce(function () {
            _this4.ShowPopup("💥 针尖相撞！", "\u6311\u6218\u5931\u8D25\uFF0C\u8FD8\u6709 " + _this4.remainingPinsToShoot + " \u6839\u98DE\u9488\u672A\u63D2\u5165", "再试一次", function () {
              return _this4.LoadStage(0);
            });
            _this4.SetResultType(ResultType.Lose, 1.2);
          }, 0.7);
        }

        /** 关卡胜利处理 */;
        _proto.HandleStageVictory = function HandleStageVictory() {
          var _this5 = this;
          this.isStageWon = true;
          this.isShooting = false;
          this.PlayWinSfx();

          // 轮盘闪耀翡翠绿光
          this.DrawWheelSuccessVisuals();

          // 庆祝礼花与辉光粒子
          this.SpawnVictoryConfetti();

          // 隐藏就绪针
          if (this.readyPinNode) {
            this.readyPinNode.active = false;
          }

          // 通关弹窗
          this.ShowPopup("🏆 恭喜通关！", "完美穿刺！所有飞针已全部成功嵌入轮盘！", "再玩一次", function () {
            return _this5.LoadStage(0);
          });

          // 通知关卡管理器通关成功
          this.SetResultType(ResultType.Win, 1.2);
        }

        // ==================== 就绪针与队列刷新 ====================
        ;

        _proto.ResetReadyPinToBottom = function ResetReadyPinToBottom() {
          var _this6 = this;
          this.readyPinNode.setPosition(0, this.READY_PIN_Y - 45, 0);
          this.readyPinNode.setScale(new Vec3(0.7, 0.7, 1));
          this.readyPinNode.active = true;
          this.UpdateReadyPinVisuals();
          this.UpdateQueueVisuals();

          // 上浮补位动效
          tween(this.readyPinNode).to(0.12, {
            position: new Vec3(0, this.READY_PIN_Y, 0),
            scale: new Vec3(1, 1, 1)
          }, {
            easing: 'quadOut'
          }).call(function () {
            _this6.isShooting = false;
            _this6.PlayReadyPinIdleAnimation();
          }).start();
        };
        _proto.PlayReadyPinIdleAnimation = function PlayReadyPinIdleAnimation() {
          Tween.stopAllByTarget(this.readyPinNode);
          if (this.isGameOver || this.isStageWon || this.remainingPinsToShoot <= 0) return;
          this.readyPinNode.setScale(new Vec3(1, 1, 1));
          tween(this.readyPinNode).repeatForever(tween().to(0.45, {
            scale: new Vec3(1.04, 1.04, 1)
          }, {
            easing: 'sineInOut'
          }).to(0.45, {
            scale: new Vec3(1, 1, 1)
          }, {
            easing: 'sineInOut'
          })).start();
        };
        _proto.UpdateReadyPinVisuals = function UpdateReadyPinVisuals() {
          if (!this.readyPinGraphics) return;
          this.readyPinGraphics.clear();
          this.readyPinNode.active = this.remainingPinsToShoot > 0;
          if (this.remainingPinsToShoot <= 0) return;

          // 针杆向上指向轮盘
          this.readyPinGraphics.strokeColor = this.COLOR_PIN_SHAFT;
          this.readyPinGraphics.lineWidth = 3;
          this.readyPinGraphics.moveTo(0, 0);
          this.readyPinGraphics.lineTo(0, this.PIN_SHAFT_LEN);
          this.readyPinGraphics.stroke();

          // 针尖小圆点
          this.readyPinGraphics.fillColor = this.COLOR_PIN_HEAD;
          this.readyPinGraphics.circle(0, this.PIN_SHAFT_LEN, 3);
          this.readyPinGraphics.fill();
          if (this.readyPinSprite && this.pinOrbSpriteFrame) {
            this.readyPinSprite.node.active = true;
            this.readyPinSprite.color = Color.WHITE;
          } else {
            // 针头大圆球在下方 (0, 0)
            this.readyPinGraphics.fillColor = this.COLOR_PIN_HEAD;
            this.readyPinGraphics.circle(0, 0, this.PIN_HEAD_RADIUS);
            this.readyPinGraphics.fill();
            this.readyPinGraphics.strokeColor = this.COLOR_PIN_HEAD_BORDER;
            this.readyPinGraphics.lineWidth = 1.5;
            this.readyPinGraphics.circle(0, 0, this.PIN_HEAD_RADIUS);
            this.readyPinGraphics.stroke();
          }

          // 针头数字
          if (this.readyPinLabel) {
            this.readyPinLabel.node.setPosition(0, 0, 0);
            this.readyPinLabel.string = "" + this.currentPinIndexToShoot;
          }
        };
        _proto.DrawReadyPinRed = function DrawReadyPinRed() {
          if (!this.readyPinGraphics) return;
          this.readyPinGraphics.clear();
          this.readyPinGraphics.strokeColor = this.COLOR_CLASH;
          this.readyPinGraphics.lineWidth = 3.5;
          this.readyPinGraphics.moveTo(0, 0);
          this.readyPinGraphics.lineTo(0, this.PIN_SHAFT_LEN);
          this.readyPinGraphics.stroke();
          if (this.readyPinSprite) {
            this.readyPinSprite.color = this.COLOR_CLASH;
          } else {
            this.readyPinGraphics.fillColor = this.COLOR_CLASH;
            this.readyPinGraphics.circle(0, 0, this.PIN_HEAD_RADIUS);
            this.readyPinGraphics.fill();
          }
        };
        _proto.UpdateQueueVisuals = function UpdateQueueVisuals() {
          if (!this.queueContainer) return;
          this.queueContainer.removeAllChildren();
          var upcomingCount = Math.min(this.remainingPinsToShoot - 1, 4);
          if (upcomingCount <= 0) return;
          var gapY = 32;
          for (var i = 0; i < upcomingCount; i++) {
            var nextIdx = this.currentPinIndexToShoot + 1 + i;
            var itemNode = new Node("Queue_" + i);
            itemNode.parent = this.queueContainer;
            itemNode.setPosition(0, -gapY * (i + 1), 0);
            if (this.pinOrbSpriteFrame) {
              var ut = itemNode.addComponent(UITransform);
              var size = 22 - i * 2;
              ut.setContentSize(size, size);
              var sp = itemNode.addComponent(Sprite);
              sp.sizeMode = Sprite.SizeMode.CUSTOM;
              sp.trim = false;
              sp.spriteFrame = this.pinOrbSpriteFrame;
              var alpha = Math.max(80, 255 - i * 45);
              sp.color = new Color(255, 255, 255, alpha);
            } else {
              var g = itemNode.addComponent(Graphics);
              g.fillColor = new Color(56, 189, 248, 160 - i * 35);
              g.circle(0, 0, 10 - i * 1);
              g.fill();
            }
            if (i < 2) {
              var textNode = new Node("Txt");
              textNode.parent = itemNode;
              textNode.setPosition(0, 0, 0);
              var lbl = textNode.addComponent(Label);
              lbl.fontSize = 12;
              lbl.lineHeight = 14;
              lbl.isBold = true;
              lbl.color = this.COLOR_PIN_TEXT;
              lbl.string = "" + nextIdx;
            }
          }
        }

        // ==================== 视觉自绘：背景、轮盘与特效 ====================
        ;

        _proto.DrawBackground = function DrawBackground() {
          if (!this.bgGraphics) return;
          this.bgGraphics.clear();
          var w = 750;
          var h = 1334;
          var halfW = w / 2;
          var halfH = h / 2;

          // 深邃太空黑底
          this.bgGraphics.fillColor = this.COLOR_BG;
          this.bgGraphics.rect(-halfW, -halfH, w, h);
          this.bgGraphics.fill();

          // 磨砂游戏主卡片
          this.bgGraphics.fillColor = this.COLOR_BOARD_CARD;
          this.bgGraphics.roundRect(-345, -570, 690, 1140, 24);
          this.bgGraphics.fill();
          this.bgGraphics.strokeColor = this.COLOR_BOARD_BORDER;
          this.bgGraphics.lineWidth = 2;
          this.bgGraphics.roundRect(-345, -570, 690, 1140, 24);
          this.bgGraphics.stroke();

          // 装饰性背景微星光点
          this.bgGraphics.fillColor = new Color(255, 255, 255, 25);
          for (var i = 0; i < 24; i++) {
            var px = -300 + i * 137 % 600;
            var py = -500 + i * 93 % 1000;
            this.bgGraphics.circle(px, py, 1.5);
            this.bgGraphics.fill();
          }
        };
        _proto.DrawWheelVisuals = function DrawWheelVisuals() {
          if (!this.wheelGraphics) return;
          this.wheelGraphics.clear();
          var r = this.WHEEL_RADIUS;
          if (this.wheelSprite && this.wheelSpriteFrame) {
            this.wheelSprite.node.active = true;
            this.wheelSprite.color = Color.WHITE;
            // 外圈冰蓝柔和光晕
            this.wheelGraphics.fillColor = this.COLOR_WHEEL_GLOW;
            this.wheelGraphics.circle(0, 0, r + 10);
            this.wheelGraphics.fill();
            return;
          }

          // 1. 外部冰蓝辉光晕
          this.wheelGraphics.fillColor = this.COLOR_WHEEL_GLOW;
          this.wheelGraphics.circle(0, 0, r + 8);
          this.wheelGraphics.fill();

          // 2. 轮盘主体黑曜石圆盘
          this.wheelGraphics.fillColor = this.COLOR_WHEEL_CORE;
          this.wheelGraphics.circle(0, 0, r);
          this.wheelGraphics.fill();

          // 3. 轮盘外边框细亮线
          this.wheelGraphics.strokeColor = this.COLOR_WHEEL_BORDER;
          this.wheelGraphics.lineWidth = 3;
          this.wheelGraphics.circle(0, 0, r);
          this.wheelGraphics.stroke();

          // 4. 内部同心装饰刻度环
          this.wheelGraphics.strokeColor = this.COLOR_WHEEL_INNER_RING;
          this.wheelGraphics.lineWidth = 1.5;
          this.wheelGraphics.circle(0, 0, r * 0.65);
          this.wheelGraphics.stroke();

          // 5. 四方向科技感刻度点
          this.wheelGraphics.fillColor = this.COLOR_WHEEL_BORDER;
          for (var i = 0; i < 4; i++) {
            var a = i * Math.PI / 2;
            this.wheelGraphics.circle(Math.cos(a) * (r * 0.8), Math.sin(a) * (r * 0.8), 2.5);
            this.wheelGraphics.fill();
          }
        };
        _proto.DrawWheelSuccessVisuals = function DrawWheelSuccessVisuals() {
          if (!this.wheelGraphics) return;
          this.wheelGraphics.clear();
          var r = this.WHEEL_RADIUS;
          if (this.wheelSprite) {
            this.wheelSprite.color = this.COLOR_SUCCESS;
          }

          // 胜利绿色翡翠辉光
          this.wheelGraphics.fillColor = new Color(16, 185, 129, 120);
          this.wheelGraphics.circle(0, 0, r + 14);
          this.wheelGraphics.fill();
          if (!this.wheelSprite || !this.wheelSpriteFrame) {
            this.wheelGraphics.fillColor = this.COLOR_SUCCESS;
            this.wheelGraphics.circle(0, 0, r);
            this.wheelGraphics.fill();
            this.wheelGraphics.strokeColor = new Color(255, 255, 255, 255);
            this.wheelGraphics.lineWidth = 3.5;
            this.wheelGraphics.circle(0, 0, r);
            this.wheelGraphics.stroke();
          }
        }

        /** 撞针震颤动效 */;
        _proto.PlayWheelClashShock = function PlayWheelClashShock() {
          var originPos = new Vec3(0, this.WHEEL_POS_Y, 0);
          tween(this.wheelNode).to(0.04, {
            position: new Vec3(12, this.WHEEL_POS_Y - 8, 0)
          }).to(0.04, {
            position: new Vec3(-12, this.WHEEL_POS_Y + 6, 0)
          }).to(0.04, {
            position: new Vec3(8, this.WHEEL_POS_Y + 4, 0)
          }).to(0.04, {
            position: new Vec3(-6, this.WHEEL_POS_Y - 3, 0)
          }).to(0.05, {
            position: originPos
          }).start();
        }

        /** 撞碎针断裂弹飞动画 */;
        _proto.AnimatePinBreakOff = function AnimatePinBreakOff(node, forceX, forceY) {
          var _this7 = this;
          if (!node) return;
          var curPos = node.position.clone();
          tween(node).to(0.45, {
            position: new Vec3(curPos.x + forceX, curPos.y + forceY, 0),
            scale: new Vec3(0.3, 0.3, 1)
          }, {
            easing: 'quadIn'
          }).call(function () {
            if (node !== _this7.readyPinNode) {
              node.destroy();
            }
          }).start();
        }

        /** 刺入点火花粒子 */;
        _proto.SpawnHitSparks = function SpawnHitSparks(pos) {
          var _this8 = this;
          var count = 10;
          var colors = [new Color(56, 189, 248, 255), new Color(255, 255, 255, 255), new Color(251, 191, 36, 255)];
          var _loop = function _loop() {
            var p = new Node("Spark");
            p.parent = _this8.fxRoot;
            p.setPosition(pos);
            var g = p.addComponent(Graphics);
            g.fillColor = colors[i % colors.length];
            g.circle(0, 0, 2.5 + Math.random() * 2);
            g.fill();
            var angle = Math.random() * Math.PI * 2;
            var dist = 18 + Math.random() * 32;
            tween(p).to(0.2 + Math.random() * 0.1, {
              position: new Vec3(pos.x + Math.cos(angle) * dist, pos.y + Math.sin(angle) * dist, 0),
              scale: new Vec3(0, 0, 1)
            }, {
              easing: 'cubicOut'
            }).call(function () {
              return p.destroy();
            }).start();
          };
          for (var i = 0; i < count; i++) {
            _loop();
          }
        }

        /** 通关礼花喷射 */;
        _proto.SpawnVictoryConfetti = function SpawnVictoryConfetti() {
          var _this9 = this;
          var count = 36;
          var colors = [new Color(16, 185, 129, 255), new Color(56, 189, 248, 255), new Color(251, 191, 36, 255), new Color(244, 114, 182, 255), new Color(168, 85, 247, 255)];
          var _loop2 = function _loop2() {
            var p = new Node("Confetti");
            p.parent = _this9.fxRoot;
            p.setPosition(0, _this9.WHEEL_POS_Y, 0);
            var g = p.addComponent(Graphics);
            g.fillColor = colors[i % colors.length];
            var size = 5 + Math.random() * 5;
            g.roundRect(-size / 2, -size / 2, size, size, 2);
            g.fill();
            var angle = Math.PI * 2 * i / count + (Math.random() - 0.5) * 0.3;
            var dist = 90 + Math.random() * 220;
            tween(p).to(0.65 + Math.random() * 0.25, {
              position: new Vec3(Math.cos(angle) * dist, _this9.WHEEL_POS_Y + Math.sin(angle) * dist, 0),
              scale: new Vec3(0, 0, 1)
            }, {
              easing: 'cubicOut'
            }).call(function () {
              return p.destroy();
            }).start();
          };
          for (var i = 0; i < count; i++) {
            _loop2();
          }
        }

        // ==================== HUD 与用户交互界面 ====================
        ;

        _proto.CreateHUD = function CreateHUD() {
          var _this10 = this;
          this.hudRoot = this.playArea.getChildByName("HUD");
          if (!this.hudRoot) {
            this.hudRoot = new Node("HUD");
            this.hudRoot.parent = this.playArea;
          }

          // 1. 主标题
          var titleNode = this.hudRoot.getChildByName("Title");
          if (!titleNode) {
            titleNode = new Node("Title");
            titleNode.parent = this.hudRoot;
          }
          titleNode.setPosition(0, 460, 0);
          this.titleLabel = titleNode.getComponent(Label) || titleNode.addComponent(Label);
          this.titleLabel.fontSize = 32;
          this.titleLabel.lineHeight = 36;
          this.titleLabel.isBold = true;
          this.titleLabel.color = new Color(255, 255, 255, 255);
          this.titleLabel.string = "关卡 6 · 见缝插针";

          // 2. 副标题与关卡阶段徽章
          var badgeNode = this.hudRoot.getChildByName("StageBadge");
          if (!badgeNode) {
            badgeNode = new Node("StageBadge");
            badgeNode.parent = this.hudRoot;
          }
          badgeNode.setPosition(0, 415, 0);
          this.stageBadgeLabel = badgeNode.getComponent(Label) || badgeNode.addComponent(Label);
          this.stageBadgeLabel.fontSize = 22;
          this.stageBadgeLabel.lineHeight = 26;
          this.stageBadgeLabel.color = new Color(56, 189, 248, 255);

          // 3. 剩余针数信息
          var remainNode = this.hudRoot.getChildByName("RemainingPins");
          if (!remainNode) {
            remainNode = new Node("RemainingPins");
            remainNode.parent = this.hudRoot;
          }
          remainNode.setPosition(0, 375, 0);
          this.remainingPinsLabel = remainNode.getComponent(Label) || remainNode.addComponent(Label);
          this.remainingPinsLabel.fontSize = 20;
          this.remainingPinsLabel.lineHeight = 24;
          this.remainingPinsLabel.color = new Color(148, 163, 184, 255);

          // 4. 底部控制栏
          var controlsNode = this.hudRoot.getChildByName("BottomControls");
          if (!controlsNode) {
            controlsNode = new Node("BottomControls");
            controlsNode.parent = this.hudRoot;
          }
          controlsNode.setPosition(0, -480, 0);
          controlsNode.removeAllChildren(); // 清空历史残留按钮，避免重复生成

          // 仅保留两个核心按钮：重置与发射
          this.CreateButton(controlsNode, "重置", new Vec3(-110, 0, 0), new Vec2(120, 50), function () {
            _this10.LoadStage(0);
          }, new Color(51, 65, 85, 230), new Color(226, 232, 240, 255));
          this.CreateButton(controlsNode, "⚡ 发射", new Vec3(110, 0, 0), new Vec2(160, 50), function () {
            _this10.ShootPin();
          }, new Color(56, 189, 248, 255), new Color(15, 23, 42, 255));
        };
        _proto.CreateButton = function CreateButton(parent, text, pos, size, callback, btnColor, textColor) {
          if (btnColor === void 0) {
            btnColor = new Color(51, 65, 85, 220);
          }
          if (textColor === void 0) {
            textColor = new Color(255, 255, 255, 255);
          }
          var btnNode = new Node("Btn_" + text);
          btnNode.parent = parent;
          btnNode.setPosition(pos);
          var ut = btnNode.addComponent(UITransform);
          ut.setContentSize(size.x, size.y);
          var g = btnNode.addComponent(Graphics);
          g.fillColor = btnColor;
          g.roundRect(-size.x / 2, -size.y / 2, size.x, size.y, 10);
          g.fill();
          g.strokeColor = new Color(148, 163, 184, 120);
          g.lineWidth = 1.5;
          g.roundRect(-size.x / 2, -size.y / 2, size.x, size.y, 10);
          g.stroke();
          var lblNode = new Node("Label");
          lblNode.parent = btnNode;
          var lbl = lblNode.addComponent(Label);
          lbl.fontSize = 18;
          lbl.lineHeight = 22;
          lbl.isBold = true;
          lbl.color = textColor;
          lbl.string = text;
          var btn = btnNode.addComponent(Button);
          btn.transition = Button.Transition.SCALE;
          btn.zoomScale = 0.92;
          btnNode.on(Button.EventType.CLICK, callback, this);
          return btnNode;
        };
        _proto.UpdateHUD = function UpdateHUD() {
          if (!this.stageBadgeLabel || !this.currentConfig) return;
          this.stageBadgeLabel.string = "将全部飞针精准刺入轮盘 · 避开碰撞";
          this.remainingPinsLabel.string = "\uD83C\uDFAF \u5F85\u53D1\u98DE\u9488: " + this.remainingPinsToShoot + " / " + this.totalPinsToShoot;
        }

        // ==================== 结果与通关弹窗 ====================
        ;

        _proto.CreatePopup = function CreatePopup() {
          var _this11 = this;
          this.popupNode = this.playArea.getChildByName("PopupNode");
          if (!this.popupNode) {
            this.popupNode = new Node("PopupNode");
            this.popupNode.parent = this.playArea;
          }
          this.popupNode.setPosition(0, 0, 0);
          var ut = this.popupNode.getComponent(UITransform) || this.popupNode.addComponent(UITransform);
          ut.setContentSize(520, 300);

          // 半透明遮罩底
          var g = this.popupNode.getComponent(Graphics) || this.popupNode.addComponent(Graphics);
          g.fillColor = new Color(15, 23, 42, 240);
          g.roundRect(-260, -150, 520, 300, 20);
          g.fill();
          g.strokeColor = new Color(56, 189, 248, 200);
          g.lineWidth = 2;
          g.roundRect(-260, -150, 520, 300, 20);
          g.stroke();

          // 标题
          var titleNode = this.popupNode.getChildByName("PopupTitle");
          if (!titleNode) {
            titleNode = new Node("PopupTitle");
            titleNode.parent = this.popupNode;
          }
          titleNode.setPosition(0, 75, 0);
          this.popupTitleLabel = titleNode.getComponent(Label) || titleNode.addComponent(Label);
          this.popupTitleLabel.fontSize = 30;
          this.popupTitleLabel.lineHeight = 34;
          this.popupTitleLabel.isBold = true;
          this.popupTitleLabel.color = new Color(255, 255, 255, 255);

          // 说明文字
          var descNode = this.popupNode.getChildByName("PopupDesc");
          if (!descNode) {
            descNode = new Node("PopupDesc");
            descNode.parent = this.popupNode;
          }
          descNode.setPosition(0, 20, 0);
          this.popupDescLabel = descNode.getComponent(Label) || descNode.addComponent(Label);
          this.popupDescLabel.fontSize = 20;
          this.popupDescLabel.lineHeight = 26;
          this.popupDescLabel.color = new Color(203, 213, 225, 255);

          // 确认/重试按钮
          var btnNode = this.popupNode.getChildByName("PopupBtn");
          if (!btnNode) {
            btnNode = new Node("PopupBtn");
            btnNode.parent = this.popupNode;
          }
          btnNode.setPosition(0, -65, 0);
          var btnUT = btnNode.getComponent(UITransform) || btnNode.addComponent(UITransform);
          btnUT.setContentSize(180, 50);
          var btnG = btnNode.getComponent(Graphics) || btnNode.addComponent(Graphics);
          btnG.fillColor = new Color(56, 189, 248, 255);
          btnG.roundRect(-90, -25, 180, 50, 12);
          btnG.fill();
          var btnLblNode = btnNode.getChildByName("Lbl");
          if (!btnLblNode) {
            btnLblNode = new Node("Lbl");
            btnLblNode.parent = btnNode;
          }
          this.popupBtnLabel = btnLblNode.getComponent(Label) || btnLblNode.addComponent(Label);
          this.popupBtnLabel.fontSize = 22;
          this.popupBtnLabel.lineHeight = 26;
          this.popupBtnLabel.isBold = true;
          this.popupBtnLabel.color = new Color(15, 23, 42, 255);
          var btn = btnNode.getComponent(Button) || btnNode.addComponent(Button);
          btn.transition = Button.Transition.SCALE;
          btn.zoomScale = 0.92;
          btnNode.on(Button.EventType.CLICK, function () {
            if (_this11.popupActionCallback) {
              _this11.popupActionCallback();
            }
          }, this);
          this.popupNode.active = false;
        };
        _proto.ShowPopup = function ShowPopup(title, desc, btnText, callback) {
          if (!this.popupNode) return;
          this.popupTitleLabel.string = title;
          this.popupDescLabel.string = desc;
          this.popupBtnLabel.string = btnText;
          this.popupActionCallback = callback;
          this.popupNode.active = true;
          this.popupNode.setScale(new Vec3(0.5, 0.5, 1));
          tween(this.popupNode).to(0.2, {
            scale: new Vec3(1, 1, 1)
          }, {
            easing: 'backOut'
          }).start();
        };
        _proto.HidePopup = function HidePopup() {
          if (this.popupNode) {
            this.popupNode.active = false;
          }
        }

        // ==================== 输入控制 ====================
        ;

        _proto.RegisterInputEvents = function RegisterInputEvents() {
          var target = this.playArea || this.node;
          target.on(Node.EventType.TOUCH_START, this.OnScreenTouch, this);
          input.on(Input.EventType.KEY_DOWN, this.OnKeyDown, this);
        };
        _proto.UnregisterInputEvents = function UnregisterInputEvents() {
          var target = this.playArea || this.node;
          if (target) {
            target.off(Node.EventType.TOUCH_START, this.OnScreenTouch, this);
          }
          input.off(Input.EventType.KEY_DOWN, this.OnKeyDown, this);
        };
        _proto.OnScreenTouch = function OnScreenTouch(event) {
          this.ShootPin();
        };
        _proto.OnKeyDown = function OnKeyDown(event) {
          switch (event.keyCode) {
            case KeyCode.SPACE:
            case KeyCode.ARROW_DOWN:
            case KeyCode.ARROW_UP:
            case KeyCode.KEY_W:
            case KeyCode.KEY_S:
              this.ShootPin();
              break;
            case KeyCode.KEY_R:
              this.LoadStage(0);
              break;
          }
        }

        // ==================== Web Audio 程序化音效合成器 ====================
        ;

        _proto.InitAudioSynthesizer = function InitAudioSynthesizer() {
          try {
            var AudioContextClass = window.AudioContext || window.webkitAudioContext;
            if (AudioContextClass) {
              this.audioCtx = new AudioContextClass();
            }
          } catch (e) {
            console.warn("[Level_6] Web Audio 初始化跳过", e);
          }
        };
        _proto.ResumeAudioContext = function ResumeAudioContext() {
          if (this.audioCtx && this.audioCtx.state === 'suspended') {
            this.audioCtx.resume();
          }
        }

        /** 发射音效：轻快音调下掠 */;
        _proto.PlayLaunchSfx = function PlayLaunchSfx() {
          this.ResumeAudioContext();
          if (!this.audioCtx) return;
          try {
            var t = this.audioCtx.currentTime;
            var osc = this.audioCtx.createOscillator();
            var gain = this.audioCtx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(520, t);
            osc.frequency.exponentialRampToValueAtTime(260, t + 0.06);
            gain.gain.setValueAtTime(0.25, t);
            gain.gain.exponentialRampToValueAtTime(0.01, t + 0.06);
            osc.connect(gain);
            gain.connect(this.audioCtx.destination);
            osc.start(t);
            osc.stop(t + 0.07);
          } catch (e) {}
        }

        /** 钉入音效：清脆共鸣木击音 */;
        _proto.PlayHitSfx = function PlayHitSfx() {
          this.ResumeAudioContext();
          if (!this.audioCtx) return;
          try {
            var t = this.audioCtx.currentTime;
            var osc = this.audioCtx.createOscillator();
            var gain = this.audioCtx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(680, t);
            osc.frequency.exponentialRampToValueAtTime(140, t + 0.08);
            gain.gain.setValueAtTime(0.35, t);
            gain.gain.exponentialRampToValueAtTime(0.01, t + 0.08);
            osc.connect(gain);
            gain.connect(this.audioCtx.destination);
            osc.start(t);
            osc.stop(t + 0.09);
          } catch (e) {}
        }

        /** 碰撞碎裂音效：刺耳蜂鸣金属撞击 */;
        _proto.PlayClashSfx = function PlayClashSfx() {
          this.ResumeAudioContext();
          if (!this.audioCtx) return;
          try {
            var t = this.audioCtx.currentTime;
            var osc1 = this.audioCtx.createOscillator();
            var osc2 = this.audioCtx.createOscillator();
            var gain = this.audioCtx.createGain();
            osc1.type = 'sawtooth';
            osc1.frequency.setValueAtTime(280, t);
            osc1.frequency.linearRampToValueAtTime(90, t + 0.22);
            osc2.type = 'square';
            osc2.frequency.setValueAtTime(295, t); // 不协和音差产生撞击嗡鸣
            osc2.frequency.linearRampToValueAtTime(80, t + 0.22);
            gain.gain.setValueAtTime(0.4, t);
            gain.gain.exponentialRampToValueAtTime(0.01, t + 0.24);
            osc1.connect(gain);
            osc2.connect(gain);
            gain.connect(this.audioCtx.destination);
            osc1.start(t);
            osc2.start(t);
            osc1.stop(t + 0.25);
            osc2.stop(t + 0.25);
          } catch (e) {}
        }

        /** 通关胜利华彩和弦 */;
        _proto.PlayWinSfx = function PlayWinSfx() {
          var _this12 = this;
          this.ResumeAudioContext();
          if (!this.audioCtx) return;
          try {
            var notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
            notes.forEach(function (freq, idx) {
              var t = _this12.audioCtx.currentTime + idx * 0.08;
              var osc = _this12.audioCtx.createOscillator();
              var gain = _this12.audioCtx.createGain();
              osc.type = 'sine';
              osc.frequency.setValueAtTime(freq, t);
              gain.gain.setValueAtTime(0.28, t);
              gain.gain.exponentialRampToValueAtTime(0.01, t + 0.35);
              osc.connect(gain);
              gain.connect(_this12.audioCtx.destination);
              osc.start(t);
              osc.stop(t + 0.36);
            });
          } catch (e) {}
        }

        /** 异步加载美术贴图（轮盘与针头光球） */;
        _proto.LoadTextures = function LoadTextures() {
          var _this13 = this;
          var wheelUuid = '7750563d-4a20-4fef-968d-eeaab735d93b@f9941';
          var pinOrbUuid = '655f4dec-5cf8-4d46-914d-8d651c0d2082@f9941';
          if (!this.wheelSpriteFrame) {
            assetManager.loadAny(wheelUuid, function (err, asset) {
              if (!err && asset) {
                _this13.wheelSpriteFrame = asset;
                if (_this13.wheelSprite) {
                  _this13.wheelSprite.spriteFrame = asset;
                }
                _this13.DrawWheelVisuals();
              }
            });
          } else if (this.wheelSprite && !this.wheelSprite.spriteFrame) {
            this.wheelSprite.spriteFrame = this.wheelSpriteFrame;
          }
          if (!this.pinOrbSpriteFrame) {
            assetManager.loadAny(pinOrbUuid, function (err, asset) {
              if (!err && asset) {
                _this13.pinOrbSpriteFrame = asset;
                if (_this13.readyPinSprite) {
                  _this13.readyPinSprite.spriteFrame = asset;
                }
                _this13.UpdateReadyPinVisuals();
                _this13.UpdateQueueVisuals();
              }
            });
          } else if (this.readyPinSprite && !this.readyPinSprite.spriteFrame) {
            this.readyPinSprite.spriteFrame = this.pinOrbSpriteFrame;
          }
        }

        // ==================== 编辑器预览支持 ====================
        ;

        _proto.DrawEditorVisuals = function DrawEditorVisuals() {
          var _this14 = this;
          this.InitReferences();
          this.BuildSceneGraph();
          this.LoadTextures();
          this.DrawBackground();
          this.DrawWheelVisuals();
          if (this.wheelLabel) {
            this.wheelLabel.string = "6";
          }
          if (this.titleLabel) {
            this.titleLabel.string = "关卡 6 · 见缝插针";
          }
          if (this.stageBadgeLabel) {
            this.stageBadgeLabel.string = "将全部飞针精准刺入轮盘 · 避开碰撞";
          }
          if (this.remainingPinsLabel) {
            this.remainingPinsLabel.string = "🎯 点击屏幕或按空格键发射";
          }
          var cfg = this.lvData ? this.lvData.GetStage(0) : null;
          var initAngles = cfg && cfg.initialPinAngles ? cfg.initialPinAngles : [0, 90, 180, 270];

          // 编辑器中绘制示范初始针
          if (this.pinsContainer) {
            this.pinsContainer.removeAllChildren();
            initAngles.forEach(function (deg) {
              var p = _this14.CreatePinNode(deg, "", true);
              p.parent = _this14.pinsContainer;
            });
          }
          this.remainingPinsToShoot = cfg ? cfg.pinsToShoot : 8;
          this.totalPinsToShoot = this.remainingPinsToShoot;
          this.currentPinIndexToShoot = 1;
          this.UpdateReadyPinVisuals();
          this.UpdateQueueVisuals();
        };
        return Level_6;
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "wheelSpriteFrame", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "pinOrbSpriteFrame", [_dec6], {
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

System.register("chunks:///_virtual/Lv_Data_6.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "6e729GvR5RHeLuOUcvTUaUy", "Lv_Data_6", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /** 轮盘旋转动力学模式 */
      var WheelRotationMode = exports('WheelRotationMode', /*#__PURE__*/function (WheelRotationMode) {
        WheelRotationMode[WheelRotationMode["Constant"] = 0] = "Constant";
        WheelRotationMode[WheelRotationMode["PeriodicReverse"] = 1] = "PeriodicReverse";
        WheelRotationMode[WheelRotationMode["SineVariable"] = 2] = "SineVariable";
        WheelRotationMode[WheelRotationMode["Intermittent"] = 3] = "Intermittent";
        return WheelRotationMode;
      }({}));

      /** 见缝插针关卡配置数据结构 */

      var Lv_Data_6 = exports('Lv_Data_6', (_dec = ccclass('Lv_Data_6'), _dec2 = property({
        type: [Number],
        tooltip: '轮盘初始已插入的针的角度列表（角度制 0 ~ 360°）'
      }), _dec3 = property({
        tooltip: '本关玩家需要发射的针数'
      }), _dec4 = property({
        tooltip: '基础旋转角速度（度/秒，正数为顺时针，负数为逆时针）'
      }), _dec5 = property({
        tooltip: '旋转动力学模式: 0=恒速, 1=周期往复, 2=正弦脉冲, 3=间歇停顿'
      }), _dec6 = property({
        tooltip: '变向/停顿间隔周期（秒）'
      }), _dec7 = property({
        tooltip: '脉冲变速幅度（度/秒）'
      }), _dec8 = property({
        tooltip: '变速振荡频率'
      }), _dec9 = property({
        type: [Object],
        tooltip: '见缝插针关卡配置（单关）'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Lv_Data_6, _Component);
        function Lv_Data_6() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          /** 轮盘初始已插入的针的角度列表（角度制 0 ~ 360°） */
          _initializerDefineProperty(_this, "initialPinAngles", _descriptor, _assertThisInitialized(_this));
          /** 本关玩家需要发射的针数 */
          _initializerDefineProperty(_this, "pinsToShoot", _descriptor2, _assertThisInitialized(_this));
          /** 基础旋转角速度（度/秒，正数为顺时针，负数为逆时针） */
          _initializerDefineProperty(_this, "baseRotateSpeed", _descriptor3, _assertThisInitialized(_this));
          /** 旋转动力学模式: 0=恒速, 1=周期往复, 2=正弦脉冲, 3=间歇停顿 */
          _initializerDefineProperty(_this, "rotationMode", _descriptor4, _assertThisInitialized(_this));
          /** 变向/停顿间隔周期（秒） */
          _initializerDefineProperty(_this, "cycleInterval", _descriptor5, _assertThisInitialized(_this));
          /** 脉冲变速幅度（度/秒） */
          _initializerDefineProperty(_this, "speedVariation", _descriptor6, _assertThisInitialized(_this));
          /** 变速振荡频率 */
          _initializerDefineProperty(_this, "speedFrequency", _descriptor7, _assertThisInitialized(_this));
          /** 单一关卡配置（保留数组格式以兼容已序列化数据） */
          _initializerDefineProperty(_this, "stages", _descriptor8, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Lv_Data_6.prototype;
        /** 获取关卡配置 */
        _proto.GetStage = function GetStage(index) {
          var s0 = this.stages && this.stages.length > 0 ? this.stages[0] : null;
          return {
            stageIndex: 1,
            stageName: "见缝插针",
            initialPinAngles: this.initialPinAngles && this.initialPinAngles.length > 0 ? this.initialPinAngles : (s0 == null ? void 0 : s0.initialPinAngles) || [0, 90, 180, 270],
            pinsToShoot: this.pinsToShoot || (s0 == null ? void 0 : s0.pinsToShoot) || 8,
            baseRotateSpeed: this.baseRotateSpeed || (s0 == null ? void 0 : s0.baseRotateSpeed) || 65,
            rotationMode: this.rotationMode !== undefined ? this.rotationMode : (s0 == null ? void 0 : s0.rotationMode) !== undefined ? s0.rotationMode : WheelRotationMode.Constant,
            cycleInterval: this.cycleInterval || (s0 == null ? void 0 : s0.cycleInterval) || 2.5,
            speedVariation: this.speedVariation || (s0 == null ? void 0 : s0.speedVariation) || 40,
            speedFrequency: this.speedFrequency || (s0 == null ? void 0 : s0.speedFrequency) || 2.0
          };
        }

        /** 获取总阶段数：单关固定为 1 */;
        _proto.GetTotalStages = function GetTotalStages() {
          return 1;
        };
        return Lv_Data_6;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "initialPinAngles", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [0, 90, 180, 270];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pinsToShoot", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 8;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "baseRotateSpeed", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 65;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "rotationMode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return WheelRotationMode.Constant;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "cycleInterval", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2.5;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "speedVariation", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 40;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "speedFrequency", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2.0;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "stages", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [{
            stageIndex: 1,
            stageName: "见缝插针",
            initialPinAngles: [0, 90, 180, 270],
            pinsToShoot: 8,
            baseRotateSpeed: 65,
            rotationMode: WheelRotationMode.Constant
          }];
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/Level_6', 'chunks:///_virtual/Level_6'); 
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