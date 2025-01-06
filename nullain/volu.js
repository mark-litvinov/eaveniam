var binRange = [fieldDef.bin.start, fieldDef.bin.stop].join(", ");
var binStep = fieldDef.bin.step;
var binExpr = "bin(" + fieldDef.field + ", [" + binRange + "], " + binStep + ")";
