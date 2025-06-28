rya"use strict";
(self.webpackChunkwebgi = self.webpackChunkwebgi || []).push([
  [167],
  {
    2926: function (e, t, n) {
      n.d(t, {
        q: function () {
          return h;
        },
      });
      var i = n(5551),
        r = n(3995),
        s = n(4107),
        o = n(9<!DOCTYPE html><html><head><title>Eric Pappas's Renders</title><link rel="icon" type="image/png" href="https://cdn.glitch.global/71ce20c5-807d-4242-aa0f-5c545493a450/Hegeman_favicon.png?v=1691072796456"><link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap" rel="stylesheet"><style>body{font-family:'Libre Baskerville',serif;display:flex;justify-content:center;margin:0;padding-top:50px;background-color:#f5f5f5;text-align:center;}.container{max-width:500px;margin:0 auto;background-color:#ffffff;padding:30px;border-radius:10px;box-shadow:0 0 10px rgba(0,0,0,0.1);}.button-container{display:flex;justify-content:center;margin-bottom:20px;flex-wrap:wrap;}.button-container button{margin:5px;padding:10px 20px;background-color:#333333;color:#ffffff;border:none;border-radius:5px;font-size:16px;cursor:pointer;transition:background-color 0.3s ease;}.button-container button:hover{background-color:#555555;}a.generated-link{display:inline-block;padding:8px 16px;background-color:#333333;border:1px solid #333333;border-radius:5px;margin:5px;cursor:pointer;transition:background-color 0.3s ease;text-decoration:none;color:#ffffff;}h1{color:#000000;font-size:30px;margin-bottom:20px;}h2{color:#333333;font-size:15px;margin-bottom:20px;}@media screen and (max-width: 767px){.button-container button{margin:5px;width:calc(100% - 10px);}}</style></head><body><div class="container"><h1>Eric Pappas's Renders</h1><h2>Each button will take you to the respective ring option</h2><div class="button-container"><button class="generated-button" onclick="window.open('https://hegemanandco.glitch.me/ericpappas-yellowgoldtwist.html', '_blank')">Yellow Gold Twist</button></div></div></body></html>
<!DOCTYPE html><html><style>body {overflow: hidden; width: 100%; height: 100%; background-color: white; font-family: "Inter", sans-serif !important; margin: 0; } </style> <head> <meta charset="UTF-8" /> <meta name="viewport" content="width=device-width, initial-scale=1" /> <link rel="icon" href="https://cdn.glitch.global/71ce20c5-807d-4242-aa0f-5c545493a450/Hegeman_favicon.png?v=1691072796456" /> <title>3D Custom Render</title> <script src="https://dist.pixotronics.com/webgi/runtime/viewer-0.8.0.js"></script></head> <body> <webgi-viewer id="viewer-3d" src="https://cdn.glitch.global/71ce20c5-807d-4242-aa0f-5c545493a450/EricPappas_webgi.glb?v=1715970767195" style=" width: 100%; height: 100vh; z-index: 1; display: block; margin: 0; padding: 0;"/> <style> margin: 0; </style> </body> </html>008),
        a = n(2988);
      function c(e, t, n, i) {
        e.traverse((e) => {
          e &&
            ((e.userData.cloneRotI = t),
            (e.userData.rotationCount = n),
            (e.userData.rotationAxis = i),
            e.addEventListener("beforeRender", (t) =>
              (function (e, t) {
                t &&
                  t.map?.isTexture &&
                  (t.extraUniformsToUpload || (t.extraUniformsToUpload = {}),
                  t.extraUniformsToUpload.uvTransform ||
                    (t.extraUniformsToUpload.uvTransform = {
                      value: new a.Vkp(),
                    }),
                  t.extraUniformsToUpload.uvTransform.value.setUvTransform(
                    (t.map.offset.x * t.map.repeat.x * e.userData.cloneRotI) /
                      (e.userData.rotationCount || 1),
                    (t.map.offset.y * t.map.repeat.y * e.userData.cloneRotI) /
                      (e.userData.rotationCount || 1),
                    t.map.repeat.x,
                    t.map.repeat.y,
                    t.map.rotation,
                    t.map.center.x,
                    t.map.center.y
                  ));
              })(e, t.material)
            ));
        });
      }
      var u,
        l = n(6533),
        d = function (e, t, n, i) {
          var r,
            s = arguments.length,
            o =
              s < 3
                ? t
                : null === i
                ? (i = Object.getOwnPropertyDescriptor(t, n))
                : i;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            o = Reflect.decorate(e, t, n, i);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (r = e[a]) &&
                (o = (s < 3 ? r(o) : s > 3 ? r(t, n, o) : r(t, n)) || o);
          return s > 3 && o && Object.defineProperty(t, n, o), o;
        };
      let h = (u = class extends r.Q {
        async onAdded(e) {
          await super.onAdded(e),
            e
              .getPluginByType("Picking")
              ?.addEventListener(
                "selectedObjectChanged",
                this._selectedObjectChanged
              );
        }
        constructor() {
          super(),
            (this.enabled = !0),
            (this.rotations = 1),
            (this.axis = "x"),
            (this.skips = ""),
            (this._selectedObjectChanged =
              this._selectedObjectChanged.bind(this));
        }
        _selectedObjectChanged() {
          if (!this.enabled) return;
          const e = this._viewer
            ?.getPluginByType("Picking")
            ?.getSelectedObject();
          if (!e) return void this.uiConfig.uiRefresh?.("postFrame", !0);
          const t = e.userData.rotationRoot ? e.userData.rotationCount ?? 1 : 1;
          (this.rotations = t),
            (this.skips = e.userData.rotationSkips?.join(",") ?? ""),
            (this.axis = e.userData.rotationAxis || "x"),
            this.uiConfig.uiRefresh?.("postFrame", !0);
        }
        _paramsChanged() {
          if (!this.enabled) return;
          const e = this._viewer
            ?.getPluginByType("Picking")
            ?.getSelectedObject();
          if (e) {
            if (this.rotations > 1 || e.userData.rotationCount) {
              const t = e.userData.rotationCount,
                n = (function (e, t, n, i = "x") {
                  if (e.userData.rotationCount > 1 && !e.userData.rotationRoot)
                    return e;
                  const r = e.parent;
                  if (!r) throw new Error("No parent");
                  if (e.userData.cloneParent) {
                    const t = e.userData.cloneParent;
                    if (!(e = r.children.find((e) => t === e.uuid)))
                      return (
                        console.error(
                          "Couldn't find clone root, cannot rotate. maybe a serialization issue?",
                          t,
                          r
                        ),
                        e
                      );
                  }
                  let s = r.children
                    .filter((t) => t.userData?.cloneParent === e.uuid)
                    .sort(
                      (e, t) => e.userData.cloneRotI - t.userData.cloneRotI
                    );
                  if (
                    e.userData.rotationCount === t &&
                    t === s.length &&
                    void 0 === n &&
                    e.userData.rotationAxis === i
                  )
                    return e;
                  if (
                    (null == n && (n = e.userData.rotationSkips ?? []),
                    n !== e.userData.rotationSkips &&
                      (e.userData.rotationSkips = [...n]),
                    c(e, 0, t, i),
                    (e.userData.rotationRoot = !0),
                    (e.visible = !0),
                    t <= s.length)
                  ) {
                    for (let e = t - 1; e < s.length; e++)
                      r.remove(s[e]),
                        s[e].traverse((e) => (e.userData = { __disposed: !0 }));
                    s = s.slice(0, t);
                  }
                  for (let o = 1; o < t; o++) {
                    const a = o <= s.length ? s[o - 1] : e.clone();
                    a.rotation.copy(e.rotation),
                      (a.rotation[i] += (o / t) * Math.PI * 2),
                      c(a, o, t, i),
                      o > s.length && r.add(a),
                      (a.visible = !n.includes(o));
                  }
                  return (e.visible = !n.includes(0)), e;
                })(
                  e,
                  this.rotations,
                  this.skips
                    .split(",")
                    .map((e) => parseInt(e))
                    .filter((e) => isFinite(e)),
                  this.axis
                ),
                i = n?.userData.rotationCount;
              if (i && i !== t) {
                const e = [];
                n?.traverseAncestors((t) => {
                  e.push(t);
                });
                for (const t of e)
                  if (t.userData.autoScaled) {
                    (0, l.RG)(t),
                      this._viewer?.resetCamera({
                        rootObject: t,
                        centerOffset: new a.Pa4(4, 4, 4),
                      });
                    break;
                  }
              }
              (e.parent && !e.userData.__disposed) ||
                this._viewer
                  ?.getPluginByType("Picking")
                  ?.setSelectedObject(n, !0);
            }
            this._viewer?.scene.setDirty({ frameFade: !1, sceneUpdate: !0 });
          }
        }
      });
      (h.PluginType = "ObjectRotationPlugin"),
        d(
          [
            (0, s.qC)(),
            (0, i.Q7)("Enabled"),
            (0, o.onChange)(u.prototype._paramsChanged),
          ],
          h.prototype,
          "enabled",
          void 0
        ),
        d(
          [
            (0, i.t8)("Rotation Count", [1, 100], 1, (e) => ({
              hidden: () =>
                !e._viewer?.getPluginByType("Picking")?.getSelectedObject() ||
                !e.rotations,
            })),
            (0, o.onChange)(u.prototype._paramsChanged)],h.prototype,"rotations",void 0),d([(0,i.vI)("Axis",["x","y","z"].map((e=>({label:e}))),(e=>({hidden:()=>!e._viewer?.getPluginByType("Picking")?.getSelectedObject()||!e.rotations}))),(0,o.onChange)(u.prototype._paramsChanged)],h.prototype,"axis",void 0),d([(0,i.ri)("Rotation Skips",(e=>({hidden:()=>!e._viewer?.getPluginByType("Picking")?.getSelectedObject()||!e.rotations}))),(0,o.onChange)(u.prototype._paramsChanged)],h.prototype,"skips",void 0),h=u=d([(0,i.Sp)("Object Rotations")],h)},3585:function(e,t,n){n.d(t,{p:function(){return r}});var i=n(3995);class r extends i.Q{constructor(){super(),this.enabled=!0,this.toJSON=void 0,this._uiConfig={type:"folder",label:"Scene Objects",children:[],onExpand:()=>{this._uiConfig.uiRefresh?.("postFrame",!0)}},this._clearSceneButton={type:"button",label:"Clear Scene",value:()=>{this._viewer?.scene.disposeSceneModels()}},this._sceneUpdate=this._sceneUpdate.bind(this)}async onAdded(e){await super.onAdded(e),e.scene.addEventListener("sceneUpdate",this._sceneUpdate)}async onRemove(e){return e.scene.removeEventListener("sceneUpdate",this._sceneUpdate),super.onRemove(e)}setDirty(){this._viewer?.setDirty()}get uiConfig(){return this._viewer?(this._uiConfig.children=[this._clearSceneButton],this._uiConfig.children.push(...this._viewer?.scene.modelRoot.modelObject.children?.map((e=>"light"===e.assetType?null:e.uiConfig)).filter((e=>null!=e))??[]),this._uiConfig):this._uiConfig}_sceneUpdate(){this._uiConfig?.uiRefresh?.("postFrame",!0)}}r.PluginType="SimpleUi"},46:function(e,t,n){n.d(t,{l:function(){return o}});var i=n(2314),r=n(3995),s=n(2988);class o extends r.Q{constructor(){super(...arguments),this.enabled=!0,this.toJSON=void 0,this._savedBg=!1,this.lastBgVal=null,this.uiConfig={label:"Background / Environment",type:"folder",expanded:!1,limitedUi:!0,children:[{label:"Color",type:"color",inlinePicker:!0,property:[this,"sceneBackgroundColor"],limitedUi:!0},()=>({label:"Image",property:[this,"sceneBackground"],type:"image",limitedUi:!0}),{label:"EnvMap BG",type:"checkbox",property:[this,"envmapBg"]},()=>({type:"slider",label:"BG Intensity",getValue:()=>this._viewer?.scene.backgroundIntensity??1,setValue:e=>{this._viewer&&(this._viewer.scene.backgroundIntensity=e)},bounds:[0,16]}),{label:"Set Transparent BG",type:"button",hidden:()=>!this._viewer||this._viewer.useRgbm,value:()=>{this._viewer&&(this._viewer.scene.background=null,this._viewer.scene.backgroundColor=null)}},()=>({label:"Environment",property:[this,"sceneEnvironment"],type:"image",limitedUi:!0}),{type:"slider",label:"Env Rotation",property:[this,"sceneEnvironmentRotation"],bounds:[0,2*Math.PI],limitedUi:!0},{type:"slider",label:"Env Intensity",property:[this,"sceneEnvironmentIntensity"],bounds:[0,4],limitedUi:!0},{type:"checkbox",label:"Fixed Env Direction",property:[this,"sceneEnvironmentFixedDirection"]},{type:"checkbox",label:"Artistic Lighting",getValue:()=>this._viewer?.renderer.useLegacyLights??!0,setValue:e=>{this._viewer&&(this._viewer.renderer.useLegacyLights=e)}}]}}get sceneBackgroundColor(){const e=this._viewer?.scene.backgroundColor?.getHex(s.KI_);return void 0!==e&&(this._savedBg=!0),e||0}set sceneBackgroundColor(e){this._viewer&&this._savedBg&&(this._viewer.scene.backgroundColor||(this._viewer.scene.backgroundColor=new i.I),this._viewer.scene.backgroundColor.setHex(e),this._viewer.scene.setDirty())}get sceneBackground(){const e=this._viewer?.scene.background;return e&&(e.isTexture||"texture"===e.assetType)?e:null}set sceneBackground(e){this._viewer&&(this._viewer.scene.background=e)}get sceneEnvironment(){return this._viewer?.scene.environment||null}set sceneEnvironment(e){this._viewer&&(this._viewer.scene.environment=e)}get sceneEnvironmentRotation(){return this._viewer?.scene.environment?.rotation??0}set sceneEnvironmentRotation(e){const t=this._viewer?.scene.environment;t&&(t.rotation=e,this._viewer?.scene.setDirty())}get sceneEnvironmentIntensity(){return this._viewer?.scene.envMapIntensity??1}set sceneEnvironmentIntensity(e){this._viewer?.scene&&(this._viewer.scene.envMapIntensity=e)}get sceneEnvironmentFixedDirection(){return this._viewer?.scene.fixedEnvMapDirection??!1}set sceneEnvironmentFixedDirection(e){this._viewer?.scene&&(this._viewer.scene.fixedEnvMapDirection=e)}get envmapBg(){return"environment"===this._viewer?.scene.background||this._viewer?.scene.background===this._viewer?.scene.environment}set envmapBg(e){if(this._viewer)if(e){const e=this._viewer.scene.background;e&&e!==this._viewer.scene.environment&&"environment"!==e&&(this.lastBgVal=e),this._viewer.scene.background="environment"}else this._viewer.scene.background!==this._viewer.scene.environment&&"environment"!==this._viewer.scene.background||(this._viewer.scene.background=this.lastBgVal)}async onAdded(e){await super.onAdded(e),this.lastBgVal=e.scene.background,e.scene.addEventListener("backgroundChanged",(()=>{this.uiConfig.uiRefresh?.("postFrame",!0)})),e.scene.addEventListener("environmentChanged",(()=>{this.uiConfig.uiRefresh?.("postFrame",!0)}))}}o.PluginType="SimpleBackgroundEnvUiPlugin1"}}]);
//# sourceMappingURL=167.b0018f20.js.map