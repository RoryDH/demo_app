from flask import Flask, request
import json
app = Flask(__name__, static_folder='public', static_url_path='')

people = []

@app.route('/')
def root():
    return app.send_static_file('index.html')

@app.route("/names")
def names():
    return json.dumps(people)

@app.route("/new", methods=["POST"])
def new():
    new_name = request.args['name']
    if (new_name):
        people.append(new_name)
    return json.dumps({"name": new_name})

if __name__ == "__main__":
    app.run(debug=True)