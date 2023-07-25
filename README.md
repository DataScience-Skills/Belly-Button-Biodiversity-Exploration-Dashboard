# **Interactive Dashboard for Belly Button Biodiversity**
## [Explore the dashboard here!](https://robert-z-lehr.github.io/Biodiversity-Exploration-Dashboard/)

## **Description:**
An interactive dashboard is used to explore the Belly Button Biodiversity dataset, which contains information about the microbes that colonize human navels. The dataset reveals the presence of various microbial species, some of which are prevalent in more than 70% of individuals, while others are relatively rare.

## **Objective:**
The main goal of this project is to create an interactive dashboard that allows users to explore the Belly Button Biodiversity dataset. The dashboard will include the following components:

1. **Bar Chart:** A horizontal bar chart with a dropdown menu to display the top 10 operational taxonomic units (OTUs) found in each individual's belly button. The chart will use the sample_values as the values for the bar chart, otu_ids as the labels, and otu_labels as the hovertext for each bar.

2. **Bubble Chart:** A bubble chart that displays each individual's sample. The bubble chart will use otu_ids for the x-axis values, sample_values for the y-axis values, sample_values for the marker size, otu_ids for the marker colors, and otu_labels for the text values.

3. **Sample Metadata:** The dashboard will display the metadata of the selected individual, which includes demographic information. Each key-value pair from the metadata JSON object will be displayed on the page.

4. **Interactive Functionality:** The plots and metadata will update dynamically whenever a new sample is selected from the dropdown menu.

## **Tools Used:**
This project utilizes the following tools and technologies:

- HTML: For the webpage structure and layout.
- CSS: For styling the elements and layout of the dashboard.
- Bootstrap: To enhance the responsiveness and appearance of the dashboard.
- JavaScript: To handle interactivity and data manipulation.
- D3.js: To read in the data and create interactive visualizations.
- Plotly.js: For creating the bar chart, bubble chart, and gauge chart.

## **Adaptive Gauge Chart:**
If you choose to take on the advanced challenge, you can adapt the Gauge Chart from Plotly.js to plot the weekly washing frequency of the individual. The gauge chart should account for values ranging from 0 through 9 and update whenever a new sample is selected.

Have fun exploring this fully functional interactive dashboard that allows you to explore the fascinating world of Belly Button Biodiversity. Happy exploring!
