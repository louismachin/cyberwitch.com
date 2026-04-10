var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
$(function() {
    if ($.browser.msie) {
        if ($.browser.version >= 6 && $.browser.version < 7) {
            if ($("div#horn").hasClass("brigid")) {
                $("div#horn").css("background-image", "none").prepend("<div style=\"width: 587px; height: 160px; filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'images/BrigidsBookshelf-587.png\', sizingMethod='scale');\"></div>");
                $("div#horn img").hide();
                $("div#horn hr").hide();
            } else {
                $("hr").replaceWith("<div class='hr'></div>");
            }
            $("div#hoof").css("background-image", "none");
            $("div#claw").before("<div style=\"width: 158px; height: 37px; filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'images/flouroak.png\', sizingMethod='scale');\"></div>");
            $("div#hoof-library").css("position", "relative").css("left", "-26px");
        }
        $("div.lib-book").addClass("lib-ie-first-letter");
    }
});

}

/*
     FILE ARCHIVED ON 21:49:38 Jul 08, 2011 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:28:12 Apr 10, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.648
  exclusion.robots: 0.05
  exclusion.robots.policy: 0.039
  esindex: 0.011
  cdx.remote: 10.685
  LoadShardBlock: 81.73 (3)
  PetaboxLoader3.datanode: 66.157 (4)
  PetaboxLoader3.resolve: 148.004 (2)
  load_resource: 162.86
*/