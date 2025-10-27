
# Komari Theme — Furina 「水之舞台 · 浮光」(L1 / A / F3)

> 优雅·温柔明亮（F3），左侧动态立绘、右侧数据卡片，动态水纹 + 舞台灯光背景。  
> 无任何米哈游原图素材，均为自制矢量/程序化生成，可公开使用。

## 目录结构
```
komari-theme-furina/
 ├─ theme.css
 ├─ theme.config.ts
 ├─ components/
 │   ├─ components.css
 │   └─ effects.ts
 ├─ shaders/water.glsl
 ├─ bg/
 │   ├─ stage_light.png
 │   └─ bubbles.svg
 ├─ furina/standin.svg
 ├─ sounds/{click.wav, open.wav, notify.wav}
 └─ README.md
```

## 安装方法（以 Komari 为例）
1. 将整个 `komari-theme-furina/` 文件夹复制到你的前端项目（例如 `src/themes/komari-theme-furina/`）。
2. 在应用入口（例如 `src/main.tsx` 或 `app/layout.tsx`）中：
   ```ts
   import "@/themes/komari-theme-furina/theme.css";
   import { installFurinaTheme } from "@/themes/komari-theme-furina/components/effects";
   installFurinaTheme();
   ```
3. 顶栏/任意位置放一个 IP 位置展示元素：
   ```html
   <span class="furina-ip">Detecting IP…</span>
   ```

> **其他 UI 集成**：将你的卡片容器加上 `furina-card` 类；进度条结构参考下方示例。

## 进度条（水位进度）示例
```html
<div class="furina-card">
  <div class="title">CPU 使用率</div>
  <div class="furina-progress" style="--value: 62">
    <div class="fill"></div>
  </div>
</div>
```
> 通过修改 `style="--value: 62"` 来设置 0~100 的百分比。

## 水滴按钮示例
```html
<button class="button-water" onclick="import('./components/effects').then(m => m.playUISound('open'))">
  打开控制台
</button>
```

## 动态立绘（占位）
- `furina/standin.svg` 为**自制优雅剪影**，可换成你自备的动态 webm / png 序列。
- 保持透明背景；建议高度 600~720px；PNG/WebM 都可。  
  若替换为 `furina/dynamic.webm`，可在 `theme.css` 的 `.silhouette` 背景里替换 URL。

## 背景与性能
- 默认禁用了重型 Shader，仅使用 CSS 动画（GPU 合成，轻量）。
- 舞台灯光使用 `bg/stage_light.png`（2048×1152），及 `bg/bubbles.svg` 叠加。

## 音效
- 三个 wav 为**程序生成**，无版权问题。
- 若需关闭音效：不调用 `playUISound` 即可；或删除 `sounds/` 引用。

## 访客 IP + 地区
- `components/effects.ts` 内置 `updateVisitorIP()`，优先使用 `ipapi.co`，失败时回退 `ipify.org`。

## 主题切换
- 支持 `data-theme="dark"` 与 `data-theme="light"`。默认暗色。

## 许可
- 主题 CSS/TS/GLSL/自制 SVG/自制 WAV 基于 MIT 许可。
- 请勿使用任何受版权保护的角色立绘或建模资源直接再分发。
