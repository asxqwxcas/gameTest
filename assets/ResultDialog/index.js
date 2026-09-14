System.register("chunks:///_virtual/ResultDialog", ['./ResultDialog.ts'], function () {
  return {
    setters: [null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/ResultDialog.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UIMgr.ts', './UIPanelBase.ts', './ResultType.ts', './UIName.ts', './LevelMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, SpriteFrame, Layers, Tween, UITransform, Sprite, Graphics, Color, Label, Vec3, Vec2, Button, tween, assetManager, UIMgr, UIPanelBase, ResultType, UIName, LevelMgr;
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
      SpriteFrame = module.SpriteFrame;
      Layers = module.Layers;
      Tween = module.Tween;
      UITransform = module.UITransform;
      Sprite = module.Sprite;
      Graphics = module.Graphics;
      Color = module.Color;
      Label = module.Label;
      Vec3 = module.Vec3;
      Vec2 = module.Vec2;
      Button = module.Button;
      tween = module.tween;
      assetManager = module.assetManager;
    }, function (module) {
      UIMgr = module.UIMgr;
    }, function (module) {
      UIPanelBase = module.UIPanelBase;
    }, function (module) {
      ResultType = module.ResultType;
    }, function (module) {
      UIName = module.UIName;
    }, function (module) {
      LevelMgr = module.LevelMgr;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "7c2557SokhIUbYxSvvHy4Qo", "ResultDialog", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ResultDialog = exports('ResultDialog', (_dec = ccclass('ResultDialog'), _dec2 = property(Node), _dec3 = property({
        type: SpriteFrame,
        tooltip: '弹窗主体背景'
      }), _dec4 = property({
        type: SpriteFrame,
        tooltip: '下一关主按钮'
      }), _dec5 = property({
        type: SpriteFrame,
        tooltip: '重玩按钮'
      }), _dec6 = property({
        type: SpriteFrame,
        tooltip: '主页/选关按钮'
      }), _dec7 = property({
        type: SpriteFrame,
        tooltip: '点亮金星'
      }), _dec8 = property({
        type: SpriteFrame,
        tooltip: '未点亮灰星'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_UIPanelBase) {
        _inheritsLoose(ResultDialog, _UIPanelBase);
        function ResultDialog() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _UIPanelBase.call.apply(_UIPanelBase, [this].concat(args)) || this;
          /** 保留原始属性引用以兼容现有预制体 */
          _initializerDefineProperty(_this, "result", _descriptor, _assertThisInitialized(_this));
          // ==================== UI 材质资源 ====================
          _initializerDefineProperty(_this, "dialogBgFrame", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnNextFrame", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnRetryFrame", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnHomeFrame", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "starGoldFrame", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "starGrayFrame", _descriptor7, _assertThisInitialized(_this));
          // ==================== 运行时动态节点 ====================
          _this.cardNode = null;
          _this.starNodes = [];
          _this.primaryBtnNode = null;
          _this.btnNextNode = null;
          _this.btnRetryNode = null;
          _this.btnHomeNode = null;
          _this.audioCtx = null;
          return _this;
        }
        var _proto = ResultDialog.prototype;
        /** 创建带有正确 UI_2D Layer 的节点 */
        _proto.CreateUINode = function CreateUINode(name, parent) {
          var node = new Node(name);
          node.layer = parent ? parent.layer : Layers.Enum.UI_2D;
          if (parent) {
            node.parent = parent;
          }
          return node;
        }

        /** 安全设置 SpriteFrame，确保 uv 存在以防引擎内部 Simple.updateUVs 崩溃 */;
        _proto.SafeSetSpriteFrame = function SafeSetSpriteFrame(sp, frame) {
          if (!sp || !frame) return false;
          try {
            if (frame.uv && frame.uv.length > 0) {
              sp.spriteFrame = frame;
              return true;
            }
            // 若 uv 未完全初始化，但 texture 或 image 存在，尝试赋值
            if (frame.texture) {
              sp.spriteFrame = frame;
              return true;
            }
          } catch (e) {}
          return false;
        };
        _proto.onLoad = function onLoad() {
          _UIPanelBase.prototype.onLoad.call(this);
          this.LoadTextures();
        };
        _proto.onEnable = function onEnable() {
          this.Init();
        };
        _proto.onDisable = function onDisable() {
          if (this.cardNode) {
            Tween.stopAllByTarget(this.cardNode);
          }
          if (this.primaryBtnNode) {
            Tween.stopAllByTarget(this.primaryBtnNode);
          }
          this.starNodes.forEach(function (s) {
            return Tween.stopAllByTarget(s);
          });
        }

        /** 异步加载美术素材贴图（自带 UUID 自动保底） */;
        _proto.LoadTextures = function LoadTextures() {
          var _this2 = this;
          var assets = [{
            prop: 'dialogBgFrame',
            uuid: '5c60b7a8-c807-4d66-ae63-2dd5f6dd6dee@f9941'
          }, {
            prop: 'btnNextFrame',
            uuid: '1ee2d464-51da-4097-a5b3-526ce34e218d@f9941'
          }, {
            prop: 'btnRetryFrame',
            uuid: '8a5f0fc3-f55b-4cbe-b7b2-b3512eccae34@f9941'
          }, {
            prop: 'btnHomeFrame',
            uuid: 'c25947ca-d366-4885-85a5-f343de29cc3b@f9941'
          }, {
            prop: 'starGoldFrame',
            uuid: '10cffcbb-cf28-4556-8e48-0a4a560c4732@f9941'
          }, {
            prop: 'starGrayFrame',
            uuid: '6c62ebbb-d8d7-40f3-be13-bd411e829d8c@f9941'
          }];
          var _loop = function _loop() {
            var item = _assets[_i];
            if (!_this2[item.prop]) {
              assetManager.loadAny(item.uuid, function (err, sf) {
                if (!err && sf) {
                  _this2[item.prop] = sf;
                  if (_this2.node.active) {
                    _this2.RefreshSprites();
                  }
                }
              });
            }
          };
          for (var _i = 0, _assets = assets; _i < _assets.length; _i++) {
            _loop();
          }
        }

        /** 初始化与构建弹窗界面 */;
        _proto.Init = function Init() {
          // 隐藏预制体中原本单调的旧节点
          if (this.result) {
            this.result.active = false;
          }
          var panelRoot = this.node.getChildByName("panel_root") || this.node;
          var oldBack = panelRoot.getChildByName("btn_back");
          if (oldBack) {
            oldBack.active = false;
          }

          // 获取结算数据
          var levelResultData = LevelMgr.Instance ? LevelMgr.Instance.GetLevelData() : null;
          var isWin = levelResultData ? levelResultData.resultType === ResultType.Win : true;
          var levelData = levelResultData == null ? void 0 : levelResultData.levelData;
          var levelId = (levelData == null ? void 0 : levelData.id) || 1;
          var levelName = (levelData == null ? void 0 : levelData.name) || "\u5173\u5361 " + levelId;

          // 构建弹窗卡片
          this.BuildDialogCard(panelRoot, isWin, levelId, levelName);

          // 播放动效与音效
          this.PlayEntranceAnimation(isWin);
          this.PlayAudioFeedback(isWin);
        }

        /** 构建现代卡片 UI */;
        _proto.BuildDialogCard = function BuildDialogCard(parent, isWin, levelId, levelName) {
          var _this3 = this;
          // 1. 卡片根节点
          if (!this.cardNode || !this.cardNode.isValid) {
            this.cardNode = parent.getChildByName("CardContainer");
            if (!this.cardNode) {
              this.cardNode = this.CreateUINode("CardContainer", parent);
            }
          }
          this.cardNode.layer = parent.layer || Layers.Enum.UI_2D;
          this.cardNode.removeAllChildren();
          this.starNodes = [];
          this.btnNextNode = null;
          this.btnRetryNode = null;
          this.btnHomeNode = null;
          this.cardNode.setPosition(0, 10, 0);
          var cardUt = this.cardNode.getComponent(UITransform) || this.cardNode.addComponent(UITransform);
          cardUt.setContentSize(620, 800);

          // 卡片背景贴图或自绘
          var bgSp = this.cardNode.getComponent(Sprite) || this.cardNode.addComponent(Sprite);
          bgSp.sizeMode = Sprite.SizeMode.CUSTOM;
          bgSp.trim = false;
          var bgSet = this.SafeSetSpriteFrame(bgSp, this.dialogBgFrame);
          if (!bgSet) {
            // 保底暗板岩自绘背景
            var g = this.cardNode.getComponent(Graphics) || this.cardNode.addComponent(Graphics);
            g.clear();
            g.fillColor = new Color(20, 28, 44, 245);
            g.roundRect(-300, -390, 600, 780, 28);
            g.fill();
            g.strokeColor = isWin ? new Color(245, 158, 11, 200) : new Color(239, 68, 68, 200);
            g.lineWidth = 3;
            g.stroke();
          }

          // 2. 右上角关闭按钮 (✕)
          var closeBtnNode = this.CreateUINode("BtnClose", this.cardNode);
          closeBtnNode.setPosition(250, 345, 0);
          var closeUt = closeBtnNode.addComponent(UITransform);
          closeUt.setContentSize(56, 56);
          var closeLbl = closeBtnNode.addComponent(Label);
          closeLbl.string = "✕";
          closeLbl.fontSize = 28;
          closeLbl.isBold = true;
          closeLbl.color = new Color(148, 163, 184, 255);
          this.AddButtonComponent(closeBtnNode, function () {
            return _this3.OnClickReturnkBtn();
          });

          // 3. 主标题
          var titleNode = this.CreateUINode("TitleLabel", this.cardNode);
          titleNode.setPosition(0, 275, 0);
          var titleLbl = titleNode.addComponent(Label);
          titleLbl.string = isWin ? "🏆 挑战成功！" : "💔 挑战失败";
          titleLbl.fontSize = 46;
          titleLbl.lineHeight = 52;
          titleLbl.isBold = true;
          titleLbl.color = isWin ? new Color(254, 240, 138, 255) : new Color(248, 113, 113, 255);
          titleLbl.enableOutline = true;
          titleLbl.outlineColor = isWin ? new Color(120, 53, 15, 230) : new Color(69, 10, 10, 230);
          titleLbl.outlineWidth = 3;

          // 4. 关卡信息药丸胶囊
          var tagNode = this.CreateUINode("TagNode", this.cardNode);
          tagNode.setPosition(0, 212, 0);
          var tagUt = tagNode.addComponent(UITransform);
          tagUt.setContentSize(320, 42);
          var tagG = tagNode.addComponent(Graphics);
          tagG.fillColor = new Color(30, 41, 59, 200);
          tagG.roundRect(-160, -21, 320, 42, 21);
          tagG.fill();
          tagG.strokeColor = new Color(56, 189, 248, 140);
          tagG.lineWidth = 1.5;
          tagG.roundRect(-160, -21, 320, 42, 21);
          tagG.stroke();
          var tagTextNode = this.CreateUINode("TagText", tagNode);
          tagTextNode.setPosition(0, 0, 0);
          var tagLbl = tagTextNode.addComponent(Label);
          tagLbl.string = "\u7B2C " + levelId + " \u5173 \xB7 " + levelName;
          tagLbl.fontSize = 20;
          tagLbl.isBold = true;
          tagLbl.color = new Color(56, 189, 248, 255);

          // 5. 星级评分区域（3 颗星星）
          var starsRoot = this.CreateUINode("StarsRoot", this.cardNode);
          starsRoot.setPosition(0, 115, 0);
          var starConfigs = [{
            x: -105,
            y: 0,
            size: 76
          }, {
            x: 0,
            y: 16,
            size: 94
          },
          // 中间核心大星
          {
            x: 105,
            y: 0,
            size: 76
          }];
          starConfigs.forEach(function (cfg, idx) {
            var sNode = _this3.CreateUINode("Star_" + idx, starsRoot);
            sNode.setPosition(cfg.x, cfg.y, 0);
            var ut = sNode.addComponent(UITransform);
            ut.setContentSize(cfg.size, cfg.size);
            var sp = sNode.addComponent(Sprite);
            sp.sizeMode = Sprite.SizeMode.CUSTOM;
            sp.trim = false;
            var targetFrame = isWin ? _this3.starGoldFrame : _this3.starGrayFrame;
            var starSet = _this3.SafeSetSpriteFrame(sp, targetFrame);
            if (!starSet) {
              // 自绘星星保底
              var _g = sNode.addComponent(Graphics);
              _g.fillColor = isWin ? new Color(251, 191, 36, 255) : new Color(71, 85, 105, 200);
              _g.circle(0, 0, cfg.size * 0.4);
              _g.fill();
            }
            _this3.starNodes.push(sNode);
          });

          // 6. 状态评价副标题
          var descNode = this.CreateUINode("DescLabel", this.cardNode);
          descNode.setPosition(0, 10, 0);
          var descLbl = descNode.addComponent(Label);
          descLbl.string = isWin ? "太棒了！反应敏捷，操作无可挑剔！" : "离成功只差一点点，调整节奏再来一次！";
          descLbl.fontSize = 24;
          descLbl.lineHeight = 32;
          descLbl.color = new Color(226, 232, 240, 255);

          // 7. 装饰信息小卡片
          var tipBoxNode = this.CreateUINode("TipBox", this.cardNode);
          tipBoxNode.setPosition(0, -65, 0);
          var tipUt = tipBoxNode.addComponent(UITransform);
          tipUt.setContentSize(500, 56);
          var tipG = tipBoxNode.addComponent(Graphics);
          tipG.fillColor = new Color(15, 23, 42, 160);
          tipG.roundRect(-250, -28, 500, 56, 14);
          tipG.fill();
          tipG.strokeColor = new Color(51, 65, 85, 180);
          tipG.lineWidth = 1.2;
          tipG.roundRect(-250, -28, 500, 56, 14);
          tipG.stroke();
          var tipTextNode = this.CreateUINode("TipText", tipBoxNode);
          var tipLbl = tipTextNode.addComponent(Label);
          tipLbl.string = isWin ? "🌟 获得三星通关评价 · 解锁全新记录" : "💡 提示：沉着观察节奏规律，找准时机出击";
          tipLbl.fontSize = 19;
          tipLbl.color = new Color(148, 163, 184, 255);

          // 8. 底部操作按钮区域
          var btnsRoot = this.CreateUINode("ButtonsRoot", this.cardNode);
          if (isWin) {
            // 胜利状态：主按钮【下一关】+ 次级【重玩】与【关卡列表】
            var nextBtn = this.CreateCustomButton("BtnNext", "⏩ 下一关", new Vec3(0, -160, 0), new Vec2(350, 84), this.btnNextFrame, new Color(16, 185, 129, 255), 30, function () {
              return _this3.OnClickNextBtn();
            });
            nextBtn.parent = btnsRoot;
            this.primaryBtnNode = nextBtn;
            this.btnNextNode = nextBtn;
            var retryBtn = this.CreateCustomButton("BtnRetry", "🔄 重玩", new Vec3(-125, -260, 0), new Vec2(220, 66), this.btnRetryFrame, new Color(249, 115, 22, 255), 22, function () {
              return _this3.OnClickRestartBtn();
            });
            retryBtn.parent = btnsRoot;
            this.btnRetryNode = retryBtn;
            var homeBtn = this.CreateCustomButton("BtnHome", "🏠 关卡列表", new Vec3(125, -260, 0), new Vec2(220, 66), this.btnHomeFrame, new Color(51, 65, 85, 255), 22, function () {
              return _this3.OnClickReturnkBtn();
            });
            homeBtn.parent = btnsRoot;
            this.btnHomeNode = homeBtn;
          } else {
            // 失败状态：主按钮【重新挑战】+ 次级【返回选关】
            var _retryBtn = this.CreateCustomButton("BtnRetryPrimary", "🔄 重新挑战", new Vec3(0, -170, 0), new Vec2(350, 84), this.btnRetryFrame, new Color(249, 115, 22, 255), 30, function () {
              return _this3.OnClickRestartBtn();
            });
            _retryBtn.parent = btnsRoot;
            this.primaryBtnNode = _retryBtn;
            this.btnRetryNode = _retryBtn;
            var _homeBtn = this.CreateCustomButton("BtnHomeSecondary", "🏠 返回选关", new Vec3(0, -265, 0), new Vec2(260, 66), this.btnHomeFrame, new Color(51, 65, 85, 255), 22, function () {
              return _this3.OnClickReturnkBtn();
            });
            _homeBtn.parent = btnsRoot;
            this.btnHomeNode = _homeBtn;
          }
        }

        /** 创建美观交互按钮 */;
        _proto.CreateCustomButton = function CreateCustomButton(name, labelStr, pos, size, spriteFrame, fallbackColor, fontSize, callback) {
          var btnNode = this.CreateUINode(name);
          btnNode.setPosition(pos);
          var ut = btnNode.addComponent(UITransform);
          ut.setContentSize(size.x, size.y);
          var sp = btnNode.addComponent(Sprite);
          sp.sizeMode = Sprite.SizeMode.CUSTOM;
          sp.trim = false;
          var hasSet = this.SafeSetSpriteFrame(sp, spriteFrame);
          if (!hasSet) {
            // 自绘胶囊保底按钮
            var g = btnNode.addComponent(Graphics);
            g.fillColor = fallbackColor;
            g.roundRect(-size.x / 2, -size.y / 2, size.x, size.y, size.y / 2);
            g.fill();
            g.strokeColor = new Color(255, 255, 255, 160);
            g.lineWidth = 2;
            g.roundRect(-size.x / 2, -size.y / 2, size.x, size.y, size.y / 2);
            g.stroke();
          }
          var lblNode = this.CreateUINode("Label", btnNode);
          lblNode.setPosition(0, 0, 0);
          var lbl = lblNode.addComponent(Label);
          lbl.string = labelStr;
          lbl.fontSize = fontSize;
          lbl.isBold = true;
          lbl.color = Color.WHITE;
          lbl.enableOutline = true;
          lbl.outlineColor = new Color(0, 0, 0, 160);
          lbl.outlineWidth = 2;
          this.AddButtonComponent(btnNode, callback);
          return btnNode;
        }

        /** 绑定按钮缩放点击事件 */;
        _proto.AddButtonComponent = function AddButtonComponent(node, callback) {
          var btn = node.getComponent(Button) || node.addComponent(Button);
          btn.transition = Button.Transition.SCALE;
          btn.zoomScale = 1.08;
          btn.duration = 0.08;
          node.on(Node.EventType.TOUCH_END, function () {
            callback();
          }, this);
        }

        /** 弹窗入场动效与星星动效 */;
        _proto.PlayEntranceAnimation = function PlayEntranceAnimation(isWin) {
          if (!this.cardNode) return;

          // 卡片弹跳放大入场
          this.cardNode.setScale(new Vec3(0.5, 0.5, 1));
          tween(this.cardNode).to(0.26, {
            scale: new Vec3(1.05, 1.05, 1)
          }, {
            easing: 'backOut'
          }).to(0.12, {
            scale: new Vec3(1.0, 1.0, 1)
          }, {
            easing: 'sineOut'
          }).start();

          // 星星依次弹性弹入
          this.starNodes.forEach(function (sNode, idx) {
            sNode.setScale(new Vec3(0, 0, 1));
            var delay = 0.22 + idx * 0.14;
            tween(sNode).delay(delay).to(0.24, {
              scale: new Vec3(1.35, 1.35, 1)
            }, {
              easing: 'backOut'
            }).to(0.12, {
              scale: new Vec3(1.0, 1.0, 1)
            }, {
              easing: 'sineOut'
            }).start();
          });

          // 主按钮微呼吸动效
          if (this.primaryBtnNode) {
            this.primaryBtnNode.setScale(new Vec3(1, 1, 1));
            tween(this.primaryBtnNode).delay(0.5).repeatForever(tween().to(0.7, {
              scale: new Vec3(1.04, 1.04, 1)
            }, {
              easing: 'sineInOut'
            }).to(0.7, {
              scale: new Vec3(1.0, 1.0, 1)
            }, {
              easing: 'sineInOut'
            })).start();
          }
        }

        /** 贴图动态就绪后刷新已挂载的 Sprite */;
        _proto.RefreshSprites = function RefreshSprites() {
          var _LevelMgr$Instance$Ge,
            _this4 = this;
          if (!this.cardNode || !this.cardNode.isValid) return;
          var bgSp = this.cardNode.getComponent(Sprite);
          if (bgSp && this.dialogBgFrame) {
            this.SafeSetSpriteFrame(bgSp, this.dialogBgFrame);
          }
          var isWin = LevelMgr.Instance ? ((_LevelMgr$Instance$Ge = LevelMgr.Instance.GetLevelData()) == null ? void 0 : _LevelMgr$Instance$Ge.resultType) === ResultType.Win : true;
          var targetStar = isWin ? this.starGoldFrame : this.starGrayFrame;
          this.starNodes.forEach(function (s) {
            var sp = s.getComponent(Sprite);
            if (sp && targetStar) {
              _this4.SafeSetSpriteFrame(sp, targetStar);
            }
          });
          if (this.btnNextNode && this.btnNextFrame) {
            var sp = this.btnNextNode.getComponent(Sprite);
            if (sp) this.SafeSetSpriteFrame(sp, this.btnNextFrame);
          }
          if (this.btnRetryNode && this.btnRetryFrame) {
            var _sp = this.btnRetryNode.getComponent(Sprite);
            if (_sp) this.SafeSetSpriteFrame(_sp, this.btnRetryFrame);
          }
          if (this.btnHomeNode && this.btnHomeFrame) {
            var _sp2 = this.btnHomeNode.getComponent(Sprite);
            if (_sp2) this.SafeSetSpriteFrame(_sp2, this.btnHomeFrame);
          }
        }

        // ==================== 音效合成反馈 ====================
        ;

        _proto.PlayAudioFeedback = function PlayAudioFeedback(isWin) {
          var _this5 = this;
          try {
            var AudioContextClass = window.AudioContext || window.webkitAudioContext;
            if (!AudioContextClass) return;
            if (!this.audioCtx) {
              this.audioCtx = new AudioContextClass();
            }
            if (this.audioCtx.state === 'suspended') {
              this.audioCtx.resume();
            }
            var t = this.audioCtx.currentTime;
            if (isWin) {
              // 胜利四和弦琶音 (C5, E5, G5, C6)
              var freqs = [523.25, 659.25, 783.99, 1046.5];
              freqs.forEach(function (f, i) {
                var osc = _this5.audioCtx.createOscillator();
                var gain = _this5.audioCtx.createGain();
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(f, t + i * 0.1);
                gain.gain.setValueAtTime(0.22, t + i * 0.1);
                gain.gain.exponentialRampToValueAtTime(0.01, t + i * 0.1 + 0.35);
                osc.connect(gain);
                gain.connect(_this5.audioCtx.destination);
                osc.start(t + i * 0.1);
                osc.stop(t + i * 0.1 + 0.36);
              });
            } else {
              // 失败和缓落音
              var _freqs = [392.0, 311.13];
              _freqs.forEach(function (f, i) {
                var osc = _this5.audioCtx.createOscillator();
                var gain = _this5.audioCtx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(f, t + i * 0.15);
                gain.gain.setValueAtTime(0.2, t + i * 0.15);
                gain.gain.exponentialRampToValueAtTime(0.01, t + i * 0.15 + 0.38);
                osc.connect(gain);
                gain.connect(_this5.audioCtx.destination);
                osc.start(t + i * 0.15);
                osc.stop(t + i * 0.15 + 0.4);
              });
            }
          } catch (e) {}
        }

        // ==================== 按钮事件交互 ====================
        /** 点击下一关 */;
        _proto.OnClickNextBtn = function OnClickNextBtn() {
          UIMgr.Instance.HideDialog(UIName.ResultDialog);
          LevelMgr.Instance.NextLevel();
        }

        /** 点击重新挑战 */;
        _proto.OnClickRestartBtn = function OnClickRestartBtn() {
          UIMgr.Instance.HideDialog(UIName.ResultDialog);
          LevelMgr.Instance.RestartLevel();
        }

        /** 点击返回选关 / 关闭按钮 */;
        _proto.OnClickReturnkBtn = function OnClickReturnkBtn() {
          UIMgr.Instance.HideDialog(UIName.ResultDialog);
          LevelMgr.Instance.ExitLevel();
        };
        return ResultDialog;
      }(UIPanelBase), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "result", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "dialogBgFrame", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btnNextFrame", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btnRetryFrame", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btnHomeFrame", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "starGoldFrame", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "starGrayFrame", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/ResultDialog', 'chunks:///_virtual/ResultDialog'); 
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