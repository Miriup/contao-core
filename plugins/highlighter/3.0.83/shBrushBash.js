/* SyntaxHighlighter 3.0.83, (c) 2004-2010 Alex Gorbatchev, http://alexgorbatchev.com/SyntaxHighlighter */
(function(){function a(){var a="if fi then elif else for do done until while break continue case function return in eq ne ge le",b="alias apropos awk basename bash bc bg builtin bzip2 cal cat cd cfdisk chgrp chmod chown chrootcksum clear cmp comm command cp cron crontab csplit cut date dc dd ddrescue declare df diff diff3 dig dir dircolors dirname dirs du echo egrep eject enable env ethtool eval exec exit expand export expr false fdformat fdisk fg fgrep file find fmt fold format free fsck ftp gawk getopts grep groups gzip hash head history hostname id ifconfig import install join kill less let ln local locate logname logout look lpc lpr lprint lprintd lprintq lprm ls lsof make man mkdir mkfifo mkisofs mknod more mount mtools mv netstat nice nl nohup nslookup open op passwd paste pathchk ping popd pr printcap printenv printf ps pushd pwd quota quotacheck quotactl ram rcp read readonly renice remsync rm rmdir rsync screen scp sdiff sed select seq set sftp shift shopt shutdown sleep sort source split ssh strace su sudo sum symlink sync tail tar tee test time times touch top traceroute trap tr true tsort tty type ulimit umask umount unalias uname unexpand uniq units unset unshar useradd usermod users uuencode uudecode v vdir vi watch wc whereis which who whoami Wget xargs yes";this.regexList=[{regex:/^#!.*$/gm,css:"preprocessor bold"},{regex:/\/[\w-\/]+/gm,css:"plain"},{regex:SyntaxHighlighter.regexLib.singleLinePerlComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:new RegExp(this.getKeywords(a),"gm"),css:"keyword"},{regex:new RegExp(this.getKeywords(b),"gm"),css:"functions"}]}typeof require!="undefined"?SyntaxHighlighter=require("shCore").SyntaxHighlighter:null,a.prototype=new SyntaxHighlighter.Highlighter,a.aliases=["bash","shell"],SyntaxHighlighter.brushes.Bash=a,typeof exports!="undefined"?exports.Brush=a:null})();