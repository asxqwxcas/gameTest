System.register("chunks:///_virtual/AnimUtils.ts", ['cc'], function (exports) {
  var cclegacy, Tween, tween, Vec3;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Tween = module.Tween;
      tween = module.tween;
      Vec3 = module.Vec3;
    }],
    execute: function () {
      cclegacy._RF.push({}, "431f0AzM8ZHdqEaF8gH6ngT", "AnimUtils", undefined);
      var AnimUtils = exports('AnimUtils', /*#__PURE__*/function () {
        function AnimUtils() {}
        /** 
         * 指引点击动画
         * @param node 节点
         * @param worldPos 世界坐标
         * @param timer 时间
         * */
        AnimUtils.ClickAnim = function ClickAnim(node, worldPos, timer) {
          if (timer === void 0) {
            timer = 1;
          }
          Tween.stopAllByTarget(node);
          node.setWorldPosition(worldPos);
          tween(node).sequence(tween().to(timer / 3, {
            scale: 1.2
          }), tween().to(timer / 3, {
            scale: 0.8
          }), tween().to(timer / 3, {
            scale: 1
          })).repeatForever().start();
        }

        /** 
         * 点击拖拽动画
         * @param node 节点
         * @param startPos 开始坐标  为世界坐标
         * @param endPos 结束坐标  为世界坐标
         * @param timer 时间 移动时间
         * */;
        AnimUtils.ClickDragAnim = function ClickDragAnim(node, startPos, endPos, timer) {
          if (timer === void 0) {
            timer = 1;
          }
          Tween.stopAllByTarget(node);
          node.setWorldPosition(startPos);
          node.setScale(Vec3.ZERO);
          tween(node).sequence(tween().to(0.2, {
            scale: 1.2
          }), tween().to(0.1, {
            scale: 1
          }), tween().to(timer / 2, {
            worldPosition: endPos
          }), tween().to(0.1, {
            scale: 1
          }), tween().to(timer / 2, {
            worldPosition: startPos
          })).repeatForever().start();
        };
        return AnimUtils;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AudioMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, AudioSource, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      AudioSource = module.AudioSource;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class2, _class3, _descriptor, _descriptor2, _descriptor3, _class4;
      cclegacy._RF.push({}, "60a51HA2aRI+qSYhrWkpSp9", "AudioMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /** 播放音效的节点 */
      var SoundItem = function SoundItem(id, clipName, node) {
        this.id = void 0;
        this.clipName = void 0;
        this.node = void 0;
        this.id = id;
        this.clipName = clipName;
        this.node = node;
      };
      var AudioMgr = exports('AudioMgr', (_dec = ccclass('AudioMgr'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class2 = (_class3 = (_class4 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AudioMgr, _Component);
        function AudioMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //#endregion
          //#region  参数
          _initializerDefineProperty(_this, "music", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "effect_root", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ui_root", _descriptor3, _assertThisInitialized(_this));
          // 自增 ID 计数器
          _this.audioIdCounter = 0;
          // 缓存音效实例映射：Map<audioId, SoundItem>
          _this.effectSoundMap = new Map();
          _this.uiSoundMap = new Map();
          return _this;
        }
        var _proto = AudioMgr.prototype;
        //#region 生命周期
        _proto.onLoad = function onLoad() {
          AudioMgr.instance = this;
        };
        _proto.onDestroy = function onDestroy() {
          AudioMgr.instance = null;
        };
        //#endregion
        //#region 播放
        /** 播放背景音乐 只存在一个 */
        _proto.PlayMusic = function PlayMusic(audioClip, loop) {
          if (loop === void 0) {
            loop = true;
          }
          if (!audioClip) {
            console.warn("背景音乐音频为空");
            return;
          }
          var audioSource = this.music.getComponent(AudioSource);
          if (!audioSource) audioSource = this.music.addComponent(AudioSource);
          audioSource.stop();
          audioSource.loop = loop;
          audioSource.clip = audioClip;
          audioSource.play();
        }

        /** 
         * 播放音效 可存在多个
         * @param audioClip 音频资源
         * @param isLoop 是否循环播放
         * @returns 返回唯一的 audioId（句柄），用于后续停止/暂停
         */;
        _proto.PlayEffectSound = function PlayEffectSound(audioClip, cb, isLoop) {
          var _this2 = this;
          if (cb === void 0) {
            cb = null;
          }
          if (isLoop === void 0) {
            isLoop = false;
          }
          if (!audioClip) {
            console.warn("音效音频为空");
            return -1;
          }
          var audioId = ++this.audioIdCounter;
          var soundNode = this.CreateSoundNode(audioClip, this.effect_root, isLoop);
          var soundItem = new SoundItem(audioId, audioClip.name, soundNode);
          this.effectSoundMap.set(audioId, soundItem);
          // 非循环音效播放完自动移除
          if (!isLoop) {
            soundNode.once(AudioSource.EventType.ENDED, function () {
              cb && cb();
              _this2.StopEffectSound(audioId);
            });
          }
          return audioId;
        }

        /** 
         * 播放UI音效 
         * @param audioClip 音频资源
         * @param isLoop 是否循环播放
         * @returns 返回唯一的 audioId（句柄）
         */;
        _proto.PlayUISound = function PlayUISound(audioClip, isLoop) {
          var _this3 = this;
          if (isLoop === void 0) {
            isLoop = false;
          }
          if (!audioClip) {
            console.warn("UI音效音频为空");
            return -1;
          }
          var audioId = ++this.audioIdCounter;
          var soundNode = this.CreateSoundNode(audioClip, this.ui_root, isLoop);
          var soundItem = new SoundItem(audioId, audioClip.name, soundNode);
          this.uiSoundMap.set(audioId, soundItem);

          // 非循环音效播放完自动移除
          if (!isLoop) {
            soundNode.once(AudioSource.EventType.ENDED, function () {
              _this3.StopUISound(audioId);
            });
          }
          return audioId;
        }
        //#endregion

        //#region 背景音乐控制

        /** 停止背景音乐 */;
        _proto.StopMusic = function StopMusic() {
          var audioSource = this.music.getComponent(AudioSource);
          if (audioSource) {
            audioSource.stop();
            audioSource.clip = null;
          }
        }
        /** 暂停背景音乐 */;
        _proto.PauseMusic = function PauseMusic() {
          this.music.active = false;
        }
        /** 恢复背景音乐 */;
        _proto.ResumeMusic = function ResumeMusic() {
          this.music.active = true;
        }

        //#endregion

        //#region Effect音效控制

        /** 停止所有音效 */;
        _proto.StopAllEffectSound = function StopAllEffectSound() {
          this.effectSoundMap.forEach(function (item) {
            return item.node.destroy();
          });
          this.effectSoundMap.clear();
        }

        /** 
         * 停止指定音效
         * @param target 音效唯一 audioId (number) 或 音效名 (string)
         */;
        _proto.StopEffectSound = function StopEffectSound(target) {
          var _this4 = this;
          if (typeof target === 'number') {
            var item = this.effectSoundMap.get(target);
            if (item) {
              this.effectSoundMap["delete"](target);
              item.node.destroy();
            }
          } else {
            // 按名称停止所有同名音效
            var idsToDelete = [];
            this.effectSoundMap.forEach(function (item, id) {
              if (item.clipName === target) {
                item.node.destroy();
                idsToDelete.push(id);
              }
            });
            idsToDelete.forEach(function (id) {
              return _this4.effectSoundMap["delete"](id);
            });
          }
        }

        /** 
         * 暂停指定音效 
         * @param target 音效唯一 audioId (number) 或 音效名 (string)
         */;
        _proto.PauseEffectSound = function PauseEffectSound(target) {
          if (typeof target === 'number') {
            var item = this.effectSoundMap.get(target);
            if (item) {
              item.node.active = false;
            }
          } else {
            this.effectSoundMap.forEach(function (item) {
              if (item.clipName === target) {
                item.node.active = false;
              }
            });
          }
        }

        /** 暂停所有音效 */;
        _proto.PauseAllEffectSound = function PauseAllEffectSound() {
          this.effect_root.active = false;
        }

        /** 
         * 恢复指定音效 
         * @param target 音效唯一 audioId (number) 或 音效名 (string)
         */;
        _proto.ResumeEffectSound = function ResumeEffectSound(target) {
          if (typeof target === 'number') {
            var item = this.effectSoundMap.get(target);
            if (item) {
              item.node.active = true;
            }
          } else {
            this.effectSoundMap.forEach(function (item) {
              if (item.clipName === target) {
                item.node.active = true;
              }
            });
          }
        }

        /** 恢复所有音效 */;
        _proto.ResumeAllEffectSound = function ResumeAllEffectSound() {
          this.effect_root.active = true;
        }
        //#endregion

        //#region UI音效控制

        /** 停止所有UI音效 */;
        _proto.StopAllUISound = function StopAllUISound() {
          this.uiSoundMap.forEach(function (item) {
            return item.node.destroy();
          });
          this.uiSoundMap.clear();
        }

        /** 
         * 停止指定UI音效 
         * @param target UI音效唯一 audioId (number) 或 音效名 (string)
         */;
        _proto.StopUISound = function StopUISound(target) {
          var _this5 = this;
          if (typeof target === 'number') {
            var item = this.uiSoundMap.get(target);
            if (item) {
              this.uiSoundMap["delete"](target);
              item.node.destroy();
            }
          } else {
            var idsToDelete = [];
            this.uiSoundMap.forEach(function (item, id) {
              if (item.clipName === target) {
                item.node.destroy();
                idsToDelete.push(id);
              }
            });
            idsToDelete.forEach(function (id) {
              return _this5.uiSoundMap["delete"](id);
            });
          }
        }

        /** 
         * 暂停指定UI音效 
         * @param target UI音效唯一 audioId (number) 或 音效名 (string)
         */;
        _proto.PauseUISound = function PauseUISound(target) {
          if (typeof target === 'number') {
            var item = this.uiSoundMap.get(target);
            if (item) {
              item.node.active = false;
            }
          } else {
            this.uiSoundMap.forEach(function (item) {
              if (item.clipName === target) {
                item.node.active = false;
              }
            });
          }
        }

        /** 暂停所有UI音效 */;
        _proto.PauseAllUISound = function PauseAllUISound() {
          this.ui_root.active = false;
        }

        /** 
         * 恢复指定UI音效 
         * @param target UI音效唯一 audioId (number) 或 音效名 (string)
         */;
        _proto.ResumeUISound = function ResumeUISound(target) {
          if (typeof target === 'number') {
            var item = this.uiSoundMap.get(target);
            if (item) {
              item.node.active = true;
            }
          } else {
            this.uiSoundMap.forEach(function (item) {
              if (item.clipName === target) {
                item.node.active = true;
              }
            });
          }
        }

        /** 恢复所有UI音效 */;
        _proto.ResumeAllUISound = function ResumeAllUISound() {
          this.ui_root.active = true;
        }
        //#endregion

        /**
         * 创建音效节点与组件
         * @param audioClip 音效资源
         * @param parent 父节点
         * @param isLoop 是否循环
         * @returns 包含 Node 和 AudioSource 的对象
         */;
        _proto.CreateSoundNode = function CreateSoundNode(audioClip, parent, isLoop) {
          if (isLoop === void 0) {
            isLoop = false;
          }
          var node = new Node(audioClip.name);
          node.parent = parent;
          var audioSource = node.addComponent(AudioSource);
          audioSource.clip = audioClip;
          audioSource.loop = isLoop;
          audioSource.play();
          return node;
        };
        _createClass(AudioMgr, null, [{
          key: "Instance",
          get: function get() {
            if (!this.instance) {
              console.warn("AudioMgr为空");
              return null;
            }
            return this.instance;
          }
        }]);
        return AudioMgr;
      }(Component), _class4.instance = void 0, _class4), (_descriptor = _applyDecoratedDescriptor(_class3.prototype, "music", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, "effect_root", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class3.prototype, "ui_root", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class3)) || _class2));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AudioName.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c832echTt5FoJ9PARBMYljG", "AudioName", undefined);
      var AudioName = exports('AudioName', /*#__PURE__*/function (AudioName) {
        AudioName["Bgm"] = "Bgm";
        AudioName["Click"] = "Click";
        return AudioName;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AudioPlayTool.ts", ['cc', './AudioMgr.ts', './GlobalResMgr.ts'], function (exports) {
  var cclegacy, AudioMgr, GlobalResMgr;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      AudioMgr = module.AudioMgr;
    }, function (module) {
      GlobalResMgr = module.GlobalResMgr;
    }],
    execute: function () {
      cclegacy._RF.push({}, "027faDihTJJv7CwFFZPZWHo", "AudioPlayTool", undefined);
      var AudioPlayTool = exports('AudioPlayTool', /*#__PURE__*/function () {
        function AudioPlayTool() {}
        AudioPlayTool.PlayMusic = function PlayMusic(res, isLoop) {
          GlobalResMgr.GetRes(res).then(function (audio) {
            AudioMgr.Instance.PlayMusic(audio, isLoop);
          });
        }

        /** 播放音效 */;
        AudioPlayTool.PlayEffectSound = function PlayEffectSound(res, isLoop, callBack) {
          return GlobalResMgr.GetRes(res).then(function (audio) {
            return AudioMgr.Instance.PlayEffectSound(audio, callBack, isLoop);
          });
        }
        /** 播放UI音效 */;
        AudioPlayTool.PlayUIEffectSound = function PlayUIEffectSound(res, isLoop, callBack) {
          return GlobalResMgr.GetRes(res).then(function (audio) {
            return AudioMgr.Instance.PlayEffectSound(audio, callBack, isLoop);
          });
        };
        return AudioPlayTool;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Base.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LevelBase.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, LevelBase;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      LevelBase = module.LevelBase;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "d0ea1mrzhtHZ7JcswCLGdqb", "Base", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Base = exports('Base', (_dec = ccclass('Base'), _dec(_class = /*#__PURE__*/function (_LevelBase) {
        _inheritsLoose(Base, _LevelBase);
        function Base() {
          return _LevelBase.apply(this, arguments) || this;
        }
        return Base;
      }(LevelBase)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DataKey.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "03792EEhlFKd6CgcR2HqopE", "DataKey", undefined);
      var DataKey = exports('DataKey', /*#__PURE__*/function (DataKey) {
        DataKey["PlayerData"] = "PlayerData";
        return DataKey;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DataSave.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a938dz+lqlDcJB4ImARoxP0", "DataSave", undefined);
      var DataSave = exports('DataSave', /*#__PURE__*/function () {
        function DataSave() {}
        DataSave.SetItem = function SetItem(key, value) {
          if (!this.GameData) {
            this.GameData = {};
          }
          this.GameData[key] = value;
          this.cache.set(key, value); // 必须同步更新缓存
          localStorage.setItem(key, JSON.stringify(value));
          console.log("设置GameData", key, value);
        };
        DataSave.GetItem = function GetItem(key) {
          if (this.cache.has(key)) {
            return this.cache.get(key);
          }
          var data = localStorage.getItem(key);
          if (data) {
            var value = JSON.parse(data);
            this.GameData[key] = value;
            this.cache.set(key, value);
            console.log("获取GameData", key, value);
            return value;
          } else {
            return null;
          }
        };
        DataSave.ClearKey = function ClearKey(key) {
          if (this.GameData[key] != null) {
            this.GameData[key] = null;
          }
          localStorage.removeItem(key);
          this.cache["delete"](key);
          console.log("清除GameData", key, this.GameData[key]);
        };
        return DataSave;
      }());
      /** 内存缓存数据 避免频繁操作本地存储*/
      DataSave.cache = new Map();
      /** 实际的游戏数据 */
      DataSave.GameData = {};
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EventName.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f8d9dQ/87JMmpf4e5f1b04/", "EventName", undefined);
      var EventName = exports('EventName', /*#__PURE__*/function (EventName) {
        EventName["Entry"] = "Entry";
        EventName["Exit"] = "Exit";
        EventName["ShowLoadingNode"] = "ShowLoadingNode";
        EventName["UpdateLoadProgress"] = "UpdateLoadProgress";
        return EventName;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EventSystem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "794256ypSJB1ZQo93u/OeAO", "EventSystem", undefined);
      /**
       * 事件优先级枚举
       */
      var EventPriority = exports('EventPriority', /*#__PURE__*/function (EventPriority) {
        EventPriority[EventPriority["HIGHEST"] = 0] = "HIGHEST";
        EventPriority[EventPriority["HIGH"] = 1] = "HIGH";
        EventPriority[EventPriority["NORMAL"] = 2] = "NORMAL";
        EventPriority[EventPriority["LOW"] = 3] = "LOW";
        EventPriority[EventPriority["LOWEST"] = 4] = "LOWEST";
        return EventPriority;
      }({}));
      var EventSystem = exports('EventSystem', /*#__PURE__*/function () {
        function EventSystem() {}
        EventSystem.Init = function Init() {
          this.listenerMap = new Map();
        }

        /** 监听指定事件和回调函数，可指定优先级 */;
        EventSystem.on = function on(eventName, callback, priority) {
          if (priority === void 0) {
            priority = EventPriority.LOWEST;
          }
          var listener = {
            callback: callback,
            priority: priority
          };
          if (!this.listenerMap.has(eventName)) {
            this.listenerMap.set(eventName, []);
          }
          var listeners = this.listenerMap.get(eventName);
          listeners.push(listener);
          listeners.sort(function (a, b) {
            return a.priority - b.priority;
          });
        }
        /** 移除指定事件和回调的监听器 */;
        EventSystem.off = function off(eventName, callback) {
          if (this.listenerMap.has(eventName)) {
            var listeners = this.listenerMap.get(eventName);
            var filteredListeners = listeners.filter(function (listener) {
              return listener.callback !== callback;
            });
            this.listenerMap.set(eventName, filteredListeners);
          }
        }

        /** 触发指定事件，并传递参数 */;
        EventSystem.emit = function emit(eventName) {
          if (this.listenerMap.has(eventName)) {
            var listeners = this.listenerMap.get(eventName);
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }
            for (var _iterator = _createForOfIteratorHelperLoose(listeners), _step; !(_step = _iterator()).done;) {
              var listener = _step.value;
              listener.callback.apply(listener, args);
            }
          }
        }

        /** 清除指定事件的所有监听器 */;
        EventSystem.clearEventListeners = function clearEventListeners(eventName) {
          if (this.listenerMap.has(eventName)) {
            this.listenerMap["delete"](eventName);
          }
        }
        /** 清除所有事件的所有监听器 */;
        EventSystem.clearAllEventListeners = function clearAllEventListeners() {
          this.listenerMap.clear();
        };
        return EventSystem;
      }());
      EventSystem.listenerMap = new Map();
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FeedbackMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Prefab, Node, instantiate, UIOpacity, Label, tween, Vec3, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Node = module.Node;
      instantiate = module.instantiate;
      UIOpacity = module.UIOpacity;
      Label = module.Label;
      tween = module.tween;
      Vec3 = module.Vec3;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3;
      cclegacy._RF.push({}, "9c17fst/oZCpZkjBvuQY/Ez", "FeedbackMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FeedbackMgr = exports('FeedbackMgr', (_dec = ccclass('FeedbackMgr'), _dec2 = property(Prefab), _dec3 = property(Node), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FeedbackMgr, _Component);
        function FeedbackMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "textPrefab", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "feedbackNode", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = FeedbackMgr.prototype;
        _proto.onLoad = function onLoad() {
          FeedbackMgr._instance = this;
        };
        _proto.onDestroy = function onDestroy() {
          FeedbackMgr._instance = null;
        };
        /** 创建文本提示 */
        _proto.CreateTextTip = function CreateTextTip(text, duration) {
          if (duration === void 0) {
            duration = 2;
          }
          var textNode = instantiate(this.textPrefab);
          var op = textNode.addComponent(UIOpacity);
          textNode.parent = this.feedbackNode;
          textNode.getComponentInChildren(Label).string = text;
          tween(op).to(duration, {
            opacity: 0
          }).start();
          tween(textNode).to(duration, {
            position: new Vec3(0, 100, 0)
          }).call(function () {
            textNode.destroy();
          }).start();
        };
        _createClass(FeedbackMgr, null, [{
          key: "Instance",
          get: function get() {
            if (this._instance == null) {
              console.error("FeedbackMgr is not initialized!");
              return null;
            }
            return this._instance;
          }
        }]);
        return FeedbackMgr;
      }(Component), _class3._instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "textPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "feedbackNode", [_dec3], {
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

System.register("chunks:///_virtual/GameConfig.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5e984kKeFFHzYvYwSexqdvA", "GameConfig", undefined);
      var GameConfig = exports('GameConfig', function GameConfig() {});
      /** 是否是调试模式  */
      GameConfig.IsDebug = true;
      /** bundle数量上限 */
      GameConfig.BundleMaxCount = 5;
      /** 玩家最大体力 */
      GameConfig.PlayerMaxEnergy = 5;
      /** 玩家初始体力 */
      GameConfig.PlayerInitEnergy = 5;
      /** 游戏是否暂停 */
      GameConfig.isPaused = false;
      /** 默认游戏时间缩放（1为正常速度） */
      GameConfig.timeScale = 1;
      /** 默认物理引擎时间缩放 */
      GameConfig.physicStep = 1 / 60;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameData.ts", ['cc', './GameConfig.ts'], function (exports) {
  var cclegacy, GameConfig;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GameConfig = module.GameConfig;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3cbf40OYHZBQYo5tj8BIug1", "GameData", undefined);

      /** 玩家数据 */
      var PlayerData = exports('PlayerData', function PlayerData() {
        /** 体力 */
        this.power = GameConfig.PlayerInitEnergy;
        /** 音效开关 */
        this.sound = true;
        /** ui音效 */
        this.uiSound = true;
        /** 背景音效开关 */
        this.bgm = true;
        /** 游戏是否暂停 */
        this.isPaused = false;
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameDataMgr.ts", ['cc', './DataSave.ts', './AudioMgr.ts', './GameData.ts', './DataKey.ts'], function (exports) {
  var cclegacy, DataSave, AudioMgr, PlayerData, DataKey;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      DataSave = module.DataSave;
    }, function (module) {
      AudioMgr = module.AudioMgr;
    }, function (module) {
      PlayerData = module.PlayerData;
    }, function (module) {
      DataKey = module.DataKey;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4adbfQfJaBPoYtOXE5rVzeH", "GameDataMgr", undefined);
      var GameDataMgr = exports('GameDataMgr', /*#__PURE__*/function () {
        function GameDataMgr() {}
        GameDataMgr.Init = function Init() {
          this.UpdateData(DataKey.PlayerData, this.playerData);
        }

        /** 更新数据 */;
        GameDataMgr.UpdateData = function UpdateData(dataKey, data) {
          var tempData = DataSave.GetItem(dataKey);
          if (tempData == null) {
            return;
          }
          for (var key in tempData) {
            if (data[key] == undefined) {
              continue;
            }
            //原有数据不是数组，新数据是数组
            // if (!Array.isArray(tempData[key]) && Array.isArray(data[key])) {

            // }
            // else if (Array.isArray(tempData[key]) && !Array.isArray(data[key])) {

            // }
            // else {
            // }
            data[key] = tempData[key];
          }
        };
        GameDataMgr.GetPlayerData = function GetPlayerData() {
          return this.playerData;
        }

        /** 修改体力*/;
        GameDataMgr.ModifyPower = function ModifyPower(value) {
          this.playerData.power = value;
          if (this.playerData.power < 0) {
            this.playerData.power = 0;
          }
          this.SavePlayerData();
        }

        /** 修改音效开关 */;
        GameDataMgr.SetEffectSound = function SetEffectSound(open) {
          this.playerData.sound = open;
          if (open) {
            AudioMgr.Instance.ResumeAllEffectSound();
          } else {
            AudioMgr.Instance.PauseAllEffectSound();
          }
          this.SavePlayerData();
        }
        /** 修改UI音效开关 */;
        GameDataMgr.SetUIEffectSound = function SetUIEffectSound(open) {
          this.playerData.uiSound = open;
          if (open) {
            AudioMgr.Instance.ResumeAllUISound();
          } else {
            AudioMgr.Instance.PauseAllUISound();
          }
          this.SavePlayerData();
        }
        /** 修改背景音乐开关 */;
        GameDataMgr.SetBGM = function SetBGM(open) {
          this.playerData.bgm = open;
          if (open) {
            AudioMgr.Instance.ResumeMusic();
          } else {
            AudioMgr.Instance.PauseMusic();
          }
          this.SavePlayerData();
        };
        GameDataMgr.SavePlayerData = function SavePlayerData() {
          DataSave.SetItem(DataKey.PlayerData, this.playerData);
          console.log("保存玩家数据成功");
        };
        return GameDataMgr;
      }());
      GameDataMgr.playerData = new PlayerData();
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameEntry.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventSystem.ts', './GameDataMgr.ts', './UIMgr.ts', './UIName.ts', './TimerMgr.ts', './EventName.ts', './AudioMgr.ts', './AudioName.ts', './ResDataConfig.ts', './GlobalResMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, Sprite, macro, Component, EventSystem, GameDataMgr, UIMgr, UIName, TimerMgr, EventName, AudioMgr, AudioName, ResDataConfig, GlobalResMgr;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Sprite = module.Sprite;
      macro = module.macro;
      Component = module.Component;
    }, function (module) {
      EventSystem = module.EventSystem;
    }, function (module) {
      GameDataMgr = module.GameDataMgr;
    }, function (module) {
      UIMgr = module.UIMgr;
    }, function (module) {
      UIName = module.UIName;
    }, function (module) {
      TimerMgr = module.TimerMgr;
    }, function (module) {
      EventName = module.EventName;
    }, function (module) {
      AudioMgr = module.AudioMgr;
    }, function (module) {
      AudioName = module.AudioName;
    }, function (module) {
      ResDataConfig = module.ResDataConfig;
    }, function (module) {
      GlobalResMgr = module.GlobalResMgr;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "884d6IA6DtMMaibSVIUy95C", "GameEntry", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GameEntry = exports('GameEntry', (_dec = ccclass('GameEntry'), _dec2 = property(Node), _dec3 = property(Sprite), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameEntry, _Component);
        function GameEntry() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "loaddingBGNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "loadProgress", _descriptor2, _assertThisInitialized(_this));
          /** 是否显示加载节点 */
          _this.ShowLoadingNode = function (isShow) {
            _this.loaddingBGNode.active = isShow;
            _this.loadProgress.fillRange = 0;
          };
          _this.UpdateLoadProgress = function (progress) {
            _this.loadProgress.fillRange = progress;
          };
          return _this;
        }
        var _proto = GameEntry.prototype;
        _proto.onLoad = function onLoad() {
          /** 禁用多指触摸 */
          macro.ENABLE_MULTI_TOUCH = false;
          TimerMgr.Init();
          EventSystem.Init();
          GameDataMgr.Init();
        };
        _proto.start = function start() {
          this.RegisterEvent();
          this.LoadInitRes();
        };
        _proto.onDestroy = function onDestroy() {
          this.UnRegisterEvent();
        }

        /** 加载初始化资源 */;
        _proto.LoadInitRes = /*#__PURE__*/
        function () {
          var _LoadInitRes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this2 = this;
            var resData;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  console.log("初始化资源加载开始");
                  console.time("LoadInitRes");
                  EventSystem.emit(EventName.ShowLoadingNode, true);
                  _context.next = 5;
                  return GlobalResMgr.LoadInitRes(function (progress) {
                    _this2.loadProgress.fillRange = progress;
                  });
                case 5:
                  EventSystem.emit(EventName.ShowLoadingNode, false);
                  console.log("初始化资源加载完成");
                  console.timeEnd("LoadInitRes");
                  UIMgr.Instance.ShowPanel(UIName.MainPage);
                  resData = ResDataConfig.GetResData(AudioName.Bgm);
                  GlobalResMgr.GetRes(resData).then(function (res) {
                    // console.log("播放背景音乐:", res)
                    AudioMgr.Instance.PlayMusic(res, true);
                  });
                  this.loaddingBGNode.active = false;
                case 12:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function LoadInitRes() {
            return _LoadInitRes.apply(this, arguments);
          }
          return LoadInitRes;
        }();
        _proto.RegisterEvent = function RegisterEvent() {
          EventSystem.on(EventName.ShowLoadingNode, this.ShowLoadingNode);
          EventSystem.on(EventName.UpdateLoadProgress, this.UpdateLoadProgress);
        };
        _proto.UnRegisterEvent = function UnRegisterEvent() {
          EventSystem.off(EventName.ShowLoadingNode, this.ShowLoadingNode);
          EventSystem.off(EventName.UpdateLoadProgress, this.UpdateLoadProgress);
        };
        return GameEntry;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "loaddingBGNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "loadProgress", [_dec3], {
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

System.register("chunks:///_virtual/GeneralTool.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b123cnjhh5Iva4OV5Le9Rbt", "GeneralTool", undefined);
      var GeneralTool = exports('GeneralTool', /*#__PURE__*/function () {
        function GeneralTool() {}
        /** 隐藏节点下的所有子节点 */
        GeneralTool.HideAllChildren = function HideAllChildren(node) {
          if (!node) {
            return;
          }
          node.children.forEach(function (child) {
            child.active = false;
          });
        }

        /** 只显示指定子节点 */;
        GeneralTool.ShowOnlyChild = function ShowOnlyChild(node, showChildNameOrIndex) {
          if (!node) {
            return;
          }
          var valueIsNumber = typeof showChildNameOrIndex === "number";
          node.children.forEach(function (child) {
            if (valueIsNumber) {
              child.active = child.getSiblingIndex() === showChildNameOrIndex;
            } else {
              child.active = child.name === showChildNameOrIndex;
            }
          });
        };
        return GeneralTool;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GlobalResMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ResMgr.ts', './ResDataConfig.ts'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, _decorator, ResMgr, ResDataConfig;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      ResMgr = module.ResMgr;
    }, function (module) {
      ResDataConfig = module.ResDataConfig;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "238e3+D5HtMZbAaLGxcH7UL", "GlobalResMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GlobalResMgr = exports('GlobalResMgr', (_dec = ccclass('GlobalResMgr'), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function GlobalResMgr() {}
        GlobalResMgr.LoadInitRes = /*#__PURE__*/function () {
          var _LoadInitRes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(onProgress) {
            var _this = this;
            var initList, total, itemProgress, report;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  initList = [].concat(ResDataConfig.audioResData, ResDataConfig.initUIResData);
                  total = initList.length; // 记录每个资源的独立进度，聚合时按"各资源进度求和 / 资源总数"计算，避免并发时互相覆盖
                  itemProgress = new Array(total).fill(0);
                  report = function report() {
                    var sum = 0;
                    for (var _iterator = _createForOfIteratorHelperLoose(itemProgress), _step; !(_step = _iterator()).done;) {
                      var p = _step.value;
                      sum += p;
                    }
                    onProgress == null || onProgress(sum / total);
                  };
                  _context2.next = 6;
                  return Promise.all(initList.map( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resData, index) {
                    var asset;
                    return _regeneratorRuntime().wrap(function _callee$(_context) {
                      while (1) switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return ResMgr.LoadOneRes(resData, function (p) {
                            itemProgress[index] = p;
                            report();
                          });
                        case 2:
                          asset = _context.sent;
                          itemProgress[index] = 1;
                          report();
                          if (asset) {
                            _this.SetRes(resData, asset);
                          }
                        case 6:
                        case "end":
                          return _context.stop();
                      }
                    }, _callee);
                  }))));
                case 6:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          function LoadInitRes(_x) {
            return _LoadInitRes.apply(this, arguments);
          }
          return LoadInitRes;
        }();
        GlobalResMgr.SetRes = function SetRes(resData, res) {
          if (!resData || !resData.resKey) {
            return;
          }
          if (this.resCache.has(resData.resKey)) {
            console.warn("资源已存在");
            return;
          }
          this.resCache.set(resData.resKey, res);
        };
        GlobalResMgr.GetRes = /*#__PURE__*/function () {
          var _GetRes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resData) {
            var res;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  if (!(!resData || !resData.resKey)) {
                    _context3.next = 3;
                    break;
                  }
                  console.error("[GlobalResMgr] GetRes 参数错误: resData 或 resKey 为空", resData);
                  return _context3.abrupt("return", null);
                case 3:
                  if (this.resCache.has(resData.resKey)) {
                    _context3.next = 10;
                    break;
                  }
                  console.warn("资源不存在", resData.resKey);
                  _context3.next = 7;
                  return ResMgr.LoadOneRes(resData);
                case 7:
                  res = _context3.sent;
                  this.SetRes(resData, res);
                  return _context3.abrupt("return", res);
                case 10:
                  if (!(this.resCache.get(resData.resKey) == null)) {
                    _context3.next = 14;
                    break;
                  }
                  this.resCache["delete"](resData.resKey);
                  console.warn("资源引用缺失", resData.resKey);
                  return _context3.abrupt("return", null);
                case 14:
                  return _context3.abrupt("return", this.resCache.get(resData.resKey));
                case 15:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function GetRes(_x4) {
            return _GetRes.apply(this, arguments);
          }
          return GetRes;
        }();
        return GlobalResMgr;
      }(), _class2.resCache = new Map(), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IPlatform.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d7e0eo9R0ZAe6x6Ewy/vZiq", "IPlatform", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LevelBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LevelResBase.ts', './UpdateMgr.ts', './LevelMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Asset, Component, LevelResBase, UpdateMgr, LevelMgr;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Asset = module.Asset;
      Component = module.Component;
    }, function (module) {
      LevelResBase = module.LevelResBase;
    }, function (module) {
      UpdateMgr = module.UpdateMgr;
    }, function (module) {
      LevelMgr = module.LevelMgr;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "efc86m7B1dPALwxUjSAZ52L", "LevelBase", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LevelBase = exports('LevelBase', (_dec = ccclass('LevelBase'), _dec2 = property(LevelResBase), _dec3 = property({
        type: Asset,
        tooltip: "初始资源",
        visible: function visible() {
          return this.levelRes != null;
        }
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LevelBase, _Component);
        function LevelBase() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "levelRes", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "levelResArray", _descriptor2, _assertThisInitialized(_this));
          //初始资源   
          _this.updateId = -1;
          return _this;
        }
        var _proto = LevelBase.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          this.updateId = UpdateMgr.AddUpdate(this.M_Update, this);
          if (this.levelRes) {
            //将初始资源添加到levelRes中
            this.levelResArray.forEach(function (asset) {
              _this2.levelRes.SetRes(asset.name, asset);
            });
          }
        };
        _proto.onDisable = function onDisable() {
          UpdateMgr.RemoveUpdate(this.updateId);
        };
        _proto.M_Update = function M_Update(dt) {}

        /**
         * 
         * @param index 1是通过  2是失败
         */;
        _proto.SetResultType = function SetResultType(index, delay) {
          var _LevelMgr$Instance;
          if (index === void 0) {
            index = 1;
          }
          (_LevelMgr$Instance = LevelMgr.Instance) == null || _LevelMgr$Instance.SetResultType(index, delay);
        };
        return LevelBase;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "levelRes", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "levelResArray", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LevelConfig.ts", ['cc', './LevelDataConfig.ts'], function (exports) {
  var cclegacy, LevelDataConfig;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      LevelDataConfig = module.LevelDataConfig;
    }],
    execute: function () {
      cclegacy._RF.push({}, "bf8c84yZJFNgaUsv7Bbfc4X", "LevelConfig", undefined);
      var LevelConfig = exports('LevelConfig', /*#__PURE__*/function () {
        function LevelConfig() {}
        /** 获取关卡数据 */
        LevelConfig.GetLevelData = function GetLevelData(id) {
          var levelData = LevelDataConfig.levelData.get(id);
          if (levelData == null) {
            console.error("关卡数据不存在");
            return null;
          }
          return levelData;
        };
        return LevelConfig;
      }());
      LevelConfig.levelArrayID = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LevelDataConfig.ts", ['cc'], function (exports) {
  var cclegacy, Prefab;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Prefab = module.Prefab;
    }],
    execute: function () {
      var _class2;
      cclegacy._RF.push({}, "873b878zQlMuaKBNNgu0b8z", "LevelDataConfig", undefined);
      var LevelData = exports('LevelData', function LevelData() {
        this.id = void 0;
        this.name = void 0;
        this.resData = void 0;
      });
      var LevelDataConfig = exports('LevelDataConfig', function LevelDataConfig() {});
      _class2 = LevelDataConfig;
      LevelDataConfig.LevelPrefabPath = "Init/Prefab";
      LevelDataConfig.levelData = new Map([[1, {
        id: 1,
        name: "一笔画",
        resData: {
          resKey: "Level_1",
          bundle: "Level_1",
          type: Prefab,
          path: _class2.LevelPrefabPath
        }
      }], [2, {
        id: 2,
        name: "地图涂色",
        resData: {
          resKey: "Level_2",
          bundle: "Level_2",
          type: Prefab,
          path: _class2.LevelPrefabPath
        }
      }], [3, {
        id: 3,
        name: "快速点点点",
        resData: {
          resKey: "Level_3",
          bundle: "Level_3",
          type: Prefab,
          path: _class2.LevelPrefabPath
        }
      }], [4, {
        id: 4,
        name: "佛系消消消",
        resData: {
          resKey: "Level_4",
          bundle: "Level_4",
          type: Prefab,
          path: _class2.LevelPrefabPath
        }
      }], [5, {
        id: 5,
        name: "拼图",
        resData: {
          resKey: "Level_5",
          bundle: "Level_5",
          type: Prefab,
          path: _class2.LevelPrefabPath
        }
      }], [6, {
        id: 6,
        name: "见缝插针",
        resData: {
          resKey: "Level_6",
          bundle: "Level_6",
          type: Prefab,
          path: _class2.LevelPrefabPath
        }
      }], [7, {
        id: 7,
        name: "测试数据",
        resData: {
          resKey: "Level_7",
          bundle: "Level_7",
          type: Prefab,
          path: _class2.LevelPrefabPath
        }
      }], [8, {
        id: 8,
        name: "测试数据",
        resData: {
          resKey: "Level_8",
          bundle: "Level_8",
          type: Prefab,
          path: _class2.LevelPrefabPath
        }
      }], [9, {
        id: 9,
        name: "测试数据",
        resData: {
          resKey: "Level_9",
          bundle: "Level_9",
          type: Prefab,
          path: _class2.LevelPrefabPath
        }
      }], [10, {
        id: 10,
        name: "测试数据",
        resData: {
          resKey: "Level_10",
          bundle: "Level_10",
          type: Prefab,
          path: _class2.LevelPrefabPath
        }
      }], [11, {
        id: 11,
        name: "测试数据",
        resData: {
          resKey: "Level_11",
          bundle: "Level_11",
          type: Prefab,
          path: _class2.LevelPrefabPath
        }
      }], [12, {
        id: 12,
        name: "测试数据",
        resData: {
          resKey: "Level_12",
          bundle: "Level_12",
          type: Prefab,
          path: _class2.LevelPrefabPath
        }
      }], [13, {
        id: 13,
        name: "测试数据",
        resData: {
          resKey: "Level_13",
          bundle: "Level_13",
          type: Prefab,
          path: _class2.LevelPrefabPath
        }
      }], [14, {
        id: 14,
        name: "测试数据",
        resData: {
          resKey: "Level_14",
          bundle: "Level_14",
          type: Prefab,
          path: _class2.LevelPrefabPath
        }
      }], [15, {
        id: 15,
        name: "测试数据",
        resData: {
          resKey: "Level_15",
          bundle: "Level_15",
          type: Prefab,
          path: _class2.LevelPrefabPath
        }
      }], [16, {
        id: 16,
        name: "测试数据",
        resData: {
          resKey: "Level_16",
          bundle: "Level_16",
          type: Prefab,
          path: _class2.LevelPrefabPath
        }
      }]]);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LevelMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ResMgr.ts', './LevelDataConfig.ts', './UIMgr.ts', './UIName.ts', './EventSystem.ts', './EventName.ts', './TimerMgr.ts', './AudioMgr.ts', './ResultType.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, Component, instantiate, ResMgr, LevelDataConfig, UIMgr, UIName, EventSystem, EventName, TimerMgr, AudioMgr, ResultType;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
      instantiate = module.instantiate;
    }, function (module) {
      ResMgr = module.ResMgr;
    }, function (module) {
      LevelDataConfig = module.LevelDataConfig;
    }, function (module) {
      UIMgr = module.UIMgr;
    }, function (module) {
      UIName = module.UIName;
    }, function (module) {
      EventSystem = module.EventSystem;
    }, function (module) {
      EventName = module.EventName;
    }, function (module) {
      TimerMgr = module.TimerMgr;
    }, function (module) {
      AudioMgr = module.AudioMgr;
    }, function (module) {
      ResultType = module.ResultType;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _class3;
      cclegacy._RF.push({}, "912dfgz3blMYJAriSSGHZpT", "LevelMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LevelMgr = exports('LevelMgr', (_dec = ccclass('LevelMgr'), _dec2 = property(Node), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LevelMgr, _Component);
        function LevelMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "game_root", _descriptor, _assertThisInitialized(_this));
          //关卡根节点
          _this.curLevelData = null;
          _this.curResultType = ResultType.UnEnd;
          return _this;
        }
        var _proto = LevelMgr.prototype;
        _proto.onLoad = function onLoad() {
          LevelMgr.instance = this;
        };
        _proto.onDestroy = function onDestroy() {
          LevelMgr.instance = null;
        };
        /** 进入关卡 */
        _proto.EnterLevel = function EnterLevel(levelData) {
          if (!levelData) {
            console.log("关卡数据为空");
            return;
          }
          // 加载结算弹窗
          UIMgr.Instance.LoadUIDialogRes(UIName.ResultDialog);
          this.curLevelData = levelData;
          this.LoadLevelData(levelData);
          this.curResultType = ResultType.UnEnd;
        }

        /** 加载界面延迟显示时间（秒）：加载耗时小于该值则不显示加载界面，避免一闪而过 */;
        _proto.LoadLevelData = /*#__PURE__*/function () {
          var _LoadLevelData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(levelData) {
            var loadingShown, timerId, levelPrefa, levelNode;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  // 延迟显示加载界面：资源已缓存、加载极快时不弹出，避免加载界面一闪而过
                  loadingShown = false;
                  timerId = TimerMgr.AddTimer(function () {
                    loadingShown = true;
                    EventSystem.emit(EventName.ShowLoadingNode, true);
                  }, LevelMgr.LOADING_DELAY, this);
                  _context.next = 4;
                  return UIMgr.Instance.ShowPanel(UIName.GamePage);
                case 4:
                  _context.next = 6;
                  return ResMgr.LoadOneRes(levelData.resData, function (progress) {
                    EventSystem.emit(EventName.UpdateLoadProgress, progress);
                  });
                case 6:
                  levelPrefa = _context.sent;
                  // 加载结束（无论成功失败）：取消未触发的延迟显示定时器
                  TimerMgr.RemoveTimer(timerId);
                  if (levelPrefa) {
                    levelNode = instantiate(levelPrefa);
                    levelNode.parent = this.game_root;
                  } else {
                    console.warn("关卡资源加载失败", levelData.resData);
                  }

                  // 仅在加载界面已显示时才需要关闭
                  if (loadingShown) {
                    EventSystem.emit(EventName.ShowLoadingNode, false);
                  }
                case 10:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function LoadLevelData(_x) {
            return _LoadLevelData.apply(this, arguments);
          }
          return LoadLevelData;
        }() /** 离开关卡 */;
        _proto.ExitLevel = function ExitLevel() {
          this.curLevelData = null;
          this.game_root.removeAllChildren();
          AudioMgr.Instance.StopMusic();
          UIMgr.Instance.HidePanel(UIName.GamePage);
          UIMgr.Instance.ShowPanel(UIName.SelectLevelPage);
        }

        /** 重玩当前关卡 */;
        _proto.RestartLevel = function RestartLevel() {
          if (!this.curLevelData) return;
          var data = this.curLevelData;
          this.game_root.removeAllChildren();
          this.curResultType = ResultType.UnEnd;
          this.LoadLevelData(data);
        }

        /** 进入下一关 */;
        _proto.NextLevel = function NextLevel() {
          if (!this.curLevelData) return;
          var nextId = this.curLevelData.id + 1;
          var nextData = LevelDataConfig.levelData.get(nextId);
          if (nextData) {
            this.game_root.removeAllChildren();
            this.curLevelData = nextData;
            this.curResultType = ResultType.UnEnd;
            this.LoadLevelData(nextData);
          } else {
            console.log("已经是最后一关了");
            this.ExitLevel();
          }
        }

        /** 
         * 设置当前关卡结果
         * @param resultType 结果类型
         * @param delay 延迟出现结束弹窗时间（秒）
         */;
        _proto.SetResultType = function SetResultType(resultType, delay) {
          if (delay === void 0) {
            delay = 0.5;
          }
          this.curResultType = resultType;
          // 延迟显示结束弹窗
          TimerMgr.AddTimer(function () {
            UIMgr.Instance.ShowDialog(UIName.ResultDialog);
          }, delay, this);
        }

        /** 获取当前关卡数据 */;
        _proto.GetLevelData = function GetLevelData() {
          return {
            levelData: this.curLevelData,
            resultType: this.curResultType
          };
        };
        _createClass(LevelMgr, null, [{
          key: "Instance",
          get: function get() {
            if (!this.instance) {
              console.log("LevelMgr is null");
              return null;
            }
            return this.instance;
          }
        }]);
        return LevelMgr;
      }(Component), _class3.instance = void 0, _class3.LOADING_DELAY = 0.2, _class3), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "game_root", [_dec2], {
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

System.register("chunks:///_virtual/LevelResBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ResMgr.ts', './GameConfig.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Prefab, Component, ResMgr, GameConfig;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Component = module.Component;
    }, function (module) {
      ResMgr = module.ResMgr;
    }, function (module) {
      GameConfig = module.GameConfig;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "0c86anyWdFLW4LkusV/kDhg", "LevelResBase", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LevelResBase = exports('LevelResBase', (_dec = ccclass('LevelResBase'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LevelResBase, _Component);
        function LevelResBase() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.levelBundle = "";
          /** 音效 */
          _this.audioPath = "Base/Sound";
          /** 预制体 */
          _this.prefabPath = "Base/Prefab/";
          /** 精灵图 */
          _this.sprPath = "Base/Texture";
          /** 精灵图集 */
          _this.sprAtlasPath = "Base/Atlas/";
          /** 骨骼动画 */
          _this.spinePath = "Base/Spine/";
          _this.levelResConfig = [{
            resKey: "",
            bundle: _this.levelBundle,
            type: Prefab,
            path: _this.prefabPath
          }];
          /** 当前关卡所有已加载的资源（统一缓存） */
          _this.resCache = new Map();
          return _this;
        }
        var _proto = LevelResBase.prototype;
        _proto.onLoad = function onLoad() {
          this.LoadAsset();
        };
        _proto.onDestroy = function onDestroy() {
          if (LevelResBase.levelBundleArray.length >= GameConfig.BundleMaxCount) {
            var resData = LevelResBase.levelBundleArray.shift();
            if (resData) {
              ResMgr.ReleaseBundle(resData);
              console.log("释放关卡Bundle", resData);
            }
          }
        };
        _proto.LoadAsset = /*#__PURE__*/function () {
          var _LoadAsset = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this2 = this;
            var tasks;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(!this.levelResConfig || this.levelResConfig.length === 0)) {
                    _context2.next = 3;
                    break;
                  }
                  console.error("关卡资源配置为空");
                  return _context2.abrupt("return");
                case 3:
                  tasks = this.levelResConfig.map( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resData) {
                    var asset;
                    return _regeneratorRuntime().wrap(function _callee$(_context) {
                      while (1) switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return ResMgr.LoadOneRes(resData);
                        case 2:
                          asset = _context.sent;
                          if (asset) {
                            console.log("加载资源成功", resData.resKey);
                            _this2.SetRes(resData.resKey, asset);
                          }
                        case 4:
                        case "end":
                          return _context.stop();
                      }
                    }, _callee);
                  })));
                  _context2.next = 6;
                  return Promise.all(tasks);
                case 6:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function LoadAsset() {
            return _LoadAsset.apply(this, arguments);
          }
          return LoadAsset;
        }() /** 获取资源 */;
        _proto.GetRes = function GetRes(resKey) {
          var _ref2;
          return (_ref2 = this.resCache.get(resKey)) != null ? _ref2 : null;
        }

        /** 初始的音频也需要加入资源缓存 将加载好的资源存入缓存 */;
        _proto.SetRes = function SetRes(resKey, asset) {
          this.resCache.set(resKey, asset);
        }

        /** 清理当前关卡所有资源 */;
        _proto.ClearAll = function ClearAll() {
          this.resCache.clear();
        };
        return LevelResBase;
      }(Component), _class2.levelBundleArray = [], _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./Base.ts', './ResBase.ts', './DataSave.ts', './EventSystem.ts', './ResData.ts', './AudioMgr.ts', './FeedbackMgr.ts', './GlobalResMgr.ts', './PoolMgr.ts', './ResMgr.ts', './TimerMgr.ts', './UIMgr.ts', './UpdateMgr.ts', './IPlatform.ts', './PlatformBridge.ts', './PlatformType.ts', './AnimUtils.ts', './AudioPlayTool.ts', './GeneralTool.ts', './TimeTool.ts', './UIAniType.ts', './UIPanelBase.ts', './GameConfig.ts', './LevelDataConfig.ts', './ResDataConfig.ts', './GameData.ts', './LevelConfig.ts', './AudioName.ts', './DataKey.ts', './EventName.ts', './ResultType.ts', './UIName.ts', './GameEntry.ts', './LevelBase.ts', './LevelResBase.ts', './GameDataMgr.ts', './LevelMgr.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/PlatformBridge.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6d274ZfW11F1rTZgt9hVkpR", "PlatformBridge", undefined);
      /** 游戏和平台的中间层 */
      var PlatformBridge = exports('PlatformBridge', /*#__PURE__*/function () {
        function PlatformBridge() {}
        var _proto = PlatformBridge.prototype;
        /**局内激励广告 */
        _proto.ShowGameplayRewardedAd = function ShowGameplayRewardedAd(onSuccess) {
          this.ADReward(onSuccess);
        }
        /** 局外激励广告 */;
        _proto.ShowLobbyRewardedAd = function ShowLobbyRewardedAd(onSuccess) {
          this.ADReward(onSuccess);
        }

        /** 广告激励接口 */;
        _proto.ADReward = function ADReward(onSuccess) {
          onSuccess && onSuccess();
        };
        _createClass(PlatformBridge, null, [{
          key: "Instance",
          get: function get() {
            if (this.instance == null) {
              this.instance = new PlatformBridge();
            }
            return this.instance;
          }
        }]);
        return PlatformBridge;
      }());
      PlatformBridge.instance = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PlatformType.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "94ba039PeFNxaZ5gdUXwX0L", "PlatformType", undefined);
      var PlatformType = exports('PlatformType', /*#__PURE__*/function (PlatformType) {
        PlatformType["WX"] = "wx";
        PlatformType["TT"] = "tt";
        PlatformType["KS"] = "ks";
        return PlatformType;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PoolMgr.ts", ['cc'], function (exports) {
  var cclegacy, Pool, instantiate;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Pool = module.Pool;
      instantiate = module.instantiate;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1d735AIpWBBWb5B/fxUSZxI", "PoolMgr", undefined);

      /** 节点对象池管理器 */
      var PoolMgr = exports('PoolMgr', /*#__PURE__*/function () {
        function PoolMgr() {}
        /** 从对象池中获取节点（池不存在自动创建） */
        PoolMgr.getNode = function getNode(prefab) {
          var pool = this.poolMap.get(prefab.name);
          if (!pool) {
            pool = new Pool(function () {
              return instantiate(prefab);
            }, this.maxPoolSize);
            this.poolMap.set(prefab.name, pool);
          }
          return pool.alloc();
        }

        /** 归还节点到对象池 */;
        PoolMgr.returnNode = function returnNode(prefab, node) {
          var pool = this.poolMap.get(prefab.name);
          if (pool) {
            pool.free(node);
          } else {
            node.destroy();
          }
        }

        /** 销毁指定对象池 */;
        PoolMgr.clearPool = function clearPool(prefab) {
          var pool = this.poolMap.get(prefab.name);
          if (pool) {
            pool.destroy();
          }
          this.poolMap["delete"](prefab.name);
        }

        /** 销毁所有对象池 */;
        PoolMgr.clearAll = function clearAll() {
          this.poolMap.forEach(function (pool) {
            pool.destroy();
          });
          this.poolMap.clear();
        };
        return PoolMgr;
      }());
      PoolMgr.poolMap = new Map();
      PoolMgr.maxPoolSize = 10;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ResBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LevelResBase.ts'], function (exports) {
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
      cclegacy._RF.push({}, "2ce44oirmFF0JD3SGL49VU0", "ResBase", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ResBase = exports('ResBase', (_dec = ccclass('ResBase'), _dec(_class = /*#__PURE__*/function (_LevelResBase) {
        _inheritsLoose(ResBase, _LevelResBase);
        function ResBase() {
          return _LevelResBase.apply(this, arguments) || this;
        }
        return ResBase;
      }(LevelResBase)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ResData.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "393c7lmpCVKDYxNE3Nfp1q7", "ResData", undefined);
      /** 加载资源数据 */
      var ResData = exports('ResData', function ResData() {
        /**资源名称 */
        this.resKey = void 0;
        /**包名 */
        this.bundle = void 0;
        /**资源路径 */
        this.path = void 0;
        /**资源类型 */
        this.type = void 0;
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ResDataConfig.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UIName.ts', './AudioName.ts'], function (exports) {
  var _createClass, cclegacy, AudioClip, Prefab, UIName, AudioName;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      AudioClip = module.AudioClip;
      Prefab = module.Prefab;
    }, function (module) {
      UIName = module.UIName;
    }, function (module) {
      AudioName = module.AudioName;
    }],
    execute: function () {
      cclegacy._RF.push({}, "96629wgKGhA0ZLwdkS3+VKi", "ResDataConfig", undefined);
      /**  核心资源数据配置  */
      var ResDataConfig = exports('ResDataConfig', /*#__PURE__*/function () {
        function ResDataConfig() {}
        /** 根据名称获取UI数据  */
        ResDataConfig.GetResData = function GetResData(name) {
          return this.allUIResData.get(name);
        };
        _createClass(ResDataConfig, null, [{
          key: "allUIResData",
          get: function get() {
            var _this = this;
            if (!this._allUIResData) {
              this._allUIResData = new Map();
              var addItems = function addItems(items) {
                if (!items) return;
                if (items instanceof Map) {
                  items.forEach(function (d) {
                    if (d && d.resKey) _this._allUIResData.set(d.resKey, d);
                  });
                } else if (Array.isArray(items)) {
                  items.forEach(function (d) {
                    if (d && d.resKey) _this._allUIResData.set(d.resKey, d);
                  });
                }
              };
              addItems(this.audioResData);
              addItems(this.initUIResData);
              addItems(this.baseUIResData);
            }
            return this._allUIResData;
          }
        }]);
        return ResDataConfig;
      }());
      //#region 初始必须要加载的
      ResDataConfig.audioResData = [{
        resKey: AudioName.Bgm,
        bundle: "Audio",
        type: AudioClip
      }];
      /** 正常进入游戏，必须加载的UI资源 */
      ResDataConfig.initUIResData = [{
        resKey: UIName.MainPage,
        bundle: UIName.MainPage,
        path: "Prefab",
        type: Prefab
      }, {
        resKey: UIName.SelectLevelPage,
        bundle: UIName.SelectLevelPage,
        path: "Prefab",
        type: Prefab
      }];
      //#endregion
      //#region 其他资源数据配置
      ResDataConfig.baseUIResData = [{
        resKey: UIName.GamePage,
        bundle: UIName.GamePage,
        path: "Prefab",
        type: Prefab
      }, {
        resKey: UIName.ResultDialog,
        bundle: UIName.ResultDialog,
        path: "Prefab",
        type: Prefab
      }
      // { resKey: UIName.AddPowerUIDialog, bundle: UIName.AddPowerUIDialog, type: Prefab },
      // { resKey: UIName.SignInDialog, bundle: UIName.SignInDialog, type: Prefab },
      ];
      //#endregion
      /** 所有 UI 资源的统一索引（resKey -> ResData），复用同一份 ResData 实例 */
      ResDataConfig._allUIResData = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ResMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, assetManager, AssetManager, SpriteFrame, Texture2D;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      assetManager = module.assetManager;
      AssetManager = module.AssetManager;
      SpriteFrame = module.SpriteFrame;
      Texture2D = module.Texture2D;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "eefaf04bdZE4rkvBYvBrl14", "ResMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ResMgr = exports('ResMgr', (_dec = ccclass('ResMgr'), _dec(_class = /*#__PURE__*/function () {
        function ResMgr() {}
        //#region 加载方式
        /** 加载某类资源的单个资源 */
        ResMgr.LoadOneRes = /*#__PURE__*/
        function () {
          var _LoadOneRes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resData, onProgress) {
            var _this = this;
            var bundle, path;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (resData) {
                    _context.next = 3;
                    break;
                  }
                  console.warn("resData为空", resData);
                  return _context.abrupt("return", null);
                case 3:
                  _context.next = 5;
                  return this.LoadBundle(resData.bundle);
                case 5:
                  bundle = _context.sent;
                  if (bundle) {
                    _context.next = 9;
                    break;
                  }
                  console.warn("bundle加载失败", resData.bundle);
                  return _context.abrupt("return", null);
                case 9:
                  // path 缺省时直接使用 resKey 作为 bundle 内相对路径
                  path = resData.path ? resData.path + "/" + resData.resKey : resData.resKey;
                  if (resData.type === SpriteFrame && !path.endsWith('/spriteFrame')) {
                    path = path + "/spriteFrame";
                  } else if (resData.type === Texture2D && !path.endsWith('/texture')) {
                    path = path + "/texture";
                  }
                  return _context.abrupt("return", new Promise(function (resolve) {
                    bundle.load(path, resData.type, function (finished, total) {
                      _this.ReportProgress(onProgress, finished, total);
                    }, function (err, asset) {
                      if (err) {
                        console.error("\u8D44\u6E90\u52A0\u8F7D\u9519\u8BEF [" + path + "]:", err);
                        resolve(null);
                        return;
                      }
                      resolve(asset);
                    });
                  }));
                case 12:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function LoadOneRes(_x, _x2) {
            return _LoadOneRes.apply(this, arguments);
          }
          return LoadOneRes;
        }() /** 加载路径下所有资源 */;
        ResMgr.LoadDirRes = /*#__PURE__*/
        function () {
          var _LoadDirRes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resData, onProgress) {
            var _this2 = this;
            var bundle, path;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (resData) {
                    _context2.next = 3;
                    break;
                  }
                  console.warn("resData为空", resData);
                  return _context2.abrupt("return", null);
                case 3:
                  _context2.next = 5;
                  return this.LoadBundle(resData.bundle);
                case 5:
                  bundle = _context2.sent;
                  if (!(bundle == null)) {
                    _context2.next = 9;
                    break;
                  }
                  console.warn("bundle为空", resData.bundle);
                  return _context2.abrupt("return", null);
                case 9:
                  path = resData.path;
                  if (!path) {
                    path = ""; //加载整个bundle内的资源
                  }

                  return _context2.abrupt("return", new Promise(function (resolve) {
                    bundle.loadDir(path, function (finished, total) {
                      _this2.ReportProgress(onProgress, finished, total);
                    }, function (err, assets) {
                      if (err) {
                        console.error(err);
                        resolve(null);
                        return;
                      }
                      resolve(assets);
                    });
                  }));
                case 12:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function LoadDirRes(_x3, _x4) {
            return _LoadDirRes.apply(this, arguments);
          }
          return LoadDirRes;
        }() /** 加载场景资源 */;
        ResMgr.LoadSceneRes = /*#__PURE__*/
        function () {
          var _LoadSceneRes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resData, onProgress) {
            var _this3 = this;
            var bundle;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  if (resData) {
                    _context3.next = 3;
                    break;
                  }
                  console.warn("resData为空", resData);
                  return _context3.abrupt("return", null);
                case 3:
                  _context3.next = 5;
                  return this.LoadBundle(resData.bundle);
                case 5:
                  bundle = _context3.sent;
                  if (!(bundle == null)) {
                    _context3.next = 9;
                    break;
                  }
                  console.warn("bundle为空", resData.bundle);
                  return _context3.abrupt("return", null);
                case 9:
                  return _context3.abrupt("return", new Promise(function (resolve) {
                    bundle.loadScene(resData.resKey, function (finished, total) {
                      _this3.ReportProgress(onProgress, finished, total);
                    }, function (err, asset) {
                      if (err) {
                        console.error(err);
                        resolve(null);
                        return;
                      }
                      resolve(asset);
                    });
                  }));
                case 10:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function LoadSceneRes(_x5, _x6) {
            return _LoadSceneRes.apply(this, arguments);
          }
          return LoadSceneRes;
        }() //#endregion
        /** 上报单个加载任务的进度（finished/total 换算为 0~1，由调用方决定如何聚合） */;

        ResMgr.ReportProgress = function ReportProgress(onProgress, finished, total) {
          if (!onProgress || total <= 0) {
            return;
          }
          onProgress(finished / total);
          // console.log(`加载进度: ${finished / total}`);
        }

        /** 释放单个资源 */;
        ResMgr.ReleaseRes = function ReleaseRes(resData) {
          this.LoadOneRes(resData).then(function (asset) {
            if (asset) {
              assetManager.releaseAsset(asset);
            }
          });
        }

        /** 释放Bundle */;
        ResMgr.ReleaseBundle = function ReleaseBundle(resData) {
          var bundle = this.GetBundle(resData.bundle);
          if (bundle) {
            bundle.releaseAll();
          }
        }

        /** 加载 Bundle，如果已经加载过则不重新加载 */;
        ResMgr.LoadBundle = function LoadBundle(bundleName) {
          var bundle = ResMgr.GetBundle(bundleName);
          if (bundle) {
            return Promise.resolve(bundle);
          }
          return new Promise(function (resolve) {
            AssetManager.instance.loadBundle(bundleName, function (err, bundle) {
              if (err) {
                console.error(err);
                resolve(null);
                return;
              }
              resolve(bundle);
            });
          });
        }

        //#region 获取bundle
        ;

        ResMgr.GetBundle = function GetBundle(bundleName) {
          var bundle = AssetManager.instance.getBundle(bundleName);
          if (bundle == null) {
            console.warn("bundle为空", bundleName);
            return null;
          }
          return bundle;
        }
        //#endregion
        ;

        return ResMgr;
      }()) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ResultType.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4e3c9iivpxCvLSeXs2sq4C6", "ResultType", undefined);
      var ResultType = exports('ResultType', /*#__PURE__*/function (ResultType) {
        ResultType[ResultType["UnEnd"] = 0] = "UnEnd";
        ResultType[ResultType["Win"] = 1] = "Win";
        ResultType[ResultType["Lose"] = 2] = "Lose";
        return ResultType;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TimerMgr.ts", ['cc', './UpdateMgr.ts'], function (exports) {
  var cclegacy, isValid, UpdateMgr;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      isValid = module.isValid;
    }, function (module) {
      UpdateMgr = module.UpdateMgr;
    }],
    execute: function () {
      cclegacy._RF.push({}, "33b94H4+61E5bKEOQWxogDo", "TimerMgr", undefined);
      var TimerData = function TimerData(callback, target, remain, delay, repeat) {
        this.callback = void 0;
        this.target = void 0;
        this.remain = void 0;
        this.delay = void 0;
        this.repeat = void 0;
        this.callback = callback;
        this.target = target;
        this.remain = remain;
        this.delay = delay;
        this.repeat = repeat;
      };
      var TimerMgr = exports('TimerMgr', /*#__PURE__*/function () {
        function TimerMgr() {}
        TimerMgr.Init = function Init() {
          if (this.isInitialized) return; // 防重复初始化
          this.isInitialized = true;
          UpdateMgr.AddUpdate(this.Tick, this);
        }

        /** 延迟执行一次 */;
        TimerMgr.AddTimer = function AddTimer(callback, delay, target) {
          if (target === void 0) {
            target = null;
          }
          return this.add(callback, target, delay, false);
        }

        /** 循环执行 */;
        TimerMgr.AddRepeatTimer = function AddRepeatTimer(callback, delay, target) {
          if (target === void 0) {
            target = null;
          }
          return this.add(callback, target, delay, true);
        };
        TimerMgr.add = function add(callback, target, delay, repeat) {
          var id = this.nextId++;
          this.timerMap.set(id, new TimerData(callback, target, delay, delay, repeat));
          return id;
        }

        /** 取消指定定时器 */;
        TimerMgr.RemoveTimer = function RemoveTimer(id) {
          this.timerMap["delete"](id);
        }

        /** 清除某个 target 绑定的所有定时器 */;
        TimerMgr.RemoveTargetTimers = function RemoveTargetTimers(target) {
          var _this = this;
          if (!target) return;
          this.timerMap.forEach(function (timer, id) {
            if (timer.target === target) {
              _this.timerMap["delete"](id);
            }
          });
        };
        TimerMgr.Tick = function Tick(dt) {
          var _this2 = this;
          var expired = [];
          this.timerMap.forEach(function (timer, id) {
            // target 已销毁则自动清理
            if (timer.target != null && !isValid(timer.target)) {
              _this2.timerMap["delete"](id);
              return;
            }
            timer.remain -= dt;
            if (timer.remain <= 0) {
              if (timer.repeat) {
                timer.remain += timer.delay;
              } else {
                _this2.timerMap["delete"](id);
              }
              expired.push(timer);
            }
          });

          // 执行回调
          expired.forEach(function (t) {
            if (t.target) {
              t.callback.call(t.target);
            } else {
              t.callback();
            }
          });
        };
        return TimerMgr;
      }());
      TimerMgr.timerMap = new Map();
      TimerMgr.nextId = 1;
      TimerMgr.isInitialized = false;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TimeTool.ts", ['cc'], function (exports) {
  var cclegacy, PhysicsSystem2D, director;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      PhysicsSystem2D = module.PhysicsSystem2D;
      director = module.director;
    }],
    execute: function () {
      cclegacy._RF.push({}, "9f937fZGn1G2bLLmUiIsviG", "TimeTool", undefined);
      var TimeTool = exports('TimeTool', /*#__PURE__*/function () {
        function TimeTool() {}
        /** 获取当前时间  返回值为秒 */
        TimeTool.GetCurTime = function GetCurTime() {
          return Date.now() / this.TIME_UNIT;
        }

        /** 
         * 判断时间是否超过多少天 
         * @param savedTime 上次保存的时间戳（秒，与 GetCurTime 单位一致）
         * @param day 天数
         * */;
        TimeTool.IsTimeOverDay = function IsTimeOverDay(savedTime, day) {
          var oneDayInSeconds = 24 * 60 * 60;
          return this.GetCurTime() - savedTime > day * oneDayInSeconds;
        }

        /** 
         * 判断时间是否在范围内 
         * @param startTime 开始时间（秒，与 GetCurTime 单位一致）
         * @param endTime 结束时间（秒，与 GetCurTime 单位一致）
         * */;
        TimeTool.IsTimeInRange = function IsTimeInRange(startTime, endTime) {
          return startTime <= this.GetCurTime() && this.GetCurTime() <= endTime;
        }

        /** 
         * 将秒转换为时分秒 
         * @param seconds 秒数
         * */;
        TimeTool.ConvertSecondsToTime = function ConvertSecondsToTime(seconds) {
          var hours = Math.floor(seconds / 3600);
          var minutes = Math.floor(seconds % 3600 / 60);
          var secs = Math.floor(seconds % 60);

          // 通过条件判断来补零
          var hh = hours < 10 ? '0' + hours : '' + hours;
          var mm = minutes < 10 ? '0' + minutes : '' + minutes;
          var ss = secs < 10 ? '0' + secs : '' + secs;
          return hh + ":" + mm + ":" + ss;
        }

        /**
         * 设置时间缩放
         * @param timeScale 生命周期时间缩放
         * @param physicStep 物理引擎时间缩放
         */;
        TimeTool.SetTimeScale = function SetTimeScale(timeScale, physicStep) {
          // 🔥 关键：修改步长后需要重置累加器
          var system = PhysicsSystem2D.instance;
          // system.enable = false;  // 先关闭
          system.fixedTimeStep = physicStep;
          // system.enable = true;   // 再重新开启
          // 还可以配合游戏时间缩放（影响非物理动画）
          director.getScheduler().setTimeScale(timeScale);
          console.log("\u65F6\u95F4\u7F29\u653E\u8BBE\u7F6E\u4E3A\uFF1A" + timeScale);
        };
        return TimeTool;
      }());
      /** 时间统一单位 */
      TimeTool.TIME_UNIT = 1000;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIAniType.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "06039WpoApJN5f834bq5ehC", "UIAniType", undefined);
      var UIAniType = exports('UIAniType', /*#__PURE__*/function (UIAniType) {
        UIAniType[UIAniType["None"] = 0] = "None";
        UIAniType[UIAniType["LeftMove"] = 1] = "LeftMove";
        UIAniType[UIAniType["RightMove"] = 2] = "RightMove";
        UIAniType[UIAniType["UpMove"] = 3] = "UpMove";
        UIAniType[UIAniType["DownMove"] = 4] = "DownMove";
        UIAniType[UIAniType["Scale"] = 5] = "Scale";
        return UIAniType;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UIPanelBase.ts', './ResDataConfig.ts', './GlobalResMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, Component, instantiate, UIPanelBase, ResDataConfig, GlobalResMgr;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
      instantiate = module.instantiate;
    }, function (module) {
      UIPanelBase = module.UIPanelBase;
    }, function (module) {
      ResDataConfig = module.ResDataConfig;
    }, function (module) {
      GlobalResMgr = module.GlobalResMgr;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3;
      cclegacy._RF.push({}, "91865ed9J9Fa6w6y453wntd", "UIMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UIMgr = exports('UIMgr', (_dec = ccclass('UIMgr'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIMgr, _Component);
        function UIMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "panel_root", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dialog_root", _descriptor2, _assertThisInitialized(_this));
          _this.panel_cache = new Map();
          _this.dialog_cache = new Map();
          _this.recordShowUI = new Set();
          /** 当前显示的Panel */
          _this.curPanelName = "";
          /** 当前显示的弹窗 */
          _this.curDialogName = "";
          return _this;
        }
        var _proto = UIMgr.prototype;
        _proto.onLoad = function onLoad() {
          UIMgr._instance = this;
        };
        _proto.onDestroy = function onDestroy() {
          UIMgr._instance = null;
        };
        /** 显示面板 */
        _proto.ShowPanel = /*#__PURE__*/
        function () {
          var _ShowPanel = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(panelName) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  this.curPanelName = panelName;
                  _context.next = 3;
                  return this.showNode(panelName, this.panel_cache, this.panel_root);
                case 3:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function ShowPanel(_x) {
            return _ShowPanel.apply(this, arguments);
          }
          return ShowPanel;
        }() /** 显示对话框 */;
        _proto.ShowDialog = /*#__PURE__*/
        function () {
          var _ShowDialog = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(dialogName) {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  this.curDialogName = dialogName;
                  _context2.next = 3;
                  return this.showNode(dialogName, this.dialog_cache, this.dialog_root);
                case 3:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function ShowDialog(_x2) {
            return _ShowDialog.apply(this, arguments);
          }
          return ShowDialog;
        }();
        _proto.showNode = /*#__PURE__*/function () {
          var _showNode = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(name, cache, root) {
            var _node$getComponent;
            var node;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  // console.log("-------------显示:", name)
                  node = cache.get(name);
                  if (node) {
                    _context3.next = 5;
                    break;
                  }
                  console.warn("\u4E0D\u5B58\u5728", name);
                  this.LoadShowNode(name, cache, root);
                  return _context3.abrupt("return");
                case 5:
                  if (!this.recordShowUI.has(name)) {
                    _context3.next = 8;
                    break;
                  }
                  console.log("已显示:", name);
                  return _context3.abrupt("return");
                case 8:
                  this.recordShowUI.add(name);
                  node.parent = root;
                  node.active = true;
                  (_node$getComponent = node.getComponent(UIPanelBase)) == null || _node$getComponent.ShowPanel();
                  console.log("显示:", name);
                case 13:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function showNode(_x3, _x4, _x5) {
            return _showNode.apply(this, arguments);
          }
          return showNode;
        }() /** 加载需要显示的节点 */;
        _proto.LoadShowNode = /*#__PURE__*/
        function () {
          var _LoadShowNode = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(name, cache, root) {
            var node, resData, prefab;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  node = null;
                  resData = ResDataConfig.GetResData(name);
                  if (resData) {
                    _context4.next = 5;
                    break;
                  }
                  console.error("[UIMgr] \u672A\u627E\u5230 UI \u8D44\u6E90\u914D\u7F6E: " + name + "\uFF0C\u8BF7\u68C0\u67E5 ResDataConfig");
                  return _context4.abrupt("return");
                case 5:
                  console.warn("开始加载", name);
                  // FeedbackMgr.Instance.CreateTextTip("资源准备中...")
                  _context4.next = 8;
                  return GlobalResMgr.GetRes(resData);
                case 8:
                  prefab = _context4.sent;
                  console.warn("加载完成", name);
                  if (prefab) {
                    _context4.next = 13;
                    break;
                  }
                  console.warn("预制体加载失败，无法显示:", name);
                  return _context4.abrupt("return");
                case 13:
                  node = instantiate(prefab);
                  cache.set(name, node);
                  if (name == this.curDialogName || name == this.curPanelName) {
                    this.showNode(name, cache, root);
                  }
                case 16:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
          function LoadShowNode(_x6, _x7, _x8) {
            return _LoadShowNode.apply(this, arguments);
          }
          return LoadShowNode;
        }() /** 用于提前加载UI资源，避免在显示时加载失败 */;
        _proto.LoadUIPanelRes = /*#__PURE__*/
        function () {
          var _LoadUIPanelRes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(name) {
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  if (!this.panel_cache.has(name)) {
                    _context5.next = 2;
                    break;
                  }
                  return _context5.abrupt("return");
                case 2:
                  _context5.next = 4;
                  return this.LoadShowNode(name, this.panel_cache, this.panel_root);
                case 4:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));
          function LoadUIPanelRes(_x9) {
            return _LoadUIPanelRes.apply(this, arguments);
          }
          return LoadUIPanelRes;
        }() /** 用于提前加载UI资源，避免在显示时加载失败 */;
        _proto.LoadUIDialogRes = /*#__PURE__*/
        function () {
          var _LoadUIDialogRes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(name) {
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  if (!this.dialog_cache.has(name)) {
                    _context6.next = 2;
                    break;
                  }
                  return _context6.abrupt("return");
                case 2:
                  _context6.next = 4;
                  return this.LoadShowNode(name, this.dialog_cache, this.dialog_root);
                case 4:
                case "end":
                  return _context6.stop();
              }
            }, _callee6, this);
          }));
          function LoadUIDialogRes(_x10) {
            return _LoadUIDialogRes.apply(this, arguments);
          }
          return LoadUIDialogRes;
        }() /** 隐藏面板 */;
        _proto.HidePanel = function HidePanel(panelName) {
          this.hideNode(panelName, this.panel_cache);
        }

        /** 隐藏对话框 */;
        _proto.HideDialog = function HideDialog(dialogName) {
          this.hideNode(dialogName, this.dialog_cache);
        };
        _proto.hideNode = function hideNode(name, cache) {
          var node = cache.get(name);
          if (!node) {
            console.warn("\u4E0D\u5B58\u5728", name);
            return;
          }
          var node_src = node.getComponent(UIPanelBase);
          if (node_src) {
            node_src.HidePanel(function () {
              node.active = false;
              node.parent = null;
              console.log("....................000000000000000000000");
            });
          } else {
            node.active = false;
            node.parent = null;
          }
          this.recordShowUI["delete"](name);
          console.log("隐藏:", name);
        };
        _createClass(UIMgr, null, [{
          key: "Instance",
          get: function get() {
            if (!this._instance) {
              console.warn("UIMgr为空");
              return null;
            }
            return this._instance;
          }
        }]);
        return UIMgr;
      }(Component), _class3._instance = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "panel_root", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "dialog_root", [_dec3], {
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

System.register("chunks:///_virtual/UIName.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "14abaCoHeBA5pXsTt/Cu3Dx", "UIName", undefined);
      /** UI名称需要和Bundle名称一样 */
      var UIName = exports('UIName', /*#__PURE__*/function (UIName) {
        UIName["MainPage"] = "MainPage";
        UIName["SelectLevelPage"] = "SelectLevelPage";
        UIName["GamePage"] = "GamePage";
        UIName["ResultDialog"] = "ResultDialog";
        UIName["AddPowerUIDialog"] = "AddPowerUIDialog";
        UIName["SignInDialog"] = "SignInDialog";
        return UIName;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIPanelBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UIAniType.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Enum, Node, Vec3, tween, Component, UIAniType;
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
      Node = module.Node;
      Vec3 = module.Vec3;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      UIAniType = module.UIAniType;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "2fec3R+U1ZOw6NuGtW9BXsI", "UIPanelBase", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UIPanelBase = exports('UIPanelBase', (_dec = ccclass('UIPanelBase'), _dec2 = property({
        type: Enum(UIAniType),
        tooltip: '显示动画类型'
      }), _dec3 = property({
        type: Enum(UIAniType),
        tooltip: '隐藏动画类型',
        visible: function visible() {
          return this.showAniType !== UIAniType.None;
        }
      }), _dec4 = property({
        type: Node,
        tooltip: '动画作用节点',
        visible: function visible() {
          return this.showAniType !== UIAniType.None;
        }
      }), _dec5 = property({
        tooltip: '动画时长（秒）',
        visible: function visible() {
          return this.showAniType !== UIAniType.None;
        }
      }), _dec6 = property({
        visible: function visible() {
          return this.showAniType !== UIAniType.None && this.showAniType !== UIAniType.Scale;
        }
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIPanelBase, _Component);
        function UIPanelBase() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "showAniType", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hideAniType", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "panelNode", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "aniDuration", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "OFFSET", _descriptor5, _assertThisInitialized(_this));
          _this.isAnimating = false;
          _this.cachedPosition = new Vec3();
          return _this;
        }
        var _proto = UIPanelBase.prototype;
        _proto.onLoad = function onLoad() {
          if (!this.panelNode) {
            this.panelNode = this.node;
          }
          this.cachedPosition.set(this.panelNode.position);
        };
        _proto.ShowPanel = function ShowPanel(onComplete) {
          var _this2 = this;
          if (this.isAnimating) return;
          this.isAnimating = true;
          this.node.active = true;
          this.panelNode.active = true;

          // 设置动画起始状态
          this.setShowStartState();
          tween(this.panelNode).to(this.aniDuration, this.getShowEndProps(), {
            easing: 'cubicOut'
          }).call(function () {
            _this2.isAnimating = false;
            onComplete == null || onComplete();
          }).start();
        };
        _proto.HidePanel = function HidePanel(onComplete) {
          var _this3 = this;
          if (this.isAnimating || !this.node.active) return;
          this.isAnimating = true;
          tween(this.panelNode).to(this.aniDuration, this.getHideEndProps(), {
            easing: 'cubicIn'
          }).call(function () {
            _this3.node.active = false;
            _this3.isAnimating = false;
            _this3.resetState();
            onComplete == null || onComplete();
          }).start();
        }
        /** 设置显示动画的起始状态 */;
        _proto.setShowStartState = function setShowStartState() {
          var pos = this.panelNode.position;
          switch (this.showAniType) {
            case UIAniType.LeftMove:
              this.panelNode.setPosition(pos.x - this.OFFSET, pos.y);
              break;
            case UIAniType.RightMove:
              this.panelNode.setPosition(pos.x + this.OFFSET, pos.y);
              break;
            case UIAniType.UpMove:
              this.panelNode.setPosition(pos.x, pos.y + this.OFFSET);
              break;
            case UIAniType.DownMove:
              this.panelNode.setPosition(pos.x, pos.y - this.OFFSET);
              break;
            case UIAniType.Scale:
              this.panelNode.setScale(new Vec3(0, 0, 0));
              break;
          }
        }
        /** 获取显示动画的结束状态 */;
        _proto.getShowEndProps = function getShowEndProps() {
          switch (this.showAniType) {
            case UIAniType.LeftMove:
            case UIAniType.RightMove:
            case UIAniType.UpMove:
            case UIAniType.DownMove:
              return {
                position: this.cachedPosition.clone()
              };
            case UIAniType.Scale:
              return {
                scale: new Vec3(1, 1, 1)
              };
            default:
              return {};
          }
        }
        /** 获取隐藏动画的结束状态 */;
        _proto.getHideEndProps = function getHideEndProps() {
          var pos = this.panelNode.position;
          switch (this.hideAniType) {
            case UIAniType.LeftMove:
              return {
                position: new Vec3(pos.x - this.OFFSET, pos.y, pos.z)
              };
            case UIAniType.RightMove:
              return {
                position: new Vec3(pos.x + this.OFFSET, pos.y, pos.z)
              };
            case UIAniType.UpMove:
              return {
                position: new Vec3(pos.x, pos.y + this.OFFSET, pos.z)
              };
            case UIAniType.DownMove:
              return {
                position: new Vec3(pos.x, pos.y - this.OFFSET, pos.z)
              };
            case UIAniType.Scale:
              return {
                scale: new Vec3(0, 0, 0)
              };
            default:
              return {};
          }
        }

        /** 复位到初始状态（hide 完成后） */;
        _proto.resetState = function resetState() {
          this.panelNode.setPosition(this.cachedPosition);
          this.panelNode.setScale(new Vec3(1, 1, 1));
        };
        return UIPanelBase;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "showAniType", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return UIAniType.None;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "hideAniType", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return UIAniType.None;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "panelNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "aniDuration", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.3;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "OFFSET", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1600;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UpdateMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, isValid, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      isValid = module.isValid;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class2, _class3;
      cclegacy._RF.push({}, "51011WrSgdL66jBAYUsJH7Q", "UpdateMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UpdateData = exports('UpdateData', function UpdateData(callback, target) {
        this.callback = void 0;
        this.target = void 0;
        this.callback = callback;
        this.target = target;
      });
      var UpdateMgr = exports('UpdateMgr', (_dec = ccclass('UpdateMgr'), _dec(_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UpdateMgr, _Component);
        function UpdateMgr() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = UpdateMgr.prototype;
        _proto.update = function update(dt) {
          if (UpdateMgr.paused) return;
          UpdateMgr.Tick(dt);
        };
        /** 注册每帧回调，返回 id；传入 target 后其销毁时会自动移除（防泄漏） */
        UpdateMgr.AddUpdate = function AddUpdate(callback, target) {
          if (target === void 0) {
            target = null;
          }
          var id = this.nextId++;
          this.updateMap.set(id, new UpdateData(callback, target));
          return id;
        }

        /** 移除指定更新 */;
        UpdateMgr.RemoveUpdate = function RemoveUpdate(id) {
          this.updateMap["delete"](id);
        }

        /** 清空所有更新 */;
        UpdateMgr.Clear = function Clear() {
          this.updateMap.clear();
        }

        /** 全局暂停/恢复（如打开暂停菜单时） */;
        UpdateMgr.SetPaused = function SetPaused(paused) {
          this.paused = paused;
          console.warn("UpdateMgr paused: " + paused);
        };
        UpdateMgr.Tick = function Tick(dt) {
          var _this = this;
          if (this.paused || this.updateMap.size === 0) return;
          // 快照遍历：回调里 AddUpdate/RemoveUpdate 不影响本次分发
          var snapshot = [];
          this.updateMap.forEach(function (item, id) {
            snapshot.push({
              id: id,
              item: item
            });
          });
          snapshot.forEach(function (_ref) {
            var id = _ref.id,
              item = _ref.item;
            if (!_this.updateMap.has(id)) {
              return;
            }
            if (item.target != null && !isValid(item.target)) {
              _this.updateMap["delete"](id); // 对象已销毁，自动清理
              return;
            }
            if (item.callback) {
              item.callback.call(item.target, dt);
            }
          });
        };
        return UpdateMgr;
      }(Component), _class3.updateMap = new Map(), _class3.nextId = 1, _class3.paused = false, _class3)) || _class2));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
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