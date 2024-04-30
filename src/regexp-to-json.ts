interface RegExp {
  toJSON(): string;
}

RegExp.prototype.toJSON = function (this: RegExp) {
  return this.toString()
}
