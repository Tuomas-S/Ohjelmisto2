import json
from flask import Flask, jsonify

with open("dictionary.json", "r", encoding="utf-8") as file:
    dictionary = json.load(file)

app = Flask(__name__)
@app.route("/translate/<word>", methods=["GET"])
def translate(word):
    search_word = word.lower()
    if search_word in dictionary:
        return jsonify({
            "English": search_word,
            "Finnish": dictionary[search_word]
        }), 200
    else:
        return jsonify({
            "error": "Word not found"
        }), 404

@app.route("/words", methods=["GET"])
def get_words():
    english_words = list(dictionary.keys())
    return jsonify(english_words), 200

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=3000, use_reloader=True)