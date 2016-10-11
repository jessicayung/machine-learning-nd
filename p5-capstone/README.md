# MLND Capstone Project

### Machine Learning for Trading - an Exploratory Study
Topic: Predicting Daily Adjusted Close Stock Prices

## Libraries used
* sklearn (modules used listed below)
    * metrics
    * multioutput
    * linear\_model
    * svm
* numpy
* pandas
* seaborn
* matplotlib.pyplot
Machine Learning 

## Core Files
* `report.md`: The project report.
* `2-analysis-code-py2.ipynb`: Code for Section II: Analysis.
* `3-methodology-results-conclusion-code-py2.ipynb` Code for Sections III - V: Methodology, Results and Conclusion.
* There are Python 3 alternatives to the code files: `2-analysis-code-py3.ipynb` and `3-methodology-results-conclusion-code-py2.ipynb`.

## Supplementary Files
### Datasets used
* `WIKI_20160909.csv`: LSE (London Stock Exchange) stock prices from varying start dates till 2016-09-09. The database is over 1GB, so I have not included it in this directory. You can download it [here](https://www.quandl.com/api/v3/databases/WIKI/data?api_key=8TrqQtPwBTq_dZFASKFQ&trim_end=2016-09-09). 
* `ftse100-figures.csv`: FTSE100 prices from 1984-04-02 - 2016-09-09.
* `list-of-all-securities-ex-debt.csv`: List of companies listed on the LSE.

### Helper scripts
* `google-finance-scraper-py2.py`: Python script I used to scrape FTSE100 data from Google Finance. Not needed to run project. Written in Python 3 and converted print statements. (Python 3 alternative available at`google-finance-scraper.py`.)
