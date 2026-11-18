import json
from flask import Flask, jsonify, request

app = Flask(__name__)

with open("dictionary.json", "r", encoding="utf-8") as file:
    dictionary = json.load(file)

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
    return jsonify(list(dictionary.keys())), 200

@app.route("/add", methods=["GET"])
def add_word():
    en_word = request.args.get("en")
    fi_word = request.args.get("fi")
    if not en_word or not fi_word:
        return jsonify({
            "error": "'en' tai 'fi' parametreja ei löytynyt"
        }), 400
    
    en_word = request.args.get("en").lower()
    fi_word = request.args.get("fi").lower()
    dictionary[en_word] = fi_word
    
    with open("dictionary.json", "w", encoding="utf-8") as file:
        json.dump(dictionary, file, ensure_ascii=False, indent=4)
        
    return jsonify({
        "Message": "Sana lisätty onnistuneesti",
        "English": en_word,
        "Finnish": fi_word
    }), 200

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=3000, use_reloader=True)