import os

# Link to survey
SURVEY_LINK = 'https://hciaitools.uni-bayreuth.de/surveys/index.php/377687?lang=en'

# Dir for the Data files
#DATA_DIR = os.getcwd() + '/../../data' # Data dir for real values
DATA_DIR = os.getcwd() + '/data'        # Data dir for testing

# Minimum text length that has to be written in one task (in words)
MIN_TEXT_LENGTH = 20

# The amount of displayed suggestions (for Version2)
AMOUNT_SUGGESTIONS = 5

# The names for the different methods
METHODS = {
    0: 'Standard textfield',
    1: 'Continuous generated text',
    2: 'Writing with suggestions'
}

TASKS = {
    # Concrete Task
    0: 'It\'s your friends birthday. Write him an e-mail to wish him all the best and mention that you have to meet again in some time.', 
    # Open Task
    1: 'Write a short story about your last or upcoming vacation.'
}