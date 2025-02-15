#grade me part 2

from jinja2 import Environment, FileSystemLoader

# Parameters
num_guesses = 8  # Increased from 6 to 8
word = "PYTHON"  # The word to be guessed (defines columns)
guesses_so_far = ["PLANTS", "PENCIL", "PYTHON", "PAPERS", "PURPLE"]  # Added two more guesses

# Setup Jinja2
env = Environment(loader=FileSystemLoader('.'))
template = env.get_template("wordle_template.html")

# Render the template
output_html = template.render(
    guesses=num_guesses,
    word_length=len(word),
    guesses_list=guesses_so_far
)

# Save the output
with open("wordle_board.html", "w") as f:
    f.write(output_html)

print("✅ Wordle board updated! Open 'wordle_board.html' in your browser.")
