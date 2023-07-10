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


// Call the init function to initialize the page
init();