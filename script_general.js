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
var script = {"children":["this.MainViewer","this.IconButton_01FC0C22_0EB6_BDB9_4180_3289442C1318"],"class":"Player","hash": "cc32dcbce015db4b55130768adec1477f0cd76a9de1e9c9576c01f0e3adc673f", "definitions": [{"vfov":180,"class":"Panorama","frames":[{"cube":{"levels":[{"colCount":48,"width":24576,"url":"media/panorama_05D3796E_0E93_4789_4172_939D8BFBA104_0/{face}/0/{row}_{column}.webp","rowCount":8,"height":4096,"tags":"ondemand","class":"TiledImageResourceLevel"},{"colCount":24,"width":12288,"url":"media/panorama_05D3796E_0E93_4789_4172_939D8BFBA104_0/{face}/1/{row}_{column}.webp","rowCount":4,"height":2048,"tags":"ondemand","class":"TiledImageResourceLevel"},{"colCount":12,"width":6144,"url":"media/panorama_05D3796E_0E93_4789_4172_939D8BFBA104_0/{face}/2/{row}_{column}.webp","rowCount":2,"height":1024,"tags":"ondemand","class":"TiledImageResourceLevel"},{"colCount":6,"width":3072,"url":"media/panorama_05D3796E_0E93_4789_4172_939D8BFBA104_0/{face}/3/{row}_{column}.webp","rowCount":1,"height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_05D3796E_0E93_4789_4172_939D8BFBA104_t.webp"}],"thumbnailUrl":"media/panorama_05D3796E_0E93_4789_4172_939D8BFBA104_t.webp","id":"panorama_05D3796E_0E93_4789_4172_939D8BFBA104","hfov":360,"data":{"label":"MVP-Potencial"},"hfovMax":120,"label":trans('panorama_05D3796E_0E93_4789_4172_939D8BFBA104.label')},{"items":[{"camera":"this.panorama_05D3796E_0E93_4789_4172_939D8BFBA104_camera","media":"this.panorama_05D3796E_0E93_4789_4172_939D8BFBA104","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')"}],"id":"mainPlayList","class":"PlayList"},{"class":"IconButton","id":"IconButton_01FC0C22_0EB6_BDB9_4180_3289442C1318","data":{"name":"IconButton13821"},"right":"0.94%","maxHeight":80,"maxWidth":80,"iconURL":"skin/IconButton_01FC0C22_0EB6_BDB9_4180_3289442C1318.png","horizontalAlign":"center","minHeight":1,"minWidth":1,"verticalAlign":"middle","top":"1.57%","propagateClick":false,"height":80,"width":80,"backgroundOpacity":0},{"toolTipFontSize":"1.11vmin","class":"ViewerArea","progressOpacity":0.7,"progressRight":"33%","progressBarBackgroundColorDirection":"horizontal","subtitlesBackgroundColor":"#000000","progressBarBorderColor":"#000000","playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBottom":5,"progressBarBackgroundColorRatios":[0],"vrPointerColor":"#FFFFFF","data":{"name":"Main Viewer"},"subtitlesGap":0,"toolTipTextShadowColor":"#000000","vrGazePointerHideTime":1000,"playbackBarHeight":10,"playbackBarBackgroundColor":["#FFFFFF"],"progressBorderColor":"#000000","progressBarBackgroundColor":["#3399FF"],"playbackBarProgressBorderSize":0,"playbackBarHeadWidth":6,"progressBackgroundColor":["#000000"],"subtitlesTextShadowOpacity":1,"minHeight":50,"playbackBarBackgroundColorDirection":"vertical","minWidth":100,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarRight":0,"propagateClick":false,"progressBottom":10,"progressHeight":2,"progressBarBorderRadius":2,"toolTipPaddingLeft":6,"progressBorderSize":0,"toolTipPaddingBottom":4,"progressBarBorderSize":0,"playbackBarBackgroundOpacity":1,"playbackBarProgressBorderRadius":0,"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadShadowOpacity":0.7,"playbackBarProgressBackgroundColorRatios":[0],"vrPointerSelectionTime":2000,"subtitlesFontColor":"#FFFFFF","playbackBarBorderColor":"#FFFFFF","subtitlesBottom":50,"progressBorderRadius":2,"vrPointerSelectionColor":"#FF6600","playbackBarProgressBorderColor":"#000000","playbackBarBorderRadius":0,"progressLeft":"33%","toolTipPaddingTop":4,"subtitlesTop":0,"firstTransitionDuration":0,"playbackBarHeadBorderColor":"#000000","id":"MainViewer","playbackBarHeadBorderRadius":0,"subtitlesTextShadowVerticalLength":1,"playbackBarBorderSize":0,"subtitlesTextShadowColor":"#000000","surfaceReticleColor":"#FFFFFF","toolTipPaddingRight":6,"subtitlesFontSize":"3vmin","vrThumbstickRotationStep":20,"subtitlesBackgroundOpacity":0.2,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadShadowBlurRadius":3,"toolTipShadowColor":"#333138","playbackBarHeadHeight":15,"playbackBarLeft":0,"playbackBarHeadShadowColor":"#000000","subtitlesBorderColor":"#FFFFFF","toolTipFontColor":"#606060","toolTipFontFamily":"Arial","playbackBarHeadBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadow":true,"toolTipBorderColor":"#767676","subtitlesFontFamily":"Arial","height":"100%","toolTipBackgroundColor":"#F6F6F6","progressBackgroundColorRatios":[0],"width":"100%"},{"class":"PanoramaPlayer","displayPlaybackBar":true,"arrowKeysAction":"translate","viewerArea":"this.MainViewer","aaEnabled":true,"buttonCardboardView":"this.IconButton_01FC0C22_0EB6_BDB9_4180_3289442C1318","keepModel3DLoadedWithoutLocation":true,"touchControlMode":"drag_rotation","mouseControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer"},{"automaticRotationSpeed":0,"manualZoomSpeed":0,"manualRotationSpeed":0,"class":"PanoramaCamera","enterPointingToHorizon":true,"automaticZoomSpeed":0,"initialSequence":"this.sequence_05B1316B_0E92_C78F_418F_03EFFCD0FD0A","id":"panorama_05D3796E_0E93_4789_4172_939D8BFBA104_camera","initialPosition":{"pitch":3.69,"yaw":-101.37,"hfov":120,"class":"PanoramaCameraPosition"}},{"movements":[{"easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}],"class":"PanoramaCameraSequence","id":"sequence_05B1316B_0E92_C78F_418F_03EFFCD0FD0A"}],"scripts":{"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"quizShowScore":TDV.Tour.Script.quizShowScore,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"clone":TDV.Tour.Script.clone,"setMapLocation":TDV.Tour.Script.setMapLocation,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"initAnalytics":TDV.Tour.Script.initAnalytics,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"registerKey":TDV.Tour.Script.registerKey,"openLink":TDV.Tour.Script.openLink,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"existsKey":TDV.Tour.Script.existsKey,"executeJS":TDV.Tour.Script.executeJS,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"playAudioList":TDV.Tour.Script.playAudioList,"createTween":TDV.Tour.Script.createTween,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"quizStart":TDV.Tour.Script.quizStart,"getPixels":TDV.Tour.Script.getPixels,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"cloneGeneric":TDV.Tour.Script.cloneGeneric,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"initQuiz":TDV.Tour.Script.initQuiz,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"isPanorama":TDV.Tour.Script.isPanorama,"mixObject":TDV.Tour.Script.mixObject,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"quizFinish":TDV.Tour.Script.quizFinish,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"init":TDV.Tour.Script.init,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"enableVR":TDV.Tour.Script.enableVR,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"shareSocial":TDV.Tour.Script.shareSocial,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"disableVR":TDV.Tour.Script.disableVR,"cloneBindings":TDV.Tour.Script.cloneBindings,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"setValue":TDV.Tour.Script.setValue,"historyGoBack":TDV.Tour.Script.historyGoBack,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getMainViewer":TDV.Tour.Script.getMainViewer,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"textToSpeech":TDV.Tour.Script.textToSpeech,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"historyGoForward":TDV.Tour.Script.historyGoForward,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"unregisterKey":TDV.Tour.Script.unregisterKey,"showPopupImage":TDV.Tour.Script.showPopupImage,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"toggleVR":TDV.Tour.Script.toggleVR,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"showWindow":TDV.Tour.Script.showWindow,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getComponentByName":TDV.Tour.Script.getComponentByName,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"startMeasurement":TDV.Tour.Script.startMeasurement,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getKey":TDV.Tour.Script.getKey,"getMediaByName":TDV.Tour.Script.getMediaByName,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"translate":TDV.Tour.Script.translate,"resumePlayers":TDV.Tour.Script.resumePlayers,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getOverlays":TDV.Tour.Script.getOverlays,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"downloadFile":TDV.Tour.Script.downloadFile,"setLocale":TDV.Tour.Script.setLocale,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot},"scrollBarColor":"#000000","id":"rootPlayer","data":{"defaultLocale":"en","name":"Player597","displayTooltipInTouchScreens":true,"history":{},"textToSpeechConfig":{"pitch":1,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"speechOnQuizQuestion":false,"speechOnTooltip":false,"volume":1,"rate":1},"locales":{"en":"locale/en.txt"}},"start":"this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_01FC0C22_0EB6_BDB9_4180_3289442C1318], 'cardboardAvailable')","gap":10,"backgroundColor":["#FFFFFF"],"minHeight":0,"layout":"absolute","minWidth":0,"defaultMenu":["fullscreen","mute","rotation"],"backgroundColorRatios":[0],"watermark":false,"propagateClick":false,"scrollBarMargin":2,"width":"100%","height":"100%"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.1.14, Tue Jul 15 2025