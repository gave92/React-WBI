if (!String.format) {
    String.format = function (format) {
        var args = Array.prototype.slice.call(arguments, 1);
        return format.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] !== 'undefined'
                ? args[number]
                : match
                ;
        });
    };
}
if (!String.prototype.remove) {
    // eslint-disable-next-line
    String.prototype.remove = function (start, end) {
        return this.slice(0, start) + this.slice(start + end);
    };
}
if (!String.prototype.insert) {
    // eslint-disable-next-line
    String.prototype.insert = function (start, str) {
        return this.slice(0, start) + str + this.slice(start);
    };
}


class Styler {
    constructor() {
        this.CommentsStart = "DISQUSWIDGETS.displayCount(";
        this.CommentsEnd = ")";
        this.PostContent = "<html><head><meta name=\"viewport\" content=\"initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0\"><style>img{max-width:100%; height: auto;}html {-ms-text-size-adjust: 300%;}body {background-color: {3};color: {4};font-family: 'Segoe UI';text-align: justify;display: block;margin: 6px;}.embed-youtube {position:relative; padding-top: 56.25%;}.embed-youtube iframe {position:absolute;top:0;left:0;width:100%; height:100%;}</style></head><body>{0}</body><script>{1}</script><script>{2}</script></html>";
        this.RetargetLinks = "window.onload = function() { var anchors = document.getElementsByTagName(\"a\");for (var i = 0; i<anchors.length; i++) { if(anchors[i].getAttribute('target') !== null) { anchors[i].setAttribute('target', '_self'); } } }";
        this.ResizeText = "var who=document.createElement('div');who.style.visibility='hidden';document.body.appendChild(who);who.appendChild(document.createTextNode('MG'));var fontsize = (who.offsetHeight/21).toFixed(2)+'em';document.body.removeChild(who);var s = document.createElement('style');s.setAttribute('type', 'text/css');var css = 'li {font-size: ' + fontsize + ';}';s.appendChild(document.createTextNode(css));document.head.appendChild(s);";
    };

    ApplyStyle(content, theme) {
        var style = this.PostContent;
        var source = content;

        try {
            source = source.replace("<p>", "<div>");
            source = source.replace("</p>", "</div>");
        }
        catch (ex) {

        }

        try {
            var endYT = source.indexOf("<div class=\"embed-youtube\"><iframe");
            while (endYT !== -1) {
                var i2 = source.indexOf("</iframe></div>", endYT);
                var ytId = source.slice(endYT, endYT + i2 - endYT);
                var i3 = ytId.indexOf("embed/") + 6;
                ytId = ytId.remove(0, i3);
                i3 = ytId.indexOf("?");
                ytId = ytId.slice(0, i3);
                var ytLnk = "<br/>";
                ytLnk = ytLnk + "<center><a href=\"vnd.youtube:" + ytId + "\">Apri video con un'app</a></center>";
                i2 += 15;
                source = source.insert(i2, ytLnk);
                endYT = source.indexOf("<div class=\"embed-youtube\"><iframe", i2 + ytLnk.length);
            }
        }
        catch (ex) {

        }

        try {
            source = source.replace("<a name='more'></a><div style=\"text-align: center;\">", "");
            source = source.replace("document.write", "");
            source = source.replace("<script src=\"http://performance-by.simply.com/simply.js?code=16817;1;0&amp;v=2\" type=\"text/javascript\">",
                "");
        }
        catch (ex) {

        }

        try {
            source = source.replace("<script src=\"http://pagead2.googlesyndication.com/pagead/show_ads.js\" type=\"text/javascript\">",
                "");
            source = source.replace("<script type=\"text/javascript\"\nsrc=\"http://pagead2.googlesyndication.com/pagead/show_ads.js\">\n</script>",
                "");
        }
        catch (ex) {

        }

        try {
            let indexScript = source.indexOf("<script");
            while (indexScript !== -1) {
                try {
                    source = source.remove(indexScript, source.indexOf("</script>", indexScript) + 9 - indexScript);
                }
                catch (ex) {

                }
                indexScript = source.indexOf("<script", indexScript);
            }
        }
        catch (ex) {

        }

        try {
            let indexScript = source.indexOf("<ins");
            while (indexScript !== -1) {
                try {
                    source = source.remove(indexScript, source.indexOf("</ins>", indexScript) + 6 - indexScript);
                }
                catch (ex) {

                }
                indexScript = source.indexOf("<ins", indexScript);
            }
        }
        catch (ex) {

        }

        source = String.format(style, source,
            this.RetargetLinks, "",
            theme === 'dark' ? "black" : "white",
            theme === 'dark' ? "white" : "black");

        return source;
    }
}

export default Styler;