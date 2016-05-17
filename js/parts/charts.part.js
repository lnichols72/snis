jQuery(document).ready(function($) {

    // Load the Google Charts Visualization API and the corechart package.
    google.charts.load("current", {packages:["corechart"]});

    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(rankingChart); //Ranking Chart
    google.charts.setOnLoadCallback(connectionsChart); //Connectons Chart
    google.charts.setOnLoadCallback(investmentsChart); //Investments Chart
    google.charts.setOnLoadCallback(beenToDetroitChart); //Been to Detroit Chart

    // Ranking Chart
    function rankingChart() {

        // Create the data table.
        var data = google.visualization.arrayToDataTable([
            ['Business Leader Awareness', 'Percentage of Business Leaders'],
            ['',     16],
            ['',   84]
        ]);

        // Set chart options
        var options = {
            //title: '',
            pieHole: 0.65,
            'chartArea': {'width': '90%', 'height': '90%'},
            'width': '100%',
            'height': 300,
            pieStartAngle: 0,
            legend: 'none',
            pieSliceText: 'none', tooltip: { trigger: 'none' },
            backgroundColor: 'transparent',
            pieSliceBorderColor: 'transparent',
            slices: {
                0: {
                    color: '#fff',
                    textStyle: {
                        color: '#fff',
                        //auraColor: 'red'
                    }
                },
                1: {
                    color: '#0d9bbe',
                    textStyle: {
                        color: '#fff',
                        //auraColor: 'red'
                    }
                }
            },

        };

        //Define chart container
        var chartContainer = document.getElementById('ranking-chart');

        // Instantiate our chart, passing in some options.
        var chart = new google.visualization.PieChart(chartContainer);


        // Listen for the 'ready' event, and add active class to chart container parent node
        google.visualization.events.addListener(chart, 'ready', function() {
            var chartContainerParent = chartContainer.parentNode;
            if (chartContainerParent.classList)
                chartContainerParent.classList.add('active');
            else
                chartContainerParent.className += ' ' + 'active';

            //Add active class to .fun-fact
            var funFact = document.querySelectorAll('.fun-fact')[0];
            if (funFact.classList)
                funFact.classList.add('active');
            else
                funFact.className += ' ' + 'active';
        });

        //Draw the chart
        chart.draw(data, options);

    }

    // Connections Chart
    function connectionsChart() {

        // Create the data table.
        var data = google.visualization.arrayToDataTable([
            ['Business Leaders with Connections to Detroit', 'Percentage of Business Leaders'],
            ['',     91],
            ['',   9]
        ]);

        // Set chart options
        var options = {
            //title: '',
            pieHole: 0.65,
            'chartArea': {'width': '90%', 'height': '90%'},
            'width':'100%',
            'height':200,
            pieStartAngle: 0,
            legend: 'none',
            pieSliceText: 'none', tooltip: { trigger: 'none' },
            backgroundColor: 'transparent',
            pieSliceBorderColor: 'transparent',
            slices: {
                0: {
                    color: '#0d9bbe',
                    textStyle: {
                        color: '#fff',
                        //auraColor: 'red'
                    }
                },
                1: {
                    color: '#b5b5b6',
                    textStyle: {
                        color: '#fff',
                        //auraColor: 'red'
                    }
                }
            },

        };

        //Define chart container
        var chartContainer = document.getElementById('connections-chart');

        // Instantiate our chart, passing in some options.
        var chart = new google.visualization.PieChart(chartContainer);


        // Listen for the 'ready' event, and add active class to chart container parent node
        google.visualization.events.addListener(chart, 'ready', function() {
            var chartContainerParent = chartContainer.parentNode;
            if (chartContainerParent.classList)
                chartContainerParent.classList.add('active');
            else
                chartContainerParent.className += ' ' + 'active';
        });

        //Draw the chart
        chart.draw(data, options);

    }

    // Investments Chart
    function investmentsChart() {

        // Create the data table.
        var data = google.visualization.arrayToDataTable([
            ['Business Leaders With Investments in Detroit', 'Percentage of Business Leaders'],
            ['',     45],
            ['',   55]
        ]);

        // Set chart options
        var options = {
            //title: '',
            pieHole: 0.65,
            'chartArea': {'width': '90%', 'height': '90%'},
            'width':'100%',
            'height':200,
            pieStartAngle: 0,
            legend: 'none',
            pieSliceText: 'none', tooltip: { trigger: 'none' },
            backgroundColor: 'transparent',
            pieSliceBorderColor: 'transparent',
            slices: {
                0: {
                    color: '#0d9bbe',
                    textStyle: {
                        color: '#fff',
                        //auraColor: 'red'
                    }
                },
                1: {
                    color: '#b5b5b6',
                    textStyle: {
                        color: '#fff',
                        //auraColor: 'red'
                    }
                }
            },

        };

        //Define chart container
        var chartContainer = document.getElementById('investments-chart');

        // Instantiate our chart, passing in some options.
        var chart = new google.visualization.PieChart(chartContainer);


        // Listen for the 'ready' event, and add active class to chart container parent node
        google.visualization.events.addListener(chart, 'ready', function() {
            var chartContainerParent = chartContainer.parentNode;
            if (chartContainerParent.classList)
                chartContainerParent.classList.add('active');
            else
                chartContainerParent.className += ' ' + 'active';
        });

        //Draw the chart
        chart.draw(data, options);

    }

    // Been to Detroit Chart
    function beenToDetroitChart() {

        // Create the data table.
        var data = google.visualization.arrayToDataTable([
            ['Business Leaders That Have Been to Detroit', 'Percentage of Business Leaders'],
            ['',     62],
            ['',   38]
        ]);

        // Set chart options
        var options = {
            //title: '',
            pieHole: 0.65,
            'chartArea': {'width': '90%', 'height': '90%'},
            'width':'100%',
            'height':200,
            pieStartAngle: 0,
            legend: 'none',
            pieSliceText: 'none', tooltip: { trigger: 'none' },
            backgroundColor: 'transparent',
            pieSliceBorderColor: 'transparent',
            slices: {
                0: {
                    color: '#0d9bbe',
                    textStyle: {
                        color: '#fff',
                        //auraColor: 'red'
                    }
                },
                1: {
                    color: '#b5b5b6',
                    textStyle: {
                        color: '#fff',
                        //auraColor: 'red'
                    }
                }
            },

        };

        //Define chart container
        var chartContainer = document.getElementById('been-to-detroit-chart');

        // Instantiate our chart, passing in some options.
        var chart = new google.visualization.PieChart(chartContainer);


        // Listen for the 'ready' event, and add active class to chart container parent node
        google.visualization.events.addListener(chart, 'ready', function() {
            var chartContainerParent = chartContainer.parentNode;
            if (chartContainerParent.classList)
                chartContainerParent.classList.add('active');
            else
                chartContainerParent.className += ' ' + 'active';
        });

        //Draw the chart
        chart.draw(data, options);

    }

    //Redraw charts on window resize
    $(window).resize(function(){
        rankingChart(); //Ranking Chart
        connectionsChart(); //Connections Chart
        investmentsChart(); //Investments Chart
        beenToDetroitChart(); //Been to Detroit Chart
    });

});