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
var script = {"children":["this.MainViewer"],"hash": "140bd37bfc3ab0443d3288ac2fd278a87f0c6c2e63d763dfb50cbf7ef5de6e09", "definitions": [{"items":[{"camera":"this.panorama_05D3796E_0E93_4789_4172_939D8BFBA104_camera","media":"this.panorama_05D3796E_0E93_4789_4172_939D8BFBA104","end":"this.trigger('tourEnded')","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer"}],"id":"mainPlayList","class":"PlayList"},{"aaEnabled":true,"class":"PanoramaPlayer","displayPlaybackBar":true,"arrowKeysAction":"translate","viewerArea":"this.MainViewer","keepModel3DLoadedWithoutLocation":true,"touchControlMode":"drag_rotation","mouseControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer"},{"toolTipFontSize":"1.11vmin","progressRight":"33%","progressOpacity":0.7,"playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBarBackgroundColorDirection":"horizontal","subtitlesBackgroundColor":"#000000","progressBarBorderColor":"#000000","subtitlesGap":0,"playbackBarBottom":5,"progressBarBackgroundColorRatios":[0],"vrPointerColor":"#FFFFFF","data":{"name":"Main Viewer"},"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeight":10,"progressBorderColor":"#000000","progressBarBackgroundColor":["#3399FF"],"playbackBarProgressBorderSize":0,"playbackBarHeadWidth":6,"subtitlesTextShadowOpacity":1,"minHeight":50,"progressBackgroundColor":["#000000"],"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarBackgroundColorDirection":"vertical","minWidth":100,"playbackBarRight":0,"propagateClick":false,"toolTipPaddingTop":4,"progressHeight":2,"progressBarBorderRadius":2,"toolTipPaddingLeft":6,"progressBorderSize":0,"progressBarBorderSize":0,"playbackBarBackgroundOpacity":1,"playbackBarProgressBorderRadius":0,"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadShadowOpacity":0.7,"vrPointerSelectionColor":"#FF6600","playbackBarProgressBackgroundColorRatios":[0],"progressBottom":10,"vrPointerSelectionTime":2000,"playbackBarBorderColor":"#FFFFFF","subtitlesBottom":50,"progressBorderRadius":2,"playbackBarProgressBorderColor":"#000000","playbackBarBorderRadius":0,"progressLeft":"33%","firstTransitionDuration":0,"subtitlesTop":0,"playbackBarHeadBorderColor":"#000000","subtitlesTextShadowVerticalLength":1,"id":"MainViewer","playbackBarHeadBorderRadius":0,"playbackBarBorderSize":0,"subtitlesFontColor":"#FFFFFF","subtitlesTextShadowColor":"#000000","class":"ViewerArea","surfaceReticleColor":"#FFFFFF","toolTipPaddingRight":6,"toolTipTextShadowColor":"#000000","subtitlesFontSize":"3vmin","vrThumbstickRotationStep":20,"subtitlesBackgroundOpacity":0.2,"toolTipPaddingBottom":4,"surfaceReticleSelectionColor":"#FFFFFF","toolTipShadowColor":"#333138","playbackBarHeadShadowBlurRadius":3,"playbackBarHeadHeight":15,"playbackBarLeft":0,"playbackBarHeadShadowColor":"#000000","subtitlesBorderColor":"#FFFFFF","playbackBarHeadBackgroundColorRatios":[0,1],"toolTipBorderColor":"#767676","playbackBarHeadBorderSize":0,"toolTipFontColor":"#606060","playbackBarHeadShadow":true,"toolTipFontFamily":"Arial","subtitlesFontFamily":"Arial","height":"100%","toolTipBackgroundColor":"#F6F6F6","progressBackgroundColorRatios":[0],"width":"100%"},{"vfov":180,"data":{"label":"MVP-Potencial"},"class":"Panorama","hfov":360,"frames":[{"cube":{"levels":[{"width":24576,"url":"media/panorama_05D3796E_0E93_4789_4172_939D8BFBA104_0/{face}/0/{row}_{column}.webp","rowCount":8,"height":4096,"tags":"ondemand","colCount":48,"class":"TiledImageResourceLevel"},{"width":12288,"url":"media/panorama_05D3796E_0E93_4789_4172_939D8BFBA104_0/{face}/1/{row}_{column}.webp","rowCount":4,"height":2048,"tags":"ondemand","colCount":24,"class":"TiledImageResourceLevel"},{"width":6144,"url":"media/panorama_05D3796E_0E93_4789_4172_939D8BFBA104_0/{face}/2/{row}_{column}.webp","rowCount":2,"height":1024,"tags":"ondemand","colCount":12,"class":"TiledImageResourceLevel"},{"width":3072,"url":"media/panorama_05D3796E_0E93_4789_4172_939D8BFBA104_0/{face}/3/{row}_{column}.webp","rowCount":1,"height":512,"tags":["ondemand","preload"],"colCount":6,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_05D3796E_0E93_4789_4172_939D8BFBA104_t.webp","class":"CubicPanoramaFrame"}],"hfovMax":130,"thumbnailUrl":"media/panorama_05D3796E_0E93_4789_4172_939D8BFBA104_t.webp","label":trans('panorama_05D3796E_0E93_4789_4172_939D8BFBA104.label'),"id":"panorama_05D3796E_0E93_4789_4172_939D8BFBA104"},{"id":"panorama_05D3796E_0E93_4789_4172_939D8BFBA104_camera","class":"PanoramaCamera","enterPointingToHorizon":true,"initialSequence":"this.sequence_05B1316B_0E92_C78F_418F_03EFFCD0FD0A","initialPosition":{"pitch":3.69,"yaw":-101.37,"class":"PanoramaCameraPosition"}},{"movements":[{"easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}],"class":"PanoramaCameraSequence","id":"sequence_05B1316B_0E92_C78F_418F_03EFFCD0FD0A"}],"scripts":{"getMediaByName":TDV.Tour.Script.getMediaByName,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setLocale":TDV.Tour.Script.setLocale,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"startMeasurement":TDV.Tour.Script.startMeasurement,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"clone":TDV.Tour.Script.clone,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"textToSpeech":TDV.Tour.Script.textToSpeech,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"openLink":TDV.Tour.Script.openLink,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"getOverlays":TDV.Tour.Script.getOverlays,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"createTween":TDV.Tour.Script.createTween,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"resumePlayers":TDV.Tour.Script.resumePlayers,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getPixels":TDV.Tour.Script.getPixels,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"mixObject":TDV.Tour.Script.mixObject,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"init":TDV.Tour.Script.init,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setMapLocation":TDV.Tour.Script.setMapLocation,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"enableVR":TDV.Tour.Script.enableVR,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"disableVR":TDV.Tour.Script.disableVR,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"historyGoForward":TDV.Tour.Script.historyGoForward,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"historyGoBack":TDV.Tour.Script.historyGoBack,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"toggleVR":TDV.Tour.Script.toggleVR,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setValue":TDV.Tour.Script.setValue,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"initAnalytics":TDV.Tour.Script.initAnalytics,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"registerKey":TDV.Tour.Script.registerKey,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"unregisterKey":TDV.Tour.Script.unregisterKey,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"getMainViewer":TDV.Tour.Script.getMainViewer,"cloneGeneric":TDV.Tour.Script.cloneGeneric,"existsKey":TDV.Tour.Script.existsKey,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"cloneBindings":TDV.Tour.Script.cloneBindings,"initQuiz":TDV.Tour.Script.initQuiz,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"isPanorama":TDV.Tour.Script.isPanorama,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"downloadFile":TDV.Tour.Script.downloadFile,"getComponentByName":TDV.Tour.Script.getComponentByName,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"executeJS":TDV.Tour.Script.executeJS,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"quizShowScore":TDV.Tour.Script.quizShowScore,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getKey":TDV.Tour.Script.getKey,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"shareSocial":TDV.Tour.Script.shareSocial,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"playAudioList":TDV.Tour.Script.playAudioList,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"quizStart":TDV.Tour.Script.quizStart,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"showPopupImage":TDV.Tour.Script.showPopupImage,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"quizFinish":TDV.Tour.Script.quizFinish,"translate":TDV.Tour.Script.translate,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"showWindow":TDV.Tour.Script.showWindow,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio},"scrollBarColor":"#000000","id":"rootPlayer","data":{"defaultLocale":"en","textToSpeechConfig":{"pitch":1,"speechOnInfoWindow":false,"rate":1,"speechOnQuizQuestion":false,"speechOnTooltip":false,"volume":1,"stopBackgroundAudio":false},"displayTooltipInTouchScreens":true,"history":{},"name":"Player597","locales":{"en":"locale/en.txt"}},"class":"Player","start":"this.init()","gap":10,"minHeight":0,"layout":"absolute","backgroundColorRatios":[0],"backgroundColor":["#FFFFFF"],"minWidth":0,"propagateClick":false,"defaultMenu":["fullscreen","mute","rotation"],"watermark":false,"scrollBarMargin":2,"width":"100%","height":"100%"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.1.14, Tue Jul 15 2025