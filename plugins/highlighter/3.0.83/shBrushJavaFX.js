/* SyntaxHighlighter 3.0.83, (c) 2004-2010 Alex Gorbatchev, http://alexgorbatchev.com/SyntaxHighlighter */
(function(){function a(){var a="Boolean Byte Character Double Duration Float Integer Long Number Short String Void",b="abstract after and as assert at before bind bound break catch class continue def delete else exclusive extends false finally first for from function if import in indexof init insert instanceof into inverse last lazy mixin mod nativearray new not null on or override package postinit protected public public-init public-read replace return reverse sizeof step super then this throw true try tween typeof var where while with attribute let private readonly static trigger";this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.multiLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:/(-?\.?)(\b(\d*\.?\d+|\d+\.?\d*)(e[+-]?\d+)?|0x[a-f\d]+)\b\.?/gi,css:"color2"},{regex:new RegExp(this.getKeywords(a),"gm"),css:"variable"},{regex:new RegExp(this.getKeywords(b),"gm"),css:"keyword"}],this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags)}typeof require!="undefined"?SyntaxHighlighter=require("shCore").SyntaxHighlighter:null,a.prototype=new SyntaxHighlighter.Highlighter,a.aliases=["jfx","javafx"],SyntaxHighlighter.brushes.JavaFX=a,typeof exports!="undefined"?exports.Brush=a:null})();