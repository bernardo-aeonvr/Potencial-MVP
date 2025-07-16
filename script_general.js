(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    return translateObjs[c[0x0]] = c, '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this), e['call'](this);
                };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"scripts":{"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"initQuiz":TDV.Tour.Script.initQuiz,"setLocale":TDV.Tour.Script.setLocale,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"disableVR":TDV.Tour.Script.disableVR,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"resumePlayers":TDV.Tour.Script.resumePlayers,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"unregisterKey":TDV.Tour.Script.unregisterKey,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"openLink":TDV.Tour.Script.openLink,"mixObject":TDV.Tour.Script.mixObject,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getOverlays":TDV.Tour.Script.getOverlays,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"clone":TDV.Tour.Script.clone,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"createTween":TDV.Tour.Script.createTween,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"enableVR":TDV.Tour.Script.enableVR,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"historyGoBack":TDV.Tour.Script.historyGoBack,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"cloneGeneric":TDV.Tour.Script.cloneGeneric,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"registerKey":TDV.Tour.Script.registerKey,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getPixels":TDV.Tour.Script.getPixels,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"cloneBindings":TDV.Tour.Script.cloneBindings,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getMainViewer":TDV.Tour.Script.getMainViewer,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"shareSocial":TDV.Tour.Script.shareSocial,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"quizFinish":TDV.Tour.Script.quizFinish,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"toggleVR":TDV.Tour.Script.toggleVR,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"init":TDV.Tour.Script.init,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"executeJS":TDV.Tour.Script.executeJS,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"existsKey":TDV.Tour.Script.existsKey,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setValue":TDV.Tour.Script.setValue,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"historyGoForward":TDV.Tour.Script.historyGoForward,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"quizShowScore":TDV.Tour.Script.quizShowScore,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"showPopupImage":TDV.Tour.Script.showPopupImage,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getComponentByName":TDV.Tour.Script.getComponentByName,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"textToSpeech":TDV.Tour.Script.textToSpeech,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"isPanorama":TDV.Tour.Script.isPanorama,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"downloadFile":TDV.Tour.Script.downloadFile,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"startMeasurement":TDV.Tour.Script.startMeasurement,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"showWindow":TDV.Tour.Script.showWindow,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"quizStart":TDV.Tour.Script.quizStart,"translate":TDV.Tour.Script.translate,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setMapLocation":TDV.Tour.Script.setMapLocation,"getKey":TDV.Tour.Script.getKey,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"playAudioList":TDV.Tour.Script.playAudioList,"getMediaByName":TDV.Tour.Script.getMediaByName,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"initAnalytics":TDV.Tour.Script.initAnalytics,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags},"class":"Player","layout":"absolute","propagateClick":false,"id":"rootPlayer","data":{"displayTooltipInTouchScreens":true,"history":{},"textToSpeechConfig":{"pitch":1,"volume":1,"speechOnInfoWindow":false,"rate":1,"speechOnQuizQuestion":false,"speechOnTooltip":false,"stopBackgroundAudio":false},"defaultLocale":"en","name":"Player597","locales":{"en":"locale/en.txt"}},"scrollBarColor":"#000000","backgroundColor":["#FFFFFF"],"start":"this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_01FC0C22_0EB6_BDB9_4180_3289442C1318], 'cardboardAvailable')","gap":10,"minHeight":0,"minWidth":0,"defaultMenu":["fullscreen","mute","rotation"],"watermark":false,"downloadEnabled":true,"scrollBarMargin":2,"width":"100%","children":["this.MainViewer","this.IconButton_01FC0C22_0EB6_BDB9_4180_3289442C1318"],"height":"100%","hash": "04cb5bc7bbc09936d64240fe28f0c99bc3771e64b1cb3fc72461bdc808f81f28", "definitions": [{"label":trans('panorama_05D3796E_0E93_4789_4172_939D8BFBA104.label'),"class":"Panorama","vfov":180,"hfovMax":120,"id":"panorama_05D3796E_0E93_4789_4172_939D8BFBA104","data":{"label":"MVP-Potencial"},"thumbnailUrl":"media/panorama_05D3796E_0E93_4789_4172_939D8BFBA104_t.webp","hfov":360,"frames":[{"cube":{"class":"ImageResource","levels":[{"width":24576,"url":"media/panorama_05D3796E_0E93_4789_4172_939D8BFBA104_0/{face}/0/{row}_{column}.webp","rowCount":8,"class":"TiledImageResourceLevel","colCount":48,"tags":"ondemand","height":4096},{"width":12288,"url":"media/panorama_05D3796E_0E93_4789_4172_939D8BFBA104_0/{face}/1/{row}_{column}.webp","rowCount":4,"class":"TiledImageResourceLevel","colCount":24,"tags":"ondemand","height":2048},{"width":6144,"url":"media/panorama_05D3796E_0E93_4789_4172_939D8BFBA104_0/{face}/2/{row}_{column}.webp","rowCount":2,"class":"TiledImageResourceLevel","colCount":12,"tags":"ondemand","height":1024},{"width":3072,"url":"media/panorama_05D3796E_0E93_4789_4172_939D8BFBA104_0/{face}/3/{row}_{column}.webp","rowCount":1,"class":"TiledImageResourceLevel","colCount":6,"tags":["ondemand","preload"],"height":512}]},"thumbnailUrl":"media/panorama_05D3796E_0E93_4789_4172_939D8BFBA104_t.webp","class":"CubicPanoramaFrame"}]},{"class":"IconButton","propagateClick":false,"id":"IconButton_01FC0C22_0EB6_BDB9_4180_3289442C1318","data":{"name":"IconButton13821"},"right":"0.94%","maxHeight":80,"maxWidth":80,"horizontalAlign":"center","iconURL":"skin/IconButton_01FC0C22_0EB6_BDB9_4180_3289442C1318.png","minHeight":1,"backgroundOpacity":0,"verticalAlign":"middle","minWidth":1,"top":"1.57%","width":80,"height":80},{"items":[{"camera":"this.panorama_05D3796E_0E93_4789_4172_939D8BFBA104_camera","media":"this.panorama_05D3796E_0E93_4789_4172_939D8BFBA104","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')"}],"id":"mainPlayList","class":"PlayList"},{"vrPointerSelectionColor":"#FF6600","subtitlesFontFamily":"Arial","playbackBarProgressBorderRadius":0,"class":"ViewerArea","vrPointerColor":"#FFFFFF","height":"100%","playbackBarHeadShadowOpacity":0.7,"progressBorderRadius":2,"playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesGap":0,"vrPointerSelectionTime":2000,"progressLeft":"33%","subtitlesBackgroundColor":"#000000","toolTipBackgroundColor":"#F6F6F6","data":{"name":"Main Viewer"},"subtitlesTextShadowOpacity":1,"toolTipPaddingTop":4,"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadBorderColor":"#000000","minHeight":50,"minWidth":100,"toolTipPaddingRight":6,"subtitlesFontColor":"#FFFFFF","subtitlesTextShadowVerticalLength":1,"vrThumbstickRotationStep":20,"playbackBarBorderSize":0,"toolTipPaddingLeft":6,"toolTipFontSize":"1.11vmin","playbackBarBorderColor":"#FFFFFF","toolTipPaddingBottom":4,"playbackBarHeadShadowBlurRadius":3,"subtitlesBottom":50,"toolTipFontColor":"#606060","propagateClick":false,"progressBackgroundColorRatios":[0],"progressRight":"33%","playbackBarHeadHeight":15,"progressOpacity":0.7,"playbackBarLeft":0,"playbackBarHeadShadowColor":"#000000","id":"MainViewer","subtitlesTop":0,"playbackBarHeadBackgroundColorRatios":[0,1],"progressBarBorderColor":"#000000","vrGazePointerHideTime":1000,"progressBarBackgroundColorDirection":"horizontal","subtitlesTextShadowColor":"#000000","playbackBarBorderRadius":0,"playbackBarBackgroundOpacity":1,"playbackBarHeadShadow":true,"progressBarBackgroundColorRatios":[0],"firstTransitionDuration":0,"surfaceReticleColor":"#FFFFFF","subtitlesBackgroundOpacity":0.2,"subtitlesBorderColor":"#FFFFFF","progressBarBackgroundColor":["#3399FF"],"toolTipShadowColor":"#333138","progressBorderColor":"#000000","playbackBarBottom":5,"subtitlesFontSize":"3vmin","playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBackgroundColor":["#000000"],"progressBottom":10,"playbackBarBackgroundColor":["#FFFFFF"],"toolTipFontFamily":"Arial","progressHeight":2,"playbackBarHeadBorderRadius":0,"playbackBarProgressBackgroundColorRatios":[0],"toolTipTextShadowColor":"#000000","toolTipBorderColor":"#767676","playbackBarHeadBorderSize":0,"progressBorderSize":0,"playbackBarProgressBorderSize":0,"playbackBarHeight":10,"progressBarBorderRadius":2,"progressBarBorderSize":0,"playbackBarRight":0,"playbackBarHeadWidth":6,"playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderColor":"#000000","width":"100%","surfaceReticleSelectionColor":"#FFFFFF"},{"mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer","class":"PanoramaPlayer","keepModel3DLoadedWithoutLocation":true,"viewerArea":"this.MainViewer","aaEnabled":true,"buttonCardboardView":"this.IconButton_01FC0C22_0EB6_BDB9_4180_3289442C1318","displayPlaybackBar":true,"arrowKeysAction":"translate"},{"automaticRotationSpeed":0,"initialPosition":{"hfov":120,"pitch":3.69,"yaw":-101.37,"class":"PanoramaCameraPosition"},"manualRotationSpeed":0,"class":"PanoramaCamera","automaticZoomSpeed":0,"initialSequence":"this.sequence_05B1316B_0E92_C78F_418F_03EFFCD0FD0A","manualZoomSpeed":0,"id":"panorama_05D3796E_0E93_4789_4172_939D8BFBA104_camera","enterPointingToHorizon":true},{"movements":[{"easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}],"class":"PanoramaCameraSequence","id":"sequence_05B1316B_0E92_C78F_418F_03EFFCD0FD0A"}],"backgroundColorRatios":[0]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.1.14, Wed Jul 16 2025