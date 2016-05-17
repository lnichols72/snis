jQuery(document).ready(function($) {

    ///////////////////////////////////////////////////////
    // STICKY NAVIGATION
    ///////////////////////////////////////////////////////

    function stickyNav() {
        var $element = $('#site-header'),
        $stickyNav = new Waypoint.Sticky({
            element: $element[0],
            // offset: -($element.outerHeight() + $('#hero-unit').outerHeight())
            offset: -($('#hero-unit').outerHeight())
        });
    }
    stickyNav();

    ///////////////////////////////////////////////////////
    // FADE OVERLAYS
    ///////////////////////////////////////////////////////

    function fadeOverlays() {
        var $outlookElement = $('#outlook'),
            $positivePerceptionsElement = $('#positive-perceptions');
        $outlookElement.addClass('cover');
        $positivePerceptionsElement.addClass('cover');

        //Outlook Element
        var outlookOvrlayWaypoint = new Waypoint({
            element: $outlookElement,
            offset: '30%',
            handler: function(direction) {
                //console.log('outlook element');
                $outlookElement.toggleClass('active');
            }
        });

        //Positive Perceptions Element
        var positivePerceptionsOvrlayWaypoint = new Waypoint({
            element: $positivePerceptionsElement,
            offset: '30%',
            handler: function(direction) {
                //console.log('positive perceptions element');
                $positivePerceptionsElement.toggleClass('active');
            }
        });
    }
    fadeOverlays();

    ///////////////////////////////////////////////////////
    // PAGE NAVIGATION
    ///////////////////////////////////////////////////////

    function pageNav() {
        var $pageNav = $('#nav-page'),
            $backToTop = $('#back-to-top'),
            $attractionFactorsElement = $('#attraction-factors'),
            $attractionFactorsLink = $pageNav.find('.pagenav-attraction-factors a'),
            $investElement = $('#invest'),
            $investLink = $pageNav.find('.pagenav-invest a'),
            $rankingElement = $('#ranking'),
            $rankingLink = $pageNav.find('.pagenav-ranking a'),
            $positivePerceptionsElement = $('#positive-perceptions'),
            $positivePerceptionsLink = $pageNav.find('.pagenav-positive-perceptions a'),
            $favorableViewElement = $('#favorable-view'),
            $favorableViewLink = $pageNav.find('.pagenav-favorable-view a'),
            $recoveryFeaturesElement = $('#recovery-features'),
            $recoveryFeaturesLink = $pageNav.find('.pagenav-recovery-features a'),
            $outlookElement = $('#outlook'),
            $outlookLink = $pageNav.find('.pagenav-outlook a'),
            $reportElement = $('#report'),
            $reportLink = $pageNav.find('.pagenav-report a');

        //Stick page navigation and display back to top link
        var attractionFactorsWaypoint = new Waypoint({
            element: $attractionFactorsElement,
            offset: 0,
            handler: function(direction) {
                $pageNav.toggleClass('stuck');
                $backToTop.toggleClass('active');
            }
        });

        //Remove active class function
        function removeActive() {
            $pageNav.find('.active').removeClass('active');
        }

        //Remove active class at top waypoint
        var removeActiveWaypoint = new Waypoint({
            element: $attractionFactorsElement,
            offset: 10,
            handler: function(direction) {
                removeActive();
            }
        });

        //Active Sections
        var attractionFactorsInview = new Waypoint.Inview({ //Attraction Factors Component
            element: $attractionFactorsElement,
            enter: function(direction) {},
            entered: function(direction) {
                // console.log('attraction factors entered ' + direction);
                if ($attractionFactorsLink.hasClass('active')){
                    return;
                } else {
                    removeActive();
                    $attractionFactorsLink.addClass('active');
                }
            },
            exit: function(direction) {
                // console.log('attraction factors exit ' + direction);
                if ($attractionFactorsLink.hasClass('active')){
                    return;
                } else {
                    removeActive();
                    $attractionFactorsLink.addClass('active');
                }
            },
            exited: function(direction) {}
        });
        var attractionFactorsNavWaypoint = new Waypoint({
            element: $attractionFactorsElement,
            offset: -20,
            handler: function(direction) {
                //console.log('attraction factorswaypoint hit');
                if ($attractionFactorsLink.hasClass('active')){
                    return;
                } else {
                    removeActive();
                    $attractionFactorsLink.addClass('active');
                }
            }
        });

        var investInview = new Waypoint.Inview({ //Invest Component
            element: $investElement,
            enter: function(direction) {},
            entered: function(direction) {
                // console.log('invest entered ' + direction);
                if ($investLink.hasClass('active')){
                    return;
                } else {
                    removeActive();
                    $investLink.addClass('active');
                }
            },
            exit: function(direction) {
                // console.log('invest exit ' + direction);
                if ($investLink.hasClass('active')){
                    return;
                } else {
                    removeActive();
                    $investLink.addClass('active');
                }
            },
            exited: function(direction) {}
        });
        var investNavWaypoint = new Waypoint({
            element: $investElement,
            offset: -20,
            handler: function(direction) {
                //console.log('invest waypoint hit');
                if ($investLink.hasClass('active')){
                    return;
                } else {
                    removeActive();
                    $investLink.addClass('active');
                }
            }
        });

        var rankingInview = new Waypoint.Inview({ //Ranking Component
            element: $rankingElement,
            enter: function(direction) {},
            entered: function(direction) {
                // console.log('ranking entered ' + direction);
                if ($rankingLink.hasClass('active')){
                    return;
                } else {
                    removeActive();
                    $rankingLink.addClass('active');
                }
            },
            exit: function(direction) {
                // console.log('ranking exit ' + direction);
                if ($rankingLink.hasClass('active')){
                    return;
                } else {
                    removeActive();
                    $rankingLink.addClass('active');
                }
            },
            exited: function(direction) {}
        });
        var rankingWaypoint = new Waypoint({
            element: $rankingElement,
            offset: -20,
            handler: function(direction) {
                //console.log('ranking waypoint hit');
                if ($rankingLink.hasClass('active')){
                    return;
                } else {
                    removeActive();
                    $rankingLink.addClass('active');
                }
            }
        });

        var positivePerceptionsInview = new Waypoint.Inview({ //Positive Perceptions Component
            element: $positivePerceptionsElement,
            enter: function(direction) {},
            entered: function(direction) {
                // console.log('positive perceptions entered ' + direction);
                if ($positivePerceptionsLink.hasClass('active')){
                    return;
                } else {
                    removeActive();
                    $positivePerceptionsLink.addClass('active');
                }
            },
            exit: function(direction) {
                // console.log('positive perceptions exit ' + direction);
                if ($positivePerceptionsLink.hasClass('active')){
                    return;
                } else {
                    removeActive();
                    $positivePerceptionsLink.addClass('active');
                }
            },
            exited: function(direction) {}
        });
        var positivePerceptionsNavWaypoint = new Waypoint({
            element: $positivePerceptionsElement,
            offset: -20,
            handler: function(direction) {
                //console.log('positive perceptions waypoint hit');
                if ($positivePerceptionsLink.hasClass('active')){
                    return;
                } else {
                    removeActive();
                    $positivePerceptionsLink.addClass('active');
                }
            }
        });

        var favorableViewInview = new Waypoint.Inview({ //Favorable View Component
            element: $favorableViewElement,
            enter: function(direction) {},
            entered: function(direction) {
                // console.log('favorable view entered ' + direction);
                if ( $favorableViewLink.hasClass('active')){
                    return;
                } else {
                    removeActive();
                    $favorableViewLink.addClass('active');
                }
            },
            exit: function(direction) {
                // console.log('favorable view exit ' + direction);
                if ( $favorableViewLink.hasClass('active')){
                    return;
                } else {
                    removeActive();
                    $favorableViewLink.addClass('active');
                }
            },
            exited: function(direction) {}
        });
        var favorableViewNavWaypoint = new Waypoint({
            element: $favorableViewElement,
            offset: -20,
            handler: function(direction) {
                //console.log('favorable view waypoint hit');
                if ($favorableViewLink.hasClass('active')){
                    return;
                } else {
                    removeActive();
                    $favorableViewLink.addClass('active');
                }
            }
        });

        var $recoveryFeaturesInview = new Waypoint.Inview({ //Recovery Features Component
            element: $recoveryFeaturesElement,
            enter: function(direction) {},
            entered: function(direction) {
                // console.log('recovery feature entered ' + direction);
                if ($recoveryFeaturesLink.hasClass('active')){
                    return;
                } else {
                    removeActive();
                    $recoveryFeaturesLink.addClass('active');
                }
            },
            exit: function(direction) {
                // console.log('recovery feature exit ' + direction);
                if ($recoveryFeaturesLink.hasClass('active')){
                    return;
                } else {
                    removeActive();
                    $recoveryFeaturesLink.addClass('active');
                }
            },
            exited: function(direction) {}
        });
        var recoveryNavWaypoint = new Waypoint({
            element: $recoveryFeaturesElement,
            offset: -20,
            handler: function(direction) {
                //console.log('recovery features waypoint hit');
                if ($recoveryFeaturesLink.hasClass('active')){
                    return;
                } else {
                    removeActive();
                    $recoveryFeaturesLink.addClass('active');
                }
            }
        });

        var $outlookInview = new Waypoint.Inview({ //Outlook Component
            element: $outlookElement,
            enter: function(direction) {},
            entered: function(direction) {
                // console.log('outlook entered ' + direction);
                if ($outlookLink.hasClass('active')){
                    return;
                } else {
                    removeActive();
                    $outlookLink.addClass('active');
                }
            },
            exit: function(direction) {
                // console.log('outlook exit ' + direction);
                if ($outlookLink.hasClass('active')){
                    return;
                } else {
                    removeActive();
                    $outlookLink.addClass('active');
                }
            },
            exited: function(direction) {}
        });
        var outlookNavWaypoint = new Waypoint({
            element: $outlookElement,
            offset: -20,
            handler: function(direction) {
                //console.log('outlook waypoint hit');
                if ($outlookLink.hasClass('active')){
                    return;
                } else {
                    removeActive();
                    $outlookLink.addClass('active');
                }
            }
        });

        var $reportInview = new Waypoint.Inview({ //Report Component
            element: $reportElement,
            enter: function(direction) {},
            entered: function(direction) {
                // console.log('report entered ' + direction);
                if ($reportLink.hasClass('active')){
                    return;
                } else {
                    removeActive();
                    $reportLink.addClass('active');
                }
            },
            exit: function(direction) {
                // console.log('report exit ' + direction);
                if ($reportLink.hasClass('active')){
                    return;
                } else {
                    removeActive();
                    $reportLink.addClass('active');
                }
            },
            exited: function(direction) {}
        });
        var reportNavWaypoint = new Waypoint({
            element: $reportElement,
            offset: -20,
            handler: function(direction) {
                //console.log('report waypoint hit');
                $pageNav.toggleClass('hide'); //hide page navigation
                if ($reportLink.hasClass('active')){
                    return;
                } else {
                    removeActive();
                    $reportLink.addClass('active');
                }
            }
        });

    }
    pageNav();


    ///////////////////////////////////////////////////////
    // ANIMATE ELEMENTS ON SCROLL
    ///////////////////////////////////////////////////////

    var $globalOffset = '65%';

    //ATTRACTION FACTORS COMPONENT
    function attractionFactorsComponentWaypoint() {
        var $fadeElement = $('#attraction-factors [data-fade-in-up="true"]');
        $fadeElement.css({'opacity': '0'});
        var attractionFactorsWaypoint = new Waypoint({
            element: $fadeElement,
           offset: $globalOffset,
            handler: function(direction) {
                $fadeElement.each(function(i) {
                    $(this).clearQueue().delay(100*i).queue(function(){
                        $(this).addClass('animated fadeInUp');
                    });
                });
            }
        });
    }
    attractionFactorsComponentWaypoint();

    //INVEST COMPONENT
    function investComponentWaypoint() {
        var $fadeElement = $('#invest [data-fade="true"]');
        $fadeElement.css({'opacity': '0'});
        var investWaypoint = new Waypoint({
            element: $fadeElement,
           offset: $globalOffset,
            handler: function(direction) {
                $fadeElement.each(function(i) {
                    $(this).clearQueue().delay(100*i).queue(function(){
                        $(this).addClass('animated fadeIn');
                    });
                });
            }
        });
    }
    investComponentWaypoint();

    //RANKING COMPONENT
    function rankingComponentWaypoint() {
        var $rotateElement = $('#ranking [data-rotate="true"]');
        $rotateElement.css({'opacity': '0'});
        var rankingWaypoint = new Waypoint({
            element: $rotateElement,
           offset: $globalOffset,
            handler: function(direction) {
                $rotateElement.each(function(i) {
                    $(this).clearQueue().delay(100*i).queue(function(){
                        $(this).addClass('animated rotateIn');
                    });
                });
            }
        });
    }
    rankingComponentWaypoint();

    //POSITIVE PERCEPTIONS COMPONENT
    function positivePerceptionsComponentWaypoint() {
        var $fadeElement = $('#positive-perceptions [data-fade-in-up="true"]');
        $fadeElement.css({'opacity': '0'});
        var positivePerceptionsWaypoint = new Waypoint({
            element: $fadeElement,
           offset: $globalOffset,
            handler: function(direction) {
                $fadeElement.each(function(i) {
                    $(this).clearQueue().delay(100*i).queue(function(){
                        $(this).addClass('animated fadeInUp');
                    });
                });
            }
        });
    }
    positivePerceptionsComponentWaypoint();

    //FAVORABLE VIEW COMPONENT
    function favorableViewComponentWaypoint() {
        var $fadeElement = $('#favorable-view [data-fade-in-up="true"]');
        $fadeElement.css({'opacity': '0'});
        var favorabletViewfadeWaypoint = new Waypoint({
            element: $fadeElement,
           offset: $globalOffset,
            handler: function(direction) {
                $fadeElement.each(function(i) {
                    $(this).clearQueue().delay(100*i).queue(function(){
                        $(this).addClass('animated fadeInUp');
                    });
                });
            }
        });
        var $rotateElement = $('#favorable-view [data-rotate="true"]');
        $rotateElement.css({'opacity': '0'});
        var rotateWaypoint = new Waypoint({
            element: $rotateElement,
           offset: $globalOffset,
            handler: function(direction) {
                $rotateElement.each(function(i) {
                    $(this).clearQueue().delay(100*i).queue(function(){
                        $(this).addClass('animated rotateIn');
                    });
                });
            }
        });
    }
    favorableViewComponentWaypoint();

    //RECOVERY FEATURES COMPONENT
    function recoveryFeaturesComponentWaypoint() {
        var $fadeElement = $('#recovery-features [data-fade-in-up="true"]');
        $fadeElement.css({'opacity': '0'});
        var recoveryFeaturesWaypoint = new Waypoint({
            element: $fadeElement,
           offset: $globalOffset,
            handler: function(direction) {
                $fadeElement.each(function(i) {
                    $(this).clearQueue().delay(100*i).queue(function(){
                        $(this).addClass('animated fadeInUp');
                    });
                });
            }
        });
    }
    recoveryFeaturesComponentWaypoint();

    //REPORT COMPONENT
    function reportComponentWaypoint() {
        var $fadeElement = $('#report [data-fade-in-up="true"]');
        $fadeElement.css({'opacity': '0'});
        var reportWaypoint = new Waypoint({
            element: $fadeElement,
           offset: $globalOffset,
            handler: function(direction) {
                $fadeElement.each(function(i) {
                    $(this).clearQueue().delay(100*i).queue(function(){
                        $(this).addClass('animated fadeInUp');
                    });
                });
            }
        });
    }
    reportComponentWaypoint();

    //OUTLOOK COMPONENT
    function outlookComponentWaypoint() {
        var $fadeElement = $('#outlook [data-fade="true"]');
        $fadeElement.css({'opacity': '0'});
        var outlookWaypoint = new Waypoint({
            element: $fadeElement,
            offset: $globalOffset,
            handler: function(direction) {
                $fadeElement.each(function(i) {
                    $(this).clearQueue().delay(100*i).queue(function(){
                        $(this).addClass('animated fadeIn');
                    });
                });
            }
        });
    }
    outlookComponentWaypoint();


    //var Waypoint = new Waypoint({
    //    element: $fadeElement,
    //    offset: 0,
    //    handler: function(direction) {
    //
    //    }
    //});


    //var headerInview = new Waypoint.Inview({
    //    element: $('#attraction-factors')[0],
    //    enter: function(direction) {
    //        // console.log('Enter triggered with direction ' + direction);
    //    },
    //    entered: function(direction) {
    //        // console.log('Entered triggered with direction ' + direction);
    //    },
    //    exit: function(direction) {
    //        // console.log('Exit triggered with direction ' + direction);
    //    },
    //    exited: function(direction) {
    //        // console.log('Exited triggered with direction ' + direction);
    //    }
    //});

});