# **Interactive Dashboard for Belly Button Biodiversity**
## [Explore the dashboard here!](https://robert-z-lehr.github.io/Biodiversity-Exploration-Dashboard/)

## __Purpose:__
An interactive dashboard is used to explore a dataset which contains information about the microbes that colonize human navels, [navel biodiversity](http://robdunnlab.com/projects/belly-button-biodiversity/). The dataset reveals the presence of various microbial species, some of which are prevalent in more than 70% of individuals, while others are relatively rare.

## **Dashboard Results:**

1. **Bar Chart:** A horizontal bar chart with a dropdown menu to display the top 10 operational taxonomic units (OTUs) found in each individual's belly button. The chart will use the sample_values as the values for the bar chart, otu_ids as the labels, and otu_labels as the hovertext for each bar.

2. **Bubble Chart:** A bubble chart that displays each individual's sample. The bubble chart will use otu_ids for the x-axis values, sample_values for the y-axis values, sample_values for the marker size, otu_ids for the marker colors, and otu_labels for the text values.

3. **Adaptive Gauge Chart:** Adapted the [plotly.js Gauge Chart](https://plotly.com/javascript/gauge-charts/) to plot the weekly washing frequency of individuals.

5. **Sample Metadata:** The dashboard will display the metadata of the selected individual, which includes demographic information. Each key-value pair from the metadata JSON object will be displayed on the page.

6. **Interactive Functionality:** The plots and metadata will update dynamically whenever a new sample is selected from the dropdown menu.

## **Tools Used:**
This project utilizes the following tools and technologies:

- __HTML:__ For the webpage structure and layout.
- __CSS:__ For styling the elements and layout of the dashboard.
- __Bootstrap:__ To enhance the responsiveness and appearance of the dashboard.
- __JavaScript:__ To handle interactivity and data manipulation.
- __D3.js:__ To read in the data and create interactive visualizations.
- __Plotly.js:__ For creating the bar chart, bubble chart, and gauge chart.


Have fun exploring this fully functional interactive dashboard that allows you to explore the fascinating world of Belly Button Biodiversity. Happy exploring!
