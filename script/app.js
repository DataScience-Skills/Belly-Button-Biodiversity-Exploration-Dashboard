function init() {
  const dropdown = d3.select('#selDataset');

  // Use d3.json to fetch the samples.json data from the URL
  d3.json('https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json').then(data => {
    const names = data.names;

    names.forEach(name => {
      dropdown.append('option').text(name).property('value', name);
    });

    const firstSample = names[0];
    const firstMetadata = data.metadata.find(meta => meta.id === parseInt(firstSample));

    createBarChart(data.samples[0]);
    createBubbleChart(data.samples[0]);
    createGauge(data.metadata[0]);
    updateDemographicInfo(firstMetadata);
  });
}

// Function to create the bar chart
function createBarChart(data) {
  const sampleValues = data.sample_values.slice(0, 10).reverse();
  const otuIDs = data.otu_ids.slice(0, 10).reverse().map(id => `OTU ${id}`);
  const otuLabels = data.otu_labels.slice(0, 10).reverse();

  const trace = {
    x: sampleValues,
    y: otuIDs,
    text: otuLabels,
    type: 'bar',
    orientation: 'h'
  };

  const layout = {
    title: 'Top 10 OTUs',
    xaxis: { title: 'Sample Values' },
    yaxis: { title: 'OTU IDs' }
  };

  const dataArr = [trace];

  Plotly.newPlot('bar', dataArr, layout);
}

// Function to create the bubble chart
function createBubbleChart(data) {
  const sampleValues = data.sample_values;
  const otuIDs = data.otu_ids;
  const otuLabels = data.otu_labels;

  const trace = {
    x: otuIDs,
    y: sampleValues,
    text: otuLabels,
    mode: 'markers',
    marker: {
      size: sampleValues,
      color: otuIDs,
      colorscale: 'Earth'
    }
  };

  const layout = {
    title: 'OTU Bubble Chart',
    xaxis: { title: 'OTU IDs' },
    yaxis: { title: 'Sample Values' }
  };

  const dataArr = [trace];

  Plotly.newPlot('bubble', dataArr, layout);
}

// Function to update the demographic info
function updateDemographicInfo(metadata) {
  const metadataContainer = d3.select('#sample-metadata');
  metadataContainer.html('');

  Object.entries(metadata).forEach(([key, value]) => {
    metadataContainer.append('p').text(`${key}: ${value}`);
  });
}

// Function to display a gauge repicting the weekly washing frequency of the select individual
function createGauge(data) {
  const washing = data.wfreq;

  var gaugeData = [
    {
      domain: { x: [0, 1], y: [0, 1] },
      value: washing,
      title: { text: "Belly Button Washing Frequency: Scrubs per Week" },
      type: "indicator",
      text: ['0-1', '2-3', '3-4', '4-5', '5-6', '6-7', '7-8', '8-9', ''],
      textposition: 'inside',
      mode: "gauge+number"
    }
  ];

  var layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
  Plotly.newPlot('gauge', gaugeData, layout);
}

// Function to handle the dropdown selection change
function optionChanged(selectedValue) {
  d3.json('https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json').then(data => {
    const samples = data.samples;
    const metadata = data.metadata;

    const selectedSample = samples.find(sample => sample.id === selectedValue);
    const selectedMetadata = metadata.find(meta => meta.id === parseInt(selectedValue));

    createBarChart(selectedSample);
    createBubbleChart(selectedSample);
    createGauge(selectedMetadata);
    updateDemographicInfo(selectedMetadata);
  });
}

// Call the init function to initialize the page
init();