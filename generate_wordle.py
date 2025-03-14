#
import random
from jinja2 import Environment, FileSystemLoader

# List of possible words
word_list = ["HELLO", "WORLD", "APPLE", "CLOUD", "PYTHON", "LEMON", "TRAIN"]

# Pick a random word
word = random.choice(word_list)

# Set up Jinja2
env = Environment(loader=FileSystemLoader("."))

# Load the template
template = env.get_template("wordle_template.html")

# Render with random word
html_output = template.render(num_guesses=6, word=word, guesses=[])

# Save output
with open("wordle_board.html", "w") as f:
    f.write(html_output)

print(f"✅ Wordle board generated with word: {word}")
