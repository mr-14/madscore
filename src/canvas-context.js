/** @constructor */
export class CanvasContext {
  static get WIDTH() {
    return 600;
  }
  static get HEIGHT() {
    return 400;
  }

  constructor(context) {
    this.xivCanvasContext = context;
    if (!context.canvas) {
      this.canvas = {
        width: CanvasContext.WIDTH,
        height: CanvasContext.HEIGHT,
      };
    } else {
      this.canvas = context.canvas;
    }
  }

  clear() {
    this.xivCanvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  // Containers not implemented
  openGroup() {}
  closeGroup() {}
  add() {}

  setFont(family, size, weight) {
    this.xivCanvasContext.font = (weight || '') + ' ' + size + 'pt ' + family;
    return this;
  }

  setRawFont(font) {
    this.xivCanvasContext.font = font;
    return this;
  }

  setFillStyle(style) {
    this.xivCanvasContext.fillStyle = style;
    return this;
  }

  setBackgroundFillStyle(style) {
    this.background_fillStyle = style;
    return this;
  }

  setStrokeStyle(style) {
    this.xivCanvasContext.strokeStyle = style;
    return this;
  }

  setShadowColor(style) {
    this.xivCanvasContext.shadowColor = style;
    return this;
  }

  setShadowBlur(blur) {
    this.xivCanvasContext.shadowBlur = blur;
    return this;
  }

  setLineWidth(width) {
    this.xivCanvasContext.lineWidth = width;
    return this;
  }

  setLineCap(cap_type) {
    this.xivCanvasContext.lineCap = cap_type;
    return this;
  }

  setLineDash(dash) {
    this.xivCanvasContext.lineDash = dash;
    return this;
  }

  scale(x, y) {
    return this.xivCanvasContext.scale(parseFloat(x), parseFloat(y));
  }

  resize(width, height) {
    return this.xivCanvasContext.resize(
        parseInt(width, 10), parseInt(height, 10));
  }

  rect(x, y, width, height) {
    return this.xivCanvasContext.rect(x, y, width, height);
  }

  fillRect(x, y, width, height) {
    return this.xivCanvasContext.fillRect(x, y, width, height);
  }

  clearRect(x, y, width, height) {
    return this.xivCanvasContext.clearRect(x, y, width, height);
  }

  beginPath() {
    return this.xivCanvasContext.beginPath();
  }

  moveTo(x, y) {
    return this.xivCanvasContext.moveTo(x, y);
  }

  lineTo(x, y) {
    return this.xivCanvasContext.lineTo(x, y);
  }

  bezierCurveTo(x1, y1, x2, y2, x, y) {
    return this.xivCanvasContext.bezierCurveTo(x1, y1, x2, y2, x, y);
  }

  quadraticCurveTo(x1, y1, x, y) {
    return this.xivCanvasContext.quadraticCurveTo(x1, y1, x, y);
  }

  // This is an attempt (hack) to simulate the HTML5 canvas arc method.
  arc(x, y, radius, startAngle, endAngle, antiClockwise) {
    return this.xivCanvasContext.arc(x, y, radius, startAngle, endAngle, antiClockwise);
  }

  // Adapted from the source for Raphael's Element.glow
  glow() {
    return this.xivCanvasContext.glow();
  }

  fill() {
    return this.xivCanvasContext.fill();
  }

  stroke() {
    return this.xivCanvasContext.stroke();
  }

  closePath() {
    return this.xivCanvasContext.closePath();
  }

  measureText(text) {
    return this.xivCanvasContext.measureText(text);
  }

  fillText(text, x, y) {
    return this.xivCanvasContext.fillText(text, x, y);
  }

  save() {
    return this.xivCanvasContext.save();
  }

  restore() {
    return this.xivCanvasContext.restore();
  }
}
